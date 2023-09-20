import React from "react";
import classes from "./InStock.module.scss";

const InStock = ({ onStock }) => {
  return (
    <div className={onStock ? classes.in_stock : classes.out_of_stock}>
      <span>{onStock ? "InStock" : "OutOfStock"}</span>
    </div>
  );
};

// true/false deyerlerinin dogru olmasi

export default InStock;
