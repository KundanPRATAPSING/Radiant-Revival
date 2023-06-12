import React from "react";

export default function Carousel({image}) {
  return (
      <div className="carousel-item active" data-interval="5000">
        <img
          src = {image}
          className="d-block vw-100"
          alt="topImage"
        />
        <div className="carousel-caption d-none d-md-block">
          <h3 className="mx-auto text-warning text-uppercase w-75 p-2 b25">
            Unlock Your Beauty
          </h3>
        </div>
      </div>
  );
}

