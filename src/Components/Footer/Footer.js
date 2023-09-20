import { Link } from "react-router-dom";

import classes from "./Footer.module.scss";

import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className={`margin ${classes.footer_wrapper}`}>
        <div className={classes.store_info}>
          <h4>Magaza haqqinda</h4>
          <div className={classes.info_item}>
            <BsTelephoneFill />
            <span>+123 456 789</span>
          </div>

          <div className={classes.info_item}>
            <IoIosMail />
            <span>company@gmail.com</span>
          </div>
        </div>

        <div className={classes.footer_links}>
          <h4>Kataloq</h4>
          <Link to="/">Prices Drop</Link>
          <Link to="/">Best Products</Link>
          <Link to="/">New arrival</Link>
          <Link to="/">Dest</Link>
          <Link to="/">Bizim secdiklerimiz</Link>
        </div>

        <div className={classes.footer_links}>
          <h4>Komek</h4>
          <Link to="/">Axtar</Link>
          <Link to="/">Haqqimizda</Link>
          <Link to="/">Catdirilma sertleri</Link>
          <Link to="/">Odeme sertleri</Link>
          <Link to="/">En cox verilen suallar</Link>
        </div>

        <div className={classes.footer_social_media}>
          <h4>Elaqe</h4>
          {/* <form>
            <input type="text" placeholder="E-poct" />
            <button>Abune ol</button>
          </form>
          <div className={classes.social}>
            <Link to="">
              <FaFacebookF />
            </Link>
            <Link to="">
              <FaTwitter />
            </Link>
            <Link to="">
              <FaInstagram />
            </Link>
            <Link to="">
              <FaYoutube />
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
