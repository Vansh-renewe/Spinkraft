import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UploadImage from "../components/upload";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ArrowUpTrayIcon,
  PowerIcon,
  UserIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import AdminActiveUser from "../components/AdminActiveUser";
import AdminProductList from "../components/AdminProductList";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [filterNav, setFilterNav] = useState(false);
  const [showActiveUser, setShowActiveUser] = useState(true);
  const [showUploadImage, setShowUploadImage] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);
  const navigate = useNavigate();
  const Navigatetologin = () => navigate("/Login");

  const UploadOnClick = () => {
    setShowUploadImage(true);
    setShowEditProduct(false);
    setShowActiveUser(false);
  };
  const EditClick = () => {
    setShowUploadImage(false);
    setShowEditProduct(true);
    setShowActiveUser(false);
  };

  const AllUsers = () => {
    setShowActiveUser(true);
    setShowUploadImage(false);
    setShowEditProduct(false);
  };
  return (
    <div>
      <Navbar />
      <div className="mt-12">
        <section className=" container mx-auto  ">
          <div className="mt-[120px] container mx-auto px-4 grid lg:flex gap-x-14 gap-y-44">
            <div
              className={`lg:w-[30%] fixed top-[60px] bg-white inner-shadow p-9 lg:p-0 left-0 h-full lg:static z-40 ${
                filterNav
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto translate-x-[-10px] lg:translate-x-[0px]"
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

              <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                <div className="mb-2 p-4 bg-primary-500 rounded-3xl ">
                  <Typography variant="h5" color="white">
                    Admin Dashboard
                  </Typography>
                </div>
                <List>
                  <ListItem>
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Dashboard
                  </ListItem>
                  <ListItem onClick={AllUsers}>
                    <ListItemPrefix>
                      <UserIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Active Users
                  </ListItem>
                  <ListItem onClick={UploadOnClick}>
                    <ListItemPrefix>
                      <ArrowUpTrayIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Upload Product
                  </ListItem>
                  <ListItem onClick={EditClick}>
                    <ListItemPrefix>
                      <PencilSquareIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Edit Products
                  </ListItem>

                  <ListItem onClick={Navigatetologin}>
                    <ListItemPrefix>
                      <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                  </ListItem>
                </List>
              </Card>
            </div>
            <div className="lg:w-[70%] ">
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
              {showUploadImage && (
                <div className="flex items-start  ">
                  <UploadImage />
                </div>
              )}
              {showEditProduct && (
                <div className="flex items-start ">
                  <AdminProductList />
                </div>
              )}
              {showActiveUser && (
                <div className="flex items-start  ">
                  <AdminActiveUser />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
