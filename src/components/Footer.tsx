"use client"
import React from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import {
  FaInstagram,
  FaTwitterSquare,
  FaTiktok,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';

import Newsletter from './Newsletter';

import './styles/Footer.scss';

const Footer: React.FC = () => {
 

  const isBigScreen=true

  const isCollectionPage = true;

  return (
    <footer
      className={`footer ${
       isCollectionPage && isBigScreen
          ? 'is_collection_page_b'
          : 'is_collection_page_s'
      }`}
    >
          {!isBigScreen && <Newsletter />}
      <div className={'container'}>
        <div className={'sitemap'}>
          <div className={'foot_nav_wrapper'}>
            <h4 className={'foot_nav_title'}>Help</h4>
            <ul className={'foot_nav'}>
              <li>
                <Link href="/">Help Center</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
              <li>
                <Link href="/">Shipping Info</Link>
              </li>
              <li>
                <Link href="/">Track My Order</Link>
              </li>
              <li>
                <Link href="/">Returns & Exchanges</Link>
              </li>
            </ul>
          </div>
          <div className={'foot_nav_wrapper'}>
            <h4 className={'foot_nav_title'}>More</h4>
            <ul className={'foot_nav'}>
              <li>
                <Link href="">About Us</Link>
              </li>
              <li>
                <Link href="">Carreers</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={'socials_wrapper'}>
        {isBigScreen && <Newsletter />}
          <div className={'socials'}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitterSquare />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
