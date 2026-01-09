import React from 'react';
import Container from '../Components/Container';
import { FaArrowUp } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

import Google1 from '../assets/Google1.png';
import Google2 from '../assets/Google2.png';
import Google3 from '../assets/Google3.png';

const Footer = () => {
  return (
    <>
      {/* Scroll To Top */}
      <div className="pl-336 pb-8">
        <FaArrowUp className="text-7xl rounded-full p-4 bg-gray-100 cursor-pointer" />
      </div>

      <footer className="bg-black text-white pt-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

            {/* Exclusive */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Exclusive</h3>
              <p className="mb-3">Subscribe</p>
              <p className="text-sm text-gray-400 mb-4">
                Get 10% off your first order
              </p>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black border border-gray-500 px-4 py-2 pr-10 rounded outline-none"
                />
                <FaPaperPlane className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer" />
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Support</h3>
              <p className="text-sm text-gray-400 leading-6">
                111 Bijoy sarani, Dhaka,
                <br />
                DH 1515, Bangladesh.
              </p>
              <p className="mt-3 text-sm text-gray-400">
                exclusive@gmail.com
              </p>
              <p className="mt-2 text-sm text-gray-400">
                +88015-88888-9999
              </p>
            </div>

            {/* Account */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Account</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
              </ul>
            </div>

            {/* Quick Link */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Download App</h3>
              <p className="text-sm text-gray-400 mb-3">
                Save $3 with App New User Only
              </p>

              <div className="flex items-center gap-3 mb-4">
                <img src={Google3} alt="QR Code" className="w-20 h-20" />
                <div className="space-y-2">
                  <img src={Google1} alt="Google Play" className="w-28" />
                  <img src={Google2} alt="App Store" className="w-28" />
                </div>
              </div>

              <div className="flex gap-4 text-xl">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-10 py-4 text-center text-gray-500 text-sm">
            © Copyright Rimel 2036. All right reserved
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
