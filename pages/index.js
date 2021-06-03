import React from 'react';

import Contact from '../src/components/Contact/Contact';
import Layout from '../src/components/Layout/Layout';
import Footer from '../src/components/Footer/Footer';
import Services from '../src/components/Services/Services';
import CarouselSlider from '../src/components/Carousel/Carousel';
import About from '../src/components/About/About';
import Home from '../src/components/Home/Home';
import Form from '../src/components/Form/Form';
import ScrollTop from '../src/components/Scroll/ScrollTop';

export default function Page() {
  return (
    <Layout>
      <Home />
      <About />
      <CarouselSlider />
      <Services />
      <Contact />
      <Footer onScrollTop={<ScrollTop />} />
      <Form />
    </Layout>
  );
}
