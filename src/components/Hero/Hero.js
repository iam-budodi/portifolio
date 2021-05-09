import React from 'react';
import AnimateText from '../AnimateText/AnimateText';

const Hero = () => (
  <section className="relative">
    <div
      className="h-screen m-0 bg-fixed overflow-auto bg-cover bg-center bg-no-repeat rounded-lg bg-opacity-0 text-white"
      style={{ backgroundImage: 'url(/images/background-1.jpg)' }}
    >
      <div className="container">
        <div className="grid-cols-12 lg:grid-cols-7 md:grid-cols-12 items-center">
          <div className="h-3/6 m-auto px-8 absolute top-0 right-0 bottom-0 left-0">
            <small className="font-sans font-semibold text-sm">Hello, my name is Japhet</small>
            <h1 className="font-sans font-semibold pt-10 text-3xl mb-8 leading leading-relaxed">
              Hire me as
              <div className="text-yellow-400 pt-1">
                <AnimateText />
              </div>
            </h1>
            <p className="font-sans font-extralight text-base">
              Ex quis qui tempor amet. Esse quis magna quis eiusmod veniam Lorem elit nostrud et.
              Enim ullamco eu sint aliquip. Eiusmod nulla ex amet.
            </p>
          </div>
          <div className="h-1/6 m-auto absolute right-0 bottom-0 left-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce mx-auto h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
