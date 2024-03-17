import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const ProductListPage = () => {
  const [filterNav, setFilterNav] = useState(false);
  const [Category, setCategory] = useState([]);
  const [Brand, setBrand] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/Products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      if (!Category.includes(value)) {
        setCategory((prev) => [...prev, value]);
      }
    } else {
      setCategory((pre) => [...pre.filter((item) => item !== value)]);
    }
  };
  const handleCheckboxBrandChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      if (!Brand.includes(value)) {
        setBrand((prev) => [...prev, value]);
      }
    } else {
      setBrand((pre) => pre.filter((item) => item !== value));
    }
  };
  const OnClickMenu = () => {
    setFilterNav(true);
  };
  console.log(Category, Brand);
  const filteredProducts = products
    .filter((product) =>
      Category[0] ? product.productType === Category[0] : true
    )
    .filter((product) => (Brand[0] ? product.brand === Brand[0] : true));
  return (
    <>
      <Navbar />
      <div className="mt-12">
        <div className="mt-[120px]">
          <div className="container mx-auto px-4 grid lg:flex gap-x-14 gap-y-44">
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
                <div className="relative rounded-md  shadow-sm ">
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
                </div>
              </div>
              <div className="mt-9">
                <div className="text-xl text-left font-bold">Category</div>
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
                            onChange={handleCheckboxChange}
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
                            value="Solar-Inverter"
                            onChange={handleCheckboxChange}
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
                            onChange={handleCheckboxChange}
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
                            onChange={handleCheckboxChange}
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
                            onChange={handleCheckboxChange}
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
                  {/* <div>
                    <label className="flex items-center ">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="radio"
                            className="form-checkbox rounded transition ease-in-out duration-100 
                            border-secondary-300 text-primary-600 focus:ring-primary-600 focus:border-primary-400
                            dark:border-secondary-500 dark:checked:border-secondary-600 dark:focus:ring-secondary-600
                            dark:focus:border-secondary-500 dark:bg-secondary-600 dark:text-secondary-600
                            dark:focus:ring-offset-secondary-800
                         font-bold"
                            value="All"
                            onChange={handleCheckboxBrandChange}
                          />
                        </div>
                        <div className="ml-2 text-sm">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                            ALL
                          </label>
                        </div>
                      </div>
                    </label>
                  </div> */}
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
                            onChange={handleCheckboxBrandChange}
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
                            onChange={handleCheckboxBrandChange}
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
                            onChange={handleCheckboxBrandChange}
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
                <svg
                  className="w-6 h-6 text-theme2-light cursor-pointer lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={OnClickMenu}
                >
                  <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M4 6l8 0"></path>
                  <path d="M16 6l4 0"></path>
                  <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M4 12l2 0"></path>
                  <path d="M10 12l10 0"></path>
                  <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M4 18l11 0"></path>
                  <path d="M19 18l1 0"></path>
                </svg>
              </div>
              <div className="grid sm:grid-cols-2  mt-6  xl:grid-cols-3 gap-14">
                {filteredProducts.map((product, index) => (
                  <div key={index} className="group/photo overflow-hidden">
                    <img
                      src={product.imgSrc}
                      className="group-hover/photo:scale-[1.08] transition-all duration-200"
                      alt="product img"
                    />
                    <div className="text-left space-y-1">
                      <div className="font-bold text-gray-600 text-[14px]">
                        {product.brand}
                      </div>
                      <div className="text-xl font-bold line-clamp-1">
                        {product.productName}
                      </div>
                      <div className="text-[14px]">{product.productType}</div>
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        onClick={() => handleProductClick(product.id)}
                        className="outline-none inline-flex justify-center items-center group transition-all ease-in duration-150 focus:ring-2 focus:ring-offset-2 hover:shadow-sm disabled:opacity-80 disabled:cursor-not-allowed rounded-full gap-x-2 text-sm px-4 py-2 ring-primary-500 text-white bg-primary-500 hover:bg-primary-600 hover:ring-primary-600
                dark:ring-offset-slate-800 dark:bg-primary-700 dark:ring-primary-700
                dark:hover:bg-primary-600 dark:hover:ring-primary-600 w-full"
                      >
                        More Details
                      </button>

                      <a href={product.detailsLink}>
                        <button
                          type="button"
                          className="outline-none inline-flex justify-center items-center group transition-all ease-in duration-150 focus:ring-2 focus:ring-offset-2 hover:shadow-sm disabled:opacity-80 disabled:cursor-not-allowed rounded-full gap-x-2 text-sm px-4 py-2 ring-primary-500 text-white bg-primary-500 hover:bg-primary-600 hover:ring-primary-600
                dark:ring-offset-slate-800 dark:bg-primary-700 dark:ring-primary-700
                dark:hover:bg-primary-600 dark:hover:ring-primary-600 w-full"
                        >
                          More Details
                        </button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductListPage;
