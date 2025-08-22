import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div>
      {/* <nav className="fixed w-full z-20 top-0 left-0"> */}
      {/* <nav className="fixed w-full z-20 top-0 left-0 bg-gray-900/80 backdrop-blur-md shadow-md text-slate-50"> */}
      <nav
        className={`fixed w-full z-20 top-0 left-0 ${
          isHome
            ? "bg-transparent"
            : "bg-gray-900/80 backdrop-blur-md shadow-md text-slate-50"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Bappa
            </span>
          </a>
          <div className="flex md:order-2">
            <a
              href="https://drive.google.com/file/d/1bsZ1dVf0sdUo3_gkYRVqlmL-Vr-UsSc1/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Download CV
              </button>
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link to="/" className="hover:text-red-800">
                  Home
                </Link>
              </li>
              <li>
                {/* <a
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a> */}

                <Link to="/about" className="hover:text-red-800">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-red-800">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-800">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
