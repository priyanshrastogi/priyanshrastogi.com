import React from 'react';

export default function Footer() {
  return (
    <div className='footer text-center' style={{marginTop: 100}}>
      <p>Version 3.0.1<br/>&copy; Copyright {new Date().getFullYear()} Priyansh Rastogi under The MIT License.</p>
    </div>
  )
}