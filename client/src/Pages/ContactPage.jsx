import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contact from "../assets/Contact-us/contact-us-bg.jpg";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-12">
        <section className="h-72 w-full relative">
          <img
            src={contact}
            className="object-cover w-full h-full object-center"
            alt="contact us bg"
          />
          <div className="absolute top-0 w-full h-full bg-theme2-light  flex justify-center bg-opacity-80 text-white items-center">
            <div>
              <div className="text-6xl font-extrabold">Contact Us</div>
              <div className="flex items-center justify-center mt-5 text-lg gap-x-2">
                <Link to="/" className="hover:text-theme2-light ">
                  Home
                </Link>
                <span>/</span>
                <div>Contact us</div>
              </div>
            </div>
          </div>
        </section>
        <section className=" container mx-auto px-4 ">
          <div className="mt-32 grid  lg:grid-cols-2 gap-24 ">
            <div>
              <div className="bg-theme2-light w-[40px] h-[2px]"> </div>
              <div className="text-left text-gray-400 text-md mt-2 tracking-wider">
                GET IN TOUCH
              </div>
              <div className="text-left text-4xl mt-8  font-extrabold ">
                Contact Us
              </div>
              <div className="text-left text-gray-400 text-md mt-5 ">
                "Connect with Spinkraft, your trusted partner in solar energy
                solutions. Reach out to us today to harness the power of the sun
                for a sustainable future."
              </div>
              <div className="space-y-8 mt-11 ">
                <div className="flex items-center gap-x-3 border-b border-gray-300 pb-4">
                  <svg
                    className="w-6 h-6 text-theme2-light"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  </svg>{" "}
                  <div>+91 8130 177 743</div>
                </div>
                <div className="flex items-center gap-x-3  border-b border-gray-300 pb-4">
                  <svg
                    className="w-6 h-6 text-theme2-light"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>{" "}
                  <div>info@spinkraft.com</div>
                </div>
                <div className="flex items-center gap-x-3 border-b border-gray-300 pb-4">
                  <svg
                    className="w-6 h-6 text-theme2-light"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      stroke-width="0"
                      fill="currentColor"
                    ></path>
                  </svg>{" "}
                  <div>
                    D-904, Raikar Chambers, Govandi East, Mumbai, Maharashtra,
                    400088
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form action="" className="space-y-8">
                <input
                  type="text"
                  name=""
                  className="border border-gray-300 p-3 rounded-md w-full"
                  placeholder="Your Name"
                  id=""
                />
                <input
                  type="text"
                  name=""
                  className="border border-gray-300 p-3 rounded-md w-full"
                  placeholder="Your Email"
                  id=""
                />
                <input
                  type="text"
                  name=""
                  className="border border-gray-300 p-3 rounded-md w-full"
                  placeholder="Your Subject"
                  id=""
                />
                <textarea
                  name=""
                  id=""
                  placeholder="Your Message"
                  cols="30"
                  className="border border-gray-300 p-3 rounded-md w-full"
                  rows="10"
                ></textarea>
                <button
                  type="button"
                  className="outline-none inline-flex justify-center items-center group transition-all ease-in duration-150 focus:ring-2 focus:ring-offset-2 hover:shadow-sm disabled:opacity-80 disabled:cursor-not-allowed rounded-full gap-x-3 text-base px-7 py-4 ring-primary-500 text-white bg-primary-500 hover:bg-primary-600 hover:ring-primary-600 dark:ring-offset-slate-800 dark:bg-primary-700 dark:ring-primary-700 dark:hover:bg-primary-600 dark:hover:ring-primary-600 mt-9"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4">
          <div className="text-center mt-32">
            <div className="yellow-line text-4xl inline-block font-bold  ">
              Direct Contact
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-16 gap-y-14">
            {/* Contact Person 1 */}
            <div className="border-theme2-light p-6 space-y-5 rounded-xl text-lg lg:text-xl w-full md:w-3/6 xl:w-1/3">
              <div className="flex items-center gap-5">
                <svg
                  className="w-6 h-6 text-theme2-light"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
                <div className="font-bold">Pravesh Bhargava</div>
              </div>
              <div className="flex items-center gap-5">
                <svg
                  className="w-6 h-6 text-theme2-light"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
                <div className="font-bold">pravesh@spinkraft.com</div>
              </div>
              <div className="flex items-center gap-5">
                <svg
                  className="w-6 h-6 text-theme2-light"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                    strokeWidth="0"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="font-bold">Director (Sales)</div>
              </div>
              <div className="flex items-center gap-3 font-bold text-white bg-theme2-light tex-white p-3 rounded-xl justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                </svg>
                <div className="font-bold font-sans">+91 8130 177 743</div>
              </div>
            </div>

            {/* Contact Person 2 */}
            <div className="border-theme2-light p-6 space-y-5 rounded-xl text-lg lg:text-xl h-full w-full md:w-3/6 xl:w-1/3">
              <div className="flex items-center gap-5">
                <svg
                  className="w-6 h-6 text-theme2-light"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
                <div className="font-bold">Umesh Nagre</div>
              </div>
              <div className="flex items-center gap-5">
                <svg
                  className="w-6 h-6 text-theme2-light"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
                <div className="font-bold">umesh@spinkraft.com</div>
              </div>
              <div className="flex items-center gap-5">
                <svg
                  className="w-6 h-6 text-theme2-light"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                    strokeWidth="0"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="font-bold">Sales Head, India</div>
              </div>
              <div className="flex items-center gap-3 font-bold text-white bg-theme2-light tex-white p-3 rounded-xl justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                </svg>
                <div className="font-bold font-sans">+91 8177 860 281</div>
              </div>
            </div>

            {/* Contact Person 3 */}
            <div className="border-theme2-light p-6 space-y-5 rounded-xl text-lg lg:text-xl h-full w-full md:w-3/6 xl:w-1/3">
              <div className="flex items-center gap-5">
                <svg
                  className="w-6 h-6 text-theme2-light"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
                <div className="font-bold">Shrikant Neharkar</div>
              </div>
              <div className="flex items-center gap-5">
                <svg
                  className="w-6 h-6 text-theme2-light"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
                <div className="font-bold">shrikant@spinkraft.com</div>
              </div>
              <div className="flex items-center gap-5">
                <svg
                  className="w-6 h-6 text-theme2-light"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                    strokeWidth="0"
                    fill="currentColor"
                  ></path>
                </svg>
                <div className="font-bold">Sales Executive (Maharashtra)</div>
              </div>
              <div className="flex items-center gap-3 font-bold text-white bg-theme2-light tex-white p-3 rounded-xl justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                </svg>
                <div className="font-bold font-sans">+91 7276 787 826</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
