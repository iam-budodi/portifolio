import React from 'react';

const Contact = () => (
  <>
    <div id="contacts" className="mb-10 p-6">
      <form action="#" method="POST">
        <div className="sm:overflow-hidden sm:rounded-md">
          <h2 className="block mt-6 mb-10 text-xl font-semibold text-gray-800">Interested? Reach me out</h2>
          <div className="py-5 bg-white space-y-8 sm:p-6">
            <div className="">
              <div className="col-span-6 sm:col-span-3 lg:inline-block lg:col-auto">
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
              <div className="col-span-6 sm:col-span-4 lg:inline-block lg:col-auto">
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
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
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
            <div className="px-4 py-6 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </>
);

export default Contact;
