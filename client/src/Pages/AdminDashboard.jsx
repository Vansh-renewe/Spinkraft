import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UploadImage from "../components/upload";

const AdminDashboard = () => {
  const [filterNav, setFilterNav] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="mt-12">
        <section className=" container mx-auto  ">
          <div className="mt-32 grid   lg:grid-cols-2 gap-10 ">
            <div
              className={`lg:w-[20%] fixed top-[60px] bg-white inner-shadow p-9 lg:p-0 left-0 h-full lg:static z-40 ${
                filterNav
                  ? "opacity-100  translate-x-[0px]"
                  : "opacity-0  lg:opacity-100   pointer-events-none lg:pointer-events-auto  translate-x-[-10px]  lg:translate-x-[0px]"
              }`}
            >
              <div className="flex justify-end lg:hidden mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => {
                    setFilterNav(false);
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="w-full">
                {/* <div className="relative rounded-md  shadow-sm ">
                  <input
                    type="text"
                    autocomplete="off"
                    className="placeholder-secondary-400 dark:bg-secondary-800 dark:text-secondary-400 dark:placeholder-secondary-500 border border-secondary-300 focus:ring-primary-500 focus:border-primary-500 dark:border-secondary-600 form-input block w-full sm:text-sm rounded-md transition ease-in-out duration-100 focus:outline-none shadow-sm pr-8"
                    placeholder="Search"
                  />

                  <div
                    className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none
                text-secondary-400"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                </div> */}
              </div>
              <div className="mt-9">
                <div className="text-xl w-full text-white bg-primary-500 rounded-xl p-2 text-left font-bold">
                  Admin Dashboard
                </div>
                <div className="mt-4 font-bold   p-2 space-y-2">
                  <div>
                    <label className="flex items-center ">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            className="form-checkbox rounded transition ease-in-out duration-100 
                            border-secondary-300 text-primary-600 focus:ring-primary-600 focus:border-primary-400
                            dark:border-secondary-500 dark:checked:border-secondary-600 dark:focus:ring-secondary-600
                            dark:focus:border-secondary-500 dark:bg-secondary-600 dark:text-secondary-600
                            dark:focus:ring-offset-secondary-800
                         font-bold"
                            value="solar-panels"
                            //onChange={handleCheckboxChange}
                          />
                        </div>
                        <div className="ml-2 text-sm">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                            Solar panels
                          </label>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center ">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            className="form-checkbox rounded transition ease-in-out duration-100 
                            border-secondary-300 text-primary-600 focus:ring-primary-600 focus:border-primary-400
                            dark:border-secondary-500 dark:checked:border-secondary-600 dark:focus:ring-secondary-600
                            dark:focus:border-secondary-500 dark:bg-secondary-600 dark:text-secondary-600
                            dark:focus:ring-offset-secondary-800
                         font-bold"
                            value="Solar-inverters"
                            //onChange={handleCheckboxChange}
                          />
                        </div>
                        <div className="ml-2 text-sm">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                            Solar inverters
                          </label>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center ">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            className="form-checkbox rounded transition ease-in-out duration-100 
                            border-secondary-300 text-primary-600 focus:ring-primary-600 focus:border-primary-400
                            dark:border-secondary-500 dark:checked:border-secondary-600 dark:focus:ring-secondary-600
                            dark:focus:border-secondary-500 dark:bg-secondary-600 dark:text-secondary-600
                            dark:focus:ring-offset-secondary-800
                         font-bold"
                            value="Accessories"
                            //onChange={handleCheckboxChange}
                          />
                        </div>
                        <div className="ml-2 text-sm">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                            Accessories
                          </label>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center ">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            className="form-checkbox rounded transition ease-in-out duration-100 
                            border-secondary-300 text-primary-600 focus:ring-primary-600 focus:border-primary-400
                            dark:border-secondary-500 dark:checked:border-secondary-600 dark:focus:ring-secondary-600
                            dark:focus:border-secondary-500 dark:bg-secondary-600 dark:text-secondary-600
                            dark:focus:ring-offset-secondary-800
                         font-bold"
                            value="Solar-batteries"
                            //onChange={handleCheckboxChange}
                          />
                        </div>
                        <div className="ml-2 text-sm">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                            Solar batteries
                          </label>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center ">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            className="form-checkbox rounded transition ease-in-out duration-100 
                            border-secondary-300 text-primary-600 focus:ring-primary-600 focus:border-primary-400
                            dark:border-secondary-500 dark:checked:border-secondary-600 dark:focus:ring-secondary-600
                            dark:focus:border-secondary-500 dark:bg-secondary-600 dark:text-secondary-600
                            dark:focus:ring-offset-secondary-800
                         font-bold"
                            value="Electrical-protection"
                            //onChange={handleCheckboxChange}
                          />
                        </div>
                        <div className="ml-2 text-sm">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                            Electrical protection
                          </label>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-9 text-lg">
                <div className="text-xl text-left font-bold">Brand</div>
                <div className="mt-4 font-bold   p-2 space-y-2">
                  <div>
                    <label className="flex items-center ">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            className="form-checkbox rounded transition ease-in-out duration-100 
                            border-secondary-300 text-primary-600 focus:ring-primary-600 focus:border-primary-400
                            dark:border-secondary-500 dark:checked:border-secondary-600 dark:focus:ring-secondary-600
                            dark:focus:border-secondary-500 dark:bg-secondary-600 dark:text-secondary-600
                            dark:focus:ring-offset-secondary-800
                         font-bold"
                            value="Axitec"
                            // onChange={handleCheckboxBrandChange}
                          />
                        </div>
                        <div className="ml-2 text-sm">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                            Axitec
                          </label>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center ">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            className="form-checkbox rounded transition ease-in-out duration-100 
                            border-secondary-300 text-primary-600 focus:ring-primary-600 focus:border-primary-400
                            dark:border-secondary-500 dark:checked:border-secondary-600 dark:focus:ring-secondary-600
                            dark:focus:border-secondary-500 dark:bg-secondary-600 dark:text-secondary-600
                            dark:focus:ring-offset-secondary-800
                         font-bold"
                            value="WattPower"
                            //onChange={handleCheckboxBrandChange}
                          />
                        </div>
                        <div className="ml-2 text-sm">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                            WattPower
                          </label>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center ">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            className="form-checkbox rounded transition ease-in-out duration-100 
                            border-secondary-300 text-primary-600 focus:ring-primary-600 focus:border-primary-400
                            dark:border-secondary-500 dark:checked:border-secondary-600 dark:focus:ring-secondary-600
                            dark:focus:border-secondary-500 dark:bg-secondary-600 dark:text-secondary-600
                            dark:focus:ring-offset-secondary-800
                         font-bold"
                            value="Zizi+"
                            //onChange={handleCheckboxBrandChange}
                          />
                        </div>
                        <div className="ml-2 text-sm">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                            Zizi+
                          </label>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[80%]">
              <div className="flex justify-between  lg:justify-end">
                <div onClick={() => setFilterNav(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="black"
                    className="w-6 h-6 block lg:hidden cursor-pointer hover:text-theme-default text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6h16.5M3.75 9h16.5M3.75 12h16.5M3.75 15h16.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-center  ">
                <UploadImage />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
