import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

function ScrollTop() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      if (!isVisible && window.pageYOffset > 300) setVisible(true);
      else setVisible(false);
    }

    document.addEventListener('scroll', toggleVisibility);

    return function unMount() {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {isVisible && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          onClick={scrollTop}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
          />
        </svg>
      )}
    </>
  );
}

export default ScrollTop;
