import React, { useState, useEffect } from "react";
import Navbar from "../../components/Header/Navbar";
import Banner from "./Components/Banner";
import Carousel from "./Components/Carousel";
import Department from "./Department/Department";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const topImage1 = "images/top-image-1.jpg";
  const topImage2 = "images/top-image-2.jpg";
  const topImage3 = "images/top-image-3.jpg";
  const topImage4 = "images/top-image-4.jpg";
  const topImage5 = "images/top-image-5.jpg";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images section
  const skinCareImage = "images/skinCare/skinCare0.jpeg";
  const makeUpImage = "images/makeUp/makeUp0.jpeg";
  const hairCareImage = "images/hairCare/hairCare0.jpeg";
  const fragranceImage = "images/fragrance/fragrance0.jpeg";
  const bodyCareImage = "images/bodyCare/bodyCare0.jpeg";
  const oralCareImage = "images/oralCare/oralCare0.jpeg";
  const menGroomingImage = "images/menGrooming/menGrooming0.jpeg";
  const organicImage = "images/organic/organic0.jpeg";
  const beautyToolsImage = "images/beautyTools/beautytools0.jpeg";
  const bodyArtImage = "images/bodyArt/bodyArt0.jpeg";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentImageIndex]);

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
        {/* Set a timer of 5 sec to change the images in the carousel  */}
        <div className="carousel-inner">
          <Carousel image={topImage1} isActive={currentImageIndex === 0} />
          <Carousel image={topImage2} isActive={currentImageIndex === 1} />
          <Carousel image={topImage3} isActive={currentImageIndex === 2} />
          <Carousel image={topImage4} isActive={currentImageIndex === 3} />
          <Carousel image={topImage5} isActive={currentImageIndex === 4} />
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
            redirectUrl="/skinCare"
            departmentName="Skin Care"
          />

          {/* <!-- Makeup Department  --> */}
          <Department
            departmentImage={makeUpImage}
            redirectUrl="/makeUp"
            departmentName="Make Up"
          />

          {/* <!-- Haircare Department  --> */}
          <Department
            departmentImage={hairCareImage}
            redirectUrl="/hairCare"
            departmentName="Hair Care"
          />

          {/* <!-- Fragrances Department  --> */}
          <Department
            departmentImage={fragranceImage}
            redirectUrl="/fragrance"
            departmentName="Fragrance"
          />

          {/* <!-- Bodycare Department  --> */}
          <Department
            departmentImage={bodyCareImage}
            redirectUrl="/bodyCare"
            departmentName="Body Care"
          />

          {/* <!-- Equals the icon size --> */}
          <div className="d-none d-lg-block w-100"></div>

          {/* <!-- Oral Care Department  --> */}
          <Department
            departmentImage={oralCareImage}
            redirectUrl="/oralCare"
            departmentName="oralCare"
          />

          {/* <!-- Men's Grooming Department  --> */}
          <Department
            departmentImage={menGroomingImage}
            redirectUrl="/menGrooming"
            departmentName="Men Grooming"
          />

          {/* <!-- Natural and Organic Department  --> */}
          <Department
            departmentImage={organicImage}
            redirectUrl="/organic"
            departmentName="Organic"
          />

          {/* <!-- Beauty Tools and Accessories Department  --> */}
          <Department
            departmentImage={beautyToolsImage}
            redirectUrl="/beautyTools"
            departmentName="Beauty Tools"
          />

          {/* <!-- Body Art  --> */}
          <Department
            departmentImage={bodyArtImage}
            redirectUrl="/bodyArt"
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

      <Footer />

      {/* End Footer  */}

      {/* <!-- scroll go top start --> */}
      {/* <a id="myBtn" className="gotopbtn" href="#body-start">
        <img
          src="https://cdn3.iconfinder.com/data/icons/road-sign/154/road-sign-top-arrow-yellow-attention-512.png"
          width="50"
          height="50"
          loading="lazy"
          alt=""
        />
      </a> */}
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
