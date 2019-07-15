import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NotesDrafts from '../components/NotesDrafts';

export default function NotesDraftsPage() {
  return (
    <div className='container'>
      <Header name='# notes'/>
      <NotesDrafts/>
        <div style={{marginTop: 50, marginBottom: 100}}>
          <div>
            <Link to={'/'} style={{color: 'inherit'}}>Back to Homepage</Link>
          </div>
        </div>
    </div>
  )
}