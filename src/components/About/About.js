import React from 'react';

const About = () => (
  <div id="about" className="my-24 space-y-12 shadow rounded  border-t p-6">
    <div className="flex flex-col items-start ">
      <p className="text-xl font-semibold leading-5 text-gray-800 pt-4">A little bit about me</p>
    </div>
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col lg:flex-row mx-auto w-full lg:items-center rounded bg-white border-t">
        <div className="w-full lg:w-2/3 py-8 dark:bg-gray-800 leading-relaxed">
          {`I'm the guy you need for front-end, back-end or full stack web Development and specialize in the below
          technology stacks building consistently.`}
        </div>
        <div className="w-full lg:w-1/3 dark:border-gray-800 dark:bg-gray-700 px-4 space-y-2">
          <div className="leading-loose">
            <span className="font-semibold text-gray-800 text-xl">Frontend:</span>
            {' '}
            HTML5 | CSS3 | ReactJS
          </div>
          <div className="leading-loose">
            <span className="font-semibold text-gray-800 text-xl">Backend:</span>
            {' '}
            JavaScript(NodeJS | Express)
          </div>
          <div className="leading-loose">
            <span className="font-semibold text-gray-800 text-xl">Databases:</span>
            {' '}
            Postgres | MongoDB
          </div>
        </div>
        <div className="w-full lg:w-2/3 py-8 dark:bg-gray-800 leading-relaxed">
          I am capable of handling your works alone, and also super collaborative
          when it comes to team.
        </div>
        <div className="w-full lg:w-2/3 py-2 dark:bg-gray-800 leading-relaxed">
          Currently working at
          {' '}
          <span className="text-yellow-500">Exim Bank Tanzania</span>
          {' '}
          as an
          {' '}
          <span className="text-yellow-500">Application Support Analyst</span>
          ,
          {' '}
          mainly handling analysis of business use cases
          and the entire software development cycle while liasoning with my internal teams
          and external vendors.
        </div>
      </div>
    </div>
  </div>
);

export default About;
