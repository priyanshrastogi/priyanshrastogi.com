import React from 'react';

export default function Footer() {
  return (
    <div className='footer text-center' style={{marginTop: 100}}>
      <p>Version 3.0.0-beta<br/>
      &copy; Copyright {new Date().getFullYear()} Priyansh Rastogi.</p>
    </div>
  )
}