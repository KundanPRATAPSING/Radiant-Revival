import React from "react";
import Navbar from "../../components/Header/Navbar";
import OrderPage from "./OrderPage";
import DepartMentName from './DepartMentName';

export default function HairCare() {
  const hairCare1 = require("../../assets/images/hairCare/haircare-7.jpeg");
  const hairCare2 = require("../../assets/images/hairCare/haircare-2.jpeg");
  const hairCare3 = require("../../assets/images/hairCare/haircare-8.jpeg");
  const hairCare4 = require("../../assets/images/hairCare/haircare-4.jpeg");
  const hairCare5 = require("../../assets/images/hairCare/haircare-5.jpeg");
  const hairCare6 = require("../../assets/images/hairCare/haircare-3.jpeg");
  const departmentName = "Hair Care";

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
            heading="Nourishing Essentials"
            content="Discover essential haircare products and routines to nourish and restore your locks, promoting healthier and more vibrant hair."
            imgName="hair-care-1"
            price="15"
            imgUrl={hairCare1}
          />

          {/* <!-- Image 2 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Silky Smooth Solutions"
            content="Explore a range of haircare solutions and techniques that can transform your hair, leaving it irresistibly smooth, silky, and touchable."
            imgName="hair-care-2"
            price="18"
            imgUrl={hairCare2}
          />

          {/* <!-- Imgae 3  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Tackling Common Hair Concerns"
            content="Address common hair concerns such as dryness, frizz, and damage, as we provide practical solutions, tips."
            imgName="hair-care-3"
            price="24"
            imgUrl={hairCare3}
          />

          {/* <!-- Image 4  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Customized Care"
            content="Learn how to identify your hair type and customize your haircare routine with suitable products and techniques for optimal results."
            imgName="hair-care-4"
            price="19"
            imgUrl={hairCare4}
          />

          {/* <!-- Image 5 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Styling Secrets"
            content="Unveil professional hairstyling secrets, from creating effortless waves to achieving sleek updos, empowering you to express your style."
            imgName="hair-care-5"
            price="32"
            imgUrl={hairCare5}
          />

          {/* <!-- Image 6  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Beyond Shampoo and Conditioner"
            content="Dive into the world of specialized hair treatments, including deep conditioning masks, scalp treatments, and serums.."
            imgName="hair-care-6"
            price="29"
            imgUrl={hairCare6}
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
