import React from 'react';

const Contact = () => (
  <>
    <section id="contacts">
      <form action="#" method="POST">
        <div className="shadow-lg sm:overflow-hidden sm:rounded-md my-16 px-6">
          <h2 className="block mt-6 mb-10 text-xl font-semibold text-gray-800">Interested? Reach me out</h2>
          <div className="px-4 py-5 bg-white space-y-8 sm:p-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="first_name" className="block text-base font-light text-gray-900">
                Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="mt-4 p-2 focus:outline-white block w-full shadow-sm sm:text-sm border-b-4 border-gray-500 rounded-md"
              />
            </div>
            <div className="col-span-6 sm:col-span-4">
              <label htmlFor="email_address" className="block text-base font-light text-gray-900">
                Email address
              </label>
              <input
                type="text"
                name="email_address"
                id="email_address"
                className="mt-4 p-2 focus:outline-white block w-full shadow-sm sm:text-sm border-b-4 border-gray-500 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label htmlFor="city" className="block text-base font-light text-gray-900">
                Message
              </label>
              <textarea
                type="text"
                name="city"
                id="city"
                className="mt-4 focus:outline-white block w-full shadow-sm sm:text-sm border-b-4 border-gray-500 rounded-md"
              />
            </div>

            <div className="px-4 py-6 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  </>
);

export default Contact;
