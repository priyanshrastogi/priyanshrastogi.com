//Projects, description supports markdown.

export default () => {
    return [
        {
            id: "letalent",
            title: "Letalent",
            shortdescription: "The Talent Marketplace. (On-going)",
            technologies: ["Node.js", "Express", "MongoDB", "React", "Redux", "Socket.io", "Flask", "Recommendation Systems"],
            description: `Letalent is a talent marketplace, where people with talent can offer their services to people who want to outsource some work. In other words, it's a freelancing platform for peers. The production build is expected to launch in the last week of April 2018.`,
            github: "https://github.com/priyanshrastogi/letalent"
        },
        {
            id: "thecabpoolapp",
            title: "The Cabpool App",
            shortdescription: "Hassle-free cab sharing utility progressive-web-app for Shiv Nadar University",
            technologies: ["Node.js", "Express", "MongoDB", "React", "Redux"],
            description: `People at Shiv Nadar University want to go home or nearest cities like Greater Noida or Noida or even IGI Airport on weekends, but if you are alone, hailing a cab is costly, becuase nearest city is Greater Noida, that is 15kms away from SNU. So how about pooling a cab? It can reduce the individual price of a ride. Using The Cabpool App, user can post cabpool requests by giving from, to, data and time and description etc. Users can see all the posted requests and if they want to go along, they can send Interest Request, the user will receive real-time notifications and email, now user can accept or decline others users' interest. If user accepts the request, both the users will receive confirmation and each-others contact information. The application is a Progressive Web App. So it gives performance like a native mobile app. Insanely Fast. Once the user is authenticated, user don't need to authenticate again for almost 2 months, if user doesn't clear data.`,
            github: "https://github.com/priyanshrastogi/thecabpoolapp"

        },
        {
            id: "handy6",
            title: "Handy 6",
            shortdescription: "Automatic Deployment of Hadoop Clusters and Big Data Analysis with MapReduce",
            technologies: ["Hadoop", "MapReduce", "Python", "Docker", "Ansible", "Bootstrap"],
            description: `Handy 6 is an application that automates the process of deploying Hadoop Clusters over many systems using DevOps tools like Docker and Ansible. Using Python CGI all the tools can be connected to a web application to give user hasslefree experience deploying Hadoop cluster, uploading files over the cluster and using MapReduce to analyse big data. This project demonstrate analysis of HR data of a firm and analyse employee satisfaction and other insights. Additionally, User can managa all the docker containers from a web interface.`,
            github: "https://github.com/priyanshrastogi/handy6",
        },
        {
            id: "breeze18",
            title: "Breeze'18",
            shortdescription: "The Official Website of Shiv Nadar University's Sports-Tech-Cultural Fest Breeze 2018.",
            technologies: ["Django", "jQuery", "Bootstrap", "AWS"],
            description: `Breeze is the annual Sports-Tech-Cultural festival of Shiv Nadar University. I was the team lead of website team. I managed the team of 6 developers and designed the backend architecture of Breeze website, improved error handling with jQuery and added some enhancements.`,
            github: "https://github.com/Breeze18/Breeze",
        },
        {
            id: "temperature-plot",
            title: "Temperature Plot",
            shortdescription: "Real-time Temperature Visualization App with Arduino and Node.js",
            technologies: ["Node.js", "Express", "Socket.io", "Chart.js", "Arduino", "Temperature Sensor"],
            description: `Plotting real-time temperature graph. Sensing the temperature using Arduino and Temperature sensor module and sending it to the client using Node.js and Socket.io and plotting real-time graph with Chart.js. I wrote the whole procedure on my blog. Full Story can be found on my blog.`,
            github: "https://github.com/priyanshrastogi/temperature-plot",
        },
        {
            id: "world-climate-change",
            title: "World Climate Change",
            shortdescription: "Analysis and Visualization of the World's rising temperature",
            technologies: ["NumPy", "Pandas", "Matplotlib"],
            description: `Found a dataset of daily temperature ofevery major city of the world from 1800 to 2013. So I used NumPy and Pandas to filter, clean and summarise the data and plot the visualization using matplotlib.`
        },
        {
            id: "recession-hypothesis-test",
            title: "2008 Recession Effect Hypothesis Test",
            shortdescription: "2008 Recession Effect on University Towns Hypothesis Test using t-test",
            technologies: ["NumPy", "Pandas", "SciPy"],
            description: `University towns were less effected in 2008 recession. Tested the correctness of this hypothesis using t-test.`
        },
        {
            id: "mymusiclib",
            title: "MyMusicLib",
            shortdescription: "Multi-user Desktop Music Library App with Built-in Music Player",
            technologies: ["Java", "MySQL"],
            description: `A Java and MySQL database application where multiple users can create, manage and save their songs, albums etc. It's a mult-uset `,
            github: "https://github.com/priyanshrastogi/MyMusicLib"
        }
    ]
}