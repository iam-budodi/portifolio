import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = ({ target, children }) => (
  <Link
    activeClass="home"
    to={target}
    spy
    smooth
    offset={-5}
    duration={1000}
    delay={300}
    ignoreCancelEvents={false}
  >
    { children}
  </Link>
);

export default ScrollLink;
