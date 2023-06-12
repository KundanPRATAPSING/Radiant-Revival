import React from "react";

export default function Department({skinCareImage, redirectUrl, departmentName}) {
  return (
    <div className="col-12 col-sm-4 col-lg">
      <a
        href={redirectUrl}
        className="a text-secondary nav-link"
      >
        <div className="card border-0">
          <img
            src="https://www.ashleyfurniture.com/on/demandware.static/-/Sites-site-catalog-ashley-us/default/dw9bd05fc1/department-icons/sofas-and-couches.png"
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
