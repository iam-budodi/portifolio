import React from 'react';
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
      <footer className="footer bg-white relative pt-1 border-gray-700 border-b-4 rounded-lg">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between space-y-8 sm:space-y-0">
              <div className="flex flex-col sm:mx-auto px-4">
                <span className="font-bold mb-6">Address</span>
                <address className="italic mb-4 text-sm">
                  <span className="h-12 w-12 m-auto hover:border-2 hover:rounded-full text-center p-2 text-gray-600 hover:text-white hover:bg-blue-600  text-md hover:border-blue-600">
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
              <div className="flex flex-col sm:mx-auto px-4">
                <span className="font-bold mb-6">Follow me</span>
                <div className="flex-shrink-0 flex justify-start mb-4 ml-4">
                  <img className="block lg:block h-16 w-16 rounded-full " src="/images/japhet.png" alt="Workflow" />
                </div>
                <div className="flex sm:justify-center xl:justify-start">
                  {socialIcon.map(({ link, faIcon }) => (
                    <span className="my-6 mx-2" key={link}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                        className="h-8 w-8 m-auto border-2 border-gray-400 rounded-full text-center p-2 text-gray-600 hover:text-white hover:bg-blue-600  text-md hover:border-blue-600"
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
          <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-12">
              <p className="font-extralight text-base mb-2">Copyright &copy; 2021 Japhet Sebastian. All rights reserved</p>
              <p className="font-extralight text-base mb-2">
                Designed by
                {' '}
                <a href="https://github.com/iam-budodi" className="text-sm text-blue-700">Japhet</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
