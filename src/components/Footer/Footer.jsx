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
          <div className="mt-16 flex gap-5">
            <div className="flex-1">
              <h4 className="text-lg font-medium text-white">About Us</h4>
              <p className="max-w-[291px] text-gray-500">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div className="flex-1">
              <h4>About Us</h4>
              <p>
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div className="flex-1">
              <h4>About Us</h4>
              <p>
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
