import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "./App.css";
import ScrollToTop from "./Components/ScrollTop";
import Landing from "./Components/Landing/Landing";
import SellerRegister from "./Auth/SellerRegister";
import SellerLogin from "./Auth/SellerLogin";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import CreateProduct from "./Components/Product/CreateProduct";
import CreateAllProduct from "./Components/AllProduct/CreateAllProduct";
import AllOrders from "./Components/Orders/AllOrders";
import Profile from "./Components/Profile/Profile";
import axios from "axios";

axios.defaults.baseURL = "https://declutter-server.onrender.com/api/v1";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <ScrollToTop />
      <CssBaseline>
        <Header />
        <Routes>
          <Route path="/" index element={<Landing />} />
          <Route path="/register" element={<SellerRegister />} />
          <Route path="/seller-login" element={<SellerLogin />} />
          <Route path="/shop-dashboard" element={<Dashboard />} />
          <Route path="/shop-create-product" element={<CreateProduct />} />
          <Route path="/shop-all-product" element={<CreateAllProduct />} />
          <Route path="/shop-orders" element={<AllOrders />} />
          <Route path="/shop-profile" element={<Profile />} />
        </Routes>
      </CssBaseline>
    </>
  );
}

export default App;
