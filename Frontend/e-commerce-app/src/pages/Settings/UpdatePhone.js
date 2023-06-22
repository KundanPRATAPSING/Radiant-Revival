import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { getSessionData } from "../Session/Session";

export default function UpdatePhone() {
  const phoneImage = require("../../assets/images/phone_number.png");
  const updatePhoneImage = require("../../assets/images/update_phone_number.png");
  const loginLeftImage = require("../../assets/images/login_left.png");

  const location = useLocation();
  const profileInfo = location.state;
  const navigate = useNavigate();
  const userEmail = getSessionData("userSession");

  const [newPhone, setnewPhone] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function cancelChange() {
    navigate(-1);
  }

  function handlePhoneChange(e) {
    setnewPhone(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const [changeErrors, updateError] = await Promise.all([
      validateChange(),
      validateUpdate(),
    ]);

    const hasChangeErrors =
      changeErrors && Object.keys(changeErrors).length > 0;
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
      email: userEmail.email,
      phoneNumber: newPhone, // Example: New Phone to update
    };

    try {
      const response = await fetch("http://localhost:8080/updateProfile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        await response.json();
        console.log("Update successful:");
      } else {
        await response.json();
        console.error("Update failed:");
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  }

  function validateChange() {
    const errors = {};

    if (newPhone === "") {
      errors.update = "Field cannot be empty";
    }

    if (newPhone === profileInfo.phoneNumber) {
      errors.samePhone = "New Phone Number cannot be same as the current";
    }

    return errors;
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isUpdated === true) {
      try {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
          navigate("/home");
        }, 500);
      } catch (error) {
        console.error("Error occurred during navigation:", error);
      }
    }
  }, [formErrors, isUpdated, navigate]);

  return (
    <>
      <div class="LoginPageContainer">
        <div class="LoginPageInnerContainer">
          <div class="ImageContianer">
            <img src={loginLeftImage} class="GroupImage" alt="..." />
          </div>

          <div class="LoginFormContainer">
            <div class="LoginFormInnerContainer">
              <div class="LogoContainer">
                <img src={updatePhoneImage} class="logo" alt="..." />
              </div>
              <header class="header">Update Phone Number</header>
              <header class="subHeader">
                Switched to new number <b>Don't worry!</b> Update the current😇
              </header>

              {showSuccessMessage && (
                <div className="alert alert-success" role="alert">
                  Phone Number updated successfully
                </div>
              )}

              <form onSubmit={handleSubmit} method="POST">
                {/* <!-- Phone Number  --> */}
                <div class="inputContainer">
                  <label class="label" for="phone_number">
                    <img src={phoneImage} class="labelIcon" alt="..." />
                    <span>Previous Number</span>
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    class="input"
                    id="phone_number"
                    placeholder="Your previous Phone Number"
                    value={profileInfo.phoneNumber}
                    readOnly
                  />
                </div>

                {/* <!-- New Phone Number  --> */}
                <div class="inputContainer">
                  <label class="label" for="update_phone_number">
                    <img src={updatePhoneImage} class="labelIcon" alt="..." />
                    <span>New Phone Number </span>
                  </label>
                  <input
                    type="tel"
                    name="update_phone_number"
                    class="input"
                    id="update_phone_number"
                    placeholder="Enter your new Phone Number"
                    value={newPhone}
                    onChange={handlePhoneChange}
                  />
                </div>

                {/* Display Error Message  */}
                {formErrors.update && (
                  <div className="alert alert-danger" role="alert">
                    {formErrors.update}
                  </div>
                )}

                {formErrors.samePhone && (
                  <div className="alert alert-warning" role="alert">
                    {formErrors.samePhone}
                  </div>
                )}

                <button class="LoginButton" type="submit">
                  Update{" "}
                </button>
                <button
                  class="LoginButton"
                  type="submit"
                  onClick={cancelChange}
                >
                  Cancel{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
