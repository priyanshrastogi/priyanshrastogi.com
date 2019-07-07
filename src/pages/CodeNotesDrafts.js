import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CodeNotesDrafts from '../components/CodeNotesDrafts';

export default function CodeNotesDraftsPage() {
  return (
    <div className='container'>
      <Header name='# notes'/>
      <CodeNotesDrafts/>
        <div style={{marginTop: 50, marginBottom: 100}}>
          <div>
            <Link to={'/'} style={{color: 'inherit'}}>Back to Homepage</Link>
          </div>
        </div>
    </div>
  )
}