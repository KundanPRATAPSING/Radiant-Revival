import React, { useCallback, useEffect, useState } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL

export default function CartItem({
  id,
  customer_product_image,
  customer_product_image_url,
  customer_product_title,
  customer_product_description,
  customer_product_cost,
  quantity,
  handleQuantityChange,
}) {
  const [cartQuantity, setCartQuantity] = useState(quantity);
  const [isIncrement, setIsIncrement] = useState(true);
  const [previousValue, setPreviousValue] = useState(quantity);
  const [shouldCallHandleChange, setShouldCallHandleChange] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState(false);

  function handleDeleteRequest(){
    deleteRequest(id);
    window.location.reload()
  }

  const deleteRequest = useCallback(
    async (id) => {
      try {
        const response = await fetch(
          `${BASE_URL}/cancelOrder/cancelOrder`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id }),
          }
        );

        if (response.ok) {
          setDeleteRecord(!deleteRecord);
          await response.json();
          console.log("Record removed successfully:");
        } else {
          await response.json();
          console.error("Deletion failed:");
        }
      } catch (error) {
        console.error("Deletion failed:", error);
      }
    },
    [deleteRecord]
  );

  useEffect(() => {
    if (shouldCallHandleChange) {
      handleQuantityChange(
        id,
        isIncrement,
        customer_product_cost,
        previousValue
      );
      console.log(cartQuantity);
      setShouldCallHandleChange(false);
      if (cartQuantity <= 0) {
        deleteRequest(id);
        window.location.reload()
      }
    }
  }, [
    shouldCallHandleChange,
    id,
    isIncrement,
    customer_product_cost,
    previousValue,
    handleQuantityChange,
    cartQuantity,
    deleteRequest,
  ]);

  function handleChange(e) {

    setCartQuantity(e.target.value);
    const currentValue = parseInt(e.target.value, 10);

    if (currentValue < previousValue) {
      setIsIncrement(false);
    } else {
      setIsIncrement(true);
    }

    setPreviousValue(currentValue);
    setShouldCallHandleChange(true);
  }

  return (
    <>
      <tr>
        <td data-th="Product">
          <div className="row">
            <div className="col-md-3 text-left">
              <img
                src={customer_product_image_url}
                alt=""
                className="img-fluid d-none d-md-block rounded mb-2 shadow "
                height={250}
                width={250}
              />
            </div>
            <div className="col-md-9 text-left mt-sm-2">
              <h4>{customer_product_title}</h4>
              <p className="font-weight-light">
                {customer_product_description}
              </p>
            </div>
          </div>
        </td>
        <td data-th="Price">{customer_product_cost}</td>
        <td data-th="Quantity">
          <input
            type="number"
            className="form-control form-control-lg text-center"
            value={cartQuantity}
            onChange={handleChange}
          />
        </td>
        <td className="actions" data-th="">
          <div className="text-right">
            <button className="btn btn-white border-secondary bg-white btn-md mb-2" onClick={()=> handleDeleteRequest(id)}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
