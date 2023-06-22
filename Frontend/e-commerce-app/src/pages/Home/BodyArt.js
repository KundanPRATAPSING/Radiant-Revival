import React from "react";
import Navbar from "../../components/Header/Navbar";
import OrderPage from "./OrderPage";
import DepartMentName from "./DepartMentName";

export default function BodyArt() {
  const bodyArt1 = require("../../assets/images/bodyArt/bodyart-14.jpeg");
  const bodyArt2 = require("../../assets/images/bodyArt/bodyart-15.jpeg");
  const bodyArt3 = require("../../assets/images/bodyArt/bodyart-16.jpeg");
  const bodyArt4 = require("../../assets/images/bodyArt/bodyart-13.jpeg");
  const bodyArt5 = require("../../assets/images/bodyArt/bodyart-10.jpeg");
  const bodyArt6 = require("../../assets/images/bodyArt/bodyart-6.jpeg");
  const departmentName = "Body Art";

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
            heading="Artistic Expression on Skin"
            content="Explore the captivating world of tattoos as a form of artistic expression, from traditional designs to modern styles, and discover the meaning and significance."
            imgName="body-art-1"
            price="104"
            imgUrl={bodyArt1}
          />

          {/* <!-- Image 2 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Choosing Your Canvas"
            content="Delve into the considerations when choosing the placement of your tattoo, taking into account factors such as visibility, pain tolerance, and how the design interacts with the body."
            imgName="body-art-2"
            price="133"
            imgUrl={bodyArt2}
          />

          {/* <!-- Imgae 3  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Tattoo Styles"
            content="Discover the vast array of tattoo styles and designs, including traditional, realism, geometric, watercolor, and more, and find inspiration for your own unique tattoo concept."
            imgName="body-art-3"
            price="129"
            imgUrl={bodyArt3}
          />

          {/* <!-- Image 4  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Tattoo Aftercare"
            content="Learn about the essential steps and practices for proper tattoo aftercare, including cleaning, moisturizing, avoiding sun exposure, and following the advice of your tattoo artist."
            imgName="body-art-4"
            price="186"
            imgUrl={bodyArt4}
          />

          {/* <!-- Image 5 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Cover-Up Options"
            content="Explore the options available for tattoo removal and cover-ups, including laser removal techniques and creative strategies to modify or transform existing tattoos to suit changings."
            imgName="body-art-5"
            price="99"
            imgUrl={bodyArt5}
          />

          {/* <!-- Image 6  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Choosing a Professional Artist"
            content="Understand the importance of tattoo safety, including hygiene practices, using sterile equipment, and selecting a reputable and skilled tattoo artist who can bring your vision to life"
            imgName="body-art-6"
            price="103"
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
