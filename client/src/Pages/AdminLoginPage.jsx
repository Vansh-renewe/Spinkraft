import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cover from "../assets/LandingSection/overview/overview-img.jpg";
import { Link } from "react-router-dom";
import logoDark from "../assets/branding/logo-dark.png";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const navigate = useNavigate();

  const postAdminLoginDetails = () => {
    fetch("http://localhost:4000/api/auth/admin", {
      method: "POST",
      body: JSON.stringify({
        adminEmail,
        adminPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error_message) {
          alert(data.error_message);
        } else {
          console.log(data.data);
          localStorage.setItem("admin", data.data.admin);
          //👇🏻 Navigates to dashboard
          navigate("/adminDashboard");
        }
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postAdminLoginDetails();
    setAdminPassword("");
    setAdminEmail("");
  };

  const gotoLoginPage = () => navigate("/Login");
  return (
    <div>
      <Navbar />
      <div className="mt-12">
        <section className=" container mx-auto  ">
          <div className="mt-32 grid  lg:grid-cols-2 gap-10 ">
            <section className="h-full w-full relative">
              <img
                src={cover}
                className="object-cover w-full h-full object-center"
                alt="cover bg"
              />
              <div className="absolute top-0 w-full h-full bg-theme2-light  flex justify-center bg-opacity-80 text-white items-center">
                <div>
                  <div className="bg-white p-4 rounded-3xl text-6xl font-extrabold">
                    <Link to="/">
                      <img
                        src={logoDark}
                        alt="logo"
                        className="sm:w-[180px] w-[120px]"
                      />
                    </Link>
                  </div>
                  <div className="flex items-center justify-center mt-5 text-lg gap-x-2">
                    <Link to="/" className="hover:text-theme2-light ">
                      Home
                    </Link>
                    <span>/</span>
                    <div>Admin Login</div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-gray-50 dark:bg-gray-900">
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign in to Admin account
                    </h1>
                    <form
                      className="text-left space-y-4 md:space-y-6"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={adminEmail}
                          required
                          onChange={(e) => setAdminEmail(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Registered Email"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          minLength={8}
                          required
                          value={adminPassword}
                          onChange={(e) => setAdminPassword(e.target.value)}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        log in
                      </button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Go to User Login.{" "}
                        <span
                          className="link font-medium text-primary-600 hover:underline dark:text-primary-500"
                          onClick={gotoLoginPage}
                        >
                          User Log in
                        </span>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLoginPage;
