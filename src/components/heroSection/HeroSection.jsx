import React from 'react';
import CricketImg from '../../assets/banner-main.png';
import bg from '../../assets/bgImg.png';

const HeroSection = () => {
  return (
    <div className="max-w-[1420px] mx-auto px-2 mt-6 ">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg-no-repeat bg-center bg-cover bg-black rounded-2xl py-16 px-5 flex flex-col justify-center items-center gap-4"
      >
        <div>
          <img src={CricketImg} alt="" />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-lg font-medium text-gray-500">
          Beyond Boundaries Beyond Limits
        </p>
        <div>
          <button className=" py-3 px-4 text-lg font-medium cursor-pointer bg-[#E7FE29] rounded-2xl">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
