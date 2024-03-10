import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import contact from "../assets/Contact-us/contact-us-bg.jpg";
import logoDark from "../assets/branding/logo-dark.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postLoginDetails = () => {
    fetch("http://localhost:4000/api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
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
          localStorage.setItem("username", data.data.username);
          //👇🏻 Navigates to Home
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postLoginDetails();
    setPassword("");
    setEmail("");
  };

  const gotoSignUpPage = () => navigate("/Signup");
  return (
    <div>
      <Navbar />
      <div className="mt-12">
        <section className=" container mx-auto  ">
          <div className="mt-32 grid  lg:grid-cols-2 gap-10 ">
            <section className="h-full w-full relative">
              <img
                src={contact}
                className="object-cover w-full h-full object-center"
                alt="contact us bg"
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
                    <div>Login</div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-gray-50 dark:bg-gray-900">
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign in to your account
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
                          value={email}
                          required
                          onChange={(e) => setEmail(e.target.value)}
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
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="remember"
                              aria-describedby="remember"
                              type="checkbox"
                              className="form-checkbox rounded transition ease-in-out duration-100 
                            border-secondary-300 text-primary-600 focus:ring-primary-600 focus:border-primary-400
                            dark:border-secondary-500 dark:checked:border-secondary-600 dark:focus:ring-secondary-600
                            dark:focus:border-secondary-500 dark:bg-secondary-600 dark:text-secondary-600
                            dark:focus:ring-offset-secondary-800
                         font-bold"
                              required
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="remember"
                              className="text-gray-500 dark:text-gray-300"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="w-full text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        log in
                      </button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet?{" "}
                        <span
                          className="link font-medium text-primary-600 hover:underline dark:text-primary-500"
                          onClick={gotoSignUpPage}
                        >
                          Sign up
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

export default LoginPage;
