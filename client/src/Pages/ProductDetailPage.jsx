import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/products/${productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [productId]);
  return (
    <div>
      <Navbar />
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <div className="mt-12">
          <div className="mt-[120px]">
            <div className="container mx-auto px-4">
              <div className="lg:flex gap-16">
                <div className="lg:w-[40%]">
                  <div className="rounded-md overflow-hidden">
                    <img src={product.imgSrc} alt="single product" />
                  </div>
                </div>
                <div className="lg:w-[60%]">
                  <div className="space-y-5">
                    <h1 className="font-bold text-4xl">
                      {product.productName}
                    </h1>
                    <div className="text-green-600">{product.stock}</div>
                    <div className="font-bold text-xl">{product.Price}</div>
                    <div className="bg-theme2-light rounded-full text-white inline-block px-4 py-1">
                      Warranty: 5 Years Product Warranty
                    </div>
                    <div className="text-lg flex w-[120px] items-center gap-4 border border-gray-400 rounded-full justify-between p-2 px-4">
                      <svg
                        className="w-3 md:w-4 text-black"
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
                        <path d="M12 5l0 14"></path>
                        <path d="M5 12l14 0"></path>
                      </svg>
                      <div className="font-sans">5</div>
                      <svg
                        className="w-3 md:w-4 text-black"
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
                        <path d="M5 12l14 0"></path>
                      </svg>
                    </div>
                    <div className="text-lg space-y-3">
                      <div className="flex gap-3 font-sans border-b border-gray-300">
                        <div className="font-bold">SKU:</div>
                        <div>{product.SKU}</div>
                      </div>
                      <div className="flex gap-3 font-sans border-b border-gray-300">
                        <div className="font-bold">Weight:</div>
                        <div>{product.Weight}</div>
                      </div>
                      <div className="flex gap-3 font-sans border-b border-gray-300">
                        <div className="font-bold">Width:</div>
                        <div>{product.Width}</div>
                      </div>
                      <div className="flex gap-3 font-sans border-b border-gray-300">
                        <div className="font-bold">Height:</div>
                        <div>{product.Height}</div>
                      </div>
                      <div className="flex gap-3 font-sans border-b border-gray-300">
                        <div className="font-bold">Depth:</div>
                        <div>{product.Depth}</div>
                      </div>
                      <div className="flex gap-3 font-sans border-b border-gray-300">
                        <div className="font-bold">Minimum Purchase:</div>
                        <div>{product.MinimumPurchase}</div>
                      </div>
                    </div>
                    <div className="flex gap-x-5">
                      <button
                        type="button"
                        className="outline-none inline-flex justify-center items-center group transition-all ease-in duration-150 focus:ring-2 focus:ring-offset-2 hover:shadow-sm disabled:opacity-80 disabled:cursor-not-allowed rounded-full gap-x-2 text-base px-6 py-3 ring-primary-500 text-primary-500 border border-primary-500 hover:bg-primary-50 dark:ring-offset-slate-800 dark:hover:bg-slate-700"
                      >
                        Add to cart
                      </button>
                      <button
                        type="button"
                        className="outline-none inline-flex justify-center items-center group transition-all ease-in duration-150 focus:ring-2 focus:ring-offset-2 hover:shadow-sm disabled:opacity-80 disabled:cursor-not-allowed rounded-full gap-x-2 text-base px-6 py-3 ring-primary-500 text-primary-500 border border-primary-500 hover:bg-primary-50 dark:ring-offset-slate-800 dark:hover:bg-slate-700"
                      >
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
