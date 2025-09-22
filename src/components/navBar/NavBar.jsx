import React from 'react';
import logo from '../../assets/logo.png';
import { BsCoin } from 'react-icons/bs';

const NavBar = ({ availableCoin }) => {
  return (
    <div className="max-w-[1420px] mx-auto px-2">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <a className="cursor-pointer">
            <img src={logo} alt="" />
          </a>
        </div>

        <div className="navbar-end gap-5">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-gray-600 gap-5">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>

          <div className="border px-4 py-2 rounded border-gray-300 bg-gray-100">
            <p className="font-bold flex gap-2">
              <span>{availableCoin}</span> Coin
              <BsCoin className="text-2xl text-yellow-500" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
