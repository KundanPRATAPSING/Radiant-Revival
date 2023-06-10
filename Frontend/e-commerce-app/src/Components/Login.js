import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <>
            {/* Signup container  */}
            <div className="LoginPageContainer">
                <div className="LoginPageInnerContainer">
                    <div className="ImageContianer">
                        <img
                            src={require('./images/login_left.png')}
                            alt="Login left"
                            className="GroupImage"
                        />
                    </div>
                    <div className="LoginFormContainer">
                        <div className="LoginFormInnerContainer">
                            <div className="LogoContainer">
                                <img
                                    src={require('./images/login_logo.png')}
                                    className="logo"
                                    alt="login-logo"
                                />
                            </div>
                            <header className="header">Login </header>
                            <header className="subHeader">
                                Welcome to <b>The Inventory Emporium!</b> Please
                                Enter your Details
                            </header>

                            <form>
                                {/* <!-- Email  --> */}
                                <div className="inputContainer">
                                    <label className="label" htmlFor="email">
                                        <img
                                            src={require('./images/login_email.png')}
                                            className="labelIcon"
                                            alt="email-logo"
                                        />
                                        <span>Email Address*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="input"
                                        id="loginEmailAddress"
                                        placeholder="Enter your Email Address"
                                        name="email"
                                    />
                                </div>

                                {/* <!-- Password --> */}
                                <div className="inputContainer">
                                    <label className="label" htmlFor="password">
                                        <img
                                            src={require('./images/login_pass.png')}
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
                                        <label htmlFor="login_show_password">
                                            Show Password
                                        </label>
                                    </div>
                                </div>

                                <button className="LoginButton" type="submit">
                                    Sign Up
                                </button>
                                <header className="subHeader">
                                    <p>
                                        Don't have an account
                                        <a
                                            className="btn btn-outline-dark mx-1 my-2"
                                            href="{{url_for('login')}}"
                                            role="button"
                                            id="login_button"
                                        >
                                            Sign Up
                                        </a>
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
