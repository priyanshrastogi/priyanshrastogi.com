import React from 'react';
import Header from '../components/Header';
import CreateCodeNote from '../components/CreateCodeNote';

export default function CreateCodeNotePage(props) {
  return (
    <div className='container'>
      <Header name='# code notes'/>
      <CreateCodeNote history={props.history}/>
    </div>
  )
}