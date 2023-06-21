import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import SkinCare from "./pages/Home/SkinCare";
import BeautyTools from "./pages/Home/BeautyTools";
import BodyArt from "./pages/Home/BodyArt";
import BodyCare from "./pages/Home/BodyCare";
import Fragrance from "./pages/Home/Fragrance";
import HairCare from "./pages/Home/HairCare";
import MakeUp from "./pages/Home/MakeUp";
import MenGrooming from "./pages/Home/MenGrooming";
import OralCare from "./pages/Home/OralCare";
import Organic from "./pages/Home/Organic";
import Profile from "./pages/Home/Profile";
import Logout from "./pages/Session/Logout";
import OrderPreview from "./pages/Home/OrderPreview";
import Settings from "./pages/Settings/Settings";
import UpdateName from "./pages/Settings/UpdateName";
import UpdateAddress from './pages/Settings/UpdateAddress';
import UpdatePhone from './pages/Settings/UpdatePhone';
import ForgotPassword from "./pages/Login/ForgotPassword";
import UpdatePassword from "./pages/Login/UpdatePassword";

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
      </Routes>
    </Router>
  );
}
