import { useEffect, useCallback, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddToCartButton from "../../Components/AddToCartButton/AddToCartButton";
import Slider from "react-slick/lib/slider";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import SocialMediaButtons from "../../Components/SocialMediaButtons/SocialMediaButtons";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Thumbs, FreeMode } from "swiper";

import classes from "./SingleProductsPage.module.scss";

const SinglePorductPage = () => {
  const [similarProducts, setSimilarProducts] = useState([]);
  let product = {};

  const { pId } = useParams();
  const { collection } = useParams();

  const settings = {
    style: { textAlign: "center" },
    dots: false,
    infinite: true,
    navigator: false,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 4,
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

  // const fetchProductsHandler = useCallback(async () => {
  //   try {
  //     const response = await fetch(`http://localhost:8080/product/${pId}`);
  //     const data = await response.json();

  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [pId]);

  const fetchSimilarProductsHandler = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/products/products-category/${collection}`
      );
      const data = await response.json();

      setSimilarProducts(data);
    } catch (error) {
      console.log(error);
    }
  }, [collection]);

  useEffect(() => {
    fetchSimilarProductsHandler();
  }, [fetchSimilarProductsHandler]);

  similarProducts?.forEach((p) => {
    if (p._id === pId) {
      product = p;
    }
  });

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={classes.container}>
      <div className={classes.product_link}>
        <Link to="/">Home</Link>
        <Link to={`/${collection}`}>{collection}</Link>
      </div>

      <div className="margin">
        <div className={classes.product_info}>
          <div className={classes.product_image_box}>
            <Swiper
              style={{
                "--swiper-navigation-color": "#000",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={false}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {product.images?.map((img, i) => (
                <SwiperSlide style={{ cursor: "pointer" }} key={i}>
                  <img
                    src={`http://localhost:8080/${img.imageUrl}`}
                    alt={product.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              style={{ cursor: "pointer" }}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {product.images?.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={`http://localhost:8080/${img.imageUrl}`}
                    alt={product.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={classes.product_info_box}>
            <div className={classes.product_header}>
              <h1>{product.title}</h1>
            </div>

            <div className={classes.product_condition}>
              <label>Condition : </label>
              <span>New product</span>
            </div>

            <div className={classes.product_additional_info}>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi.
              </p>
            </div>

            <div className={classes.price_box}>
              <span>{product.price} $</span>
            </div>

            <div>
              <AddToCartButton wishlist={true} />
            </div>

            <div className={classes.product_availability}>
              <span>formal : in-stock</span>
            </div>

            <SocialMediaButtons />
          </div>
        </div>

        <div className={classes.similar_procuts_wrapper}>
          <h2 className="section_header_text">You Might Also Like</h2>
          <Slider {...settings}>
            {similarProducts?.map((prod, i) => (
              <SingleProduct
                key={i}
                product={prod}
                currentCollection={prod.category}
                ui="grid"
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SinglePorductPage;
