import { Link } from "react-router-dom";
import { FaGift } from "react-icons/fa";

import classes from "./Nav.module.scss";
import logo from "../../Assets/Images/logo.png";

const Nav = () => {
  return (
    <nav>
      <div className="margin">
        <div className={classes.nav_container}>
          <Link to="/" className={classes.logo_box}>
            <img src={logo} alt="Logo" />
          </Link>

          <div className={classes.nav_links}>
            <Link to="/set">Dəst</Link>
            <Link to="/necklace">Boyunbağı</Link>
            <Link to="/bracelet">Qolbaq</Link>
            <Link to="/ring">Üzük</Link>
            <Link to="/earrings">Sırğa</Link>
            <Link to="/xalxal">Xalxal</Link>
            <Link to="/brooch">Broş</Link>
            <Link to="/watch">Saat</Link>
          </div>

          <Link to="" className={classes.best_offer}>
            <FaGift />
            <span>Xüsusi təklif</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
