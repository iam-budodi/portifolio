import React from 'react';

const About = () => (
  <div id="about" className="bg-yellow-500 overflow-hidden p-4 lg:p-12">
    <div className="space-y-12 my-7 lg:my-14 lg:py-4">
      <div className="">
        <p className="text-xl font-semibold leading-5 text-indigo-500 lg:text-3xl">A little bit about me</p>
      </div>
      <div className="bg-white w-full mx-auto rounded lg:p-8">
        <div className="py-6 px-4 lg:px-8 dark:bg-gray-800 leading-relaxed lg:w-8/12">
          {`I'm the guy you need for frontend, backend or full-stack web development, specialize in the below
          technology stacks building consistently.`}
        </div>
        <div className="w-full dark:border-gray-800 dark:bg-gray-700 px-8 lg:px-16 space-y-2 lg:w-8/12">
          <div className="leading-loose">
            <span className="font-semibold text-indigo-500 text-xl">Frontend:</span>
            {' '}
            HTML5 | CSS3 | ReactJS
          </div>
          <div className="leading-loose">
            <span className="font-semibold text-indigo-500 text-xl">Backend:</span>
            {' '}
            JavaScript (NodeJS | Express)
          </div>
          <div className="leading-loose">
            <span className="font-semibold text-indigo-500 text-xl">Databases:</span>
            {' '}
            Postgres | MongoDB
          </div>
        </div>
        <div className="w-full py-6 px-4 lg:px-8 dark:bg-gray-800 leading-relaxed lg:w-8/12">
          I am capable of handling your works alone, and also super collaborative
          when it comes to team.
        </div>
        <div className="w-full py-2 px-4 lg:px-8 dark:bg-gray-800 leading-relaxed lg:w-8/12">
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
