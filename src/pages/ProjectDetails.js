import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ProjectDetail from '../components/ProjectDetail';

export default function ProjectDetailPage(props) {
  
  return (
    <div className='container'>
      <Header name='# work'/>
      <ProjectDetail match={props.match}/>
      <div style={{marginTop: 50, marginBottom: 100}}>
        <div>
          <Link to={'/work'} style={{color: 'inherit'}}>Back to Work Index</Link>
        </div>
        <div>
          <Link to={'/'} style={{color: 'inherit'}}>Back to Homepage</Link>
        </div>
      </div>
    </div>
  )
}