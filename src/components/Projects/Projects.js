import React from 'react';

const Projects = () => (
  <div className="relative my-24 space-y-12 shadow rounded  border-t p-6">
    <div className="flex flex-col items-start ">
      <p className="text-xl font-semibold leading-5 text-gray-800 pt-4">Some of my work</p>
    </div>
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col lg:flex-row mx-auto sm:w-full lg:items-center rounded bg-white shadow-xl border-t">
        <div className="w-full lg:w-2/3 h-72 dark:bg-gray-800" />
        <div className="w-full lg:w-1/3 h-24 dark:border-gray-700 lg:h-64 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100 px-4">
          <div className="font-semibold text-gray-700 text-xl leading-loose">Weather App</div>
          <p className="text-gray-900 text-base font-light ">Get real-time weather information</p>
        </div>
      </div>
    </div>
  </div>
);
export default Projects;
