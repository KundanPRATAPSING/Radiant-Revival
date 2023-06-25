import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import ForgotPassword from './pages/Login/ForgotPassword';
import UpdatePassword from './pages/Login/UpdatePassword';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import Profile from './pages/Home/Account/Profile';
import Settings from './pages/Settings/Settings';
import BeautyTools from './pages/Home/Department/BeautyTools';
import BodyArt from './pages/Home/Department/BodyArt';
import BodyCare from './pages/Home/Department/BodyCare';
import Fragrance from './pages/Home/Department/Fragrance';
import HairCare from './pages/Home/Department/HairCare';
import MakeUp from './pages/Home/Department/MakeUp';
import MenGrooming from './pages/Home/Department/MenGrooming';
import OralCare from './pages/Home/Department/OralCare';
import Organic from './pages/Home/Department/Organic';
import SkinCare from './pages/Home/Department/SkinCare';
import Logout from './pages/Session/Logout';
import UpdateName from './pages/Settings/UpdateName';
import UpdateAddress from './pages/Settings/UpdateAddress';
import UpdatePhone from './pages/Settings/UpdatePhone';
import OrderPreview from "./pages/Orders/OrderPreview";
import OrderImage from "./pages/Home/Account/OrderImage";
import MyCart from "./pages/Home/Account/MyCart";
import MyOrders from './pages/Home/Account/MyOrders';
import Success from './pages/Orders/Success';
import Fail from './pages/Orders/Fail';


export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/updatePassword" element={<UpdatePassword />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/myCart" element={<MyCart />} />
        <Route path="/myOrders" element={<MyOrders />} />
        <Route path="/orderImage" element={<OrderImage />} />
        <Route path="/beautyTools" element={<BeautyTools />} />
        <Route path="/bodyArt" element={<BodyArt />} />
        <Route path="/bodyCare" element={<BodyCare />} />
        <Route path="/fragrance" element={<Fragrance />} />
        <Route path="/hairCare" element={<HairCare />} />
        <Route path="/makeUp" element={<MakeUp />} />
        <Route path="/menGrooming" element={<MenGrooming />} />
        <Route path="/oralCare" element={<OralCare />} />
        <Route path="/organic" element={<Organic />} />
        <Route path="/skinCare" element={<SkinCare />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/OrderPreview" element={<OrderPreview />} />
        <Route path="/updateName" element={<UpdateName />} />
        <Route path="/updateAddress" element={<UpdateAddress />} />
        <Route path="/updatePhone" element={<UpdatePhone />} />
        <Route path="/success" element={<Success />} />
        <Route path="/fail" element={<Fail />} />
      </Routes>
    </Router>
  );
}
