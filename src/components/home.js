import React, { Component } from 'react';
import Highlight from 'react-highlight';

class Home extends Component {

    render() {
        return (
            <div style={{ marginTop: '75px' }}>
                <h4 className="text-center" style={{ fontWeight: 300 }}>Priyansh Rastogi</h4>
                <h6 className="text-center" style={{ marginBottom: '50px', fontWeight: 300 }}>Full Stack Developer</h6>
                <Highlight className="javascript">{
`export const priyanshrastogi = () => {
    name: 'Priyansh Rastogi',
    tags: ['Full Stack Developer'],
    location: 'Greater Noida, India',
    education: [{
        major: 'Computer Science',
        school: 'Shiv Nadar University',
        gradYear: 2019
    }],
    likes: ['Pizza', 'Coffee', 'Music'],
    tools: ['Node.js', 'React', 'Redux'
        'React Native', 'Flask', 'Java',
        'Django', 'Pandas', 'Sklearn',
        'Tensorflow', 'Docker', 'Arduino',
        'Raspberry Pi', 'Hadoop']
}

`
                }
                </Highlight>
            </div>
        );
    }
}

export default Home;