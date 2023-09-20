import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./Components/ScrollToTop/ScrollToTop";
import { Provider } from "react-redux";
import store from "./Store";

// import "../slick-carousel/slick/slick.css";

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import "swiper/css/bundle";

import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Wrapper>
      <Provider store={store}>
        <App />
      </Provider>
    </Wrapper>
  </BrowserRouter>
);
