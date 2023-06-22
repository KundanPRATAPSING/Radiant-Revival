import React from "react";
import Navbar from "../../components/Header/Navbar";
import OrderPage from "./OrderPage";
import DepartMentName from './DepartMentName';

export default function MenGrooming() {
  const menGrooming1 = require("../../assets/images/menGrooming/men-8.jpeg");
  const menGrooming2 = require("../../assets/images/menGrooming/men-2.jpeg");
  const menGrooming3 = require("../../assets/images/menGrooming/men-3.jpeg");
  const menGrooming4 = require("../../assets/images/menGrooming/men-4.jpeg");
  const menGrooming5 = require("../../assets/images/menGrooming/men-5.jpeg");
  const menGrooming6 = require("../../assets/images/menGrooming/men-9.jpeg");
  const departmentName = "Men Grooming";

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
            heading="Mastering the Basics"
            content="Discover the essential grooming routines and techniques every man should know, from proper shaving and skincare to hair care and fragrance selection, ensuring a polished and confident appearance."
            imgName="men-grooming-1"
            price="18"
            imgUrl={menGrooming1}
          />

          {/* <!-- Image 2 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Bearded Sophistication"
            content="Embrace the art of beard grooming, from maintaining a well-groomed beard to shaping and styling techniques, allowing you to express your personal style with confidence and sophistication."
            imgName="men-grooming-2"
            price="27"
            imgUrl={menGrooming2}
          />

          {/* <!-- Imgae 3  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Skin Care Simplified"
            content="Explore a straightforward skincare routine tailored specifically for men, addressing common concerns such as shaving irritation, oiliness, and maintaining overall skin health and growth."
            imgName="men-grooming-3"
            price="11"
            imgUrl={menGrooming3}
          />

          {/* <!-- Image 4  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="The Perfect Shave"
            content="Dive into the world of traditional wet shaving techniques, including proper prepping, choosing the right tools and products, and achieving a close and irritation-free shave."
            imgName="men-grooming-4"
            price="19"
            imgUrl={menGrooming4}
          />

          {/* <!-- Image 5 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Stylish Haircare"
            content="Discover hairstyling tips and techniques for men, from selecting the right haircut to styling products and tools, enabling you to achieve stylish and on-trend hairstyles with ease."
            imgName="men-grooming-5"
            price="22"
            imgUrl={menGrooming5}
          />

          {/* <!-- Image 6  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Grooming Beyond the Basics"
            content="Explore grooming tips and tricks for special occasions, such as grooming for formal events, creating a polished look for job interviews, and maintaining grooming while traveling."
            imgName="men-grooming-6"
            price="10"
            imgUrl={menGrooming6}
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
