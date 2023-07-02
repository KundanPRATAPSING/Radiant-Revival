import React from "react";
import Navbar from "../../../components/Header/Navbar";
import OrderPage from "../../Orders/OrderPage";
import DepartMentName from "./DepartMentName";

export default function Organic() {
  const organic1 = "images/organic/organic-1.jpeg";
  const organic2 = "images/organic/organic-2.jpeg";
  const organic3 = "images/organic/organic-3.jpeg";
  const organic4 = "images/organic/organic-8.jpeg";
  const organic5 = "images/organic/organic-5.jpeg";
  const organic6 = "images/organic/organic-7.jpeg";
  const departmentName = "Organic";

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
            heading="Sustainable Grooming"
            content="Dive into sustainable grooming practices that go beyond product choices, including eco-friendly packaging, reducing waste, and supporting brands committed to ethical."
            imgName="organic-1"
            price="31"
            imgUrl={organic1}
          />

          {/* <!-- Image 2 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Natural Haircare:"
            content="Explore organic haircare options that utilize natural ingredients to cleanse, condition, and style your hair, leaving it healthy, vibrant, and free from harsh chemicals."
            imgName="organic-2"
            price="37"
            imgUrl={organic2}
          />

          {/* <!-- Imgae 3  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Organic Beard Care"
            content="Discover organic beard care products enriched with nourishing botanicals and oils, promoting healthy beard growth and providing natural styling options for a well-groomed."
            imgName="organic-3"
            price="42"
            imgUrl={organic3}
          />

          {/* <!-- Image 4  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Organic Grooming Essentials"
            content="Discover the power of organic grooming products that harness the benefits of natural and sustainable ingredients, offering a clean and eco-friendly approach to your grooming."
            imgName="organic-4"
            price="44"
            imgUrl={organic4}
          />

          {/* <!-- Image 5 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Clean Shaving"
            content="Embrace organic shaving products and techniques that prioritize skin health, offering a clean and comfortable shaving experience while minimizing irritation and razor burn."
            imgName="organic-5"
            price="39"
            imgUrl={organic5}
          />

          {/* <!-- Image 6  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Pure and Natura"
            content="Explore organic skincare options that are free from harmful chemicals and additives, providing gentle and effective solutions to cleanse, moisturize, and revitalize your skin."
            imgName="organic-6"
            price="49"
            imgUrl={organic6}
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
