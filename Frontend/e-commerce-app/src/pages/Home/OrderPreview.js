// import React from 'react';
// import styles from '../../assets/styles/orderPreview.module.css';
// import { useLocation } from 'react-router-dom';

// const OrderPreview = () => {
  
//   // const costPrice = `$${price.toFixed(2)}`;

//   return (
//     <>
//       <main>
//         <article className={styles.card}>
//           <div className={styles.card__img__container}>
//             <img
//               className={styles.card__img}
//               src="https://kellychi22.github.io/frontend-mentor-solutions/05-order-summary-component/images/illustration-hero.svg"
//               alt="dancing-with-music-illustration"
//             />
//           </div>
//           <div className={styles.card__content}>
//             <h1 className={styles.card__title}>Order Summary</h1>
//             <p className={styles.card__desc}>
//               You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
//             </p>

//             <div className={styles.plan__info}>
//               <img
//                 className={styles.plan__icon}
//                 src="https://kellychi22.github.io/frontend-mentor-solutions/05-order-summary-component/images/icon-music.svg"
//                 alt="music-icon"
//               />
//               <div className={styles.plan__detail}>
//                 <h2 className={styles.plan__title}>Annual Plan</h2>
//                 <p className={styles.plan__price}>$59.99/year</p>
//               </div>
//               <button className={`btn ${styles.plan__btn}`}>Change</button>
//             </div>

//             <button className={`btn ${styles.pay__btn}`}>Proceed to Payment</button>
//             <button className={`btn ${styles.cancel__btn}`}>Cancel Order</button>
//           </div>
//         </article>
//       </main>

//       <div className={styles.attribution}>
//         Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
//         Coded by <a href="#">Kelly CHI</a>.
//       </div>
//     </>
//   );
// };

// export default OrderPreview;


import React from 'react';
import styles from '../../assets/styles/orderPreview.module.css';
import { useLocation } from 'react-router-dom';

const OrderPreview = () => {

const location = useLocation();
  const orderData = location.state?.orderData;

  const category = orderData?.category;
  const imageName = orderData?.imageName;
  const imageUrl = orderData?.imageUrl;
  const heading = orderData?.heading;
  const content = orderData?.content;
  const price = orderData?.price;

  const costPrice = `$${price}`;

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
                src="https://kellychi22.github.io/frontend-mentor-solutions/05-order-summary-component/images/icon-music.svg"
                alt="music-icon"
              />
              <div className={styles.orderPreview__planDetail}>
                <h2 className={styles.orderPreview__planTitle}>Annual Plan</h2>
                <p className={styles.orderPreview__planPrice}>{costPrice}</p>
              </div>
              <button className={`btn ${styles.orderPreview__planBtn}`}>Change</button>
            </div>

            <button className={styles.orderPreview__payBtn}>Proceed to Payment</button>
            <button className={styles.orderPreview__cancelBtn}>Cancel Order</button>
          </div>
        </article>
      </main>

      <div className={styles.orderPreview__attribution}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
        Coded by <a href="/">Kelly CHI</a>.
      </div>
    </>
  );
};

export default OrderPreview;
