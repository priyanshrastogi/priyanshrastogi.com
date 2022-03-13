---
title: 'An Introduction to Virtual Reality on Web for Dummies.'
slug: 'intro-to-webvr'
excerpt: 'What if I told you developing a Virtual Reality app is as easy as creating a simple web app. All you need to know is HTML and the basics…'
date: '2019-10-06T05:30:00Z'
published: true
author:
  name: Priyansh Rastogi
---

# An Introduction to Virtual Reality on Web for Dummies.

What if I told you developing a Virtual Reality app is as easy as creating a simple web app. All you need to know is HTML and the basics of 3D geometry.

![](https://cdn-images-1.medium.com/max/800/0*roFfutviuC3lI1PN)

Photo by [Lux Interaction](https://unsplash.com/@luxinteraction?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

In this post, I am gonna build a WebVR application. I am gonna use [Aframe](https://aframe.io) for the WebVR.

Okay so enough talking, let’s start the action.

**Step 1: Create an HTML file.**

**Step 2: Add Aframe Library to the HTML file.**

All you have to do is add `<script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>` under the head tag.

This is what `index.html` will look like.

~~~html
<html>  
  <head>  
    <title>Intro to WebVR</title>  
    <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>  
  </head>  
  <body>  
  </body>  
</html>
~~~

**Step 3: Create a Scene and Add Sky and Floor.**

Before putting this to action, I will take a minute to explain the `aframe` system and components. Aframe is a set of various HTML tags, using which we can build WebVR applications. These tags are `a-scene` , `a-entity` , `a-sky` etc.

All the components of the application are called `entity` and we use `a-entity` to define components. These could be 3D shapes, images, text or 3D models. But aframe already has some of the entities defined. Some of them are `a-text` , `a-box` , `a-image` , `a-sky` , `a-plane`. These entities are wrapped in `a-scene` tag.

Now let’s write some code. Add these lines under the body tag

~~~html
<a-scene>  
  <a-plane position="0 0 0" rotation="-90 0 0" width="100" height="100" color="#7BC8A4"></a-plane>  
  <a-sky color="#ECECEC"></a-sky>  
</a-scene>
~~~

Now you can open the HTML file in a browser and you will be able to see this.

![](https://cdn-images-1.medium.com/max/800/1*K0GppSYz2W1cIKuQY2J5yg.png)

`a-sky` tag creates a sky kind of background. I have given it a greyish background. I have defined a plane using `a-plane` tag and have given it a rotation of -90,0,0 to place it horizontally. As I said earlier, you will need a little bit of knowledge of 3D geometry. I have given it a height and width of 100. The unit will not be in px here. It will be in meters. In Aframe, we use meters instead of px. Position is (0,0,0). It means the center of the plane is on (0,0,0) which is our initial location too.

**Step 4: Add Some Text and Shape Components**

Now I will add these three components to the `a-scene` (under `a-scene` tag).

~~~html
<a-text position="0 3 -4" value="Hello World" width="10" color="#000000" align="center"></a-text>  
<a-triangle color="blue" rotation="-90 0 0" position="0 0.2 -3"></a-triangle>  
<a-cone color="tomato" radius-bottom="2" radius-top="0.5" position="0 4 -6"></a-cone>
~~~

Now this is how it will look like:

![](https://cdn-images-1.medium.com/max/800/1*lt9ULhgjhJmUX4S-eubiaA.png)

I have used `a-text` , `a-triangle` , `a-cone` tags to create these entities. You can move around in the scene using arrow keys, you can look around using trackpad/mousepad.

**Step 5: Let’s add an Image**

Adding an image is easy. A good way is to load the image as `a-assets` and use that as the source of `a-image` . Add this code under `a-scene` .

~~~html
<a-assets>  
  <img id="dog" src="dog.png">  
</a-assets>

<a-image src="#dog" position="0 1 -3"></a-image>
~~~

In Aframe `a-scene` , all the entities are rendered with absolute positioning. So the order of the entities does not matter. Now let’s view the application.

![](https://cdn-images-1.medium.com/max/800/1*PkMoxWoCxBhEM032YLkMog.png)

This is the complete code till step 5.

**Step 6: Add Infinite Environment Background**

Our application doesn’t look that good. So I will add a better background. I am gonna use `aframe-environment-component` library to add background to our application. Just add `<script src=”https://unpkg.com/aframe-environment-component@1.1.0/dist/aframe-environment-component.min.js"></script>` under head tag.

Add this line under `a-scene` and remove `a-sky` and `a-plane`.

~~~html
<a-entity environment="preset: forest"></a-entity>
~~~

![](https://cdn-images-1.medium.com/max/800/1*Ap-FNWG2ZVklSba24vcHZQ.png)

**Step 7: Add Oculus Go Controls**

For this step, you will need a VR headset. I am using Oculus Go, you can use any other headset. You can read Aframe documentation to support other VR headsets.

Add this `a-entity` under `a-scene` .

~~~html
<a-entity>  
  <a-entity camera position="0 1.5 0" look-controls></a-entity>  
  <a-entity oculus-go-controls></a-entity>  
  <a-entity laser-controls="hand: right"></a-entity>  
</a-entity>
~~~

If you open this webpage in Oculus Go Browser and enter VR mode. You will be able to experience this scene in 360-degree view. You will also see a laser that can be controlled using the controller.

This is the complete code till step 7.

**Bonus: Adding Events on Components**

You can add events like do some animation when laser collides with a component or do something when the user presses the trigger.

~~~html
<script>  
document.getElementById('myCard').addEventListener('click', () => {  
  //do something  
})  
</script>
~~~

To animate on hover, you will have to define an entity like this:

~~~html
<a-entity id="box" geometry="primitive: box" position="0 1.8 -3" animation\_\_mouseenter="property: scale; from: 1 1 1; to: 1.5 1.5 1.5; startEvents: mouseenter; dur: 200" animation\_\_mouseleave="property: scale; from: 1.5 1.5 1.5; to: 1 1 1; startEvents: mouseleave; dur: 200"></a-entity>
~~~

I will soon publish an advanced guide on WebVR that will cover events, animations in depth.

Thank you for your time.

Originally published on Medium By [Priyansh Rastogi](https://medium.com/@priyanshrastogi) on [October 6, 2019](https://medium.com/p/b4a57f323815).

[Canonical link](https://medium.com/@priyanshrastogi/an-introduction-to-virtual-reality-on-web-for-dummies-b4a57f323815)
