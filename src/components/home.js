import React, { Component } from 'react';
import photo from '../me.jpg';
import { Link } from 'react-router-dom';
import NavBar from './navbar';
class Home extends Component {

    render() {
        return (
            <div>
                <NavBar changeColor={true}/>
                <div className="profile-page">
                    <div className="page-header header-filter" data-parallax="true" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature')" }}></div>
                    <div className="main main-raised">
                        <div className="profile-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 ml-auto mr-auto">
                                        <div className="profile">
                                            <div className="avatar">
                                                <img src={photo} alt="Circle Image" className="img-raised rounded-circle img-fluid" />
                                            </div>
                                            <div className="name">
                                                <h3 className="title">Priyansh Rastogi</h3>
                                                <h6>Full Stack Developer</h6>
                                                <a href="https://twitter.com/priyanshx7" target="_blank" className="btn btn-just-icon btn-link"><i className="fa fa-twitter"></i></a>
                                                <a href="https://github.com/priyanshrastogi" target="_blank" className="btn btn-just-icon btn-link"><i className="fa fa-github"></i></a>
                                                <a href="https://linkedin.com/in/priyanshrastogi" target="_blank" className="btn btn-just-icon btn-link"><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="description text-center" style={{color: 'black'}}>
                                    <p style={{fontWeight: 'normal'}}>Hi, I'm Priyansh. I'm a Full Stack Developer, specialized in JavaScript Stack i.e. Node.js, React, Redux, React Native etc. JavaScript is the first love of my life. I love building things with code and it feels even better when it make lives of people better and easier. My skills include designing and building real-time, scalable applications and deployment over the cloud.</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 ml-auto mr-auto">
                                        <div className="profile-tabs">
                                            <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="#work" role="tab" data-toggle="tab">
                                                        <i className="fa fa-terminal"></i> Work
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#profile" role="tab" data-toggle="tab">
                                                        <i className="fa fa-code"></i> Skills
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content tab-space">
                                    <div className="tab-pane active" id="work">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card card-nav-tabs">
                                                    <h4 className="card-header card-header-primary text-center">Experience</h4>
                                                    <div className="card-body">
                                                        <p style={{fontWeight: 'normal'}}><a style={{ fontWeight: 'bold', color: 'black' }} href="https://americanexpress.io">American Express</a>
                                                        <br/>
                                                        Software Development Engineer Intern
                                                        <br/>
                                                        Jan 2019 - Present
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card card-nav-tabs">
                                                    <h4 className="card-header card-header-info text-center">Showcase</h4>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">
                                                            <p style={{fontWeight: 'normal', color: 'black'}}><Link to="/projects/parking-suggest" style={{color: 'black'}}>Parking Suggest</Link></p>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <p style={{fontWeight: 'normal'}}><Link to="/projects/letalent" style={{color: 'black'}}>Letalent</Link></p>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <p style={{fontWeight: 'normal'}}><Link to="/projects/handy6" style={{color: 'black'}}>HANDY 6</Link></p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <Link className="text-center btn btn-success" to="/projects" style={{fontWeight: 'normal', marginTop: 20}}>View All Projects</Link>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="profile">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="card card-nav-tabs">
                                                    <h4 className="card-header card-header-success text-center">Building Things</h4>
                                                    <div className="card-body">
                                                        <p style={{fontWeight: 'normal'}}>Vanilla JS, ES6, Node.js, Express, MongoDB, Redis, Socket.io, React, Redux, React Native, Expo, Flask, Django, Java, MySQL, PostgreSQL.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="card card-nav-tabs">
                                                    <h4 className="card-header card-header-warning text-center">Finding Insights</h4>
                                                    <div className="card-body">
                                                        <p style={{fontWeight: 'normal'}}>NumPy, Pandas, Matplotlib, Sklearn, TextBlob, NetworkX.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="card card-nav-tabs">
                                                    <h4 className="card-header card-header-danger text-center">DevOps and Other Things</h4>
                                                    <div className="card-body">
                                                        <p style={{fontWeight: 'normal'}}>AWS, Docker, Ansible, RHEL, Hadoop, MapReduce, Arduino, Raspberry Pi.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="description text-center" style={{color: 'black', paddingBottom: 50}}>
                                    <p style={{fontWeight: 'normal'}}>I am available for freelance work, if you want to build something together, please write to <strong><a href="mailto:hello@priyanshrastogi.com">hello@priyanshrastogi.com</a></strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;