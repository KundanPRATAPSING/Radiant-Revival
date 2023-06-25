import React from "react";
import styles from "../../../assets/styles/orderPreview.module.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

export default function OrderImage(props) {
  const location = useLocation();
  
  const {
    id,
    customer_product_image_url,
    customer_product_title,
    customer_product_description,
    customer_product_cost,
  } = location.state;

  const priceTag = require("../../../assets/images/price_tag.png");


  function handleCheckout() {

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
      .post('http://localhost:8080/stripe/create-checkout-session', {
        cartItems,
        userId: id,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

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

              <button className={styles.orderPreview__payBtn} type="button" onClick={handleCheckout}>
                Proceed to Payment 
              </button>
            <button
              className={styles.orderPreview__cancelBtn}
            >
              Cancel Order 
            </button>
          </div>
        </article>
      </main>

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
