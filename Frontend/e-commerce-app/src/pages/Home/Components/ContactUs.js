import React from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <>
      <h2>Contact Us</h2>
      <div className="card">
        <div className="card-body">
          <div className="social-media">
            {/* <!-- facebook --> */}
            <span className="fa-stack fa-sm">
              <i className="fas fa-circle fa-stack-2x"></i>
              <Link to = 'https://www.facebook.com' target="_blank">
                {" "}
                <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>{" "}
              </Link>
            </span>

            {/* <!-- twitter  --> */}
            <span className="fa-stack fa-sm">
              <i className="fas fa-circle fa-stack-2x"></i>
              <Link to = 'https://twitter.com/' target="_blank">
                {" "}
                <i className="fab fa-twitter fa-stack-1x fa-inverse"> </i>{" "}
              </Link>
            </span>

            {/* <!-- instagram --> */}
            <span className="fa-stack fa-sm">
              <i className="fas fa-circle fa-stack-2x"></i>
              <Link to = 'https://www.instagram.com/' target="_blank">
                {" "}
                <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>{" "}
              </Link>
            </span>

            {/* <!-- linkedin --> */}
            <span className="fa-stack fa-sm">
              <i className="fas fa-circle fa-stack-2x"></i>
              <Link to = 'https://in.linkedin.com/' target="_blank">
                {" "}
                <i className="fab fa-invision fa-stack-1x fa-inverse"></i>{" "}
              </Link>
            </span>

            {/* <!-- whatsapp  --> */}
            <span className="fa-stack fa-sm">
              <i className="fas fa-circle fa-stack-2x"></i>
              <Link to = 'https://www.whatsapp.com/' target="_blank">
                {" "}
                <i className="fab fa-whatsapp fa-stack-1x fa-inverse"></i>{" "}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
