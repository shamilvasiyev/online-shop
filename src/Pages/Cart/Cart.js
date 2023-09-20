import React, { useState, useCallback, useEffect, Fragment } from "react";
import Slider from "react-slick/lib/slider";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";

import classes from "./Cart.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { cardActions } from "../../Store";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const cardItems = useSelector((state) => state.card.items);
  const totalQuantity = useSelector((state) => state.card.totalQuantity);
  const totalPrices = cardItems?.map((p) => p.totalPrice);
  const summary = totalPrices.reduce((a, b) => a + b, 0);

  console.log(cardItems);

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fetchProductsHandler = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8080/product/topProducts");
      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  const addProductHandler = (e) => {
    const currentProductId = e.target.id;
    const currentProduct = cardItems?.find((p) => p.id === currentProductId);
    const { id, price } = currentProduct;

    dispatch(
      cardActions.addItemToCard({
        id,
        price,
      })
    );
  };

  const removeProductHandler = (e) => {
    const pId = e.target.id;

    dispatch(cardActions.removeItemFromCard(pId));
  };

  const deleteProductFromCard = (e) => {
    const pId = e.target.id;

    dispatch(cardActions.deleteFromCard(pId));
  };

  return (
    <Fragment>
      <section className={classes.card_wrapper}>
        <div className="margin">
          <div className={classes.card}>
            <div className={classes.card_items}>
              <div className={classes.items_header}>
                <h1>Shopping Cart</h1>
              </div>

              <div className={classes.items_content}>
                {cardItems.length === 0 ? (
                  <h2>There are no more items in your cart</h2>
                ) : (
                  cardItems.map((item) => (
                    <div className={classes.cardSimpleProduct} key={item.id}>
                      <div className={classes.cardProductImageBox}>
                        <img
                          src={`http://localhost:8080/${item.image}`}
                          alt={item.title}
                        />
                      </div>

                      <div className={classes.cardProductInfo}>
                        <h5>{item.title}</h5>
                        {/* Link to product */}
                      </div>

                      <div className={classes.action_buttons}>
                        <button id={item.id} onClick={removeProductHandler}>
                          {/* <AiOutlineMinus /> */}
                          <i id={item.id}>&minus;</i>
                        </button>
                        <span>{item.quantity}</span>
                        <button id={item.id} onClick={addProductHandler}>
                          {/* <AiOutlinePlus /> */}
                          <i id={item.id}>&#43;</i>
                        </button>
                      </div>

                      <div className={classes.productTotalPrice}>
                        <span>{item.totalPrice} $</span>
                      </div>

                      <div className={classes.removeProductBox}>
                        <button onClick={deleteProductFromCard} id={item.id}>
                          <i id={item.id}>&#128465;</i>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className={classes.card_items_price}>
              <div className={classes.item_commom_info}>
                <div className={classes.item_price}>
                  <p>{totalQuantity} items</p>

                  <span>${summary}</span>
                </div>

                <div className={classes.buy_button}>
                  <button>Buy now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_wrapper">
        <h2 className="section_header_text">Popular Products</h2>
        <div className="margin">
          <div className="products_container_wrapper">
            <Slider {...settings}>
              {products.map((prod, i) => (
                <SingleProduct
                  key={i}
                  product={prod}
                  currentCollection={prod.category}
                  ui={"grid"}
                />
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <div className={classes.allProducts}>
        <button>All Products</button>
      </div>
    </Fragment>
  );
};

export default Cart;
