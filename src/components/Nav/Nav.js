import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import ScrollLink from '../Scroll/Scroll';

const navigation = [
  { name: 'Home', href: 'home', current: true },
  { name: 'About', href: 'about', current: false },
  { name: 'Projects', href: 'projects', current: false },
  { name: 'Services', href: 'services', current: false },
  { name: 'Reach Me', href: 'contacts', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Nav = () => (
  <Disclosure as="nav" className="bg-gray-800 rounded-none">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 p-2">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <span className="block lg:hidden">
                  <Image
                    src="/images/japhet.png"
                    className="h-12 w-12 rounded-full"
                    alt="Avatar"
                    width={50}
                    height={50}
                  />
                </span>
                <span className="hidden lg:block">
                  <Image
                    src="/images/japhet.png"
                    className="h-12 w-12 rounded-full"
                    alt="Avatar"
                    width={40}
                    height={40}
                  />
                </span>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 py-2">
                  {navigation.map((item) => (
                    <Link key={item.name} href="">
                      <div
                        className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <ScrollLink target={item.href}>
                          {item.name}
                        </ScrollLink>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" />
          </div>
        </div>
        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 items-baseline">
            {navigation.map((item) => (
              <Link key={item.name} href="">
                <div
                  className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <ScrollLink target={item.href}>
                    {item.name}
                  </ScrollLink>
                </div>
              </Link>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export default Nav;
