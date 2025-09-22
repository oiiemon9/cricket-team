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
          <div className="flex flex-col md:flex-row gap-5 max-w-[560px] w-full h-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="input rounded-2xl w-full py-6"
            />

            <button className="px-8 py-2 rounded-xl bg-gradient-to-b from-yellow-500 to-yellow-600 text-white focus:ring-2 focus:ring-yellow-400 hover:shadow-xl transition duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
