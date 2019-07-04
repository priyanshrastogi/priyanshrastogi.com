import React, { useState } from 'react';
import { subscribeUser } from '../services';

export default function Subscribe() {

  const [ email, setEmail ] = useState('');
  const [ error, setError ] = useState(false);
  const [ subscribeMessage, setSubscribeMessage ] = useState('');

  const isValidEmail = (email) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === false) {
      return false;
    }
    return true;
  }

  const onEmailChange = (e) => {
    if(error) {
      if(isValidEmail(e.target.value)) {
        console.log(error);
        setError(false);
      }
    }
    setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isValidEmail(email)) {
      const result = await subscribeUser(email);
      if(result.status) {
        setSubscribeMessage(result.message);
        setEmail('');
      }
      else {
        setSubscribeMessage(result.message);
        setEmail('');
      }
    }
    else {
      setError(true);
    }
  }

  return (
    <div className='section'>
      <p style={{textAlign: 'center'}}>Get latest blog and codenotes updates right into your inbox.</p>
      <div className='content col-md-6 offset-md-3' style={{paddingTop: 10}}>
        {subscribeMessage === '' ? null : <p className='text-success text-center'>{subscribeMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input 
            className='subs-input'
            type='text'
            placeholder='Your Email Address'
            style={error ? { border:'1px solid #dc3545'} : {}} 
            value={email} 
            onChange={onEmailChange}
          />
          <input 
            className='subs-button'
            type='submit' 
            value='Subscribe' 
            style={{backgroundColor: '#3366FF', borderColor: '#3366FF', color: 'white', boxShadow: '5px 5px #888888'}}
          />
          {error ? <p className='text-danger'>Email is not valid</p> : <p></p>}
        </form>
      </div>
    </div>
  )
}