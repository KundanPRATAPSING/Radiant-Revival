import React from "react";
import Navbar from "../../components/Header/Navbar";
import Carousel from "./Carousel";
import Banner from "./Banner";
import Department from "./Department";

export default function Home() {
  const topImage1 = require("../../assets/images/top-image-1.jpg");
  const topImage2 = require("../../assets/images/top-image-2.jpg");
  const topImage3 = require("../../assets/images/top-image-3.jpg");
  const topImage4 = require("../../assets/images/top-image-4.jpg");
  const topImage5 = require("../../assets/images/top-image-5.jpg");
  const skinCareImage = require("../../assets/images/skinCare/skinCare0.jpeg")
  const makeUpImage = require("../../assets/images/makeUp/makeUp0.jpeg")
  const hairCareImage = require("../../assets/images/hairCare/hairCare0.jpeg")
  const fragranceImage = require("../../assets/images/fragrance/fragrance0.jpeg")
  const bodyCareImage = require("../../assets/images/bodyCare/bodyCare0.jpeg")
  const oralCareImage = require("../../assets/images/oralCare/oralCare0.jpeg")
  const menGroomingImage = require("../../assets/images/menGrooming/menGrooming0.jpeg")
  const organicImage = require("../../assets/images/organic/organic0.jpeg")
  const beautyToolsImage = require("../../assets/images/beautyTools/beautytools0.jpeg")
  const bodyArtImage = require("../../assets/images/bodyArt/bodyArt0.jpeg")

  return (
    <>
      {/* <!-- header --> */}
      <Navbar />
      {/* <!-- header --> */}

      {/* <!-- Top Image --> */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <Carousel image={topImage1} />
          <Carousel image={topImage2} />
          <Carousel image={topImage3} />
          <Carousel image={topImage4} />
          <Carousel image={topImage5} />
        </div>
      </div>

      {/* End of top Image  */}

      {/* Banner  */}
      <Banner />
      {/* End Banner  */}

      {/* <!-- Shop by department-icons --> */}
      <div className="container" id="depart">
        <h3 className="d-flex justify-content-center justify-content-sm-start mt-5 mb-3">
          Shop by Department
        </h3>

        <div className="row justify-content-center">
          {/* <!-- Skincare Department  --> */}
          <Department
            departmentImage={skinCareImage}
            redirectUrl="/home"
            departmentName="Skin Care"
          />

          {/* <!-- Makeup Department  --> */}
          <Department
            departmentImage={makeUpImage}
            redirectUrl="/home"
            departmentName="Make Up"
          />

          {/* <!-- Haircare Department  --> */}
          <Department
            departmentImage={hairCareImage}
            redirectUrl="/home"
            departmentName="Hair Care"
          />

          {/* <!-- Fragrances Department  --> */}
          <Department
            departmentImage={fragranceImage}
            redirectUrl="/home"
            departmentName="Fragrance"
          />

          {/* <!-- Bodycare Department  --> */}
          <Department
            departmentImage={bodyCareImage}
            redirectUrl="/home"
            departmentName="Body Care"
          />

          {/* <!-- Equals the icon size --> */}
          <div className="d-none d-lg-block w-100"></div>

          {/* <!-- Oral Care Department  --> */}
          <Department
            departmentImage={oralCareImage}
            redirectUrl="/home"
            departmentName="oralCare"
          />

          {/* <!-- Men's Grooming Department  --> */}
          <Department
            departmentImage={menGroomingImage}
            redirectUrl="/home"
            departmentName="Men Grooming"
          />

          {/* <!-- Natural and Organic Department  --> */}
          <Department
            departmentImage={organicImage}
            redirectUrl="/home"
            departmentName="Organic"
          />

          {/* <!-- Beauty Tools and Accessories Department  --> */}
          <Department
            departmentImage={beautyToolsImage}
            redirectUrl="/home"
            departmentName="Beauty Tools"
          />

          {/* <!-- Body Art  --> */}
          <Department
            departmentImage={bodyArtImage}
            redirectUrl="/home"
            departmentName="Body Art"
          />
        </div>
      </div>

      {/* <!-- New offers --> */}

      {/* <div className="container" id="newOffers">
        <h3 className="d-flex justify-content-center justify-content-sm-start mt-5">
          NEW
        </h3>
        <div className="row my-2 justify-content-center">
          <div className="col-12 col-sm-6 col-lg-4">
            <a href="/" className="aBord-none text-secondary nav-link">
              <div className="card border-0">
                <img
                  src="https://www.ashleyfurniture.com/on/demandware.static/-/Library-Sites-AshcommSharedLibrary/default/dw57e759dc/images/category/furniture/living-room/living-room-landing-20200220/LivingRoom_CLP_FeatThree_a.jpg"
                  className="card-img-top border-0"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center font-weight-bold">
                    Small Spaces
                  </h5>
                  <p className="card-text text-center">
                    Less square footage can result in a higher level of style
                    per unit area.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <a href="/" className="aBord-none text-secondary nav-link">
              <div className="card border-0">
                <img
                  src="https://www.ashleyfurniture.com/on/demandware.static/-/Library-Sites-AshcommSharedLibrary/default/dw78a5c993/images/category/furniture/living-room/living-room-landing-20200220/LivingRoom_CLP_FeatThree_b.jpg"
                  className="card-img-top border-0"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center font-weight-bold">
                    Lift Top Coffee Tables
                  </h5>
                  <p className="card-text text-center">
                    Multi-functional tables for work and play.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <a href="/" className="aBord-none text-secondary nav-link">
              <div className="card border-0">
                <img
                  src="https://www.ashleyfurniture.com/on/demandware.static/-/Library-Sites-AshcommSharedLibrary/default/dw482e1c43/images/category/furniture/living-room/living-room-landing-20200220/LivingRoom_CLP_FeatThree_c.jpg"
                  className="card-img-top border-0"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center font-weight-bold">
                    Tv Stands
                  </h5>
                  <p className="card-text text-center">
                    Versatile fireplaces compatible with any setting.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div> */}

      {/* <!-- End new offers--> */}

      {/* <!-- footer --> */}
      {/* End Footer  */}

      {/* <!-- scroll go top start --> */}
      <a id="myBtn" className="gotopbtn" href="#body-start">
        <img
          src="https://cdn3.iconfinder.com/data/icons/road-sign/154/road-sign-top-arrow-yellow-attention-512.png"
          width="50"
          height="50"
          loading="lazy"
          alt=""
        />
      </a>
      {/* <!-- scroll end --> */}


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
