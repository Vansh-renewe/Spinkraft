import { Link } from "react-router-dom";
import heroSection from "../assets/LandingSection/hero-section/hero-section-img.jpg";
import logoLight from "../assets/LandingSection/branding/logo-light.png";
import overviewImg from "../assets/LandingSection/overview/overview-img.jpg";
import axiTech from "../assets/LandingSection/portfolio/axitech.png";
import wattPower from "../assets/LandingSection/portfolio/wattpower.png";
import zizi from "../assets/LandingSection/portfolio/zizi.png";
import blog1 from "../assets/LandingSection/blogs/blog-one.jpg";
import blog2 from "../assets/LandingSection/blogs/blog-two.jpg";
import blog3 from "../assets/LandingSection/blogs/blog-three.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />
      {/* END:navbar */}
      <div className="mt-12">
        {/* START: Hero Section */}
        <section
          id="hero"
          className="text-center text-white h-[700px] relative"
        >
          <img
            src={heroSection}
            className="object-cover h-full w-full object-bottom"
            alt=""
          />

          <div className="absolute top-[0px] md:top-[0px] left-0 right-0 bg-black bg-opacity-10 h-full">
            <div className="text-5xl sm:text-6xl md:text-8xl pt-[100px] tracking-wide font-bold">
              The solar{" "}
              <span className="text-theme2-light italic relative">
                {" "}
                energy
                <svg
                  className="text-theme2-light absolute top-[-10px] hidden sm:block right-[-70px] animate-pulse text-4xl w-20 h-20"
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
                  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                </svg>
              </span>{" "}
              <br />
              that matters !
            </div>
            <div className="text-md md:text-lg mt-5">
              Solar Provider Group develops solar concepts . <br />
              that are beneficial to the environment , people and nature
            </div>
            <Link to="http://spinkraft.com/about-us">
              <button
                type="button"
                className="outline-none inline-flex justify-center items-center group transition-all ease-in duration-150 focus:ring-2 focus:ring-offset-2 hover:shadow-sm disabled:opacity-80 disabled:cursor-not-allowed rounded-full gap-x-2 text-base px-6 py-3 ring-primary-500 text-white bg-primary-500 hover:bg-primary-600 hover:ring-primary-600 dark:ring-offset-slate-800 dark:bg-primary-700 dark:ring-primary-700 dark:hover:bg-primary-600 dark:hover:ring-primary-600 mt-6"
              >
                Learn More
                <svg
                  className="w-5 h-5 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </section>{" "}
        {/* END: Hero Section <!-- who we are start -->*/}
        <section className="bg-theme-dark text-white py-14">
          <div className="container mx-auto px-4 grid grid-cols-1 gap-x-9 md:grid-cols-3 gap-y-6 ">
            <div>
              <div className="text-lg  text-theme2-light">Who we are</div>
              <div className="text-2xl mt-2 font-bold text-white">
                Know more about Spinkraft
              </div>
              <img
                src={logoLight}
                className="md:w-[300px] w-[200px] mt-10"
                alt="Logo"
              />
            </div>

            <div className="text-left text-gray-300 md:text-xl text-md col-span-2 gap-x-7">
              Spinkraft Ventures is Distributors of Solar Products like Solar
              Panels, Lithium-ion Batteries and Solar Inverters on a vast scale
              based out of Mumbai.
              <br />
              <br />
              In the present outlook of the RE sector, Spinkraft Ventures has a
              major role to play in the sector’s development. We are working as
              an authorised channel partner for huge brands like Axitec, Watt
              Power, Solar Space, Zizi+, Mindra Green Energy, etc.
            </div>
          </div>
        </section>
        {/* who we are end <!-- solar calculator btn start --> */}
        <section className="container mx-auto px-4">
          <div className="border-2 mt-24 border-dashed border-theme2-light py-7">
            <div className="flex justify-center mb-4">
              <a href="http://spinkraft.com/calculators">
                <button
                  type="button"
                  className="outline-none inline-flex justify-center items-center group transition-all ease-in duration-150 focus:ring-2 focus:ring-offset-2 hover:shadow-sm disabled:opacity-80 disabled:cursor-not-allowed rounded-full w-14 h-14 ring-orange-500 text-white bg-orange-500 hover:bg-orange-600 hover:ring-orange-600 dark:ring-offset-slate-800 dark:bg-orange-700 dark:ring-orange-700 dark:hover:bg-orange-600 dark:hover:ring-orange-600"
                >
                  <div>
                    <svg
                      className="w-6 h-6 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </a>
            </div>
            <div className="font-bold text-center text-4xl">
              Click here to calculate your electricity load
            </div>
          </div>
        </section>{" "}
        {/* solar calculator btn end <!--overview start -->*/}
        <div className="mt-24">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-x-5 gap-y-9 items-center min-h-[400px]">
            <div className="text-left space-y-4">
              <div className="text-4xl font-bold">Overview</div>
              <div className="text-2xl">What is it?</div>
              <div className="text-lg">
                At Spinkraft Ventures, we are passionate about harnessing the
                power of the sun to create a sustainable and eco-friendly
                future. We specialize in providing high-quality solar panels and
                solar energy solutions to help homeowners, businesses, and
                communities reduce their carbon footprint and lower their energy
                costs. With solar panels, you can generate clean, renewable
                electricity right from your own property.
              </div>
              <a href="http://spinkraft.com/about-us">
                <button
                  type="button"
                  className="outline-none inline-flex justify-center items-center group transition-all ease-in duration-150 focus:ring-2 focus:ring-offset-2 hover:shadow-sm disabled:opacity-80 disabled:cursor-not-allowed rounded-full gap-x-2 text-base px-6 py-3 ring-secondary-500 text-white bg-secondary-500 hover:bg-secondary-600 hover:ring-secondary-600 dark:ring-offset-slate-800 dark:bg-secondary-700 dark:ring-secondary-700 dark:hover:bg-secondary-600 dark:hover:ring-secondary-600 mt-6"
                >
                  Read More
                </button>
              </a>
            </div>
            <div className="h-full overflow-hidden rounded-3xl">
              <img
                src={overviewImg}
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* overview end <!-- portfolio section start -->*/}
        <div className="h mt-36">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="text-4xl font-bold inline-block yellow-line">
                Our Portfolio
              </div>
              <div className="text-lg mt-8">
                We have wide-ranging in-house experience and a network of
                trusted collaborators to facilitate sustainable energy systems.
              </div>
            </div>
            <div className="grid grid-cols-3 justify-center content-center mt-6">
              <div className="flex justify-center">
                <img src={axiTech} className="w-[200px]" alt="" />
              </div>
              <div className="flex justify-center">
                <img src={wattPower} className="w-[200px]" alt="" />
              </div>
              <div className="flex justify-center">
                <img src={zizi} className="w-[200px]" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* portfolio section end <!-- how solar work start --> */}
        <div className="mt-24">
          <div className="grid md:grid-cols-4 items-center min-h-[500px] overflow-hidden">
            <div className="h-[500px]">
              <img
                src="http://spinkraft.com/images/how-solor-work/work-one.jpg"
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="h-[500px]">
              <img
                src="http://spinkraft.com/images/how-solor-work/work-two.jpg"
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="h-[500px] relative md:col-span-2">
              <img
                src="http://spinkraft.com/images/how-solor-work/work-three.jpg"
                className="object-cover w-full h-full"
                alt=""
              />
              <div className="space-y-6 absolute top-0 bg-theme2-light h-full text-white bg-opacity-80 p-8 flex items-center">
                <div>
                  <div className="text-4xl font-bold">
                    How Solar Panels Work:
                  </div>
                  <div className="text-lg mt-5">
                    Solar panels utilize photovoltaic cells to convert sunlight
                    into electricity. These cells absorb sunlight and generate
                    direct current (DC) electricity, which is then converted
                    into usable alternating current (AC) electricity through an
                    inverter.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* how solar work END <!-- why choose us  start-->*/}
        <div className="bg-theme-dark py-24 text-center">
          <div className="container mx-auto px-4">
            <div className="text-center text-white mb-36 yellow-line text-4xl inline-block">
              Why Choose Spinkraft Ventures?
            </div>
            <div className="grid lg:grid-cols-3 gap-10 min-h-[700px]">
              <div className="flex flex-col justify-between gap-y-9">
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                  <svg
                    className="w-12 h-12 text-white"
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
                    <path d="M5 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M19 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M12 19l0 -4l-3 -3l5 -4l2 3l3 0"></path>
                    <path d="M17 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  </svg>
                  <div className="text-white text-lg mt-3">
                    Our experienced team ensures reliable solar solutions.
                  </div>
                </div>
                <div class="text-center lg:text-left flex flex-col items-center lg:items-start">
                  <svg
                    class="w-12 h-12 text-white"
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
                    <path d="M8 13v-7.5a1.5 1.5 0 0 1 3 0v6.5"></path>
                    <path d="M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5"></path>
                    <path d="M14 5.5a1.5 1.5 0 0 1 3 0v6.5"></path>
                    <path d="M17 7.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path>
                  </svg>{" "}
                  <div class="text-white text-lg mt-3">
                    Tailored solutions for your unique needs and budget.
                  </div>
                </div>
                <div class="text-center  lg:text-left flex flex-col items-center lg:items-start">
                  <svg
                    class="w-12 h-12 text-white"
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
                      d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      stroke-width="0"
                      fill="currentColor"
                    ></path>
                  </svg>{" "}
                  <div class="text-white text-lg mt-3">
                    Superb amount of standard and available safety features
                  </div>
                </div>
              </div>
              <div className="h-[700px] overflow-hidden rounded-3xl border-2 border-theme2-light">
                <img
                  src="http://spinkraft.com/images/why-spinkraft/why-spinkraft.jpg"
                  className="object-cover object-left-top w-full h-full"
                  alt=""
                />
              </div>
              <div class="flex flex-col  justify-between gap-y-9">
                <div class="flex flex-col items-center lg:items-end lg:text-right text-center">
                  <svg
                    class="w-12 h-12 text-white"
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
                    <path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
                    <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"></path>
                  </svg>{" "}
                  <div class="text-white text-lg">
                    Competitive pricing and flexible financing options.
                  </div>
                </div>
                <div class="flex flex-col items-center lg:items-end lg:text-right text-center">
                  <svg
                    class="w-12 h-12 text-white"
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
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1"></path>
                    <circle
                      cx="12"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                  </svg>{" "}
                  <div class="text-white text-lg">
                    Minimal upkeep for peace of mind.
                  </div>
                </div>
                <div class="flex flex-col items-center lg:items-end lg:text-right text-center">
                  <svg
                    class="w-12 h-12 text-white"
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
                    <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"></path>
                    <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"></path>
                    <path d="M12 11v2a14 14 0 0 0 2.5 8"></path>
                    <path d="M8 15a18 18 0 0 0 1.8 6"></path>
                    <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95"></path>
                  </svg>{" "}
                  <div class="text-white text-lg">
                    We reduce your carbon footprint for a cleaner environment.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* why choose us end <!-- our number start--> */}
        <div class="section-six-bg flex items-center">
          <div class="container mx-auto px-4 text-white">
            <div class="space-y-4 ">
              <div class="text-4xl font-bold">Our numbers say it all.</div>
              <div class="text-lg ">
                Because of our focus on customer satisfaction and timely
                delivery we have grown to be India’s Largest Solar Distributors
                in a short span of 1 years.
              </div>
              <div class="grid  grid-cols-2 gap-y-8  md:grid-cols-4 gap-x-8">
                <div>
                  <div class="text-3xl text-theme2-light font-bold">45K</div>
                  <div class="mt-2">Modules Supplied</div>
                </div>
                <div>
                  <div class="text-3xl text-theme2-light font-bold">82cr</div>
                  <div class="mt-2">Revenue</div>
                </div>
                <div>
                  <div class="text-3xl text-theme2-light font-bold">25MW+</div>
                  <div class="mt-2">Inverters and Modules Supplied</div>
                </div>
                <div>
                  <div class="text-3xl text-theme2-light font-bold">50+</div>
                  <div class="mt-2">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* our number end <!-- Swiper -->*/}
        <div className="container mx-auto px-4 pt-32">
          <div className="text-center">
            <div className="yellow-line text-4xl inline-block font-bold">
              Our Professional team
            </div>
          </div>
          <div
            className="swiper-wrapper overflow-visible pt-[100px] 
            transitionDuration-0ms
            transform-translate3d(-822px, 0px, 0px)
            transitionDelay-0ms text-left"
            id="swiper-wrapper-3b11053116c2921ac"
            aria-live="off"
            style={{}}
          >
            <div
              className="swiper-slide"
              style={{ width: "381px", marginRight: "30px" }}
              role="group"
              aria-label="1 / 4"
            >
              <div className="flex gap-x-7">
                <div className="rounded-full overflow-hidden md:w-36 md:h-36 w-16 h-16 sm:w-24 sm:h-24 border-4 border-theme2-light">
                  <img
                    src="http://spinkraft.com/images/professionals/acharan-chandel.jpg"
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
                <div className="w-[70%] text-md md:text-[15px]">
                  <div>
                    Background of more than 11 years in solar industry has
                    helped him witness the ups and downs of the industry and
                    also the pace it has evolved. He has worked with multiple
                    Chinese and European module manufacturers. He has a vast
                    network primarily developed as he has been associated with
                    the solar industry when it was at a nascent stage in the
                    country. Brings in a huge network of potential clients and
                    associates.
                  </div>
                  <div className="mt-5 font-bold">Mr. Acharan Chandel</div>
                  <div className="mt-4 flex gap-6 items-center">
                    <svg
                      className="w-6 h-6 text-black hover:text-theme2-light cursor-pointer"
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
                      className="w-6 h-6 text-black hover:text-theme2-light cursor-pointer"
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
                      className="w-6 h-6 text-black hover:text-theme2-light cursor-pointer"
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
            <div
              className="swiper-slide "
              style={{ width: "381px", marginRight: "30px" }}
              role="group"
              aria-label="2 / 4"
            >
              <div className="flex gap-x-7">
                <div className="rounded-full overflow-hidden md:w-36 md:h-36 w-16 h-16 border-4 border-theme2-light">
                  <img
                    src="http://spinkraft.com/images/professionals/ajay-patel.jpg"
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
                <div className="w-[70%] text-md md:text-[15px]">
                  <div>
                    Ambitious, dynamic and successful these three words define
                    the man who is a well known personality in solar industry. A
                    self made man with an inspirational entrepreneurial journey
                    with business interests ranging from logistics to renewable
                    to paper. An inspirational figure with vast experience and
                    knowledge. Follower of a simple philosophy which believes in
                    taking everyone along and is the key to attract more and
                    more clients to the fold.
                  </div>
                  <div className="mt-5 font-bold">Mr. Ajay Patel</div>
                  <div className="mt-4 flex gap-6 items-center">
                    <svg
                      className="w-6 h-6 text-black hover:text-theme2-light cursor-pointer"
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
                      className="w-6 h-6 text-black hover:text-theme2-light cursor-pointer"
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
                      className="w-6 h-6 text-black hover:text-theme2-light cursor-pointer"
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
            <div
              className="swiper-slide"
              style={{ width: "381px", marginRight: "30px" }}
              role="group"
              aria-label="3 / 4"
            >
              <div className="flex gap-x-7">
                <div className="rounded-full overflow-hidden md:w-36 md:h-36 w-16 h-16 border-4 border-theme2-light">
                  <img
                    src="http://spinkraft.com/images/professionals/pravesh-bhargava.jpg"
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
                <div className="w-[70%] text-md md:text-[15px]">
                  <div>
                    Pravesh is the one who is dynamic, energetic and always on
                    toes, the engine which is leading the organization from the
                    front with his excellent rapport and wide network of clients
                    in every corner of the country. Brings in vast experience
                    with his exposure in varied fields of green energy from wind
                    to consultancy to solar. Has an eye for detail and keeps one
                    eye always on the future which can add value both to the
                    organization and our associates.
                  </div>
                  <div className="mt-5 font-bold">Mr. Pravesh Bhargava</div>
                  <div className="mt-4 flex gap-6 items-center">
                    <svg
                      className="w-6 h-6 text-black hover:text-theme2-light cursor-pointer"
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
                      className="w-6 h-6 text-black hover:text-theme2-light cursor-pointer"
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
                      className="w-6 h-6 text-black hover:text-theme2-light cursor-pointer"
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
            <div
              className="swiper-slide"
              role="group"
              aria-label="4 / 4"
              style={{ width: "381px", marginRight: "30px" }}
            >
              <div className="flex gap-x-7">
                <div className="rounded-full overflow-hidden md:w-36 md:h-36 w-16 h-16 border-4 border-theme2-light">
                  <img
                    src="http://spinkraft.com/images/professionals/umesh-nagre.jpg"
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
                <div className="w-[70%] text-md md:text-[15px]">
                  <div>
                    Umesh is a software graduate turned solar energy expert with
                    8.5 years of experience. Armed with his extensive knowledge
                    of software and a passion for renewable energy, Umesh has
                    been an integral part of several large-scale solar projects.
                    His unique skill set allows him to approach solar projects
                    with a data-driven mindset, ensuring optimal efficiency and
                    performance.
                  </div>
                  <div className="mt-5 font-bold">Mr. Umesh Nagre</div>
                  <div className="mt-4 flex gap-6 items-center">
                    <svg
                      className="w-6 h-6 text-black hover:text-theme2-light cursor-pointer"
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
                      className="w-6 h-6 text-black hover:text-theme2-light cursor-pointer"
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
                      className="w-6 h-6 text-black hover:text-theme2-light cursor-pointer"
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
            {/* Add other slides similarly */}
            <div className="absolute top-[20px] w-[100px] h-[100px] right-0 text-sm z-[999]">
              <div
                className="swiper-button-next"
                tabIndex="0"
                role="button"
                aria-label="Next slide"
                aria-controls="swiper-wrapper-3b11053116c2921ac"
                aria-disabled="false"
              ></div>
              <div
                className="swiper-button-prev"
                tabIndex="0"
                role="button"
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-3b11053116c2921ac"
                aria-disabled="false"
              ></div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
        {/* quota start <!-- swiper end -->*/}
        <div className="container mx-auto px-4 text-center">
          <div className="mt-44">
            <div className="yellow-line text-4xl inline-block font-bold">
              Do you want to make a request?
            </div>
            <div className="mt-6 text-lg text-gray-400">
              Our engineers will not only provide you with a perfect quote but
              also help you with their technical expertise. So partner with
              Spinkraft to build better &amp; more efficient Solar projects.
            </div>
            <form action="">
              <div className="mt-24 m-auto md:w-[60%] rounded-2xl md:p-9">
                <div className="text-4xl font-bold">Request A Quote</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 justify-between mt-10 gap-y-10">
                  <input
                    type="text"
                    name=""
                    className="border-theme2-light w-full bg-transparent outline-none p-3"
                    placeholder="Full Name"
                    id=""
                  />

                  <input
                    type="text"
                    name=""
                    className="w-full border-theme2-light bg-transparent outline-none p-3"
                    placeholder="Organization"
                    id=""
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-10 justify-between mt-10">
                  <input
                    type="text"
                    name=""
                    className="w-full border-theme2-light bg-transparent outline-none p-3"
                    placeholder="Email"
                    id=""
                  />
                  <input
                    type="number"
                    name=""
                    className="w-full border-b border-theme2-light bg-transparent outline-none p-3"
                    placeholder="Mobile"
                    id=""
                  />
                </div>
                <input
                  type="text"
                  name=""
                  className="border-theme2-light mt-10 bg-transparent outline-none w-full p-3"
                  placeholder="Requirement"
                  id=""
                />

                <button
                  type="button"
                  className="outline-none inline-flex justify-center items-center group transition-all ease-in duration-150 focus:ring-2 focus:ring-offset-2 hover:shadow-sm disabled:opacity-80 disabled:cursor-not-allowed rounded-full gap-x-3 text-base px-7 py-4 ring-primary-500 text-white bg-primary-500 hover:bg-primary-600 hover:ring-primary-600 dark:ring-offset-slate-800 dark:bg-primary-700 dark:ring-primary-700 dark:hover:bg-primary-600 dark:hover:ring-primary-600 mt-9 w-full"
                >
                  Get Quote
                </button>

                <div className="text-center font-extrabold text-2xl mt-10">
                  or
                </div>
                <div className="flex justify-center items-center gap-x-5 mt-5">
                  <div className="rounded-full p-5 shadow-2xl inline-flex justify-center items-center text-2xl gap-x-6 text-theme2-light">
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="text-black text-2xl">91 8130 177 743</div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* news start <!-- quota end--> */}
        <div className="container mx-auto px-4">
          <div className="text-center mt-32">
            <div className="text-theme2-light font-bold">READ OUR BLOG</div>
            <div className="text-6xl mt-3 font-bold">Latest News</div>
          </div>
          <div className="text-left grid mt-16 gap-y-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10">
            <div className="relative">
              <div className="h-60 rounded-t-2xl overflow-hidden">
                <img
                  src={blog1}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
              <div className="absolute bg-theme-dark p-3 rounded-md top-[200px] right-5 text-white">
                <div className="font-bold text-2xl">16</div>
                <div className="font-bold">NOV</div>
              </div>
              <div>
                <div className="flex gap-x-4 items-center mt-7">
                  <div className="text-lg font-bold"> HYDROPOWER </div>
                  <div>0 comments</div>
                </div>
                <div className="text-3xl font-bold mt-5">
                  How sustainable hydropower can promote biodiversity
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="h-60 rounded-t-2xl overflow-hidden">
                <img
                  src={blog2}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
              <div className="absolute bg-theme-dark p-3 rounded-md top-[200px] right-5 text-white">
                <div className="font-bold text-2xl">16</div>
                <div className="font-bold">NOV</div>
              </div>
              <div>
                <div className="flex gap-x-4 items-center mt-7">
                  <div className="text-lg font-bold"> HYDROPOWER </div>
                  <div>0 comments</div>
                </div>
                <div className="text-3xl font-bold mt-5">
                  How sustainable hydropower can promote biodiversity
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="h-60 rounded-t-2xl overflow-hidden">
                <img
                  src={blog3}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
              <div className="absolute bg-theme-dark p-3 rounded-md top-[200px] right-5 text-white">
                <div className="font-bold text-2xl">16</div>
                <div className="font-bold">NOV</div>
              </div>

              <div>
                <div className="flex gap-x-4 items-center mt-7">
                  <div className="text-lg font-bold"> HYDROPOWER </div>
                  <div>0 comments</div>
                </div>
                <div className="text-3xl font-bold mt-5">
                  How sustainable hydropower can promote biodiversity
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- news end--> */}
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
