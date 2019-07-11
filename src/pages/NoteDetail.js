import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NoteDetail from '../components/NoteDetail';
import Subscribe from '../components/Subscribe';

export default function NotesDetailPage(props) {
  return (
    <div className='container'>
      <Header name='# notes'/>
      <NoteDetail match={props.match}/>
      <Subscribe/>
      <div style={{marginTop: 50, marginBottom: 100}}>
        <div>
          <Link to={'/notes'} style={{color: 'inherit'}}>Back to Notes</Link>
        </div>
        <div>
          <Link to={'/'} style={{color: 'inherit'}}>Back to Homepage</Link>
        </div>
      </div>
    </div>
  )
}