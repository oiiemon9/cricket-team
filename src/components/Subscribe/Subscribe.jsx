import React from 'react';
import bg from '../../assets/bgImg.png';

const Subscribe = () => {
  return (
    <div className="max-w-[1420px] mx-auto px-2 mt-48 relative">
      <div className=" bg-white/10 p-6 rounded-2xl -mb-52 border border-white/30">
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="bg-no-repeat bg-center bg-cover bg-white rounded-2xl py-[88px] px-5 flex flex-col justify-center items-center gap-4"
        >
          <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
          <p className="text-lg font-medium text-gray-500">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex gap-5 max-w-[560px] w-full h-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="input rounded-2xl w-full py-5 p"
            />

            <button className="p-[3px] relative cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl" />
              <div className="px-8 h-full bg-black rounded-[14px]  relative group transition duration-200 text-white hover:bg-transparent text-nowrap flex justify-center items-center">
                Subscribe
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
