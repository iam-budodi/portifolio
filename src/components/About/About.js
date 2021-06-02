import React from 'react';

const About = () => (
  <div id="about" className="bg-yellow-500 rounded overflow-hidden p-4">
    <div className="md:flex space-y-8 mt-14 mb-7">
      <div className="md:flex-shrink-0">
        <p className="text-xl font-semibold leading-5 text-indigo-500">A little bit about me</p>
      </div>
      <div className="bg-white w-full mx-auto rounded">
        {/* <div className="grid-cols-12 lg:grid-cols-7 md:grid-cols-12 mx-auto w-full lg:w-8/12 lg:items-center rounded bg-white border-t-2"> */}
        <div className="py-6 px-4 dark:bg-gray-800 leading-relaxed">
          {`I'm the guy you need for frontend, backend or full-stack web development, specialize in the below
          technology stacks building consistently.`}
        </div>
        <div className="w-full dark:border-gray-800 dark:bg-gray-700 px-8 space-y-2">
          <div className="leading-loose">
            <span className="font-semibold text-gray-800 text-xl">Frontend:</span>
            {' '}
            HTML5 | CSS3 | ReactJS
          </div>
          <div className="leading-loose">
            <span className="font-semibold text-gray-800 text-xl">Backend:</span>
            {' '}
            JavaScript (NodeJS | Express)
          </div>
          <div className="leading-loose">
            <span className="font-semibold text-gray-800 text-xl">Databases:</span>
            {' '}
            Postgres | MongoDB
          </div>
        </div>
        <div className="w-full py-6 px-4 dark:bg-gray-800 leading-relaxed">
          I am capable of handling your works alone, and also super collaborative
          when it comes to team.
        </div>
        <div className="w-full py-2 px-4 dark:bg-gray-800 leading-relaxed">
          Currently working at
          {' '}
          <a href="https://www.eximbank.co.tz" className="font-semibold text-indigo-500 hover:text-indigo-800">Exim Bank Tanzania</a>
          {' '}
          as an
          {' '}
          <span className="font-semibold text-indigo-500">Application Support Analyst</span>
          ,
          {' '}
          mainly handling analysis of business use cases and directly involved in the entire
          software development cycle.
        </div>
        {/* </div> */}
      </div>
    </div>
  </div>
);

export default About;
