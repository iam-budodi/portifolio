import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook, faGithub, faLinkedin, faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope, faMapMarkerAlt, faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const socialIcon = [
    { link: 'https://www.linkedin.com/in/japhet-sebastian-1a5b7294/', faIcon: faLinkedin },
    { link: 'https://github.com/iam-budodi', faIcon: faGithub },
    { link: 'https://twitter.com/iam_Budodi', faIcon: faTwitter },
    { link: 'https://web.facebook.com/profile.php?id=100008877540812', faIcon: faFacebook }
  ];

  return (
    <>
      <footer id="contacts" className="footer bg-white relative pb-2 border-gray-700 border-b-4 rounded-lg">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:mt-4">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between space-y-8 sm:space-y-0">
              <div className="flex flex-col sm:mx-auto px-4">
                <span className="font-bold mb-8">Address</span>
                <address className="italic mb-4 text-sm">
                  <span className="h-8 w-8 m-auto text-center p-2 text-gray-600 hover:text-white hover:bg-blue-600  text-md hover:border-blue-600 leading-loose">
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
                  <span className="h-8 w-8 m-auto text-center p-2 text-gray-600 hover:text-white hover:bg-blue-600  text-md hover:border-blue-600 leading-loose">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </span>
                  {' '}
                  +(255) 744 608 510
                  {' '}
                  <br />
                  <span className="h-8 w-8 m-auto text-center p-2 text-gray-600 hover:text-white hover:bg-blue-600  text-md hover:border-blue-600 leading-loose">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  {' '}
                  japhets@eximbank.co.tz
                </address>
              </div>
              <div className="flex flex-col sm:mx-auto px-4 space-y-8">
                <span className="font-bold mb-6">Follow me</span>
                <div className="flex-shrink-0 flex justify-start mb-4 ml-4">
                  <Image height={100} width={100} className="block lg:block h-24 w-24 rounded-full " src="/images/japhet.png" alt="Workflow" />
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
        <div className="container mx-auto px-6">
          <div className="mt-12 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center pt-8 space-y-4">
              <div className="text-base mb-2">
                Copyright &copy; 2021
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
