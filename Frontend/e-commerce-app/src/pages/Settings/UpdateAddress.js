import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { getSessionData } from "../Session/Session";

const BASE_URL="https://radiant-revival.vercel.app"

export default function UpdateAddress() {
  const addressImage = "images/address.png";
  const updateAddressImage = "images/update_address.png";
  const loginLeftImage = "images/login_left.png";

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
      const response = await fetch(`${BASE_URL}/updateProfile/updateProfile`, {
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
      <div className="LoginPageContainer">
        <div className="LoginPageInnerContainer">
          <div className="ImageContianer">
            <img src={loginLeftImage} className="GroupImage" alt="..." />
          </div>

          <div className="LoginFormContainer">
            <div className="LoginFormInnerContainer">
              <div className="LogoContainer">
                <img src={updateAddressImage} className="logo" alt="..." />
              </div>
              <header className="header">Update Address </header>
              <header className="subHeader">
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
                <div className="inputContainer">
                  <label className="label" htmlFor="address">
                    <img src={addressImage} className="labelIcon" alt="..." />
                    <span>Previous Location</span>
                  </label>
                  <input
                    type="textarea"
                    name="address"
                    className="input"
                    id="address"
                    placeholder="Your previous address"
                    value={profileInfo.address}
                    readOnly
                  />
                </div>

                {/* <!-- New Address  --> */}
                <div className="inputContainer">
                  <label className="label" htmlFor="update_address">
                    <img src={updateAddressImage} className="labelIcon" alt="..." />
                    <span>New Address </span>
                  </label>
                  <input
                    type="text"
                    name="update_address"
                    className="input"
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

                <button className="LoginButton" type="submit">
                  {" "}
                  Update{" "}
                </button>
                <button
                  className="LoginButton"
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
