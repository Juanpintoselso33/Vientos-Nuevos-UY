import React from 'react';

import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';

import config from '../config/index.json';

const Footer = () => {
  const { company, about } = config;
  const { logo, logo250, logoPlp, name: companyName } = company;
  const { socialMedia } = about;
  const { navigation } = config;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center space-x-2 sm:space-x-6">
          <img
            src={logo}
            alt={companyName}
            className="h-12 sm:h-24 mx-2 sm:mx-4"
          />
          <img
            src={logo250}
            alt={companyName}
            className="h-10 sm:h-14 mx-2 sm:mx-0"
          />
          <img
            src={logoPlp}
            alt={companyName}
            className="h-12 sm:h-24 mx-2 sm:mx-4"
          />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          <Link
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-400 text-base cursor-pointer leading-4 text-white"
          >
            Inicio
          </Link>
          {navigation.map((item, index) => (
            <Link
              activeClass="active"
              to={item.href}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={`${item.name}-${index}`}
              className="hover:text-gray-400 text-base cursor-pointer leading-4 text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-x-8 mt-6">
          <a
            aria-label="instagram"
            href={socialMedia.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-vibrantYellow hover:text-lightCyan"
          >
            <FaInstagram className="w-8 h-8" />
          </a>
          <a
            aria-label="twitter"
            href={socialMedia.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-vibrantYellow hover:text-lightCyan"
          >
            <FaTwitter className="w-8 h-8" />
          </a>
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} designed by{' '}
            <a
              href="https://github.com/Juanpintoselso33"
              className="text-white"
              rel="nofollow"
            >
              Juan Pintos Elso
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
