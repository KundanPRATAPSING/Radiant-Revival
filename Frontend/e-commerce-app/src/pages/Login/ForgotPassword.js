import React, { useEffect, useState } from "react";
import styles from "../../assets/styles/forgotPassword.module.css";
import { useNavigate } from "react-router";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState({})
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const [isValidUserError] = await Promise.all([
      validateEmail()
    ]);

    const hasUserErrors =
      isValidUserError && Object.keys(isValidUserError).length > 0;

    setFormError({
      ...isValidUserError,
    });

    if (!hasUserErrors && !isVerified) {
      setIsVerified(true);
    }
    
  }

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isVerified) {
      try {
        navigate("/updatePassword", { state: { email: email } });
      } catch (error) {
        // Handle navigation error
        console.error("Error occurred during navigation:", error);
      }
    }
  }, [formError, email, isVerified, navigate]);

    async function validateEmail(){
        try {
      const response = await fetch("http://localhost:8080/forgotPassword", {
        method: "POST",
        body: JSON.stringify({ "email": email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const isUser = await response.json();
        return isUser.errors;
      } else {
        throw new Error("Validation request failed");
      }
    } catch (error) {
      console.error("Error during validation:", error.message);
      throw error;
    }
    }

  return (
    <>
      <h1 className={styles.customHeading}>Forgot your password?</h1>
      <hr className={styles.forgotPassword__hr} />
      <h3 className={styles.customSubheading}>Enter your email address to reset</h3>

      <form onSubmit={handleSubmit} method="post" className={styles.forgotPassword__form + " " + styles.customForm}>
        <label htmlFor="email" className={styles.forgotPassword__label + " " + styles.customLabel}>
          Email
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          required
          className={styles.forgotPassword__input + " " + styles.customInput}
        />
        <button type="submit" className={styles.forgotPassword__button + " " + styles.customButton}>
          Submit
        </button>
        
        {/* Display Error Message  */}
        {formError.email && (
            <div className="alert alert-danger" role="alert">
                {formError.email}
            </div>
        )}
        
      </form>
    </>
  );
}
