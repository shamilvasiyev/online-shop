import { Link } from "react-router-dom";

import Slider from "react-slick";

import classes from "./TopCategory.module.scss";
// import img1 from "../../Assets/Images/cover2.jpg";
import destImg from "../../Assets/CategoryImages/dest.jpg";
import boyunbagiImg from "../../Assets/CategoryImages/boyunbagi.jpg";
import qolbaqImg from "../../Assets/CategoryImages/qolbaq.jpg";
import uzukImg from "../../Assets/CategoryImages/uzuk.jpg";
import sirgaImg from "../../Assets/CategoryImages/sirga.jpg";
import xalxaImg from "../../Assets/CategoryImages/xalxa.jpg";
import brosImg from "../../Assets/CategoryImages/bros.jpg";
import saatImg from "../../Assets/CategoryImages/saat.jpg";

import { GrLinkNext } from "react-icons/gr";

const categoryData = [
  {
    column: [
      { text: "Dəst", img: destImg },
      { text: "Boyunbağı", img: boyunbagiImg },
    ],
  },
  {
    column: [
      { text: "Qolbaq", img: qolbaqImg },
      { text: "Üzük", img: uzukImg },
    ],
  },
  {
    column: [
      { text: "Sırğa", img: sirgaImg },
      { text: "Xalxal", img: xalxaImg },
    ],
  },
  {
    column: [
      { text: "Broş", img: brosImg },
      { text: "Saat", img: saatImg },
    ],
  },
];

const TopCategory = () => {
  const settings = {
    style: { textAlign: "center" },
    dots: false,
    infinite: true,
    navigator: false,
    autoplay: true,
    autoplaySpeed: 3500,
    // speed: 500,
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

  return (
    <section className="section_wrapper">
      <h2 className="section_header_text">Top Categories</h2>
      <div className={`${classes.categories} margin`}>
        <Slider {...settings}>
          {categoryData.map((data, i) => (
            <div className={classes.category_column} key={i}>
              <Link to="" className={classes.category}>
                <div className={classes.c_img_box}>
                  <img src={data.column[0].img} alt="" />
                </div>
                <div className={classes.c_link}>
                  <p>{data.column[0].text}</p>
                  <GrLinkNext />
                </div>
              </Link>

              <Link to="" className={classes.category}>
                <div className={classes.c_img_box}>
                  <img src={data.column[1].img} alt="" />
                </div>
                <div className={classes.c_link}>
                  <p>{data.column[1].text}</p>
                  <GrLinkNext />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopCategory;
