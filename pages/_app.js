import 'tailwindcss/tailwind.css';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import toast from '../src/components/ToastMessage/ToastMessage';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    toast({ type: 'info', message: 'Introducing Japhet Sebastian!' });
  }, []);

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default MyApp;
