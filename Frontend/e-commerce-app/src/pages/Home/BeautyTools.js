import React from "react";
import Navbar from "../../components/Header/Navbar";
import OrderPage from "./OrderPage";
import DepartMentName from './DepartMentName';

export default function BeautyTools() {
  const bodyArt1 = require("../../assets/images/beautyTools/beautytools-9.jpeg");
  const bodyArt2 = require("../../assets/images/beautyTools/beautytools-2.jpeg");
  const bodyArt3 = require("../../assets/images/beautyTools/beautytools-3.jpeg");
  const bodyArt4 = require("../../assets/images/beautyTools/beautytools-4.jpeg");
  const bodyArt5 = require("../../assets/images/beautyTools/beautytools-5.jpeg");
  const bodyArt6 = require("../../assets/images/beautyTools/beautytools-6.jpeg");
  const departmentName = "Beauty Tools";

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
            heading="Timeless Elegance"
            content="Whether you're lounging with family or entertaining guests, our sofas provide ample seating for everyone."
            imgName="body-art-1"
            price="14"
            imgUrl={bodyArt1}
          />

          {/* <!-- Image 2 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Timeless Elegance"
            content="Whether you're lounging with family or entertaining guests, our sofas provide ample seating for everyone."
            imgName="body-art-2"
            price="14"
            imgUrl={bodyArt2}
          />

          {/* <!-- Imgae 3  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Timeless Elegance"
            content="Whether you're lounging with family or entertaining guests, our sofas provide ample seating for everyone."
            imgName="body-art-3"
            price="14"
            imgUrl={bodyArt3}
          />

          {/* <!-- Image 4  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Timeless Elegance"
            content="Whether you're lounging with family or entertaining guests, our sofas provide ample seating for everyone."
            imgName="body-art-4"
            price="14"
            imgUrl={bodyArt4}
          />

          {/* <!-- Image 5 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Timeless Elegance"
            content="Whether you're lounging with family or entertaining guests, our sofas provide ample seating for everyone."
            imgName="body-art-5"
            price="14"
            imgUrl={bodyArt5}
          />

          {/* <!-- Image 6  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Timeless Elegance"
            content="Whether you're lounging with family or entertaining guests, our sofas provide ample seating for everyone."
            imgName="body-art-6"
            price="14"
            imgUrl={bodyArt6}
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

