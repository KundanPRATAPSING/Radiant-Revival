import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Header/Navbar";
import Footer from "../../../components/Footer/Footer";
import CartItem from "./CartItem";
import { getSessionData } from "../../Session/Session";
import { Link } from "react-router-dom";
import axios from "axios";

const BASE_URL="https://radiant-revival.vercel.app"

export default function MyCart() {
  const user = getSessionData("userSession");
  const [customerOrders, setCustomerOrders] = useState([]);
  const [initialSubtotal, setInitialSubtotal] = useState(0);
  const [cartSubtotal, setSubTotal] = useState(0);
  const [showPaymentMessage, setShowPaymentMessage] = useState(false)

  function handleCheckout() {
    const userId = getSessionData("ownerSession").userId.customerId;
    setShowPaymentMessage(true)
      const cartItems = [];

      for (let i = 0; i < customerOrders.length; i++) {
        const order = customerOrders[i];

        const cartItem = {
          id: order.id,
          customer_product_category: order.customer_product_category,
          customer_product_image_url: order.customer_product_image_url,
          customer_product_title: order.customer_product_title,
          customer_product_description: order.customer_product_description,
          customer_product_cost: order.customer_product_cost,
          customer_product_image: order.customer_product_image,
          quantity: order.quantity,
        };

        cartItems.push(cartItem);
      }

      axios
        .post(`${BASE_URL}/stripe/create-checkout-session`, {
          userId: userId,
          cartItems,
        })
        .then((response) => {
          if (response.data.url) {
            window.location.href = response.data.url;
          }
        })
        .catch((err) => console.log(err.message));
    }


  function handleQuantityChange(
    id,
    isIncrement,
    customer_product_cost,
    cartQuantity
  ) {
    const updatedOrders = customerOrders.map((order) => {
      if (order.id === id) {
        return {
          ...order,
          quantity: cartQuantity,
        };
      }
      return order;
    });

    setCustomerOrders(updatedOrders);

    const parsedCost = parseInt(customer_product_cost.slice(1));

    if (isIncrement === true) {
      setSubTotal(parsedCost + initialSubtotal);
      setInitialSubtotal(parsedCost + initialSubtotal);
    } else {
      setSubTotal(initialSubtotal - parsedCost);
      setInitialSubtotal(initialSubtotal - parsedCost);
    }

    updateQuantityInBackend(id, cartQuantity);

    async function updateQuantityInBackend(id, quantity) {
      try {
        const response = await fetch(
          `${BASE_URL}/updateCart/updateCart`,
          {
            method: "PUT",
            body: JSON.stringify({ quantity, id }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update quantity in the backend.");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    let isMounted = true; // Create a variable to track the mounted state

    fetchOrders()
      .then((data) => {
        if (isMounted) {
          setCustomerOrders(data);
          calculateInitialSubtotal(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    async function fetchOrders() {
      const response = await fetch(`${BASE_URL}/myCart/myCart`, {
        method: "POST",
        body: JSON.stringify({ email: user.email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    }

    function calculateInitialSubtotal(orders) {
      let subtotal = 0;
      for (let order of orders) {
        const parsedCost = parseInt(order.customer_product_cost.slice(1));
        subtotal += parsedCost * order.quantity;
      }
      setInitialSubtotal(subtotal);
    }

    // Cleanup function to stop the execution
    return () => {
      isMounted = false;
    };
  }, [user.email]);

  return (
    <>
      <Navbar />

        {customerOrders.length === 0 && (
          <>
            <div className="container-fluid mt-100 my-5">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body cart">
                      <div className="col-sm-12 empty-cart-cls text-center">
                        <img
                          src="https://i.imgur.com/dCdflKN.png"
                          width="130"
                          height="130"
                          className="img-fluid mb-4 mr-3"
                          alt="..."
                        />
                        <h3>
                          <strong>Your Cart is Empty</strong>
                        </h3>
                        <h6>Explore our ever growing selection of products</h6>
                        <Link
                          to="/home"
                          className="btn btn-primary cart-btn-transform m-3"
                          data-abc="true"
                        >
                          Start Shopping
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

      {customerOrders.length && (
        <>
          <section className="pt-5 pb-5">
            <div className="container">
              <div className="row w-100">
                <div className="col-lg-12 col-md-12 col-12">
                  <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>

                  <p className="mb-5 text-center">
                    <i className="text-info font-weight-bold">
                      {customerOrders.length}
                    </i>{" "}
                    items in your cart
                  </p>
                  <table
                    id="shoppingCart"
                    className="table table-condensed table-responsive"
                  >
                    <thead>
                      <tr>
                        <th style={{ width: "60%" }}>Product</th>
                        <th style={{ width: "12%" }}>Price</th>
                        <th style={{ width: "10%" }}>Quantity</th>
                        <th style={{ width: "16%" }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {customerOrders.map((item) =>
                        item.quantity > 0 ? (
                          <React.Fragment key={item.id}>
                            <CartItem
                              id={item.id}
                              customer_product_image={
                                item.customer_product_image
                              }
                              customer_product_image_url={
                                item.customer_product_image_url
                              }
                              customer_product_title={
                                item.customer_product_title
                              }
                              customer_product_description={
                                item.customer_product_description
                              }
                              customer_product_cost={item.customer_product_cost}
                              quantity={item.quantity}
                              handleQuantityChange={handleQuantityChange}
                            />
                          </React.Fragment>
                        ) : null
                      )}
                    </tbody>
                  </table>
                  <div className="float-right text-right">
                    <h4>Subtotal:</h4>
                    <h1>
                      {!cartSubtotal
                        ? `$${initialSubtotal}`
                        : `$${cartSubtotal}`}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Checkout */}
              <div className="row mt-4 d-flex align-items-center">
                <div className="col-sm-6 order-md-2 text-right">
                  <button
                    className="btn btn-primary mb-4 btn-lg pl-5 pr-5"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                </div>
                <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                  <Link to="/home">
                    <i className="fas fa-arrow-left mr-2"></i> Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </section>

            {showPaymentMessage && (
        <div className="alert alert-success" role="alert">
            Redirecting to Payment, Please do not Refresh!
        </div>
      )}

          <Footer />
        </>
      )}
    </>
  );
}
