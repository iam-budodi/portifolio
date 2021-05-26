import React from 'react';
import Nav from '../Nav/Nav';

const Header = () => (
  <div className="overflow-auto z-10" style={{ zIndex: 300 }}>
    <Nav />
  </div>
);

export default Header;
