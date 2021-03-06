import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook, faGithub, faLinkedin, faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope, faMapMarkerAlt, faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';

const Footer = ({ onScrollTop }) => {
  const socialIcon = [
    { link: 'https://www.linkedin.com/in/japhet-sebastian-1a5b7294/', faIcon: faLinkedin },
    { link: 'https://github.com/iam-budodi', faIcon: faGithub },
    { link: 'https://twitter.com/iam_Budodi', faIcon: faTwitter },
    { link: 'https://web.facebook.com/profile.php?id=100008877540812', faIcon: faFacebook }
  ];

  return (
    <>
      <footer className="footer text-gray-300 bg-gray-800 px-6 py-3 border-gray-700 border-b-4 rounded-none">
        <div className="container mx-auto">
          <div className="sm:flex sm:mt-4">
            <div className="sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between space-y-4 sm:space-y-0">
              <div className="flex flex-col sm:mx-auto">
                <span className="font-bold text-indigo-500 mb-8">Address</span>
                <address className="italic mb-2 text-sm text-indigo-300">
                  <span className="h-8 w-8 m-auto p-2 text-gray-600 leading-loose">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </span>
                  {' '}
                  1404/45, Ohio St.
                  <br />
                  <span className="mx-8 leading-loose">
                    Ghana Avenue, Exim Tower 1
                    <sup>st</sup>
                    {' '}
                    Floor
                  </span>
                  {' '}
                  <br />
                  <span className="h-8 w-8 m-auto p-2 text-gray-600 leading-loose">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </span>
                  {' '}
                  +(255) 744 608 510
                  {' '}
                  <br />
                  <span className="h-8 w-8 m-auto p-2 text-gray-600 leading-loose">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  {' '}
                  japhet.sebastian01@gmail.com
                </address>
              </div>
              <div className="flex flex-col sm:mx-auto space-y-3">
                <span className="font-bold mb-4 text-indigo-500">Follow me</span>
                <div className="flex-shrink-0 flex justify-start mb-4 ml-4">
                  <Image height={60} width={60} className="block lg:block h-24 w-24 rounded-full " src="/images/japhet.png" alt="avatar" />
                  <span className="absolute right-0 justify-items-center lg:hidden">
                    {onScrollTop}
                  </span>
                </div>
                <div className="flex sm:justify-center xl:justify-start">
                  {socialIcon.map(({ link, faIcon }) => (
                    <span className="mt-4 mx-2" key={link}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                        className="h-10 w-8 rounded-full border-2 border-gray-400 text-center p-2 text-gray-600 hover:text-white hover:bg-blue-600  text-md hover:border-blue-600"
                      >
                        <FontAwesomeIcon icon={faIcon} />
                      </a>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="mt-10 border-t-2 lg:border-t-1 border-gray-300 flex flex-col items-center">
            <div className="text-center pt-4 space-y-2">
              <div className="text-base mb-2">
                Copyright &copy;
                {' '}
                {new Date().getFullYear()}
                {' '}
                <span className="font-medium text-yellow-400 leading-loose">Japhet Sebastian</span>
                . All rights reserved.
              </div>
              <div className="text-base">
                Designed by
                {' '}
                <a href="https://github.com/iam-budodi" className="text-base font-medium text-yellow-400 hover:text-yellow-800">Japhet</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
