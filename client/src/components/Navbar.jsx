import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoDark from "../assets/branding/logo-dark.png";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <div className="fixed z-50 right-0 left-0 top-0 border-b-2 border-theme2-light">
        <nav style={{ backgroundColor: "#f8f8f8" }}>
          <div className="container mx-auto px-4 h-[60px] flex items-center justify-between">
            <Link to="/">
              <img
                src={logoDark}
                alt="logo"
                className="sm:w-[180px] w-[120px]"
              />
            </Link>
            <div className="flex items-center gap-x-5">
              <ul className=" absolute gap-x-9 m-auto w-[275px] right-0 left-0 text-lg hidden lg:inline-flex">
                <li>
                  <Link to="/about-us">About</Link>
                </li>
                <li>
                  <Link to="/Products">Product</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact</Link>
                </li>
              </ul>

              <button
                type="button"
                className="outline-none inline-flex justify-center items-center group transition-all ease-in duration-150 focus:ring-2 focus:ring-offset-2 hover:shadow-sm disabled:opacity-80 disabled:cursor-not-allowed rounded-full gap-x-2 text-sm px-4 py-2 ring-primary-500 text-white bg-primary-500 hover:bg-primary-600 hover:ring-primary-600 dark:ring-offset-slate-800 dark:bg-primary-700 dark:ring-primary-700 dark:hover:bg-primary-600 dark:hover:ring-primary-600"
              >
                <Link to="/Login">Login</Link>

                <svg
                  className="w-4 h-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  ></path>
                </svg>
              </button>

              <button
                type="button"
                className="outline-none inline-flex justify-center items-center group transition-all ease-in duration-150 focus:ring-2 focus:ring-offset-2 hover:shadow-sm disabled:opacity-80 disabled:cursor-not-allowed rounded gap-x-2 text-sm px-4 py-2 border text-slate-500 hover:bg-slate-100 ring-slate-200 dark:ring-slate-600 dark:border-slate-500 dark:hover:bg-slate-700 dark:ring-offset-slate-800 dark:text-slate-400 lg:hidden"
                onClick={() => setNavOpen(!navOpen)}
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <div
          className={`fixed lg:hidden bg-theme-dark w-[60%] mt-[0px] h-screen z-[999] text-white transition-all duration-300 ${
            navOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 pointer-events-none translate-x-[-10px]"
          }`}
        >
          <div className="text-right p-4">
            <button
              type="button"
              className="outline-none inline-flex justify-center items-center group transition-all ease-in duration-150 focus:ring-2 focus:ring-offset-2 hover:shadow-sm disabled:opacity-80 disabled:cursor-not-allowed rounded gap-x-2 text-sm px-4 py-2 border text-slate-500 hover:bg-slate-100 ring-slate-200 dark:ring-slate-600 dark:border-slate-500 dark:hover:bg-slate-700 dark:ring-offset-slate-800 dark:text-slate-400"
              onClick={() => setNavOpen(false)}
            >
              <svg
                className="w-4 h-4 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="text-2xl sm:text-4xl text-red flex flex-col mt-10 h-full">
            <li className="p-4">
              <Link to="/about-us" className="hover:text-theme2-light">
                About
              </Link>
            </li>
            <li className="p-4">
              <Link to="/Products" className="hover:text-theme2-light">
                Product
              </Link>
            </li>
            <li className="p-4">
              <Link to="/contact-us" className="hover:text-theme2-light">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* End: Mobile Navbar */}
      </div>
    </>
  );
}

export default Navbar;
