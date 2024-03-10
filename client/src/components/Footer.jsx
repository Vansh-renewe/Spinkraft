import { Link } from "react-router-dom";
import logoDark from "../assets/branding/logo-dark.png";
function Footer() {
  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <div className="text-left mt-32 grid gap-y-3 lg:flex justify-between items-center">
          <img src={logoDark} alt="logo" className="sm:w-[180px] w-[120px]" />

          <div>
            <div className="font-bold text-2xl">
              Spinkraft Venture Private Limited
            </div>
            <div className="font-bold font-sans">
              CIN: U51909MH2021PTC366761
            </div>
          </div>
        </div>
      </div>
      <footer className="py-9 bg-theme-dark">
        <div className="container mx-auto px-4 grid grid-cols-1 text-left lg:grid-cols-4 gap-x-24 gap-y-16 content-between">
          <div>
            <div className="text-xl font-bold text-white">Public relations</div>
            <ul className="mt-7 text-lg text-gray-400 flex flex-col gap-y-7">
              <li>
                <Link
                  to="/"
                  className="hover:translate-x-3 transition-all duration-200"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:translate-x-3 transition-all duration-200"
                >
                  Press Release
                </Link>
              </li>
              <li>
                <Link
                  to="http://spinkraft.com/term-and-conditions"
                  className="hover:translate-x-3 transition-all duration-200"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xl font-bold text-white">Contact</div>
            <ul className="mt-7 text-lg text-gray-400 space-y-6">
              <li>pravesh@spinkraft.com</li>
              <li className="text-white">+91 8130 177 743</li>
              <li className="text-lg">
                D-904, 9th Floor, Raikar Chambers Deonar Village Road, Deonar,
                Govandi East Mumbai, MH 400088 IN
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xl font-bold text-white">Link</div>
            <ul className="mt-7 text-lg text-gray-400 flex flex-col gap-y-7">
              <li>
                <Link
                  to="/"
                  className="hover:translate-x-3 transition-all duration-200"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:translate-x-3 transition-all duration-200"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="http://spinkraft.com/jobs"
                  className="hover:translate-x-3 transition-all duration-200"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xl font-bold text-white">Products</div>
            <div className="mt-4 text-2xl text-white space-x-5">
              <ul className="mt-7 text-lg text-gray-400 flex flex-col gap-y-7">
                <li>
                  <Link
                    to="/"
                    className="hover:translate-x-3 transition-all duration-200"
                  >
                    Solar PV Module
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:translate-x-3 transition-all duration-200"
                  >
                    Solar Inverter
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:translate-x-3 transition-all duration-200"
                  >
                    EV Charges
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto w-11/12 text-left">
          <div className="w-full h-[1px] mt-9 bg-gray-600"></div>
          <div className="grid md:flex justify-between gap-y-6 mt-11 text-gray-400">
            <div className="text-lg">
              Spinkraft Ventures © 2023. All Rights Reserved.
            </div>
            <div>
              <div className="text-xl font-bold">Get in Touch</div>
              <div className="flex gap-6 items-center mt-3">
                <svg
                  className="w-6 h-6 text-theme2-light cursor-pointer"
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
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
                <svg
                  className="w-6 h-6 text-theme2-light cursor-pointer"
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
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                </svg>
                <svg
                  className="w-6 h-6 text-theme2-light cursor-pointer"
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
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
