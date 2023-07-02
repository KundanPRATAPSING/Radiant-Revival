import React, { useEffect, useState } from "react";
import styles from "../../../assets/styles/orderPreview.module.css";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Payment(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [delteRecord, setDeleteRecord] = useState(false);
  const [showCancelMessage, setShowCancelMessage] = useState(false);
  const [showPaymentMessage, setShowPaymentMessage] = useState(false);

  const {
    id,
    customer_product_image_url,
    customer_product_title,
    customer_product_description,
    customer_product_cost,
  } = location.state;

  const priceTag = "../images/price_tag.png";

  useEffect(() => {
    if (delteRecord) {
      try {
        setShowCancelMessage(true);
        setTimeout(() => {
          setShowCancelMessage(false);
          navigate('/myCart');
        }, 1000);
      } catch (error) {
        // Handle navigation error
        console.error("Error occurred during navigation:", error);
      }
    }
  }, [delteRecord, navigate]);

  async function cancelOrder() {
    try {
      const response = await fetch("http://localhost:8080/cancelOrder/cancelOrder", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id: id}),
      });

      if (response.ok) {
        setDeleteRecord(!delteRecord)
        await response.json();
        console.log("Record removed successfully:");
      } else {
        await response.json();
        console.error("Deletion failed:");
      }
    } catch (error) {
      console.error("Deletion failed:", error);
    }
  }

  function handleCheckout() {
    setShowPaymentMessage(true);
    const cartItems = [
      {
        id,
        customer_product_image_url,
        customer_product_title,
        customer_product_description,
        customer_product_cost,
      },
    ];

    axios
      .post("http://localhost:8080/stripe/create-checkout-session", {
        cartItems,
        userId: id,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <>
      {/* {console.log({ imageUrl })} */}
      <main className={styles.orderPreview__body}>
        <article className={styles.orderPreview__card}>
          <div className={styles.orderPreview__imgContainer}>
            <img
              className={styles.orderPreview__img}
              src={customer_product_image_url}
              alt="dancing-with-music-illustration"
            />
          </div>
          <div className={styles.orderPreview__content}>
            <h1 className={styles.orderPreview__title}>
              {customer_product_title}
            </h1>
            <p className={styles.orderPreview__desc}>
              {" "}
              {customer_product_description}{" "}
            </p>

            <div className={styles.orderPreview__planInfo}>
              <img
                className={styles.orderPreview__planIcon}
                src={priceTag}
                height={40}
                width={40}
                alt="price tag"
              />
              <div className={styles.orderPreview__planDetail}>
                <p className={styles.orderPreview__planPrice}>
                  {customer_product_cost}
                </p>
              </div>
            </div>

            <button
              className={styles.orderPreview__payBtn}
              type="button"
              onClick={handleCheckout}
            >
              Proceed to Payment
            </button>
            <button
              className={styles.orderPreview__cancelBtn}
              onClick={cancelOrder}
            >
              Delete from Cart
            </button>
          </div>
        </article>
      </main>

      {showCancelMessage && (
        <div className="alert alert-danger" role="alert">
            Order Removing from Cart
        </div>
      )}

      {showPaymentMessage && (
        <div className="alert alert-success" role="alert">
            Redirecting to Payment, Please do not Refresh!
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
}
