import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProductListPage from "./Pages/ProductListPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import AdminLoginPage from "./Pages/AdminLoginPage";
import AdminDashboard from "./Pages/AdminDashboard";
import ProductDetailPage from "./Pages/ProductDetailPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />}></Route>
          <Route path="/Products" element={<ProductListPage />}></Route>
          <Route path="/about-us" element={<AboutPage />}></Route>
          <Route path="/contact-us" element={<ContactPage />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/Signup" element={<SignupPage />}></Route>
          <Route path={`/product/:productId`} element={<ProductDetailPage />} />
          <Route path="/adminLogin" element={<AdminLoginPage />}></Route>
          <Route path="/adminDashboard" element={<AdminDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
