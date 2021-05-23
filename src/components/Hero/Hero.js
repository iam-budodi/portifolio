import React from 'react';
import AnimateText from '../AnimateText/AnimateText';
import ScrollLink from '../Scroll/Scroll';

const Hero = () => (
  <section className="relative">
    <div
      className="h-screen m-0 bg-fixed overflow-auto bg-cover bg-center bg-no-repeat bg-opacity-0 text-white"
      style={{ backgroundImage: 'url(/images/background-1.jpg)' }}
    >
      <div className="container">
        <div className="grid-cols-12 lg:grid-cols-7 md:grid-cols-12 items-center h-3/6 m-auto px-8 absolute top-0 right-0 bottom-0 left-0">
          <div className="text-center">
            <div className="font-sans font-semibold text-normal">Hello, my name is Japhet</div>
            <div className="font-sans font-semibold pt-10 text-3xl mb-12 leading leading-relaxed">
              I am a
              <div className="text-yellow-400 pt-1 my-2">
                <AnimateText />
              </div>
            </div>
            <div className="w-10/12 m-auto font-extralight text-base text-white pt-4">
              {`Together, let's build the right competitive innovative digital solutions for
              your business needs.`}
            </div>
          </div>
        </div>
        <div className="h-1/6 m-auto absolute right-0 bottom-0 left-0">
          <ScrollLink target="about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce mx-auto w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </ScrollLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
