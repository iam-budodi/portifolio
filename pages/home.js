import React from 'react';

import Header from '../src/components/Header/Header';
import Contact from '../src/components/Contact/Contact';
import Layout from '../src/components/Layout/Layout';
import Footer from '../src/components/Footer/Footer';

export default function Page() {
  return (
    <Layout>
      <Header />
      <Contact />
      <Footer />
    </Layout>
  );
}
