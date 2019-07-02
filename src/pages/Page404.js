import React, { Component } from 'react';
import Intro from '../components/Intro';
import { Redirect } from 'react-router-dom';

export default class Page404 extends Component {
  
  state = {
    time: 10000
  }

  componentDidMount() {
    this.redirect();
  }

  redirect = () => {
    setInterval(() => {
      if(this.state.time>0)
        this.setState((prevState) => ({time: prevState.time-1000}));
    }, 1000);
  };

  render() {
    if(this.state.time>0) {
      return (
        <div className='container'>
          <Intro/>
          <div className='text-center page404'>
            <h2><span className='topic-highlight'>404</span></h2>
            <div className='content'>
              <p>Ohh no! The page you are looking for doesn't really exist.</p>
              <p>You might want to go to the homepage. So redirecting you in {this.state.time/1000}</p>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <Redirect to='/'/>
      )
    }
  }
}