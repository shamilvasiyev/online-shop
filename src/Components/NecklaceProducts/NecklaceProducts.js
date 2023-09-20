import React, { useState, useCallback, useEffect } from "react";
import { Routes, Route, Outlet, useParams } from "react-router-dom";
import ProductsPage from "../../Pages/ProductsPage/ProductsPage";
import SinglePorductPage from "../../Pages/SinglePorductPage/SinglePorductPage";

const NecklaceProducts = () => {
  const { collection } = useParams();
  const [products, setProducts] = useState([]);

  const fetchProductsHandler = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8080/product/necklace");
      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  console.log(products);

  return (
    <>
      <ProductsPage products={products} url={collection} />
      {/* <Routes>
        <Route
          path="/necklace/:pId"
          element={<SinglePorductPage products={products} />}
        />
      </Routes>

      <Outlet></Outlet> */}
    </>
  );
};
export default NecklaceProducts;
