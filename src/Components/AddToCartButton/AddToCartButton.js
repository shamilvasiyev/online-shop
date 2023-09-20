import React, { useState } from "react";
import classes from "./AddToCartButton.module.scss";
import { AiFillHeart } from "react-icons/ai";

const AddToCartButton = ({ wishlist, productsPage, currentProduct }) => {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    setValue((prev) => (prev = e.target.value));
  };

  return (
    <div
      className={classes.form_wrapper}
      style={productsPage ? { margin: 0 } : null}
    >
      <input
        style={productsPage ? { display: "none" } : { display: "block" }}
        type="number"
        value={value}
        min="1"
        max="9"
        step="1"
        onChange={handleChange}
      />

      <div className={classes.add_to_cart_button}>
        <button style={productsPage ? { margin: 0, marginTop: "15px" } : null}>
          Add to Cart
        </button>
      </div>

      <div className={classes.wishlist}>
        <button style={{ display: wishlist ? "block" : "none" }}>
          <AiFillHeart />
        </button>
      </div>
    </div>
  );
};

export default AddToCartButton;
