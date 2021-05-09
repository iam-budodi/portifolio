  const [isOpen, setIsOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsOpen(!isOpen);
  };

  let menuIcon;
  if (isOpen) {
    menuIcon = (
      <path
        fillRule="evenodd"
        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
      />
    );
  } else {
    menuIcon = (
      <path
        fillRule="evenodd"
        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
      />
    );
  }

  return (
    <header className="bg-gray-800 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
      <header className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="flex-shrink-0 px-4 sm:px-8 lg:px-8">
          <img className="h-8 w-8" src="/images/japhet.png" alt="avatar" />
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleNavMenu}
            type="button"
            className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {menuIcon}
            </svg>
          </button>
        </div>
      </header>

      <div className={isOpen ? 'px-4 pt-2 pb-4 block' : 'px-2 pt-2 pb-4 hidden sm:flex'}>
        <div className="flex px-6 sm:px-8 lg:px-8 items-baseline space-x-4">
          <a
            href="#"
            className="mt-1 block text-white text-sm font-medium rounded-md px-3 py-2 hover:bg-gray-700 sm:mt-0 sm:ml-2"
          >
            Home
          </a>
          <a
            href="#"
            className="mt-1 block text-white text-sm font-medium rounded-md px-3 py-2 hover:bg-gray-700 sm:mt-0 sm:ml-2"
          >
            About
          </a>
          <a
            href="#"
            className="mt-1 block text-white text-sm font-medium rounded-md px-3 py-2 hover:bg-gray-700 sm:mt-0 sm:ml-2"
          >
            Contacts
          </a>
        </div>
      </div>
    </header>
  );








  import React from 'react';
import AnimateText from '../AnimateText/AnimateText';

const Hero = () => (
  <section
    className="h-screen bg-fixed bg-cover bg-center bg-no-repeat rounded-lg bg-opacity-0 text-white"
    style={{ backgroundImage: 'url(/images/background-1.jpg)' }}
  >
    <div className="container mx-auto px-8">
      <div className="grid-cols-12 lg:grid-cols-7 md:grid-cols-12 items-center">
        <div className="pt-32">
          <small className="font-sans font-semibold text-sm">Hello, my name is Japhet</small>
          <h1 className="font-sans font-semibold pt-10 text-3xl mb-8 leading leading-relaxed">
            Hire me as
            <div className="text-yellow-400 pt-1">
              <AnimateText />
            </div>
          </h1>
          <p className="font-sans font-extralight text-base">
            Ex quis qui tempor amet. Esse quis magna quis eiusmod veniam Lorem
            elit nostrud et. Enim ullamco eu sint aliquip. Eiusmod nulla ex amet.
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
