import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AiFillHeart } from "react-icons/ai";
import { ImEye } from "react-icons/im";
import { RiShoppingCart2Fill } from "react-icons/ri";
import ProductModal from "../ProductModal/ProductModal";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

import { useDispatch } from "react-redux";
import { cardActions } from "../../Store/index";

import "./SingleProduct.scss";

const SingleProduct = ({ product, currentCollection, ui }) => {
  const [open, setOpen] = useState(false);
  const [currentID, setCurrentId] = useState("");
  const [currentProduct, setCurrentProduct] = useState(null);

  const dispatch = useDispatch();

  const handleOpen = (e) => {
    setCurrentId(e.currentTarget._id);
    setOpen(true);
  };

  useEffect(() => {
    if (currentID === product.id) {
      setCurrentProduct(product);
    }
  }, [currentID, product]);

  const handleClose = () => setOpen(false);

  const addProductHandler = () => {
    let cardProduct;
    let currentId;

    if (currentId === product.id) {
      cardProduct = product;
    }

    if (cardProduct !== null) {
      dispatch(
        cardActions.addItemToCard({
          id: cardProduct._id,
          price: Number(cardProduct.price),
          title: cardProduct.title,
          image: cardProduct.images[0].imageUrl,
        })
      );
    }
  };

  return (
    <Fragment>
      <ProductModal
        product={currentProduct}
        handleClose={handleClose}
        open={open}
      />

      <div
        className={ui === "grid" ? "single_product" : "single_product_list"}
        key={product?._id}
      >
        <div className="product_image">
          <Link to={`/${currentCollection}/${product._id}`}>
            <img
              // src={`http://localhost:8080/${product?.images[0].imageUrl}` || ""}
              alt={product?.title}
            />
          </Link>

          <div className="action_buttons">
            <button>
              <AiFillHeart />
            </button>
            <button onClick={handleOpen} id={product?._id}>
              <ImEye />
            </button>
            <button
              onClick={addProductHandler}
              style={ui === "grid" ? { display: "block" } : { display: "none" }}
            >
              <RiShoppingCart2Fill />
            </button>
          </div>
        </div>

        <div className="product_info">
          <Link to={`/${currentCollection}/${product?._id}`}>
            <h5>{product?.title}</h5>
          </Link>

          <div className="price_box">
            <span>{product?.price} $</span>
          </div>

          <div
            className="product_desc"
            style={ui === "list" ? { display: "block" } : { display: "none" }}
          >
            <p>{product?.description}</p>

            <div
              className={`stock ${
                product?.onStock === "true" ? "inStock" : "outOffStock"
              } `}
            >
              <span>
                {product?.onStock === "true" ? "İn Stock" : "Out Of Stock"}
              </span>
            </div>

            <div onClick={addProductHandler}>
              <AddToCartButton productsPage={true} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleProduct;
