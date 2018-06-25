import React from 'react';

const About = () => {
    return (
        <div className="container text-center">
            <h4 style={{ fontWeight: 300, marginBottom: '25px', marginTop: '25px' }}>About</h4>
            <p>Hi, I'm Priyansh. I'm a Full Stack Developer, specialized in JavaScript Stack i.e. Node.js, React, Redux, React Native etc. JavaScript is the first love of my life. I love building things with code and it feels even better when it make lives of people better and easier. I am good in System Design too. My skills also include building scalable apps with clustering, data caching with Redis, database shrading and scalable deployment to AWS.</p>
            <i className="fab fa-node fa-4x" style={{ margin: '10px'}}></i>
            <i className="fab fa-react fa-4x" style={{ margin: '10px'}}></i>
            <p>Other than JavaScript Stack, I have tried quite a things like Data Science, Machine Learning, Mobile Development with Android, Infrastructure tools like Servers, Hadoop, MapReduce, Docker, Ansible etc.</p>
            <h5>Skills</h5>
            <p><strong>Full Stack Web Development - </strong>Vanilla JS, ES6, Node.js, Express, MongoDB, Redis, Socket.io, React, Redux, Flask, Django, MySQL, PostgreSQL.</p>
            <p><strong>Mobile Development - </strong>React Native, Expo, Android Native(Need to brush up though)</p>
            <p><strong>Data Science - </strong>NumPy, Pandas, Matplotlib, Sklearn</p>
            <p><strong>Software Development - </strong>Java, C</p>
            <p><strong>Misc - </strong>AWS, Docker, Ansible, RHEL, Hadoop, MapReduce, Arduino, Raspberry Pi</p>
            <p>I am available for freelance work, if you want to build something together, please write to <strong><a href="mailto:hello@priyanshrastogi.com">hello@priyanshrastogi.com</a></strong></p>
            <a href="https://bit.ly/prresume">Download Resume</a>
        </div>
    );
}

export default About;