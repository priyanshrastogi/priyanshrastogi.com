import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CodeNoteDetail from '../components/CodeNoteDetail';
import Subscribe from '../components/Subscribe';

export default function CodeNotesDetailPage(props) {
  return (
    <div className='container'>
      <Header name='# code notes'/>
      <CodeNoteDetail match={props.match}/>
      <Subscribe/>
      <div style={{marginTop: 50, marginBottom: 100}}>
        <div>
          <Link to={'/codenotes'} style={{color: 'inherit'}}>Back to Code Notes</Link>
        </div>
        <div>
          <Link to={'/'} style={{color: 'inherit'}}>Back to Homepage</Link>
        </div>
      </div>
    </div>
  )
}