import React from 'react';
import logo from '../../assets/logo-footer.png';
const Footer = () => {
  return (
    <div className="bg-[#06091A]">
      <div className="max-w-[1420px] mx-auto px-2 pt-60">
        <div>
          <div className="flex justify-center">
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="mt-16 flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <h4 className="text-lg font-medium text-white">About Us</h4>
              <p className="max-w-[291px] text-gray-500">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-medium text-white">Quick Links</h4>
              <ul className="list-disc ms-5 space-y-2 max-w-[291px] text-gray-500">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-medium text-white">About Us</h4>
              <p className="max-w-[291px] text-gray-500">
                Subscribe to our newsletter for the latest updates.
              </p>
              <div className="flex mt-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input rounded-s rounded-e-none py-6"
                />
                <button className="bg-yellow-500 rounded-s-none rounded-e px-6 cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600/50 mt-16">
        <div className="py-5">
          <p className="text-gray-500 text-center">
            @2024 Your Company All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
