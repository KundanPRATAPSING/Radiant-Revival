import React from "react";
import styles from "../../../assets/styles/orderPreview.module.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function OrderImage(props) {
  const location = useLocation();
  
  const {
    customer_product_image_url,
    customer_product_title,
    customer_product_description,
    customer_product_cost,
  } = location.state;

  const priceTag = require("../../../assets/images/price_tag.png");

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

              <form>
              <button className={styles.orderPreview__payBtn} type="submit">
                    Proceed to Payment 
              </button>
            </form>
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
