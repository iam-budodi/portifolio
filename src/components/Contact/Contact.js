import React, { useState, useCallback } from 'react';
import { send } from 'emailjs-com';
import toast from '../ToastMessage/ToastMessage';

const Contact = () => {
  const [toSend, setSend] = useState({ fullName: '', emailAddress: '', message: '' });
  const notify = useCallback((type, message) => {
    toast({ type, message });
  }, []);

  const sendAlert = (response) => ((+response.status === 200)
    ? notify('success', 'Your email is sent successfully!') : notify('error', 'Please try again!'));

  const handleFormReset = () => setSend({ fullName: '', emailAddress: '', message: '' });

  const onSubmit = async (event) => {
    event.preventDefault();
    handleFormReset();

    try {
      const response = await send(
        process.env.serviceID, process.env.templateID, toSend, process.env.userID
      );
      sendAlert(response);
    } catch (error) {
      sendAlert(error);
    }
  };

  const handleChange = (event) => {
    setSend({ ...toSend, [event.target.name]: event.target.value });
  };

  return (
    <div id="contacts" className="p-6 my-1 rounded lg:px-12 lg:pt-8 lg:pb-2">
      <form onSubmit={onSubmit}>
        <div className="sm:overflow-hidden sm:rounded-md">
          <h2 className="block text-xl font-semibold text-indigo-500 lg:text-3xl">Interested? Reach me out</h2>
          <div className="py-2 bg-white space-y-8 lg:space-y-4">
            <div className="space-y-8 lg:space-x-24 lg:w-7/12 lg:mx-auto">
              <div className="col-span-6 sm:col-span-3 lg:inline-block lg:w-5/12">
                <label htmlFor="fullName" className="block text-base font-light text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={toSend.fullName}
                  onChange={handleChange}
                  className="mt-4 p-2 focus:outline-none focus:ring focus:border-blue-300  block w-full shadow-sm sm:text-sm border-b-4 border-gray-500 rounded-md"
                />
              </div>
              <div className="col-span-6 sm:col-span-4 lg:inline-block lg:w-5/12">
                <label htmlFor="emailAddress" className="block text-base font-light text-gray-900">
                  Email address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  value={toSend.emailAddress}
                  onChange={handleChange}
                  className="mt-4 p-2 focus:outline-none focus:ring focus:border-blue-300  block w-full shadow-sm sm:text-sm border-b-4 border-gray-500 rounded-md"
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-6 lg:w-7/12 lg:mx-auto">
              <label htmlFor="message" className="block text-base font-light text-gray-900">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                value={toSend.message}
                onChange={handleChange}
                className="mt-4 focus:outline-none focus:ring focus:border-blue-300  block w-full shadow-sm sm:text-sm border-b-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="p-4 bg-gray-50 sm:px-6">
              <div className="lg:w-3/12 lg:mx-auto">
                <button
                  type="submit"
                  disabled={
                      toSend.fullName === '' || toSend.emailAddress === '' || toSend.message === ''
                  }
                  className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 py-2 px-8 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
