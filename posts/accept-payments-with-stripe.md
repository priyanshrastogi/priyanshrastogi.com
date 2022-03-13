---
title: 'Accept Payments in Universal Apps with Stripe Checkout'
slug: 'accept-payments-with-stripe'
excerpt: 'A pure JavaScript-based approach to integrate Stripe Checkout with apps that run on any platform (Android, iOS, and Web) built with Expo.'
date: '2020-06-21T05:30:00Z'
published: true
author:
  name: Priyansh Rastogi
---

# Accept Payments in Universal Apps with Stripe Checkout

A pure JavaScript-based approach to integrate Stripe Checkout with apps that run on any platform (Android, iOS, and Web) built with Expo.

![](https://cdn-images-1.medium.com/max/800/0*3Yqxh-PDfKr581Js)

Photo by [ivan Torres](https://unsplash.com/@iavnt?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

I am going to build an app for a pizza delivery restaurant “Pizza by Express” (which is my imagination at the moment) using [Expo](https://expo.io). For those who don’t know, what is Expo? It is a framework/tool built on top of React Native to build a universal app that runs on Android, iOS, and Web with a single codebase. Before I start, you can view what I am going to make, you can add products to the cart, proceed to Checkout and enter ‘4242 4242 4242 4242’ as card number to complete the checkout. If you are using a desktop, change the window size to mobile from Developer Options for the best viewing experience.

[**expo-stripe-checkout**  
_Edit description_pizzabyexpress.netlify.app](https://pizzabyexpress.netlify.app "https://pizzabyexpress.netlify.app")[](https://pizzabyexpress.netlify.app)

Payments **used to** be one of the toughest parts to implement in apps but with products like Stripe, Razorpay, Juspay, integrating payments in any app has become so easy. Today I am going to integrate [Stripe Checkout](https://stripe.com/docs/payments/checkout) in Expo and React Native apps. Following a similar approach, it can be implemented in Electron-based apps as well.

Rather than using Native Stripe SDK for Android and iOS, using Stripe Checkout which is pure JavaScript is much easier to implement and it works on all platforms. To make it more hassle-free, I am going to implement the entire Stripe Checkout on the server-side rather than the client-side. On the client-side, I will use WebView to render it and so the user can fulfill the purchase.

Before start building anything, it is essential to understand how Stripe Checkout works. I will explain that first.

There are two kinds of purchases on Stripe Checkout. First is One Time Purchase and the second is a Subscription-based purchase. I am going to build one-time purchase in this post. Here is the flow of Stripe Checkout:

1\. Create a Session with line\_items, success callback URL, and cancel callback URL. line\_items is an array of Objects that a user wants to buy. It contains name, description, images, amount, and quantity. Create a Session always on the server-side. Obtain ID of the generated session.

2\. Redirect the user to an HTML page that contains Stripe.js SDK with SessionID. Call `stripe.redirectToCheckout({sessionId})` to redirect the user to Stripe Checkout where they can enter card details and fulfill the purchase. This will happen on the client-side which is React Native/Expo/Web.

3\. Upon the success of the payment, the session gets completed and we receive a request on the webhook, once the webhook sends an acknowledgment back to Stripe, the user is redirected to success callback URL.

That’s it. Enough theory, Let’s get to action now.

I am working on the server-side first. I am using Node.js and Express. After creating an Express project, use`npm install --save stripe` or `yarn add stripe` to install stripe.

Now I will create an API endpoint, which will generate a Session and return sessionId to the client.

~~~js
router.post('/checkout', async (req, res) => {
  
  try {

    const order_items = [];
    for(let i=0; i<req.body.items.length; i++) {
      order_items.push({
        name: req.body.items[i].name,
        amount: req.body.items[i].amount*100,
        currency: 'inr',
        quantity: req.body.items[i].quantity,
        images: [req.body.items[i].image]
      });
    }

    //Create Order in database
    const order = await database.createOrder({items: req.body.items, platform: req.body.platform, createdAt: new Date().toISOString(), paymentStatus: 'pending'});

    let success_url = '';
    let cancel_url = '';
    if(req.body.platform === 'web') {
      success_url = `${BASE_URL}/.netlify/functions/api/payment/success?platform=web`;
      cancel_url = `${BASE_URL}/.netlify/functions/api/payment/cancel?platform=web`;
    }
    else {
      success_url = `${BASE_URL}/.netlify/functions/api/payment/success`;
      cancel_url = `${BASE_URL}/.netlify/functions/api/payment/cancel`;
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: order_items,
      success_url,
      cancel_url,
      client_reference_id: order._id.toString(),
      customer_email: 'email@example.com',
    });
    
    res.send({orderId: order._id.toString(), sessionId: session.id});
  }
  catch(err) {
    res.status(500).send('Internal Server Error');
  }
})
~~~

I have created the endpoint `/checkout` that creates an order and generates a Stripe session and returns it to the client. `stripe.checkout.session.create` method takes an object as an argument with the following keys:

`line_items` : Array of items that user wants to purchase.

`success_url` : If payment is a success, the User will be redirected to this URL.

`cancel_url` : If payment is canceled, the User will be redirected to this URL.

`client_reference_id` : A parameter to identify this session in our system, In our case, it is ordered.

The next step is redirecting the user to Stripe Checkout. For that I will create an endpoint that returns an HTML page with Stripe.js.

~~~js
router.get('/web/checkout/redirect', async (req, res) => {
  const checkoutHtmlPage = (stripePublicKey, sessionId) => {  
    return (
    `<html>
      <body>
        <!-- Load Stripe.js on your website. -->
        <script src="https://js.stripe.com/v3"></script>
        <h1>Redirecting you to Checkout...</h1>
        <div id="error-message"></div>
        <script>
          (function () {
            var stripe = Stripe('${stripePublicKey}');
            window.onload = function () {
              stripe.redirectToCheckout({
                sessionId: '${sessionId}'
              })
              .then(function (result) {
                if (result.error) {
                  var displayError = document.getElementById('error-message');
                  displayError.textContent = result.error.message;
                }
              });
            };
          })();
        </script>
      </body>
    </html>`
    );
  }
  res.send(checkoutHtmlPage('pk_test_ENcvwuFgRGUey2rsT2GN1A6u', req.query.sessionId));
})
~~~

This endpoint takes sessionId from request body, sent by the client and returns an HTML page that calls `stripe.redirectToCheckout` method, that redirects the user to Stripe Checkout.

Now I will create endpoints to handle payment success and payment canceled URL.

~~~js
router.get('/payment/success', (req, res) => {
  if(req.query.platform === 'web') {
    const checkoutSuccessHtmlPage = `
    <html>
      <body>
        <h1>Payment Success</h1>
        <script>
          window.close();
        </script>
      </body>
    </html>`
    res.send(checkoutSuccessHtmlPage);
  }
  else
    res.json({success: true});
});

router.get('/payment/cancel', (req, res) => {
  if(req.query.platform === 'web') {
    const checkoutCanceledHtmlPage = `
    <html>
      <body>
        <h1>Payment Canceled</h1>
        <script>
          window.close();
        </script>
      </body>
    </html>`
    res.send(checkoutCanceledHtmlPage);
  }
  else
    res.json({success: false});
});
~~~

As you can see, I am only sending responses or HTML pages in these endpoints. I am handling responses for web and mobile platforms differently. For the web platform, I am returning an HTML page with `window.close()` in JS script. I will talk about this later.

Also, You must not handle order fulfillment on `success_url` because anyone can open this URL without completing the payment, and sometimes users don’t get to redirect on this page. I will use Stripe Webhook to fulfill the order payment status. Now let’s do that.

~~~js
router.post('/stripe/webhook', async (req, res) => {
  try {
    const sig = req.headers['stripe-signature'];
    let event;
    event = stripe.webhooks.constructEvent(req.body, sig, stripeWebhookSecret);
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      // Fulfill the purchase...
      const updatedOrder = await database.updateOrderPaymentStatus(session.client_reference_id, 'paid');
    }
  } catch (err) {
    console.log(err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  res.json({received: true});
});
~~~

If you are using `app.use(express.json())`, this webhook will not work. So add this line below it.

~~~js
app.use(‘/stripe/webhook’, express.raw({type: “\*/\*”}))
~~~

Once payment is done, the session gets completed and Stripe sends a request on the webhook URL with event `checkout.session.completed`. This event contains session information that got completed. `client_reference_id` contains the orderId, using that I will update the payment status of this order.

Roughly, this is all that is required on the server-side. Now time work on the client-side.

I am generating a new Expo project using `expo init expo-stripe-checkout`. By default, it’s a tri-platform project that runs on Android, iOS, and Web.

I will skip building other components here. I will focus on CartScreen component that handles user checkout. When the user clicks on Checkout Button, call the API endpoint to get sessionId and then open redirect URL in `react-native-webview`on Android and iOS and `expo-web-browser` on Web. After payment is successful, redirect the user to the order details screen.

Here is the complete implementation of CartScreen:

~~~jsx
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, FlatList, Platform } from 'react-native';
import { Button, Text } from '../components/design';
import axios from 'axios';
import { connect } from 'react-redux';
import * as WebBrowser from 'expo-web-browser';
import { Feather } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';
import CartItem from '../components/CartItem';
import { clearCart } from '../actions';
import URLs from '../constants/URLs';

function CartScreen(props) {
  
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => { 
    setLoading(true);
    const res = await axios.post(`${URLs.BASE_API}/.netlify/functions/api/checkout`, {
      items: Object.values(props.cart),
      platform: Platform.OS
    });
    setLoading(false);
    if(Platform.OS === 'web') {
      let result = await WebBrowser.openAuthSessionAsync(`${URLs.BASE_API}/.netlify/functions/api/web/checkout/redirect?sessionId=${res.data.sessionId}`);
      if(result.type === 'dismiss') {
        props.clearCart();
        props.navigation.dispatch(CommonActions.navigate('OrderPlaced', {orderId: res.data.orderId}));
      }
    }
    else 
      props.navigation.navigate('Checkout', {sessionId: res.data.sessionId, orderId: res.data.orderId});
  }

  const totalPayable = () => {
    let total = 0;
    const items = Object.values(props.cart);
    for(let i=0; i<items.length; i++) {
      total = total + items[i].amount*items[i].quantity;
    }
    return '\u20B9 ' + total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  if(Object.keys(props.cart).length === 0) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
        <Feather size={36} name='shopping-cart'/>
        <Text style={{fontSize: 16, marginTop: 20}}>Your Cart is Empty.</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={Object.values(props.cart)}
        renderItem={({item}) => <CartItem cart={props.cart} id={item._id} />} 
        keyExtractor={item => item._id}
        scrollEnabled={false}
      />
      <View style={{margin: 20, marginTop: 50}}>
        <Button onPress={handleCheckout} title={`Checkout and Pay ${totalPayable()}`} style={{borderRadius: 5}} loading={loading} loadingTitle='Redirecting You to Checkout...'></Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

function mapStateToProps(state) {
  return {cart: state.cart};
}

export default connect(mapStateToProps, { clearCart })(CartScreen);
~~~

The most important part of this code is `handleCheckout` method. Once the user press the Checkout button, this method gets called and sends a request to `/checkout` endpoint to get `sessionId`. Now I will need to handle things based on the platform. I will explain for web platform first. If the platform is web, use `expo-web-browser` because `react-native-webview` is not available for web. `WebBrowser.openAuthSessionAsync` method will open the URL in a new window (on desktop web) and in a new tab (on mobile web). Now I will explain why did I return an HTML page with `window.close()` method in `/payment/success` endpoint if it has query `?platform=web`. When payment is successful and user gets redirected to `/payment/success?platform=web`, `window.close()` method will close the new tab or window and `WebBrowser.openAuthSessionAsync` method will resolve with `{type: dismiss}`, now user will be redirected to order details screen.

For Android and iOS platform, I will use `react-native-webview`, Once I receive sessionId, I will navigate to CheckoutWebViewScreen with sessionId as a parameter. Here is the implementation of CheckoutWebViewScreen:

~~~jsx
import React from 'react';
import { WebView } from 'react-native-webview';
import { ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { CommonActions, StackActions } from '@react-navigation/native';
import { clearCart } from '../actions';
import URLs from '../constants/URLs';

function CheckoutWebViewScreen(props) {

  handleChange = (e) => {
    if(!e.loading && e.url===`${URLs.BASE_API}/.netlify/functions/api/payment/success`) {
      props.clearCart();
      props.navigation.dispatch(StackActions.popToTop());
      props.navigation.dispatch(CommonActions.navigate('OrderPlaced', {orderId: props.route.params.orderId}));
    }
    else if(!e.loading && e.url===`${URLs.BASE_API}/.netlify/functions/api/payment/cancel`) {
      props.navigation.goBack();
      ToastAndroid.show('Payment Cancelled.', ToastAndroid.SHORT);
    }
  }
  
  return (
    <WebView
      originWhitelist={['*']}
      source={{ uri: `${URLs.BASE_API}/.netlify/functions/api/web/checkout/redirect?sessionId=${props.route.params.sessionId}`}}
      onNavigationStateChange={this.handleChange}
      ref={(ref) => { webview = ref; }}
    />
  )
}

export default connect(null, { clearCart })(CheckoutWebViewScreen);
~~~

`handleChange` method gets called whenever navigationState of the WebView changes. If user is on `/payment/success` endpoint, and the page has been loaded, navigate the user to order details screen.

If the user cancels the checkout, on Android and iOS, user will be taken back to CartScreen, where checkout can be re-initiated. On Web, user will be redirected to order details screen because `WebBrowser.openAuthSessionAsync` method will resolve with `{type: dismiss}`. So I will fetch order details when order details screen gets mounted. The payment status of the order will be `pending` because Stripe will not send a request on the webhook, so show Transaction Failed alert to the user.

Implementation of OrderDetailsScreen:

~~~jsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, TextBold, Alert, Loader } from '../components/design';
import axios from 'axios';
import URLs from '../constants/URLs';

export default function OrderPlacedScreen(props) {
  
  const [order, setOrder] = useState({_id: props.route.params.orderId});

  useEffect(() => {
    async function getOrderDetails() {
      const order = await axios.get(`${URLs.BASE_API}/.netlify/functions/api/orders/${props.route.params.orderId}`);
      setOrder(order.data);
    };
    getOrderDetails(); 
  }, []);
  
  console.log(order);

  if(Object.keys(order).length <2) {
    return (
      <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
        <Loader />
      </View>
    )
  }

  else {
    return (
      <View style={styles.container}>
        {order.paymentStatus === 'paid' ?
        <View style={{padding: 20}}>
          <Alert message='Transaction Successful!' type='success'/>
          <TextBold style={{marginTop: 30, fontSize: 16, textAlign: 'center'}}>Order Placed</TextBold>
          <Text style={{marginTop: 5, fontSize: 14, textAlign: 'center'}}>Order ID: {order._id}</Text>
          <TextBold style={{marginTop: 20, marginBottom: 20}}>Order Summary</TextBold>
          <View elevation={5} style={{backgroundColor: '#fff', shadowColor: '#000000', shadowOffset: { width: 2, height: 5}, shadowRadius: 5, shadowOpacity: 0.5, borderRadius: 5, padding: 10}}>
            <FlatList
              data={order.items}
              keyExtractor={item => item._id}
              renderItem={({item}) => {
                return (
                  <View key={item.name} style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#eee', borderBottomWidth: 1, paddingTop: 5, paddingBottom: 5}}>
                    <View style={{flex: 0.7}}>
                      <TextBold>{item.name}</TextBold>
                      <Text>Quantity: {item.quantity}</Text>
                    </View>
                    <View style={{flex: 0.3}}>
                      <TextBold style={{textAlign: 'right'}}>&#8377; {item.amount*item.quantity}</TextBold>
                    </View>
                  </View>
                )
              }}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, marginRight: 10, paddingTop: 20, paddingBottom: 20}}>
            <TextBold>Total Paid</TextBold>
            <TextBold>&#8377; {order.amount}</TextBold>
          </View>
        </View>
        :
        <View style={{padding: 20}}>
          <Alert message='Transaction Failed!' type='danger'/>
          <TextBold style={{marginTop: 30, fontSize: 16, textAlign: 'center'}}>We could not verify the transaction.</TextBold>
          <Text style={{marginTop: 5, fontSize: 14, textAlign: 'center'}}>In case, You have been charged, you will receive the refund within a week.</Text>
        </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  }
})
~~~

That’s it, folks.

Complete source code of this app is available on Github, this is the link:

[**priyanshrastogi/expo-stripe-checkout**  
_A Guide on using Stripe Checkout in React Native and Expo (iOS, Android and Web) - priyanshrastogi/expo-stripe-checkout_github.com](https://github.com/priyanshrastogi/expo-stripe-checkout "https://github.com/priyanshrastogi/expo-stripe-checkout")[](https://github.com/priyanshrastogi/expo-stripe-checkout)

You can also test Native Android and iOS apps of **Pizza by Express** on Expo Client. Follow this URL to view it on Expo:

[**expo-stripe-checkout on Expo**  
_Description Scan to open With an Android phone, you can scan this QR code with your Expo mobile app to load this…_expo.io](https://expo.io/@priyanshrastogi/expo-stripe-checkout "https://expo.io/@priyanshrastogi/expo-stripe-checkout")[](https://expo.io/@priyanshrastogi/expo-stripe-checkout)

Originally published on Medium By [Priyansh Rastogi](https://medium.com/@priyanshrastogi) on [June 21, 2020](https://medium.com/p/9003e26f36cb).

[Canonical link](https://medium.com/@priyanshrastogi/accept-payments-in-universal-apps-with-stripe-checkout-9003e26f36cb)
