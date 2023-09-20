import "./ProductsContainer.scss";

import React, { useState } from "react";

import Slider from "react-slick/lib/slider";
import SingleProduct from "../SingleProduct/SingleProduct";

const ProductsContainer = ({ products, link }) => {
  const settings = {
    style: { textAlign: "center" },
    dots: false,
    infinite: true,
    navigator: false,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: products.length >= 4 ? 4 : products.length, // Error!!
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="products_wrapper">
        <Slider {...settings}>
          {products?.map((prod, i) => (
            <SingleProduct
              ui={"grid"}
              key={i}
              product={prod}
              currentCollection={prod.category}
            />
          ))}
        </Slider>
        {/* cannot read property of undefined (reading 'add class')  */}
      </div>
    </>
  );
};

export default ProductsContainer;
