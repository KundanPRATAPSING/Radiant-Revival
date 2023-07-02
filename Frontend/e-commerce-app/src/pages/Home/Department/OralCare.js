import React from "react";
import Navbar from "../../../components/Header/Navbar";
import OrderPage from "../../Orders/OrderPage";
import DepartMentName from "./DepartMentName";

export default function OralCare() {
  const oralCare1 = "images/oralCare/oralcare-5.jpeg";
  const oralCare2 = "images/oralCare/oralcare-6.jpeg";
  const oralCare3 = "images/oralCare/oralcare-3.jpeg";
  const oralCare4 = "images/oralCare/oralcare-10.jpeg";
  const oralCare5 = "images/oralCare/oralcare-2.jpeg";
  const oralCare6 = "images/oralCare/oralcare-7.jpeg";
  const departmentName = "Oral Care";

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
            heading="Healthy Smile Essentials"
            content="Explore the fundamental aspects of oral care, from proper brushing and flossing techniques to choosing the right toothpaste and mouthwash, for a healthy and radiant smile."
            imgName="oral-care-1"
            price="17"
            imgUrl={oralCare1}
          />

          {/* <!-- Image 2 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Fresh Breath Confidence"
            content="Discover the secrets to fresh breath and confident oral hygiene through expert tips, product recommendations, and lifestyle practices that keep bad breath at bay."
            imgName="oral-care-2"
            price="40"
            imgUrl={oralCare2}
          />

          {/* <!-- Imgae 3  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Oral Care for All Ages"
            content="Learn about age-appropriate oral care practices for every life stage, including children, teenagers, adults, and seniors, ensuring optimal oral health throughout the lifespan."
            imgName="oral-care-3"
            price="23"
            imgUrl={oralCare3}
          />

          {/* <!-- Image 4  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Beyond Brushing"
            content="Dive into advanced oral care techniques such as tongue scraping, interdental cleaning, and mouth rinsing, along with exploring innovative oral care products that enhance your routine."
            imgName="oral-care-4"
            price="3"
            imgUrl={oralCare4}
          />

          {/* <!-- Image 5 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Smile Makeover"
            content="Discover the world of cosmetic dentistry and explore smile makeover options such as teeth whitening, veneers, and orthodontics, helping you achieve the smile of your dreams."
            imgName="oral-care-5"
            price="18"
            imgUrl={oralCare5}
          />

          {/* <!-- Image 6  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Oral Health "
            content="Explore the connection between oral health and overall well-being, as we discuss how oral health impacts systemic health and provide tips for maintaining a healthy mouth and body."
            imgName="oral-care-6"
            price="21"
            imgUrl={oralCare6}
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
