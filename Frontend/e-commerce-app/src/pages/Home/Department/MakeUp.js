import React from "react";
import Navbar from "../../../components/Header/Navbar";
import OrderPage from "../../Orders/OrderPage";
import DepartMentName from "./DepartMentName";

export default function MakeUp() {
  const makeUp1 = require("../../../assets/images/makeUp/makeup-3.jpeg");
  const makeUp2 = require("../../../assets/images/makeUp/makeup-2.jpeg");
  const makeUp3 = require("../../../assets/images/makeUp/makeup-9.jpeg");
  const makeUp4 = require("../../../assets/images/makeUp/makeup-14.jpeg");
  const makeUp5 = require("../../../assets/images/makeUp/makeup-16.jpeg");
  const makeUp6 = require("../../../assets/images/makeUp/makeup-17.jpeg");
  const departmentName = "Make Up";

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
            heading="Enchanting Beauty"
            content="Captivate with makeup that exudes an irresistible charm, casting a spell of allure wherever you go."
            imgName="make-up-1"
            price="8"
            imgUrl={makeUp1}
          />

          {/* <!-- Image 2 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Effortless Glamour"
            content="Radiate glamour effortlessly as you adorn yourself with carefully curated makeup that enhances your natural elegance."
            imgName="make-up-2"
            price="14"
            imgUrl={makeUp2}
          />

          {/* <!-- Imgae 3  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Youthful Vibrance"
            content="Rejuvenate your look with makeup that breathes youthful vibrance into your appearance, reviving your inner glow."
            imgName="make-up-3"
            price="24"
            imgUrl={makeUp3}
          />

          {/* <!-- Image 4  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Revitalizing Rituals"
            content="Immerse yourself in rejuvenating makeup rituals that nourish your skin, restoring its vitality and freshness."
            imgName="make-up-4"
            price="78"
            imgUrl={makeUp4}
          />

          {/* <!-- Image 5 --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Unleash Your Boldness"
            content="Embrace the transformative power of makeup to unleash your inner boldness and express your unique personality fearlessly."
            imgName="make-up-5"
            price="19"
            imgUrl={makeUp5}
          />

          {/* <!-- Image 6  --> */}
          <OrderPage
            departmentName={departmentName}
            heading="Timeless Artistry"
            content="Master the art of timeless beauty through expert techniques and exquisite makeup selections that transcend trends and leave a lasting impression."
            imgName="make-up-6"
            price="23"
            imgUrl={makeUp6}
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
