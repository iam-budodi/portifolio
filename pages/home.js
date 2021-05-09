import React from 'react';

import Header from '../src/components/Header/Header';
import Contact from '../src/components/Contact/Contact';
import Layout from '../src/components/Layout/Layout';
import Footer from '../src/components/Footer/Footer';
import Projects from '../src/components/Projects/Projects';
import Services from '../src/components/Services/Services';

export default function Page() {
  return (
    <Layout>
      <Header />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </Layout>
  );
}
