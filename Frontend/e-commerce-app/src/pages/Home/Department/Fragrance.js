import React from "react";
import Navbar from "../../../components/Header/Navbar";
import OrderPage from "../../Orders/OrderPage";
import DepartMentName from "./DepartMentName";

export default function Fragrance() {
  const fragrance1 = "images/fragrance/fragrance-1.jpeg";
  const fragrance2 = "images/fragrance/fragrance-2.jpeg";
  const fragrance3 = "images/fragrance/fragrance-6.jpeg";
  const fragrance4 = "images/fragrance/fragrance-15.jpeg";
  const fragrance5 = "images/fragrance/fragrance-19.jpeg";
  const fragrance6 = "images/fragrance/fragrance-20.jpeg";
  const departmentName = "Fragrance";

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
            heading="Fragrance Journeys"
            content="Explore the captivating world of perfumes and embark on a sensory journey as we delve into the art of fragrance creation."
            imgName="fragrance-1"
            price="13"
            imgUrl={fragrance1}
          />

          {/* <!-- Image 2 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Signature Scents"
            content="Uncover the secrets to finding your perfect signature scent, as we guide you through the process of selecting a fragrance."
            imgName="fragrance-2"
            price="18"
            imgUrl={fragrance2}
          />

          {/* <!-- Imgae 3  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="The Language of Fragrance"
            content="Learn the language of perfumery by understanding fragrance notes and accords, unraveling the complexities."
            imgName="fragrance-3"
            price="21"
            imgUrl={fragrance3}
          />

          {/* <!-- Image 4  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Fragrance Selection Guide"
            content="Navigate the vast array of perfumes with our selection guide, helping you choose the perfect scent for different occasions."
            imgName="fragrance-4"
            price="39"
            imgUrl={fragrance4}
          />

          {/* <!-- Image 5 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Fragrance Families"
            content="Discover the various fragrance families, from floral and fruity to woody and oriental, as we explore the characteristics."
            imgName="fragrance-5"
            price="44"
            imgUrl={fragrance5}
          />

          {/* <!-- Image 6  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Fragrance Care Tips"
            content="Learn how to properly store and apply your perfumes, as well as practical tips for making your fragrance last longer."
            imgName="fragrance-6"
            price="56"
            imgUrl={fragrance6}
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
