import React from 'react';
import AnimateText from '../AnimateText/AnimateText';
import ScrollLink from '../Scroll/Scroll';

const Hero = () => (
  <div className="relative h-screen text-white">
    <div className="container">
      <div className="grid-cols-12 lg:grid-cols-7 md:grid-cols-12 items-center h-4/6 m-auto absolute top-0 right-0 bottom-0 left-0">
        <div className="text-center">
          <div className="font-sans font-semibold">Hello, my name is Japhet</div>
          <div className="font-sans font-semibold pt-10 text-3xl mb-12 leading leading-relaxed">
            I am a
            <div className="w-10/12 text-yellow-400 mx-auto pt-1 my-2">
              <AnimateText />
            </div>
          </div>
          <div className="w-10/12 mx-auto font-extralight text-base text-white pt-2">
            {`Together, let's build the right competitive innovative digital solutions for
            your business needs.`}
          </div>
        </div>
      </div>
      <div className="h-2/6 m-auto pt-6 absolute right-0 bottom-0 left-0">
        <ScrollLink target="about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce mx-auto py-8 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </ScrollLink>
      </div>
    </div>
  </div>
);

export default Hero;
