import React from 'react';
import { ContactWrapper, ContactHeaderText, ContactText, ContactHeader } from './Contact.styled';

const Contact = () => {
  
  return (
    <ContactWrapper>
      <ContactHeader>
        <ContactHeaderText index={5}>Reach Me Out</ContactHeaderText>
      </ContactHeader>
      <ContactText>You can say Hi on my Twitter, Instagram, LinkedIn, GitHub, or Email.</ContactText>
    </ContactWrapper>
  );
}

export default Contact;