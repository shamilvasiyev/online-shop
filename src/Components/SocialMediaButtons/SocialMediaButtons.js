import React from "react";
import { Link } from "react-router-dom";
import classes from "./SocialMediaButtons.module.scss";

import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

const SocialMediaButtons = () => {
  return (
    <div className={classes.social_media}>
      <Link to="https://www.google.com">
        <button
          className={`${classes.social_media_button} ${classes.facebook}`}
        >
          <ImFacebook />
        </button>
      </Link>

      <Link to="https://www.google.com">
        <button className={`${classes.social_media_button} ${classes.twitter}`}>
          <ImTwitter />
        </button>
      </Link>

      <Link to="https://www.google.com">
        <button
          className={`${classes.social_media_button} ${classes.instagram}`}
        >
          <FaInstagram />
        </button>
      </Link>

      <Link to="https://www.google.com">
        <button className={`${classes.social_media_button} ${classes.youtube}`}>
          <ImYoutube />
        </button>
      </Link>
    </div>
  );
};

export default SocialMediaButtons;
