//Projects, description supports markdown.

export default () => {
    return [
        {
            id: "parking-suggest",
            title: "Parking Suggest",
            category: ["Web Development", "Internet of Things"],
            tag: "showcase",
            shortdescription: "Find Nearest Available Parkings and Auto Track Parking Sessions using Internet of Things.",
            technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "React", "Redux", "RFID Reader", "Arduino", "Raspberry Pi", "Ultrasonic Sensors"],
            description: `Parking Suggest lets user find nearest parkings to their current location. Ultrasonic sensors connected to Raspberry Pi constantly send availablity status of parking slots to our server deployed on AWS through WebSockets. User can use their Google account to sign in to our app and just with one button our efficient algorithm finds the nearest parking slot to them that has free space. Then Google Maps navigates the user to the parking.`,
            github: "https://github.com/priyanshrastogi/parking-suggest",
            live: "https://parking-suggest.netlify.com"
        },
        {
            id: "letalent",
            title: "Letalent",
            tag: "showcase",
            category: ["Web Development", "Data Science"],
            shortdescription: "The Talent Marketplace, Peer to Peer Freelancing Platform.",
            technologies: ["Node.js", "Express", "MongoDB", "React", "Redux", "Flask"],
            description: `Letalent is a talent marketplace, where people with talent can offer their services to people who want to outsource some work. In other words, it's a freelancing platform for peers. The frontend is built with React and Redux, backend with Node.js and Express and data analytics is done with Flask and Pandas.`,
            github: "https://github.com/priyanshrastogi/letalent",
            live: "https://letalent.netlify.com"
        },
        {
            id: "handy6",
            title: "Handy 6",
            category: ["Big Data", "DevOps"],
            tag: "showcase",
            shortdescription: "Automatic Deployment of Hadoop Clusters and Big Data Analysis with MapReduce",
            technologies: ["Hadoop", "MapReduce", "Python", "Docker", "Ansible", "Bootstrap"],
            description: `Handy 6 is an application that automates the process of deploying Hadoop Clusters over many systems using DevOps tools like Docker and Ansible. Using Python CGI all the tools can be connected to a web application to give user hasslefree experience deploying Hadoop cluster, uploading files over the cluster and using MapReduce to analyse big data. This project demonstrate analysis of HR data of a firm and analyse employee satisfaction and other insights. Additionally, User can managa all the docker containers from a web interface.`,
            github: "https://github.com/priyanshrastogi/handy6",
        },
        {
            id: "twitter-sentiment-analyser",
            title: "Twitter Sentiment Analyser",
            category: ["Data Science", "Web Development"],
            shortdescription: "A Web App to analyse sentiments of people about a topic using recent tweets.",
            technologies: ["Flask", "TextBlob", "Tweepy", "React", "Chart.js"],
            description: `Twitter is a powerful platform to know about people's emotion on a topic. If we collect the tweets and perform sentiment analysis on tweets we can know about the positivity and negativity of the topic`,
            github: "https://github.com/priyanshrastogi/twitter-sentiment-analyser",
            live: "https://twitter-sentlyser.netlify.com"
        },
        {
            id: "order-delivery-forecast",
            title: "eStore with Order Delivery Forecast",
            category: ["Data Science", "Web Development"],
            shortdescription: "An e-Store with Order Delivery Forecast using Machine Learning.",
            technologies: ["Flask", "NumPy", "Pandas", "Sklearn", "React", "Redux"],
            description: `This is an e-Store progressive web app built with React, Redux and Flask. As user orders an item, it predicts the estimated date by which the ordata analyticsder will be delivered. I used Linear Regression model to predict number of days of delivery. In features, I considered average dispatching time of seller, class of origin city (3: metropolitan city, 2: city, 1: town/village), class of destination city, class of courier service (3: BlueDart, FedEx etc, 2: DTDC, 1: India Post), festive season (1: yes, 0: no), and future weather class (3: most favourable, 2: snow, thunderstrom etc, 1: natural disaster). We got upto 80% accuracy on our intuitionally generated data.`,
            github: "https://github.com/priyanshrastogi/order-delivery-forecast"
        },
        {
            id: "breeze18",
            title: "Breeze'18",
            category: ["Web Development"],
            shortdescription: "The Official Website of Shiv Nadar University's Sports-Tech-Cultural Fest Breeze 2018.",
            technologies: ["Django", "jQuery", "Bootstrap", "AWS"],
            description: `Breeze is the annual Sports-Tech-Cultural festival of Shiv Nadar University. I was the team lead of website team. I managed the team of 6 developers and designed the backend architecture of Breeze website, improved error handling with jQuery and added some enhancements.`,
            github: "https://github.com/Breeze18/Breeze",
        },
        {
            id: "thecabpoolapp",
            title: "The Cabpool App",
            category: ["Web Development"],
            shortdescription: "Hassle-free cab sharing utility progressive-web-app for Shiv Nadar University",
            technologies: ["Node.js", "Express", "MongoDB", "React", "Redux"],
            description: `People at Shiv Nadar University want to go home or nearest cities like Greater Noida or Noida or even IGI Airport on weekends, but if you are alone, hailing a cab is costly, becuase nearest city is Greater Noida, that is 15kms away from SNU. So how about pooling a cab? It can reduce the individual price of a ride. Using The Cabpool App, user can post cabpool requests by giving from, to, data and time and description etc. Users can see all the posted requests and if they want to go along, they can send Interest Request, the user will receive real-time notifications and email, now user can accept or decline others users' interest. If user accepts the request, both the users will receive confirmation and each-others contact information. The application is a Progressive Web App. So it gives performance like a native mobile app. Insanely Fast. Once the user is authenticated, user don't need to authenticate again for almost 2 months, if user doesn't clear data.`,
            github: "https://github.com/priyanshrastogi/thecabpoolapp"

        },
        {
            id: "temperature-plot",
            title: "Temperature Plot",
            category: ["Web Development", "Data Science"],
            shortdescription: "Real-time Temperature Visualization App with Arduino and Node.js",
            technologies: ["Node.js", "Express", "Socket.io", "Chart.js", "Arduino", "Temperature Sensor"],
            description: `Plotting real-time temperature graph. Sensing the temperature using Arduino and Temperature sensor module and sending it to the client using Node.js and Socket.io and plotting real-time graph with Chart.js. I wrote the whole procedure on my blog. Full Story can be found on my blog.`,
            github: "https://github.com/priyanshrastogi/temperature-plot",
        },
        {
            id: "world-climate-change",
            title: "World Climate Change",
            category: ["Data Science"],
            shortdescription: "Analysis and Visualization of the World's rising temperature",
            technologies: ["NumPy", "Pandas", "Matplotlib"],
            description: `Found a dataset of daily temperature ofevery major city of the world from 1800 to 2013. So I used NumPy and Pandas to filter, clean and summarise the data and plot the visualization using matplotlib.`
        },
        {
            id: "recession-hypothesis-test",
            title: "2008 Recession Effect Hypothesis Test",
            category: ["Data Science"],
            shortdescription: "2008 Recession Effect on University Towns Hypothesis Test using t-test",
            technologies: ["NumPy", "Pandas", "SciPy"],
            description: `University towns were less effected in 2008 recession. Tested the correctness of this hypothesis using t-test.`
        },
        {
            id: "mymusiclib",
            title: "MyMusicLib",
            category: ["App Development"],
            shortdescription: "Multi-user Desktop Music Library App with Built-in Music Player",
            technologies: ["Java", "MySQL"],
            description: `A Java and MySQL database application where multiple users can create, manage and save their songs, albums etc. It has inbuilt music player that lets users play songs.`,
            github: "https://github.com/priyanshrastogi/MyMusicLib"
        }
    ]
}