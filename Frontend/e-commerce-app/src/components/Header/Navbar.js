import React, { useState } from "react";
import "../../pages/Home/Home.css";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="container-fluid b25">
        <div className="row align-items-center p-2 b25 text-light">
          <div className="col-md-3 d-none d-md-block h4 my-2">
            (+91) 987-297-2339
          </div>
          <div className="col-md-7 d-none d-md-block h2 text-center my-2">
            Welcome to Radiant Revival!
          </div>

          {/* <!-- Logout  --> */}
          <div className="col-6 col-md-2 pr-3">
            <div className="dropdown float-right">
              <button
                className="btn b1 text-white dropdown-toggle btn-outline-white"
                type="button"
                id="dropdownMenuButton"
                onClick={toggleDropdown}
              >
                My account
              </button>
              <div
                className={`dropdown-menu dropdown-menu-right${isDropdownOpen ? " show" : ""}`}
                aria-labelledby="dropdownMenuButton"
              >
                {/* <!-- Profile  --> */}
                <a
                  className="dropdown-item"
                  href="{{url_for('profile')}}"
                  id="flask_profile"
                >
                  Profile
                </a>

                <a className="dropdown-item" href="{{url_for('myorders')}}">
                  My orders
                </a>
                <a className="dropdown-item" href="{{url_for('settings')}}">
                  Account Settings
                </a>
                {/* <!-- Logout  --> */}
                <a
                  className="dropdown-item"
                  href="{{url_for('logout')}}"
                  id="flask_logout"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
