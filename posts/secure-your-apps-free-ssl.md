---
title: 'Secure Your Web Applications with free Let’s Encrypt SSL'
slug: 'secure-your-apps-free-ssl'
excerpt: 'Google Chrome now shows websites with HTTP as Not Secure.'
date: '2018-07-28T05:30:00Z'
published: true
author:
  name: Priyansh Rastogi
---

# Secure Your Web Applications with free Let’s Encrypt SSL

Google Chrome now shows websites with HTTP as Not Secure.

![](https://cdn-images-1.medium.com/max/800/1*bNTtghi81WbKbylN1teZHQ.png)

Image Source: [https://buzzword.net.au/google-chrome-note-secure-website-warning-ready/](https://buzzword.net.au/google-chrome-note-secure-website-warning-ready/)

HTTP websites are not secure. Because the data is not encrypted. While transferring data between client and server, the data is transparent. It can be hacked, it can be manipulated. That’s why Google Chrome now shows HTTP websites as Not Secure. To secure your website, you need to add a SSL certificate. SSL certificate is nothing but an extra layer on TCP that encrypts the data while transferring between client and server. So no one can see and manipulate the data while transmission. HTTPS has some other advantages too. It improves the SEO and ranking of your website.

People say HTTPS doesn’t come free but it’s not entirely true. Comodo SSL, GoDaddy SSL certificates etc. are not free but Let’s Encrypt provides SSL certificates for free.

If you have a static website built with plain HTML, CSS and JS or static build from React, Vue or Angular, you don’t even need to setup Let’s Encrypt certificate. All you have to do is create a public or private Github repository and host your static website with Github Pages. You can follow [this link](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/) for a guided tour. You may want to setup custom domain for your Github Pages site. Follow [this link](https://help.github.com/articles/troubleshooting-custom-domains/) for tour on setting up custom domain, and lastly you will want to use HTTPS on your custom domain. It’s easy. Just go in your repository settings and under Github Pages tick Enforce HTTPS. Follow [this link](https://help.github.com/articles/securing-your-github-pages-site-with-https/) for a guided tour. GitHub Pages HTTPS uses Let’s Encrypt SSL under the hood. It takes care of auto-renewing so you don’t need to do anything.

Now if you want to do server side rendering or secure your REST API endpoints or if you don’t want to host your static website on Github Pages. You will need to secure your backend server. You will have to install SSL certificate on your backend server. Let’s say you have a server on AWS. Step 0 is SSH to your AWS EC2 instance aka server.

**Step 1: Install Certbot**

For Ubuntu users:

~~~bash
$ sudo apt-get update  
$ sudo apt-get install software-properties-common  
$ sudo add-apt-repository ppa:certbot/certbot  
$ sudo apt-get update  
$ sudo apt-get install certbot
~~~

Others: Follow [this link](https://certbot.eff.org/).

**Step 2: Getting a SSL Certificate**

Getting a SSL certificate is very easy. Go to your project directory and run this command:

~~~bash
sudo certbot certonly --webroot -w ./<static\_directory> -d <server\_url>
~~~

where static\_directory is the directory which contains index.html and other HTML files and server\_url is the URL of the server (e.g. api.example.com). It will ask your email and other details and after successful execution your SSL keys are created in \`/etc/letsencrypt/live/<your\_server\_url>\` directory. There are two keys: fullchain.pem and privkey.pem.

For example if your static html files are in /var/www/example repository, run this:

~~~bash
sudo certbot certonly --webroot -w /var/www/example -d example.com
~~~

For using Let’s Encrypt with other web servers and softwares, follow [this link](https://certbot.eff.org/).

**Step 3: Creating and Running HTTPS Web Server:**

In this post, I am using Node.js and Express for creating HTTPS server. You can create HTTPS server on any framework/server. Before making HTTPS server, we have to run a command to change permission of /etc/letsencrypt/<server\_url> folder.

~~~bash
    sudo chmod 755 /etc/letsencrypt/<server_url>/
~~~

In this code, we are creating 2 servers. One is HTTP and other is HTTPS.

Congratulations! You have successfully created a HTTPS server.

**Auto-Renewal of SSL Cerificate:**

Certbot comes with auto-renewing. It runs a cronjob twice a day to renew a SSL. If SSL is going to expire in 30 days it auto-renews the SSL certificate. But as SSL certificate renews, fullchain.pem and privkey.pem files also change. So you will have to stop and start your server everytime it renews. You can setup hooks for this. You will have to set a cronjob of the following command.

~~~bash
sudo certbot renew **\--**pre**\-**hook "sudo npm stop" **\--**post**\-**hook "sudo npm start"
~~~

Follow [this link](https://certbot.eff.org/docs/using.html#renewal) to know more about certbot auto-renewal and hooks.

* * *

That’s it for now. You can reach out if you have any questions or just leave a response below.

Follow Searching for X for more posts on Programming and Technology.

Thank you for reading.

By [Priyansh Rastogi](https://medium.com/@priyanshrastogi) on [July 28, 2018](https://medium.com/p/77d3beb1a0ff).

[Canonical link](https://medium.com/@priyanshrastogi/secure-your-web-applications-with-free-lets-encrypt-ssl-77d3beb1a0ff)
