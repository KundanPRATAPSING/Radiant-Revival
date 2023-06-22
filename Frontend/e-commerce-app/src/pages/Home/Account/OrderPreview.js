import React from "react";
import styles from "../../../assets/styles/orderPreview.module.css"
import { useLocation, Link, useNavigate } from "react-router-dom";

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

  function handleGoBack() {
    navigate(-1);
  }

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
                src={require("../../../assets/images/price_tag.png")}
                height={40}
                width={40}
                alt="price tag"
              />
              <div className={styles.orderPreview__planDetail}>
                <p className={styles.orderPreview__planPrice}>{costPrice}</p>
              </div>
            </div>

            <button className={styles.orderPreview__payBtn}>
              Proceed to Payment
            </button>
            <button className={styles.orderPreview__cancelBtn} onClick= {handleGoBack}>
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
};

export default OrderPreview;
