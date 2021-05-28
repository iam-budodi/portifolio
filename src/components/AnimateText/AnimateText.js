import React, { useEffect } from 'react';
import Typed from 'typed.js';

const AnimateText = () => {
  const words = ['Frontend Developer', 'Backend Developer',
    'Fullstack Developer', 'Google Cloud Engineer'];

  const options = {
    strings: words, typeSpeed: 50, backSpeed: 50, loop: true, cursorChar: '|'
  };

  useEffect(() => {
    const typed = new Typed('#span-text', options);
    return () => {
      typed.destroy();
    };
  }, [words]);

  return (
    <>
      <span
        id="span-text"
        style={{ whiteSpace: 'pre' }}
      />
    </>
  );
};

// class AnimateText extends React.Component {
//   componentDidMount() {
//     const options = {
//       strings: ['Frontend Developer', 'Backend Developer',
// 'Fullstack Developer', 'Google Cloud Engineer'],
//       typeSpeed: 50,
//       backSpeed: 50,
//       loop: true,
//       cursorChar: '|',
//     };
//     // this.el refers to the <span> in the render() method
//     this.typed = new Typed(this.el, options);
//   }

//   componentWillUnmount() {
//     // Please don't forget to cleanup animation layer
//     this.typed.destroy();
//   }

//   render() {
//     return (
//       <>
//         <span
//           style={{ whiteSpace: 'pre' }}
//           ref={(el) => { this.el = el; }}
//         />
//       </>
//     );
//   }
// }

export default AnimateText;
