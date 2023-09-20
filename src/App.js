import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";

import "./App.css";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import SinglePorductPage from "./Pages/SinglePorductPage/SinglePorductPage";

import Carousel from "./Components/Carousel/Carousel";
import TopCategory from "./Components/TopCategory/TopCategory";
import PopularProducts from "./Components/PopularProducts/PopularProducts";
import SpecialProducts from "./Components/SpecialProducts/SpecialProducts";
import Blog from "./Components/Blog/Blog";
import Cart from "./Pages/Cart/Cart";
import BlogsPage from "./Pages/BlogsPage/BlogsPage";
import SingleBlogPage from "./Pages/SingleBlogPage/SingleBlogPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <TopCategory />
              <PopularProducts />
              <SpecialProducts />
              <Blog />
            </>
          }
        />
        <Route path="/card" element={<Cart />} />
        <Route path="/:collection" element={<ProductsPage />} />
        <Route path="/:collection/:pId" element={<SinglePorductPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:bId" element={<SingleBlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
