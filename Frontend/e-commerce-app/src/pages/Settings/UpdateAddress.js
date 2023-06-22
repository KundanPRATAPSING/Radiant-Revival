import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { getSessionData } from "../Session/Session";

export default function UpdateAddress() {
  const addressImage = require("../../assets/images/address.png");
  const updateAddressImage = require("../../assets/images/update_address.png");
  const loginLeftImage = require("../../assets/images/login_left.png");

  const location = useLocation();
  const profileInfo = location.state;
  const navigate = useNavigate();
  const userEmail = getSessionData("userSession");

  const [newAddress, setNewAddress] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function cancelChange() {
    navigate(-1);
  }

  function handleAddressChange(e) {
    setNewAddress(e.target.value);
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
      address: newAddress, // Example: New address to update
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

    if (newAddress === "") {
      errors.update = "Field cannot be empty";
    }

    if (newAddress === profileInfo.address) {
      errors.sameAddress = "New Address cannot be same as the current";
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
                <img src={updateAddressImage} class="logo" alt="..." />
              </div>
              <header class="header">Update Address </header>
              <header class="subHeader">
                Not in the previous location <b>Don't worry!</b> Update where
                you are😇
              </header>

              {showSuccessMessage && (
                <div className="alert alert-success" role="alert">
                  Address updated successfully
                </div>
              )}

              <form onSubmit={handleSubmit} method="POST">
                {/* <!-- Address  --> */}
                <div class="inputContainer">
                  <label class="label" for="address">
                    <img src={addressImage} class="labelIcon" alt="..." />
                    <span>Previous Location</span>
                  </label>
                  <input
                    type="textarea"
                    name="address"
                    class="input"
                    id="address"
                    placeholder="Your previous address"
                    value={profileInfo.address}
                    readOnly
                  />
                </div>

                {/* <!-- New Address  --> */}
                <div class="inputContainer">
                  <label class="label" for="update_address">
                    <img src={updateAddressImage} class="labelIcon" alt="..." />
                    <span>New Address </span>
                  </label>
                  <input
                    type="text"
                    name="update_address"
                    class="input"
                    id="update_address"
                    placeholder="Enter your new address"
                    value={newAddress}
                    onChange={handleAddressChange}
                  />
                </div>

                {/* Display Error Message  */}
                {formErrors.update && (
                  <div className="alert alert-danger" role="alert">
                    {formErrors.update}
                  </div>
                )}

                {formErrors.sameAddress && (
                  <div className="alert alert-warning" role="alert">
                    {formErrors.sameAddress}
                  </div>
                )}

                <button class="LoginButton" type="submit">
                  {" "}
                  Update{" "}
                </button>
                <button
                  class="LoginButton"
                  type="submit"
                  onClick={cancelChange}
                >
                  {" "}
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
