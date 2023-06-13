import React from "react";

export default function Department({departmentImage, departmentName, redirectUrl }) {
  return (
    <div className="col-12 col-sm-4 col-lg">
      <a
        href={redirectUrl}
        className="a text-secondary nav-link"
      >
        <div className="card border-0">
          <img
            src={departmentImage}
            className="card-img-top border border-warning rounded-circle"
            alt="{departmentName}"
          />
          <div className="card-body">
            <h5 className="card-title text-center">{departmentName}</h5>
          </div>
        </div>
      </a>
    </div>
  );
}
