import React from "react";
import Navbar from "../../../components/Header/Navbar";
import OrderPage from "../Account/OrderPage";
import DepartMentName from "./DepartMentName";

export default function BodyCare() {
  const bodyCare1 = require("../../../assets/images/bodyCare/bodycare-1.jpeg");
  const bodyCare2 = require("../../../assets/images/bodyCare/bodycare-6.jpeg");
  const bodyCare3 = require("../../../assets/images/bodyCare/bodycare-4.jpeg");
  const bodyCare4 = require("../../../assets/images/bodyCare/bodycare-8.jpeg");
  const bodyCare5 = require("../../../assets/images/bodyCare/bodycare-5.jpeg");
  const bodyCare6 = require("../../../assets/images/bodyCare/bodycare-7.jpeg");
  const departmentName = "Body Care";

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
            heading="Luxurious Pampering"
            content="Discover the art of self-care with luxurious body care rituals that nourish, hydrate, and pamper your skin."
            imgName="body-care-1"
            price="4"
            imgUrl={bodyCare1}
          />

          {/* <!-- Image 2 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Silky Smooth Skin"
            content="Unlock the secrets to silky smooth skin with body care essentials designed to exfoliate, moisturize, and enhance your natural radiance."
            imgName="body-care-2"
            price="3"
            imgUrl={bodyCare2}
          />

          {/* <!-- Imgae 3  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Targeted Treatments"
            content="Explore targeted body care solutions for specific concerns such as dryness, cellulite, stretch marks, and uneven skin tone."
            imgName="body-care-3"
            price="6"
            imgUrl={bodyCare3}
          />

          {/* <!-- Image 4  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Mindful Body Wellness"
            content="Explore practices like mindful bathing, aromatherapy, and relaxation techniques that promote overall well-being."
            imgName="body-care-4"
            price="8"
            imgUrl={bodyCare4}
          />

          {/* <!-- Image 5 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Rejuvenating Rituals"
            content="Elevate your body care routine with rejuvenating rituals that incorporate body scrubs, massages, body oils."
            imgName="body-care-5"
            price="9"
            imgUrl={bodyCare5}
          />

          {/* <!-- Image 6  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Essential Body Care Tips"
            content="Discover essential body care tips and tricks, including proper hydration, sun protection, body cleansing."
            imgName="body-care-6"
            price="5"
            imgUrl={bodyCare6}
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
