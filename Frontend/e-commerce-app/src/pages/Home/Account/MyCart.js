import React, { useState, useEffect } from "react";
import { getSessionData } from "../../Session/Session";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function MyCart(props) {
  const user = getSessionData("userSession");
  const [customerOrders, setCustomerOrders] = useState([]);
  const location = useLocation();
  const username = location.state;

  useEffect(() => {
    let isMounted = true; // Create a variable to track the mounted state

    fetchOrders()
      .then((data) => {
        if (isMounted) {
          setCustomerOrders(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    async function fetchOrders() {
      const response = await fetch("http://localhost:8080/myCart/myCart", {
        method: "POST",
        body: JSON.stringify({ email: user.email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    }

    // Cleanup function to stop the execution
    return () => {
      isMounted = false;
    };
  }, [user.email]);

  return (
    <>
      {/* <!-- Navbar top --> */}
      <div className="navbar-top">
        <div className="title">
          <h1>My Cart</h1>
        </div>

        {/* <!-- Navbar --> */}
        <ul>
          <li>
            <Link to="/home">
              <i className="fa fa-home fa-2x"></i>
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <i className="fa fa-sign-out-alt fa-2x"></i>
            </Link>
          </li>
        </ul>
        {/* <!-- End --> */}
      </div>
      {/* <!-- End --> */}

      {/* <!-- Sidenav --> */}
      <div className="sidenav">
        <div className="profile">
          <img
            src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png"
            alt=""
            width="100"
            height="100"
          />

          <div className="name">{username}</div>
          <div className="job">Customer</div>
        </div>

        <div className="sidenav-url">
          <div className="url">
            <Link to="/myOrders" className="active">
              My Orders
            </Link>
            <hr align="center" />
          </div>
        </div>
      </div>
      {/* <!-- End --> */}

      <div className="main my-4">
        {!customerOrders.length && (
          <>
            <div className="container-fluid  mt-100">
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

        {customerOrders.map((order) => (
          <React.Fragment key={order.id}>
            <h2>{order.customer_product_category}</h2>
            <div className="card">
              <div className="card-body">
                <Link
                  to="/payment"
                  state={{
                    id: order.id,
                    customer_product_image: order.customer_product_image,
                    customer_product_image_url:
                      order.customer_product_image_url,
                    customer_product_title: order.customer_product_title,
                    customer_product_description:
                      order.customer_product_description,
                    customer_product_cost: order.customer_product_cost,
                  }}
                >
                  <i className="fa fa-pen fa-xs edit"></i>{" "}
                </Link>
                <table>
                  <tbody>
                    <tr>
                      <td>Product Name</td>
                      <td> : </td>
                      <td>{order.customer_product_title}</td>
                    </tr>
                    <tr>
                      <td>Product Category:</td>
                      <td>:</td>
                      <td>{order.customer_product_category}</td>
                    </tr>
                    <tr>
                      <td>Product Price:</td>
                      <td>:</td>
                      <td>{order.customer_product_cost}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
