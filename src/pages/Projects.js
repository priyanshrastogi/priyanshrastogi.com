import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Projects from '../components/Projects';

export default function NotesPage() {
  return (
    <div className='container'>
      <Header name='# projects'/>
      <Projects showHeader={false} showGotoPageButton={false}/>
        <div style={{marginTop: 50, marginBottom: 100}}>
          <div>
            <Link to={'/'} style={{color: 'inherit'}}>Back to Homepage</Link>
          </div>
        </div>
    </div>
  )
}