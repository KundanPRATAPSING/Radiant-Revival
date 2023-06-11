import React, { useEffect, useState } from "react";
import "./css/Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const isFromSignUp = location.state && location.state.fromSignUp;
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: "",
    });
    const [loginErrors, setLoginErrors] = useState({});
    const [isUser, setIsUser] = useState(false);
    const [toggleShowPassword,setToggleShowPassword] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginUser({
            ...loginUser,
            [name]: value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const [isValidLoginError , isValidUserError] = await Promise.all([
            validateLogin(loginUser),
            validateUser(loginUser)
        ]);

        // Check if validationErrors and existingUserErrors are defined
        const hasLoginErrors = isValidLoginError && Object.keys(isValidLoginError).length > 0;
        const hasUserErrors = isValidUserError && Object.keys(isValidUserError).length > 0;

        setLoginErrors({
            ...isValidLoginError,
            ...isValidUserError
        });

        if (!hasLoginErrors && !hasUserErrors && !isUser) {
            setIsUser(true)
        }
    }

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (Object.keys(loginErrors).length > 0) {
                event.preventDefault();
                event.returnValue = ""; // Required for Chrome and legacy browsers
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [loginErrors]);


    useEffect(() => {
       if (Object.keys(loginErrors).length === 0 && isUser) {
            try {
                 navigate("/home", { state: { fromSignUp: true } });
            } catch (error) {
                // Handle navigation error
                console.error("Error occurred during navigation:", error);
            }
        }
    }, [loginErrors, isUser, navigate]);

    function validateLogin(loginUser) {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (loginUser.email === "") {
            errors.email = "Email is required!";
        } else if (!regex.test(loginUser.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (loginUser.password === "") {
            errors.password = "Password is required!";
        }

        return errors;
    }

    async function validateUser(loginUser){
        try {
            const isUser = await fetch('http://localhost:8080/login', {
                method: 'POST',
                body: JSON.stringify(loginUser),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (isUser.ok) {
                const response = await isUser.json();
                return response.errors;
            }
            else {
                throw new Error("Validation request failed");
            }
        }
        catch (error) {
            console.error("Error during validation:", error.message);
            throw error;
        }
    }

    function handleToggleShowPassword(){
        setToggleShowPassword(!toggleShowPassword)
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

                            {isFromSignUp && (
                                <div className="alert alert-info" role="alert">
                                    Account Created Successfully
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
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

                                {/* Display Error Message  */}
                                {loginErrors.email && (
                                    <div className="alert alert-danger" role="alert">
                                        {loginErrors.email}
                                    </div>
                                )}

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
                                        type={toggleShowPassword ? "text" : "password"}
                                        className="input"
                                        id="loginPassword"
                                        placeholder="Enter your Password"
                                        name="password"
                                        value={loginUser.password}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Display Error Message  */}
                                {loginErrors.password && (
                                    <div className="alert alert-danger" role="alert">
                                        {loginErrors.password}
                                    </div>
                                )}

                                {/* <!-- show password --> */}
                                <div className="OptionsContainer">
                                    <div className="checkboxContainer">
                                        <input
                                            type="checkbox"
                                            id="login_show_password"
                                            className="checkbox"
                                            onClick={handleToggleShowPassword}
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
