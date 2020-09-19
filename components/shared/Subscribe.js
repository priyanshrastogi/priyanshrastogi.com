import React, { useState } from 'react';
import { Input, InputWrapper, Submit, SubscribeMessage, SubscribeText, SubscribeWrapper } from './Subscribe.styled';

const Subscribe = () => {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async () => {
    setMessage(null);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)) {
      setLoading(true);
      let res = await fetch('/api/subscribe', {
        method: 'POST', 
        body: JSON.stringify({email}), 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      res = await res.json();
      setLoading(false);
      setMessage(res.message);
      if(res.success) {
        setEmail('');
      }
    }
    else {
      setMessage('Not a valid email.');
    }
  }

  return (
    <SubscribeWrapper index={4}>
      <SubscribeText>Get latest blog posts, reviews right into your inbox.</SubscribeText>
      <InputWrapper>
        <Input 
          index={6} 
          value={email} 
          onChange={e => setEmail(e.target.value.trim().toLowerCase())}
          placeholder='Enter Your Email'
        />
        <Submit 
          index={5} 
          disabled={email.length === 0 || loading} 
          onClick={handleSubmit}
        >
          Subscribe
        </Submit>
      </InputWrapper>
      {loading && <SubscribeMessage>Please wait while I add you to the list.</SubscribeMessage>}
      {message && <SubscribeMessage>{message}</SubscribeMessage>}
    </SubscribeWrapper>
  )  
}

export default Subscribe;