import React from 'react';

const Hero = () => (
  <section
    className="h-screen bg-fixed bg-cover bg-center bg-no-repeat my-0 rounded-lg bg-opacity-0 text-white"
    style={{ backgroundImage: 'url(/images/background-1.jpg)' }}
  >
    <div className="container mx-auto px-8">
      <div className="grid-cols-12 lg:grid-cols-7 md:grid-cols-12 items-center">
        <div className="pt-32">
          <small className="font-sans font-normal">Welcome to my portfolio site</small>
          <h1 className="font-sans font-semibold pt-10 text-4xl mb-6 leading leading-relaxed">{'Hey folks, I\'m Japhet'}</h1>
          <p className="font-sans font-extralight">
            Ex quis qui tempor amet. Esse quis magna quis eiusmod veniam Lorem elit nostrud et.
            Enim ullamco eu sint aliquip. Eiusmod nulla ex amet.
          </p>
        </div>
        <div className="pt-16 mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce mx-auto h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
