import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function UpdatePassword() {
  const loginLeftImage = require("../../assets/images/login_left.png");
  const resetPasswordImage = require("../../assets/images/reset_password.png");
  const loginEmailImage = require("../../assets/images/login_email.png");
  const loginPassImage = require("../../assets/images/login_pass.png");

  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetPassword, setResetPassword] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state.email;

  function toggleResetPassword() {
    setShowResetPassword(!showResetPassword);
  }

  function handleReset(e) {
    setResetPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const [changeErrors, updateError] = await Promise.all([validateChange(), validateUpdate()]);

    const hasChangeErrors = changeErrors && Object.keys(changeErrors).length > 0;
    const hasUpdateError = updateError && Object.keys(updateError).length > 0;

    setFormErrors({
      ...changeErrors,
      ...updateError,
    });

    if (!hasChangeErrors && !hasUpdateError) {
      setIsUpdated(true);
    }
  }

  async function validateUpdate() {
    const updateData = {
      email: email,
      password: resetPassword, // Example: New Password to update
      confirmPassword: resetPassword, // Example: New Confirm Password to update
    };

    try {
      const response = await fetch("http://localhost:8080/updatePassword/updatePassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        await response.json();
      } else {
        const errorData = await response.json();
        return errorData.errors;
      }
    } catch (error) {
      return { password: "Update Failed" };
    }
  }

  function validateChange() {
    const errors = {};

    if (resetPassword === "") {
      errors.password = "Field cannot be empty";
    }

    return errors;
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isUpdated === true) {
      try {
        navigate("/", { state: { fromUpdatePassword: true } });
      } catch (error) {
        throw new error(error);
      }
    }
  }, [formErrors, isUpdated, navigate]);

  return (
    <>
      <div className="LoginPageContainer">
        <div className="LoginPageInnerContainer">
          <div className="ImageContianer">
            <img src={loginLeftImage} className="GroupImage" alt="..." />
          </div>

          <div className="LoginFormContainer">
            <div className="LoginFormInnerContainer">
              <div className="LogoContainer">
                <img src={resetPasswordImage} className="logo" alt="..." />
              </div>
              <header className="header">Reset Password</header>
              <header className="subHeader">
                Don't remember the password <b>Change anytime!</b>
              </header>

              <form onSubmit={handleSubmit} method="PUT">
                {/* <!-- Existing Email id  --> */}
                <div className="inputContainer">
                  <label className="label" htmlFor="emailAddress">
                    <img
                      src={loginEmailImage}
                      className="labelIcon"
                      alt="..."
                    />
                    <span>Email Address*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    id="emailAddress"
                    value={email}
                    readOnly
                  />
                </div>

                {/* <!-- change Password  --> */}
                <div className="inputContainer">
                  <label className="label" htmlFor="update_password">
                    <img src={loginPassImage} className="labelIcon" alt="..." />
                    <span>New Password*</span>
                  </label>
                  <input
                    type={showResetPassword ? "text" : "password"}
                    name="update_password"
                    className="input"
                    id="update_password"
                    placeholder="Enter your new Password"
                    value={resetPassword}
                    onChange={handleReset}
                  />
                </div>

                {/* Display Error Message */}
                {formErrors.password && (
                  <div className="alert alert-warning" role="alert">
                    {formErrors.password}
                  </div>
                )}

                {/* <!-- Show Password  --> */}
                <div className="OptionsContainer">
                  <div className="checkboxContainer">
                    <input
                      type="checkbox"
                      id="show_changed_password"
                      className="checkbox"
                      onClick={toggleResetPassword}
                    />
                    <label htmlFor="show_changed_password">Show Password</label>
                  </div>
                </div>
                <button className="LoginButton" type="submit">
                  Reset Password
                </button>
                <header className="subHeader">
                  <p>
                    Already Remember?
                    <Link
                      className="btn btn-outline-dark mx-1 my-2"
                      to="/"
                      role="button"
                      id="direct_register"
                    >
                      Login
                    </Link>
                  </p>
                </header>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
