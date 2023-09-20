import NavigationButton from "./NavigationButton/NavigationButton";
import { useCallback, useState, useEffect } from "react";
import "./PopularProducts.scss";
import TopProducts from "../TopProducts/TopProducts";
import NewArrival from "../NewArrival/NewArrival";
import BestSellers from "../BestSellers/BestSellers";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import ProductsContainer from "../ProductsContainer/ProductsContainer";

const navigationData = [
  {
    id: "1",
    text: "Top products",
    // content: <TopProducts />,
  },
  {
    id: "2",
    text: "New Arrival",
    // content: <NewArrival />,
  },
  {
    id: "3",
    text: "Best Sellers",
    // content: <BestSellers />,
  },
];

const PopularProducts = ({ productsHandler }) => {
  const [products, setProducts] = useState([]);
  const [activeButton, setActiveButton] = useState("1");
  let fetchEndpoint;

  if (activeButton === "1") {
    fetchEndpoint = "topProducts";
  }
  if (activeButton === "2") {
    fetchEndpoint = "newArrival";
  }
  if (activeButton === "3") {
    fetchEndpoint = "bestSellers";
  }

  const activeProductLink = useCallback(
    () =>
      navigationData.map((item) => (
        <NavigationButton
          onClickButton={() => setActiveButton(item.id)}
          class={activeButton === item.id ? "navigation_button_active" : ""}
          text={item.text}
          key={item.id}
        />
      )),
    [activeButton]
  );

  const fetchProductsHandler = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/products/products-category/${fetchEndpoint}`
      );
      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }, [fetchEndpoint]);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  return (
    <section className="section_wrapper">
      <h2 className="section_header_text">Popular products</h2>
      <div className="margin">
        <div className="productActiveBtnWrapper">{activeProductLink()}</div>

        <div className="productContainer">
          {navigationData.map((content) => (
            <div
              style={activeButton === content.id ? {} : { display: "none" }}
              key={content.id}
            >
              {<ProductsContainer products={products} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
