import React, { useState } from "react";
import { Cancel } from "@material-ui/icons";
import axios from "axios";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    imgSrc: "",
    brand: "",
    productName: "",
    productType: "",
    detailsLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {};
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      formData.imgSrc = `http://localhost:4000/api/public/images/${fileName}`;
      console.log(formData);
      try {
        await axios.post("http://localhost:4000/api/Products/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("http://localhost:4000/api/Products/posts", formData);
      window.location.reload();
    } catch (err) {}
    console.log("Form submitted:", formData);
  };
  return (
    <div>
      {" "}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Upload a new product
              </h1>
              <form
                className="text-left space-y-4 md:space-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="Brand Name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Brand Name:
                  </label>
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="BrandName"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Name:
                  </label>
                  <input
                    type="text"
                    name="productName"
                    id="ProductName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.productName}
                    placeholder="Product Name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="PRoduct type"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Type:
                  </label>
                  <input
                    type="text"
                    name="productType"
                    id="ProductType"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Product Type"
                    value={formData.productType}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Details Link:
                  </label>
                  <input
                    type="text"
                    name="detailsLink"
                    id="detailsLink"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="detailsLink"
                    value={formData.detailsLink}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Upload image for the product:
                  </label>
                  {file && (
                    <div className="shareImgContainer">
                      <img
                        className="shareImg"
                        src={URL.createObjectURL(file)}
                        alt=""
                      />
                      <Cancel
                        className="shareCancelImg"
                        onClick={() => setFile(null)}
                      />
                    </div>
                  )}
                  <input
                    type="file"
                    name="myImage"
                    id="myImage"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setFile(event.target.files[0]);
                    }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadImage;
