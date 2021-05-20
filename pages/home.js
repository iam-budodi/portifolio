import React from 'react';

import Header from '../src/components/Header/Header';
import Contact from '../src/components/Contact/Contact';
import Layout from '../src/components/Layout/Layout';
import Footer from '../src/components/Footer/Footer';
import Services from '../src/components/Services/Services';
import CarouselSlider from '../src/components/Carousel/Carousel';

export default function Page() {
  return (
    <Layout>
      <Header />
      <CarouselSlider />
      <Services />
      <Contact />
      <Footer />
    </Layout>
  );
}
