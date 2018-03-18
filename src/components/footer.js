import React from 'react';

const Footer = () => {
    return (
        <div className="text-center" style={{ marginTop: '100px' }}>
            <div>
                <a href="https://angel.co/priyanshrastogi" target="_blank"><i style={{ margin: '5px' }} className="fab fa-angellist"></i></a>
                <a href="https://facebook.com/priyanshrastogi.x" target="_blank"><i style={{ margin: '5px' }} className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/priyanshx7" target="_blank"><i style={{ margin: '5px' }} className="fab fa-twitter"></i></a>
                <a href="https://github.com/priyanshrastogi" target="_blank"><i style={{ margin: '5px' }} className="fab fa-github"></i></a>
                <a href="https://instagram.com/priyanshrastogix" target="_blank"><i style={{ margin: '5px' }} className="fab fa-instagram"></i></a>
                <a href="https://linkedin.com/in/priyanshrastogi" target="_blank"><i style={{ margin: '5px' }} className="fab fa-linkedin"></i></a>
                <a href="https://medium.com/@priyanshrastogi" target="_blank"><i style={{ margin: '5px' }} className="fab fa-medium"></i></a>
                <a href="https://www.quora.com/profile/Priyansh-Rastogi" target="_blank"><i style={{ margin: '5px' }} className="fab fa-quora"></i></a>
                <a href="https://stackoverflow.com/users/7405630/priyansh-rastogi" target="_blank"><i style={{ margin: '5px' }} className="fab fa-stack-overflow"></i></a>
            </div>
            <p>&copy; {new Date().getFullYear()}, Priyansh Rastogi.<br/>Powered By React and Redux.</p>
        </div>
    );
}

export default Footer;