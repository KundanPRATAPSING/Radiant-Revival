import React from "react";
import Navbar from "../../../components/Header/Navbar";
import OrderPage from "../Account/OrderPage";
import DepartMentName from "./DepartMentName";

export default function SkinCare() {
  const skinCare1 = require("../../../assets/images/skinCare/skincare-11.jpeg");
  const skinCare2 = require("../../../assets/images/skinCare/skincare-12.jpeg");
  const skinCare3 = require("../../../assets/images/skinCare/skincare-6.jpeg");
  const skinCare4 = require("../../../assets/images/skinCare/skincare-7.jpeg");
  const skinCare5 = require("../../../assets/images/skinCare/skincare-1.jpeg");
  const skinCare6 = require("../../../assets/images/skinCare/skincare-9.jpeg");
  const departmentName = "Skin Care";

  return (
    <>
      {/* Navbar  */}
      <Navbar />

      {/* <!-- Navbar --> */}

      {/* <!-- Top Image --> */}

      {/* <!-- Shop by department-icons --> */}

      <DepartMentName departmentName = {departmentName} />

      {/* <!-- New offers --> */}

      <div className="container" id="newOffers">
        <div className="row my-4 justify-content-center">
          {/* <!-- Image 1 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Timeless Beauty"
            content="Unveil the timeless allure of your skin as you embrace a personalized skincare routine designed to enhance your natural beauty."
            imgName="skin-care-1"
            price="12"
            imgUrl={skinCare1}
          />

          {/* <!-- Image 2 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Effortless Radiance"
            content="Unleash your natural glow and achieve radiant skin effortlessly with the right skincare regimen."
            imgName="skin-care-2"
            price="11"
            imgUrl={skinCare2}
          />

          {/* <!-- Imgae 3  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Age-Defying Glow"
            content="Turn back the hands of time and unveil a youthful, radiant complexion through effective skincare practices."
            imgName="skin-care-3"
            price="5"
            imgUrl={skinCare3}
          />

          {/* <!-- Image 4  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Nurturing Skin Rituals"
            content="Indulge in self-care with nurturing skincare rituals that pamper your skin and restore it."
            imgName="skin-care-4"
            price="3"
            imgUrl={skinCare4}
          />

          {/* <!-- Image 5 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Unveiling Inner Glow"
            content="Discover the inner glow that lies within as you embark on a transformative skincare journey."
            imgName="skin-care-5"
            price="9"
            imgUrl={skinCare5}
          />

          {/* <!-- Image 6  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Timeless Skincare Secrets"
            content="Unlock the secrets to timeless beauty and elevate your skincare routine to new heights."
            imgName="skin-care-6"
            price="25"
            imgUrl={skinCare6}
          />

          {/* Row Div  */}
        </div>

        {/* Container Div  */}
      </div>

      {/* <!-- End new offers--> */}

      {/* <!-- footer --> */}
      {/* <!-- loading start --> */}
      <div className="loader-wrapper">
        <div className="loader-inner">
          <div className="st1"></div>
          <div className="st2"></div>
          <div className="st3"></div>
        </div>
      </div>
      {/* <!-- loading end --> */}
    </>
  );
}
