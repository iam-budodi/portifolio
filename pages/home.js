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
      <Header />
      <Hero />
      <About />
      <CarouselSlider />
      <Services />
      <Contact />
      <Footer />
    </Layout>
  );
}
