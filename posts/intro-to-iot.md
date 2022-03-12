---
title: 'Introduction to Internet of Things with Arduino, Node.js and Chart.js'
slug: 'intro-to-iot'
excerpt: 'In my previous post, I said that I was interested in learning Internet of Things. Well, I was serious about it. So here comes my first…'
date: '2018-02-15T05:30:00Z'
published: true
author:
  name: Priyansh Rastogi
---

# Introduction to Internet of Things with Arduino, Node.js and Chart.js

In my previous post, I said that I was interested in learning Internet of Things. Well, I was serious about it. So here comes my first tutorial on Internet of Things. I am already a full stack web developer, so I used some of my JavaScript skills in Internet of Things to build a website that shows real-time graph of your rooms (or whatever) temperature.

![](https://cdn-images-1.medium.com/max/800/1*R7gOFbnqQAa4xdQYtbXUzQ.gif)

For the sake of presentation, it is plotting graph for every second.

### Plotting Real-time graph of temperature.

Hardware Used: Arduino UNO Micro-controller, LM35 Temperature Sensor.

Software Used: Node.js, Socket.io, serialport, Chart.js.

I am going to use Arduino UNO micro-controller board with LM35 temperature sensor module to measure the temperature of my room. I will read the temperature readings in my Node.js/Express server and will send the readings to client. Client will create and update the line-graph.

#### Step 1: Setting up the Arduino Board and LM35 Module.

Here is the picture of my Arduino board and sensor. I have connected 3 wires from LM35 to Arduino. One for power supply, one for ground and one for output. I have connected the output wire to A3 pin.

![](https://cdn-images-1.medium.com/max/800/1*-5UEkxcbKKR3JHcFkSjjGw.jpeg)

#### Step 2: Write Program to get temperature readings in Arduino IDE

Here is the code:

~~~ino
void setup() {
  Serial.begin(9600); //Connect to serial port with rate of 9600bps.
  delay(1000);
}

void loop() {
  int value = analogRead(A3); //Read the value from temperature sensor.
  int tempC = value*0.48828125; //Convert it into temp in C.
  Serial.println(tempC); //Print it on Serial Monitor.
  delay(10000); //Delay, specifies gap between two readings in mili seconds.
}
~~~

#### Step 3: Read the temperature readings in Node.js and Express App

First of all, you need to install Node.js if you don’t have one. So go to Node.js website and follow the instructions to install it. After installing, go to a directory where you want to create this app and create a new folder and navigate to that folder in terminal / command prompt / powershell. now type **_npm init_** to create a new Node.js app and fill up all the details.

Now we have to install express, socket.IO and serialport libraries using npm. Express is a web framework based on Node.js, Socket.IO is a node module that allows bidirectional event-based communication that allows us to do things in real-time, and serialport is a node module that allows to read serial ports. I am writing temperature values in serial port ‘COM3’, so I will use serialport to read these values from ‘COM3’ and use it in Node.js server. To install these three modules, in the same directory type this in terminal/cmd.

~~~bash
npm install express socket.io serialport --save
~~~

Now create a index.js file. First of all, we have to create an Express server. In Express, it’s pretty easy to create a server. Now callback is a function that will be called when the server is launched.

~~~js
var app = express();  
var server = app.listen(4000, callback)
~~~

Now we have to bind socket.io to our server.

~~~js
var io = require(‘socket.io’)(server);
~~~

Now we have to use serialport to read temperature values. So we import serialport. After this, I have made a new instance of serialport at port ‘COM3’. Because my Arduino is connected to port ‘COM3’. You can see the name of port in Arduino IDE -> Tools -> Port. Now we have to use parser to read the data from serial port. But we have to read a line. So we will set the delimiter to ‘/n’.

~~~js
const SerialPort = require(‘serialport’);   
const Readline = SerialPort.parsers.Readline;  
const port = new SerialPort(‘COM3’);  
const parser = port.pipe(new Readline({delimiter: ‘\\r\\n’}));
~~~

Now that we have set the parser. Parser will listen to data. As the data is available it will scan for next line and will read the data.

~~~js
parser.on(‘data’, callback);
~~~

Now as parser reads the data, the data will be available in callback parameters. So we can send it to our clients. We can use io.sockets.emit(‘action’,object) function to emit date, time and temp to client. So that clients can make grpahs.

~~~js
parser.on('data', (temp) => {  
    var today = new Date();  
    io.sockets.emit('temp', {date: today.getDate()+"-"+today.getMonth()+1+"-"+today.getFullYear(), time: (today.getHours())+":"+(today.getMinutes()), temp:temp});  
});
~~~

Here is the full code of index.js

~~~js
var express = require('express');

var app = express();
var server = app.listen(4000, () => { //Start the server, listening on port 4000.
    console.log("Listening to requests on port 4000...");
})

var io = require('socket.io')(server); //Bind socket.io to our express server.

app.use(express.static('public')); //Send index.html page on GET /

const SerialPort = require('serialport'); 
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('COM3'); //Connect serial port to port COM3. Because my Arduino Board is connected on port COM3. See yours on Arduino IDE -> Tools -> Port
const parser = port.pipe(new Readline({delimiter: '\r\n'})); //Read the line only when new line comes.
parser.on('data', (temp) => { //Read data
    console.log(temp);
    var today = new Date();
    io.sockets.emit('temp', {date: today.getDate()+"-"+today.getMonth()+1+"-"+today.getFullYear(), time: (today.getHours())+":"+(today.getMinutes()), temp:temp}); //emit the datd i.e. {date, time, temp} to all the connected clients.
});

io.on('connection', (socket) => {
    console.log("Someone connected."); //show a log as a new client connects.
});
~~~

#### Step 4: Plotting Real-time graph

Creating charts from scratch can be a tedious work. To make this easy, there are many javascript libraries available i.e. Chart.js, D3.js, plotly etc. I will use Chart.js to make the graph. It is simple and easy to use. First of all, create a public folder in the project directory. In the public folder, create index.html file. We have to add Chart.js and socket.io.js CDN in our file, so that we can use these libraries. We have to add socket.io in our script so that it can be connected to our server.

~~~js
var socket = io.connect(‘http://localhost:4000');  
...  
...  
socket.on('temp', callback);
~~~

As it is connected to server. Client will start listening for messages. As a ‘temp’ named message is received. The message object that includes date, time and temperature is available to callback function. So we can add this data in our graph and update it. I have set a maximum limit of 15 data points in the graph. After that it will shift the array with latest data.

Here is the full index.html file.

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>Temperature Plot</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>Temperature Graph</h1>
        <h4>Date: <span id="date"></span></h4>
        <div class="chart-container" style="position: relative; width:75vw; margin: auto;">
            <canvas id="myChart"></canvas>
        </div>
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>
        <script>
            var socket = io.connect('http://localhost:4000'); //connect to server

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                labels: [],
                datasets: [{
                    label: "Temperature",
                    borderColor: "#FF5733",
                    data: [],
                    fill: false,
                    pointStyle: 'circle',
                    backgroundColor: '#3498DB',
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    lineTension: 0,
                }]
                },

                // Configuration options go here
                options: {}
                
            });

            socket.on('temp', function(data) { //As a temp data is received 
                console.log(data.temp);
                document.getElementById('date').innerHTML = data.date; //update the date
                if(chart.data.labels.length != 15) { //If we have less than 15 data points in the graph
                    chart.data.labels.push(data.time);  //Add time in x-asix
                    chart.data.datasets.forEach((dataset) => {
                        dataset.data.push(data.temp); //Add temp in y-axis
                    });
                }
                else { //If there are already 15 data points in the graph.
                    chart.data.labels.shift(); //Remove first time data
                    chart.data.labels.push(data.time); //Insert latest time data
                    chart.data.datasets.forEach((dataset) => {
                        dataset.data.shift(); //Remove first temp data
                        dataset.data.push(data.temp); //Insert latest temp data
                    });
                }
                chart.update(); //Update the graph.
            });
        </script>
    </body>
    <style>
        h1 {
            text-align: center;
            font-family: 'Lato', sans-serif;
        }

        h4 {
            text-align: center;
            font-family: 'Lato', sans-serif;
        }

        p {
            text-align: center;
            font-family: 'Lato', sans-serif;
        }
    </style>
</html>
~~~

All done. Let’s run it.

~~~bash
node index
~~~

Now you can see the graph on [http://localhost:4000](http://localhost:4000) or you can open index.html file in public folder. Both will work. If you want to share this page with others, you can host this static page on GitHub pages too.

#### Things that you can add to this:

1.  Store temperature in database, You can use MongoDB, Mongoose to do so.
2.  Show average temperature of last 3 hours or something like that.
3.  As user loads the index.html page, send last 15 temperature data points and shift it as new data comes. You can use io.on(‘connection’, (socket) => {…}); to do this.
4.  Feel free to add anything you want!

[GitHub repository for the source code is here](https://github.com/priyanshrastogi/temperature-plot). Feel free to fork.

Thank you for your time!

Hit the Clap button if you liked this post.

By [Priyansh Rastogi](https://medium.com/@priyanshrastogi) on [February 15, 2018](https://medium.com/p/cb4885d176c4).

[Canonical link](https://medium.com/@priyanshrastogi/introduction-to-internet-of-things-with-arduino-node-js-and-chart-js-cb4885d176c4)
