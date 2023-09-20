import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import classes from "./Header.module.scss";
import { AiOutlineDown, AiOutlineUp, AiOutlineClose } from "react-icons/ai";
import {
  BsTelephoneFill,
  BsWhatsapp,
  BsInstagram,
  BsSearch,
} from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const totalQuantity = useSelector((state) => state.card.totalQuantity);

  const [showSupport, setShowSupport] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSupportHandler = () => {
    setShowSupport((prev) => !prev);
  };

  const toggleSeacrhHandler = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <header>
      <div className={`margin ${classes.header_container}`}>
        <div className={classes.header_left}>
          <div className={classes.support}>
            <div
              className={classes.support_buttons}
              onClick={toggleSupportHandler}
            >
              <span>Support</span>
              {!showSupport && <AiOutlineDown />}
              {showSupport && <AiOutlineUp />}
            </div>

            <CSSTransition
              in={showSupport}
              timeout={500}
              classNames="appear"
              mountOnEnter
              unmountOnExit
            >
              <div className={classes.supportModal}>
                <div className={classes.supportModalIcons}>
                  <BsTelephoneFill color="#67696c" />
                  <span>+123 456 789</span>
                </div>

                <div className={classes.supportModalIcons}>
                  <BsWhatsapp color="#25D366" />
                  <span>+123 456 789</span>
                </div>

                <div className={classes.supportModalIcons}>
                  <BsInstagram color="#E1306C" />
                  <span>@mirvarist</span>
                </div>
              </div>
            </CSSTransition>
          </div>

          <div className={classes.lang}>
            <p>Az</p>
          </div>
        </div>

        <div className={classes.header_right}>
          <div className={classes.search}>
            <div
              className={classes.search_button}
              onClick={toggleSeacrhHandler}
            >
              {!showSearch && <BsSearch />}
              {showSearch && <AiOutlineClose />}
              <span>Search Products</span>
            </div>

            <CSSTransition
              in={showSearch}
              timeout={500}
              classNames="appear"
              mountOnEnter
              unmountOnExit
            >
              <div className={classes.showModal}>
                <input type="text" />
                <button>
                  <BsSearch />
                </button>
              </div>
            </CSSTransition>
          </div>

          <div className={classes.cart}>
            <Link to="/card" className={classes.cart_button}>
              <HiShoppingBag />
              <span>Your Cart {totalQuantity}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
