import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = ({ target, children }) => (
  <Link
    activeClass="home"
    to={target}
    spy
    smooth
    hashSpy
    offset={-5}
    duration={1500}
    delay={500}
    isDynamic
    ignoreCancelEvents={false}
  >
    { children}
  </Link>
);

export default ScrollLink;
