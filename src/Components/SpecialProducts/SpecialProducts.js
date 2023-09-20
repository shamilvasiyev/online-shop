import ProductsContainer from "../ProductsContainer/ProductsContainer";
import { useContext, useEffect, useState, useCallback } from "react";
import { ProductContext } from "../../Context/product-context";

// import img1 from "../../Assets/onSale(Top products)/prod8.jpg";
// import img2 from "../../Assets/onSale(Top products)/prod9.jpg";
// import img3 from "../../Assets/onSale(Top products)/prod10.jpg";
// import img4 from "../../Assets/onSale(Top products)/prod11.jpg";

// const dummySpecialProducts = [
//   {
//     id: "13",
//     title: "Yarpaq bağcıqla rəngbərəng mirvari boyunbağı",
//     productPhotos: [img1, img2, img3, img4],
//     price: 50,
//     prop: "On sale",
//     link: "https://www.google.com",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//   },
//   {
//     id: "14",
//     title: "Yarpaq bağcıqla rəngbərəng mirvari boyunbağı",
//     productPhotos: [img2, img1, img3, img4],
//     price: 50,
//     link: "https://www.google.com",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//   },
//   {
//     id: "15",
//     title: "Yarpaq bağcıqla rəngbərəng mirvari boyunbağı",
//     productPhotos: [img3, img1, img2, img4],
//     price: 50,
//     prop: "On sale",
//     link: "https://www.google.com",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//   },
//   {
//     id: "16",
//     title: "Yarpaq bağcıqla rəngbərəng mirvari boyunbağı",
//     productPhotos: [img4, img1, img2, img3],
//     price: 50,
//     prop: "On sale",
//     link: "https://www.google.com",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//   },
// ];

const SpecialProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProductsHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/products/products-category/specialProducts"
      );
      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  return (
    <section className="section_wrapper">
      <h2 className="section_header_text">Special Products</h2>

      <div className="margin">
        <ProductsContainer
          // products={[]}
          products={products}
        />
      </div>
    </section>
  );
};

export default SpecialProducts;
