// import { useContext, useState, useCallback, useEffect } from "react";
// import { ProductContext } from "../../Context/product-context";
// import img1 from "../../Assets/onSale(Top products)/prod4.jpg";
// import img2 from "../../Assets/onSale(Top products)/prod5.jpg";
// import img3 from "../../Assets/onSale(Top products)/prod6.jpg";
// import img4 from "../../Assets/onSale(Top products)/prod7.jpg";
// import ProductsContainer from "../ProductsContainer/ProductsContainer";

// const dummyNewProducts = [
//   {
//     id: "5",
//     title: "Yarpaq bağcıqla rəngbərəng mirvari boyunbağı",
//     productPhotos: [img3, img2, img1, img4],
//     price: 50,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//   },
//   {
//     id: "6",
//     title: "Yarpaq bağcıqla rəngbərəng mirvari boyunbağı",
//     productPhotos: [img1, img2, img3, img4],
//     price: 50,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//   },
//   {
//     id: "7",
//     title: "Yarpaq bağcıqla rəngbərəng mirvari boyunbağı",
//     productPhotos: [img4, img3, img1, img2],
//     price: 50,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//   },
//   {
//     id: "8",
//     title: "Yarpaq bağcıqla rəngbərəng mirvari boyunbağı",
//     productPhotos: [img2, img4, img3, img1],
//     price: 50,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//   },
// ];

// const NewArrival = () => {
//   // const [products, setProducts] = useState([]);

//   // const fetchProductsHandler = useCallback(async () => {
//   //   try {
//   //     const response = await fetch("http://localhost:8080/product/newArrival");
//   //     const data = await response.json();

//   //     setProducts(data);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }, []);

//   // useEffect(() => {
//   //   fetchProductsHandler();
//   // }, [fetchProductsHandler]);

//   // const { products } = useContext(ProductContext);

//   // const newArrival = products.filter((p) => p.category === "electronics");

//   return (
//     <ProductsContainer
//       products={[]}
//       // products={products}
//     />
//   );
// };

// export default NewArrival;
