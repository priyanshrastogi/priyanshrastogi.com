import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CodeNotes from '../components/CodeNotes';

export default function CodeNotesPage() {
  return (
    <div className='container'>
      <Header/>
      <div style={{marginBottom: 100}}>
        <CodeNotes showHeader={false} showGotoPageButton={false}/>
        <div style={{marginTop: 50}}>
          <div>
            <Link to={'/'} style={{color: 'inherit'}}>Back to Homepage</Link>
          </div>
        </div>
      </div>
    </div>
  )
}