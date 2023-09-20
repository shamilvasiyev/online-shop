import { useEffect } from "react";

import Carousel from "../../Components/Carousel/Carousel";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import SpecialProducts from "../../Components/SpecialProducts/SpecialProducts";
import TopCategory from "../../Components/TopCategory/TopCategory";
import Blog from "../../Components/Blog/Blog";

const MainPage = () => {
  return (
    <main>
      <Carousel />
      <TopCategory />
      <PopularProducts />
      <SpecialProducts />
      <Blog />
    </main>
  );
};

export default MainPage;
