import React from 'react';

const About = () => {
    return (
        <div className="container text-center">
            <h4 style={{ fontWeight: 300, marginBottom: '25px', marginTop: '25px' }}>About</h4>
            <p>Hello, I am Priyansh Rastogi. I am a Full Stack Developer, specialized in Web Development with JavaScript. Currently I am pursuing Computer Science major at Shiv Nadar University, Greater Noida, India (Graduating 2019). I love building things with code. I keep exploring for new things to learn. Since I learned Node.js and React, I am in love with this stack.</p>
            <i className="fab fa-node fa-4x" style={{ margin: '10px'}}></i>
            <i className="fab fa-react fa-4x" style={{ margin: '10px'}}></i>
            <p>Other than web development, I have tried quite a things like Data Science, Machine Learning, Mobile Development with Android, Infrastructure tools like Server Administration, Hadoop, MapReduce, Docker, Ansible etc.</p>
            <h5>Skills</h5>
            <p><strong>Full Stack Web Development - </strong>Vanilla JS, ES6, Node.js, Express, MongoDB, Socket.io, React, Redux, Flask, Django, MySQL, PostgreSQL.</p>
            <p><strong>Data Science - </strong>NumPy, Pandas, Matplotlib, Sklearn</p>
            <p><strong>Software Development - </strong>Java, C</p>
            <p><strong>Misc - </strong>AWS, Docker, Ansible, RHEL, Hadoop, MapReduce, Arduino, Raspberry Pi</p>
            <p>I am available for freelance work, if you want to build something together, please write to <strong><a href="mailto:hello@priyanshrastogi.com">hello@priyanshrastogi.com</a></strong></p>
            <a href="https://bit.ly/prresume">Download Resume</a>
        </div>
    );
}

export default About;