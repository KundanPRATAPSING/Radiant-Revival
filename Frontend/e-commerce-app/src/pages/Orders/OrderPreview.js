import { React, useState, useEffect } from "react";
import styles from "../../assets/styles/orderPreview.module.css";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { getSessionData } from "../Session/Session";

const OrderPreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state?.orderData;

  const category = orderData?.category;
  const imageName = orderData?.imageName;
  const imageUrl = orderData?.imageUrl;
  const heading = orderData?.heading;
  const content = orderData?.content;
  const price = orderData?.price;

  const costPrice = `$${price}`;
  const priceTag = require("../../assets/images/price_tag.png");
  const [previousPage, setPreviousPage] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showCancelMessage, setShowCancelMessage] = useState(false);
  const userSession = getSessionData("userSession");

  useEffect(() => {
    if (category === "Skin Care") {
      setPreviousPage("/skinCare");
    }
    if (category === "Make Up") {
      setPreviousPage("/makeUp");
    }
    if (category === "Hair Care") {
      setPreviousPage("/hairCare");
    }
    if (category === "Fragrance") {
      setPreviousPage("/fragrance");
    }
    if (category === "Body Care") {
      setPreviousPage("/bodyCare");
    }
    if (category === "Oral Care") {
      setPreviousPage("/oralCare");
    }
    if (category === "Men Grooming") {
      setPreviousPage("/menGrooming");
    }
    if (category === "Organic") {
      setPreviousPage("/organic");
    }
    if (category === "Beauty Tools") {
      setPreviousPage("/beautyTools");
    }
    if (category === "Body Art") {
      setPreviousPage("/bodyArt");
    }
  }, [previousPage, category]);

  async function placeOrder(e) {
    e.preventDefault();
    try {
      const order = {
        customer_email: userSession.email,
        customer_product_category: category,
        customer_product_image: imageName,
        customer_product_image_url: imageUrl,
        customer_product_title: heading,
        customer_product_description: content,
        customer_product_cost: costPrice,
      };

      const response = await fetch("http://localhost:8080/customer_orders", {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsSubmit(true); // Set the flag to true upon successful submission
      } else {
        throw new Error("Order failed");
      }
    } catch (error) {
      console.error("Error during payment process:", error.message);
    }
  }

  useEffect(() => {
    if (isSubmit) {
      try {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
          navigate(previousPage);
        }, 1000);
      } catch (error) {
        // Handle navigation error
        console.error("Error occurred during navigation:", error);
      }
    }
  }, [isSubmit, navigate, previousPage]);

  useEffect(() => {
    if (showCancelMessage) {
      setTimeout(() => {
        setShowCancelMessage(false);
        navigate(previousPage);
      }, 1000);
    }
  }, [showCancelMessage, navigate, previousPage]);

  const handleGoBack = () => {
    setShowCancelMessage(true);
  };

  return (
    <>
      <main className={styles.orderPreview__body}>
        <article className={styles.orderPreview__card}>
          <div className={styles.orderPreview__imgContainer}>
            <img
              className={styles.orderPreview__img}
              src={imageUrl}
              alt="dancing-with-music-illustration"
            />
          </div>
          <div className={styles.orderPreview__content}>
            <h1 className={styles.orderPreview__title}>{heading}</h1>
            <p className={styles.orderPreview__desc}> {content} </p>

            <div className={styles.orderPreview__planInfo}>
              <img
                className={styles.orderPreview__planIcon}
                src={priceTag}
                height={40}
                width={40}
                alt="price tag"
              />
              <div className={styles.orderPreview__planDetail}>
                <p className={styles.orderPreview__planPrice}>{costPrice}</p>
              </div>
            </div>

            <form onSubmit={placeOrder}>
              <button className={styles.orderPreview__payBtn} type="submit">
                Add to Cart 
              </button>
            </form>
            <button
              className={styles.orderPreview__cancelBtn}
              onClick={handleGoBack}
            >
              Go Back
            </button>
          </div>
        </article>
      </main>

      {showSuccessMessage && (
        <div className="alert alert-success" role="alert">
          Added to Cart
        </div>
      )}

      {showCancelMessage && (
        <div className="alert alert-warning" role="alert">
          Order not Added  
        </div>
      )}

      <div className={styles.orderPreview__attribution}>
        Sold by{" "}
        <Link to="/home" target="_blank" rel="noopener noreferrer">
          {" "}
          Radiant Revival!{" "}
        </Link>
      </div>
    </>
  );
};

export default OrderPreview;
