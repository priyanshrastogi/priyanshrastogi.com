import React from 'react';
import CreateOrUpdateCodeNote from '../components/CreateOrUpdateCodeNote';

export default function CreateCodeNote(props) {
  return (
    <div>
      <CreateOrUpdateCodeNote history={props.history}/>
    </div>
  );
}