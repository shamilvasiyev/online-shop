import img1 from "../../Assets/Images/cover.png";

import classes from "./Carousel.module.scss";
import Slider from "react-slick/lib/slider";

import CarouselNavigationButton from "./CarouselNavigationButton";

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  autoPlay: true,
  navigator: false,
  autoplaySpeed: 5000,
  // speed: 3500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: (
    <CarouselNavigationButton
      customClass={classes.right_arrow}
      icon={<MdOutlineArrowForwardIos />}
    />
  ),
  prevArrow: (
    <CarouselNavigationButton
      icon={<MdOutlineArrowBackIos />}
      customClass={classes.left_arrow}
    />
  ),
};

const Carousel = () => {
  return (
    <section className={classes.carousel_wrapper}>
      <Slider {...settings}>
        <div className={classes.swiper_slide}>
          <div className={classes.carousel_content}>
            <div className={classes.image_box}>
              <img src={img1} alt="Carousel image" />
            </div>
          </div>
        </div>

        <div className={classes.swiper_slide}>
          <div className={classes.carousel_content}>
            <div className={classes.image_box}>
              <img src={img1} alt="Carousel image" />
            </div>
            <div className={classes.info_box}>
              <h3>Lorem ipsum dolor sit amet</h3>
              <h2>Nullam imperdiet tempus tempus</h2>
              <p>
                Morbi tristique libero vel aliquam vehicula. Fusce condimentum
                velit sit amet augue rutrum, eget luctus mauris porta.
              </p>
              <button>Shop now</button>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Carousel;
