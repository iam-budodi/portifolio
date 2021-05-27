import React from 'react';

import Header from '../src/components/Header/Header';
import Hero from '../src/components/Hero/Hero';
import Contact from '../src/components/Contact/Contact';
import Layout from '../src/components/Layout/Layout';
import Footer from '../src/components/Footer/Footer';
import Services from '../src/components/Services/Services';
import CarouselSlider from '../src/components/Carousel/Carousel';
import About from '../src/components/About/About';

export default function Page() {
  return (
    <Layout>
      <div className="bg-local overflow-auto bg-cover bg-center bg-no-repeat bg-opacity-0 " style={{ backgroundImage: 'url(/images/background-1.jpg)' }}>
        <Header />
        <Hero />
      </div>
      <About />
      <CarouselSlider />
      <Services />
      <Contact />
      <Footer />
    </Layout>
  );
}
