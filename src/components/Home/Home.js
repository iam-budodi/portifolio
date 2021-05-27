import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';

export default function Home() {
  return (
    <div className="bg-local overflow-auto bg-cover bg-center bg-no-repeat bg-opacity-0 " style={{ backgroundImage: 'url(/images/background-1.jpg)' }}>
      <Header />
      <Hero />
    </div>
  );
}
