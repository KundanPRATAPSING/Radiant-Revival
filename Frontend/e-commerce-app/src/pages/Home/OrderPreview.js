import React from 'react';
import "../../assets/styles/orderPreview.css"

const PlaceOrderPage = () => {
  const category = 'example-category';
  const price = 9.99;
  const heading = 'Example Heading';
  const description = 'Example Description';

  const image_url = `${category}.png`;
  const cost_price = `$${price.toFixed(2)}`;

  return (
    <main>
      <article className="card">
        <div className="card__img__container">
          <img
            className="card__img"
            src={`static/image/${image_url}`}
            alt="dancing-with-music-illustration"
          />
        </div>
        <div className="card__content">
          <h1 className="card__title">{heading}</h1>
          <p className="card__desc">{description}</p>

          <div className="plan__info">
            <img
              className="plan__icon"
              src="static/image/price_tag.png"
              height="43"
              width="43"
              alt={category}
            />
            <div className="plan__detail">
              <h2 className="plan__title">Price</h2>
              <p className="plan__price">{cost_price}</p>
            </div>
          </div>

          <form action="/confirmed_order" method="POST">
            <input
              type="hidden"
              name="confirmed_category_page"
              value={category}
            />
            <input type="hidden" name="confirmed_price" value={price} />
            <input type="hidden" name="confirmed_heading" value={heading} />
            <input
              type="hidden"
              name="confirmed_description"
              value={description}
            />
            <button className="btn pay__btn">Place Order</button>
          </form>

          <form action="/render_previous_page" method="POST">
            <input type="hidden" name="category_page" value={category} />
            <button className="btn cancel__btn" type="submit">
              Cancel Order
            </button>
          </form>
        </div>
      </article>

      <div className="attribution">
        Sold by <a href="/home">The Inventory Emporium!</a>
      </div>
    </main>
  );
};

export default PlaceOrderPage;
