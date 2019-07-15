import React from 'react';

export default function Header(props) {
  return (
    <div className='text-center' style={{marginTop: '20px'}}>
      <p>PRIYANSH RASTOGI'S</p>
      <h2><span className='topic-highlight'>{props.name}</span></h2>
    </div>
  )
}