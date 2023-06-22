import React from "react";
import OrderPage from '../Account/OrderPage';
import DepartMentName from './DepartMentName';
import Navbar from '../../../components/Header/Navbar';

export default function BeautyTools() {
  const beautyTools1 = require("../../../assets/images/beautyTools/beautytools-9.jpeg");
  const beautyTools2 = require("../../../assets/images/beautyTools/beautytools-2.jpeg");
  const beautyTools3 = require("../../../assets/images/beautyTools/beautytools-3.jpeg");
  const beautyTools4 = require("../../../assets/images/beautyTools/beautytools-4.jpeg");
  const beautyTools5 = require("../../../assets/images/beautyTools/beautytools-5.jpeg");
  const beautyTools6 = require("../../../assets/images/beautyTools/beautytools-6.jpeg");
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
            heading="Essential Beauty Tools"
            content="Discover a range of essential beauty tools that elevate your makeup and skincare routine, including brushes, sponges, applicators, and accessories, for effortless application and flawless results."
            imgName="beauty-tools-1"
            price="11"
            imgUrl={beautyTools1}
          />

          {/* <!-- Image 2 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Professional-Quality Tools"
            content="Explore professional-quality beauty tools used by makeup artists, such as high-quality brushes, precision tweezers, eyelash curlers, and makeup palettes, allowing you to achieve expert-level makeup looks at home."
            imgName="beauty-tools-2"
            price="22"
            imgUrl={beautyTools2}
          />

          {/* <!-- Imgae 3  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Hair Styling Tools"
            content="Discover a variety of hair styling tools, such as hair dryers, flat irons, curling wands, and brushes, that help you create a range of hairstyles, from sleek and straight to voluminous curls."
            imgName="beauty-tools-3"
            price="54"
            imgUrl={beautyTools3}
          />

          {/* <!-- Image 4  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Skincare Devices"
            content="Dive into the world of skincare devices, including facial cleansing brushes, microcurrent devices, facial rollers, and LED therapy masks, that boost the effectiveness of your skincare."
            imgName="beauty-tools-4"
            price="68"
            imgUrl={beautyTools4}
          />

          {/* <!-- Image 5 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Nail Care Essentials"
            content="Explore nail care essentials, including nail clippers, files, buffers, and cuticle tools, to achieve professional-looking manicures and pedicures from the comfort of your own home."
            imgName="beauty-tools-5"
            price="39"
            imgUrl={beautyTools5}
          />

          {/* <!-- Image 6  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Innovative Beauty Gadgets"
            content="Stay on the cutting edge of beauty with innovative gadgets like facial massagers, light therapy devices, hair removal tools, and smart mirrors, offering advanced features."
            imgName="beauty-tools-6"
            price="34"
            imgUrl={beautyTools6}
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

