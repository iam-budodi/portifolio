import React from 'react';
import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';

export default function Home() {
  return (
    <div className="bg-local overflow-auto bg-cover bg-center bg-no-repeat bg-opacity-0 bg-gray-800" style={{ backgroundImage: 'url(/images/background-1.jpg)' }}>
      <Nav />
      <Hero />
    </div>
  );
}
