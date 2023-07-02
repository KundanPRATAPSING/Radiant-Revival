import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/failure.css';
import { motion } from 'framer-motion';

export default function Fail() {
  const failureIcon = "images/failure.png";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.div className="payment-failure-container" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div className="payment-failure-content" variants={contentVariants}>
        <h1 className="payment-failure-heading">Payment Failed!</h1>
        <p className="payment-failure-message">We apologize, but there was an issue processing your payment.</p>
        <p className="payment-failure-message">Please try again later.</p>
        <motion.img
          className="payment-failure-image"
          src={failureIcon}
          alt="Failure"
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.5, delay: 0.4 } }}
        />
        <Link to="/myCart" className="go-to-home-link">Retry Payment</Link>
      </motion.div>
    </motion.div>
  );
}

