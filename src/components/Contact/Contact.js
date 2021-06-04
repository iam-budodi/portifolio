import React from 'react';

const Contact = () => (
  <>
    <div id="contacts" className="p-6 my-2 rounded lg:px-12 lg:py-8">
      <form action="#" method="POST">
        <div className="sm:overflow-hidden sm:rounded-md">
          <h2 className="block text-xl font-semibold text-indigo-500 lg:text-3xl">Interested? Reach me out</h2>
          <div className="py-5 bg-white space-y-8 lg:space-y-4 sm:p-6">
            <div className="space-y-8 lg:space-x-20 lg:w-6/12 lg:mx-auto">
              <div className="col-span-6 sm:col-span-3 lg:inline-block lg:w-5/12 lg:gap-8">
                <label htmlFor="fullName" className="block text-base font-light text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
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
                  className="mt-4 p-2 focus:outline-none focus:ring focus:border-blue-300  block w-full shadow-sm sm:text-sm border-b-4 border-gray-500 rounded-md"
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-6 lg:w-6/12 lg:mx-auto">
              <label htmlFor="message" className="block text-base font-light text-gray-900">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                className="mt-4 focus:outline-none focus:ring focus:border-blue-300  block w-full shadow-sm sm:text-sm border-b-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="p-4 bg-gray-50 sm:px-6">
              <div className="lg:w-3/12 lg:mx-auto">
                <button
                  type="submit"
                  className="py-2 px-8 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </>
);

export default Contact;
