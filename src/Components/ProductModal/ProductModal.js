import { useEffect, useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "../ProductSlider/ProductSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Thumbs, FreeMode } from "swiper";

import Slider from "react-slick";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrClose } from "react-icons/gr";

import classes from "./ProductModal.module.scss";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import SocialMediaButtons from "../SocialMediaButtons/SocialMediaButtons";
import InStock from "../InStock/InStock";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 1,
  padding: "10px",
};

const ProductModal = ({ product, open, handleClose }) => {
  const [productValue, setProductValue] = useState(1);

  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`http://localhost:8080/${product?.images[i].imageUrl}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <div className={classes.modal_wrapper}>
            <div className={classes.modal_image_box}>
              <Slider {...settings}>
                {product &&
                  product.images &&
                  product.images.map((img, i) => (
                    <div key={i}>
                      <img
                        src={`http://localhost:8080/${img.imageUrl}`}
                        alt=""
                      />
                    </div>
                  ))}
              </Slider>
            </div>

            <div className={classes.product_content}>
              <div className={classes.modal_header}>
                <h3>{product?.title}</h3>

                <button onClick={handleClose}>
                  <GrClose />
                </button>
              </div>

              <div className={classes.product_price_box}>
                <div
                  className={
                    product?.onSalePrice
                      ? classes.price_line_through
                      : classes.product_price
                  }
                >
                  <span>{product?.price}.00$</span>
                </div>

                <div
                  className={classes.product_price}
                  style={
                    product?.onSalePrice
                      ? { display: "flex", marginLeft: "15px" }
                      : { display: "none" }
                  }
                >
                  <span>{product?.onSalePrice}.00$</span>
                  <p>
                    {Math.ceil(
                      ((product?.price - product?.onSalePrice) /
                        product?.price) *
                        100
                    )}
                    % sale
                  </p>
                </div>
              </div>

              <div className={classes.product_desc}>
                <p>{product?.description}</p>
              </div>

              <div className={classes.other_props}>
                <span>Mirvari növü :</span>

                <p>{product?.productType}</p>
              </div>

              <div className={classes.other_props}>
                <span>Mirvari ölçüsü :</span>

                <p>{product?.productSize} mm</p>
              </div>

              <div className={classes.other_props}>
                <span>Metal :</span>

                <p>{product?.metal}</p>
              </div>

              <div className={classes.other_props}>
                <span>Boyunbağı uzunluğu :</span>

                <p>{product?.productLength} sm</p>
              </div>

              <div>
                <AddToCartButton wishlist={false} productsPage={true} />
              </div>

              <InStock onStock={product?.onStock} />

              <SocialMediaButtons />
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ProductModal;
