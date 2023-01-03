import React from 'react';
import Contact from '../components/Contact';
import Hero from '../components/Hero';

const contact = () => {
  return (
    <div>
      <div>
        <Hero
          heading='Contact'
          message='Submit the form below for more work and quotes.'
        />
        <Contact />
      </div>
    </div>
  );
};

export default contact;
