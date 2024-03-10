import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutBg from "../assets/About/about-us-bg.jpg";
import { Link } from "react-router-dom";
import igs from "../assets/About/igs.png";
import res from "../assets/About/re.png";
import epa from "../assets/About/epa.png";
import pam from "../assets/About/pam.png";
import number_bg from "../assets/About/number-bg.jpg";
import Achievement from "../assets/About/Achievement.png";
import customer_one from "../assets/About/customer-one.png";
const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-12">
        <section className="h-72 w-full relative">
          <img
            src={aboutBg}
            className="object-cover w-full h-full object-center"
            alt="about bg"
          />
          <div className="absolute top-0 w-full h-full bg-theme2-light flex justify-center bg-opacity-80 text-white items-center">
            <div>
              <div className="text-6xl font-extrabold">About us</div>

              <div className="flex items-center justify-center mt-5 text-lg gap-x-2">
                <Link to="/" className="hover:text-theme2-light">
                  Home
                </Link>
                <span>/</span>
                <div>About us</div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-theme-dark">
          <div className="container mx-auto px-4 py-9 space-y-24">
            <div className="grid md:grid-cols-2 gap-9 text-left text-white">
              <div className="space-y-3">
                <div className="text-lg">Who We Are</div>
                <div className="text-4xl lg:text-6xl font-bold text-theme2-light">
                  Know more about Spinkraft
                </div>
              </div>

              <div className="text-lg">
                Spinkraft Ventures is Distributors of Solar Products like Solar
                Panels, Lithium-ion Batteries and Solar Inverters on a vast
                scale based out of Mumbai. In the present outlook of the RE
                sector, Spinkraft Ventures has a major role to play in the
                sector’s development. We are working as an authorised channel
                partner for huge brands like Axitec, Watt Power, Solar Space,
                Zizi+, Mindra Green Energy, etc.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-9 lg:grid-cols-4 text-white">
              <div className="flex flex-col items-center border border-gray-600 p-4 rounded-2xl">
                <div>
                  <img
                    src={res}
                    className="w-14 md:w-20 block invert"
                    alt="icon"
                  />
                </div>
                <div className="text-lg text-center mt-5">
                  Renewable Energy Source
                </div>
              </div>

              <div className="flex flex-col items-center border border-gray-600 p-4 rounded-2xl">
                <div>
                  <img
                    src={epa}
                    className="w-14 md:w-20 block invert"
                    alt="icon"
                  />
                </div>

                <div className="text-lg text-center mt-5">
                  Environment Protection Acts
                </div>
              </div>

              <div className="flex flex-col items-center border border-gray-600 p-4 rounded-2xl">
                <div>
                  <img
                    src={pam}
                    className="w-14 md:w-20 block invert"
                    alt="icon"
                  />
                </div>

                <div className="text-lg text-center mt-5">
                  Parts and Maintenance
                </div>
              </div>

              <div className="flex flex-col items-center border border-gray-600 p-4 rounded-2xl">
                <div>
                  <img
                    src={igs}
                    className="w-14 md:w-20 block invert"
                    alt="icon"
                  />
                </div>

                <div className="text-lg text-center mt-5">
                  Innovative Green Solutions
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative h-64 md:h-36 overflow-hidden">
          <img
            src={number_bg}
            className="object-cover w-full h-full object-top opacity-40"
            alt=""
          />
          <div className="absolute top-0 container mx-auto px-4 right-0 left-0 gap-9 grid grid-cols-2 md:grid-cols-4 py-6">
            <div className="flex flex-col items-center">
              <div className="drop-shadow-2xl drop-shadow-theme2-default text-4xl lg:text-6xl font-sans font-bold">
                45K
              </div>
              <div className="mt-5">Modules Supplied</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="drop-shadow-2xl drop-shadow-theme2-default text-4xl lg:text-6xl font-sans font-bold">
                82Cr
              </div>
              <div className="mt-5">Revenue</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="drop-shadow-2xl drop-shadow-theme2-default text-4xl lg:text-6xl font-sans font-bold">
                25MW+
              </div>
              <div className="mt-5 text-center">
                Inverters and Modules Supplied
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="drop-shadow-2xl drop-shadow-theme2-default text-4xl lg:text-6xl font-sans font-bold">
                50+
              </div>
              <div className="mt-5">Satisfied Clients</div>
            </div>
          </div>
        </section>
        <section className="mt-52 container px-4 mx-auto">
          <div className="text-center mb-[40px]">
            <div className=" yellow-line text-4xl inline-block font-bold relative">
              Achievement
              <img
                src={Achievement}
                className="absolute w-10 left-[-50px] top-[0px]"
                alt=""
              />
            </div>
          </div>
          <div className="text-left container mx-auto px-4 border border-theme2-light p-6 mt-[50px] text-lg rounded-lg prose lg:prose-x">
            Until this financial year, We have sold more than 45k modules, 25MW+
            Inverters and more than 50 satisfied clients generating a revenue of
            82 Crore approx. We give our best in customer satisfaction and
            provide time to time delivery. Hence, we have grown to be India’s
            Largest Solar Distributors in less than a year.
            <br />
            <br />
            Our Team is awarded with various awards like Maharashtra State
            Annual Solar Awards - Rising Star, Top Under 50 RE Leaders of
            Tomorrow, 100 Most Influential People in Solar Industry, State
            Distributor of the Year - Rising Star Award, etc.
            <br />
            <br />
            We look forward to continued work in the Renewable Energy Sector and
            contributing as much as possible in keeping our Earth Green!
          </div>
        </section>
        <section className="mt-52">
          <div className="text-center mb-[40px]">
            <div className="yellow-line text-4xl inline-block font-bold">
              Customer Feedback
            </div>
          </div>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-14">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="text-left shadow-md p-6 rounded-lg shadow-theme2-light"
              >
                <div className="leading-6">
                  I was very impressed by the new company service. Lorem ipsum
                  is simply free text used by copytyping refreshing. Neque porro
                  est qui dolor ipsum quia.
                </div>
                <div className="flex gap-4 mt-6">
                  <div className="rounded-full w-[40px] h-[40px]">
                    <img
                      src={customer_one}
                      className="object-full w-full h-full"
                      alt="customer pic"
                    />
                  </div>
                  <div>
                    <div className="text-theme2-light font-bold">Hola</div>
                    <div>Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
