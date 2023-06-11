import React, { useState } from "react";
import "./Login.css";
import { Link ,useLocation } from "react-router-dom";

export default function Login() {

    const location = useLocation();
    const isFromSignUp = location.state && location.state.fromSignUp;
    const [loginUser,setLoginUser] = useState({
        'email': "",
        'password': "",
    })

    function handleChange(e){
        const {name,value} = e.target;
        setLoginUser({
            ...loginUser,
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log({loginUser})
    }

  return (
    <>

      {/* Signup container  */}
      <div className="LoginPageContainer">
        <div className="LoginPageInnerContainer">
          <div className="ImageContianer">
            <img
              src={require("./images/login_left.png")}
              alt="Login left"
              className="GroupImage"
            />
          </div>
          <div className="LoginFormContainer">
            <div className="LoginFormInnerContainer">
              <div className="LogoContainer">
                <img
                  src={require("./images/login_logo.png")}
                  className="logo"
                  alt="login-logo"
                />
              </div>
              <header className="header">Login </header>
              <header className="subHeader">
                Welcome to <b>The Inventory Emporium!</b> Please Enter your
                Details
              </header>

              {isFromSignUp && <div className="alert alert-info" role="alert">
                  Account Created Successfully
                </div>
                }

              <form onSubmit = {handleSubmit}>
                {/* <!-- Email  --> */}
                <div className="inputContainer">
                  <label className="label" htmlFor="loginEmail">
                    <img
                      src={require("./images/login_email.png")}
                      className="labelIcon"
                      alt="email-logo"
                    />
                    <span>Email Address*</span>
                  </label>
                  <input
                    type="email"
                    className="input"
                    id="loginEmail"
                    placeholder="Enter your Email Address"
                    name="email"
                    value={loginUser.email}
                    onChange={handleChange}
                  />
                </div>

                {/* <!-- Password --> */}
                <div className="inputContainer">
                  <label className="label" htmlFor="loginPassword">
                    <img
                      src={require("./images/login_pass.png")}
                      className="labelIcon"
                      alt="password-logo"
                    />
                    <span>Password*</span>
                  </label>
                  <input
                    type="password"
                    className="input"
                    id="loginPassword"
                    placeholder="Enter your Password"
                    name="password"
                    value={loginUser.password}
                    onChange={handleChange}
                  />
                </div>

                {/* <!-- show password --> */}
                <div className="OptionsContainer">
                  <div className="checkboxContainer">
                    <input
                      type="checkbox"
                      id="login_show_password"
                      className="checkbox"
                    />
                    <label htmlFor="login_show_password">Show Password</label>
                  </div>
                </div>

                <button className="LoginButton" type="submit">
                  Login
                </button>
                <header className="subHeader">
                  <p>
                    Don't have an account
                    <Link
                      className="btn btn-outline-dark mx-2 my-2"
                      to="/"
                      role="button"
                      id="login_button"
                    >
                      Sign Up
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
