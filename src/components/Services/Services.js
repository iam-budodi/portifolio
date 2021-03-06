import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopHouse, faMobile } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      faIcon: faCode,
      header: 'Mobile Web Development',
      smallHeader: 'full-stack with javascript technologies',
      paragraph: 'Get range of services from a simple single static page of plain text to complex web applications, with best behavior and visuals for your businesses.',
    },
    {
      faIcon: faMobile,
      header: 'Progressive Web App',
      smallHeader: 'Apps users can add to their home screen',
      paragraph: 'The goal is to have cross-platform app delivered through web that allows offline/low quality network uses and are easier than native app.',
    },
    {
      faIcon: faLaptopHouse,
      header: 'UI/UX and Visual Design',
      smallHeader: `${"Best users' interaction experience"}`,
      paragraph: 'Get aesthetically pleasing intefaces for the blazing interaction and experience for your users on your website or web app.',
    },
  ];

  return (
    <div id="services" className="bg-gray-400 overflow-hidden p-4 lg:p-4">
      <div className="space-y-8 my-8 lg:m-8 lg:py-4">
        <div className="">
          <p className="text-xl font-semibold leading-5 text-indigo-600 lg:text-3xl">Services I can offer</p>
        </div>
        <div className="bg-white w-full mx-auto rounded lg:py-6 lg:px-12">
          {services.map(({
            faIcon, header, smallHeader, paragraph
          }) => (
            <div className="my-10 p-4 flex" key={header}>
              <div className="w-10 flex flex-col items-center">
                <span className="h-10 w-10 border-2 border-gray-300 rounded-full text-center p-2 text-gray-600">
                  <FontAwesomeIcon icon={faIcon} />
                </span>
                <div className="pt-4">
                  <svg width={2} height={70} viewBox="0 0 1 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2={47} stroke="#D1D5DB" strokeDasharray="2 2" />
                  </svg>
                </div>
              </div>
              <div className="pl-4 lg:pl-8 lg:w-8/12">
                <p className="text-base font-semibold leading-normal text-indigo-500">{header}</p>
                <p className="text-sm leading-5 font-medium text-indigo-500 pt-1">{smallHeader}</p>
                <p className="pt-4 text-base leading-normal font-light text-gray-500">{paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
