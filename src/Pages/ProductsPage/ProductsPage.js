import { useEffect, useCallback, useMemo, useState } from "react";

import { useParams, Route, Routes } from "react-router-dom";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import SinglePorductPage from "../SinglePorductPage/SinglePorductPage";
import Pagination from "../../Components/Pagination/Pagination";
import classes from "./ProductsPage.module.scss";

import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const ProductsPage = () => {
  const { collection } = useParams();

  const [products, setProducts] = useState([]);
  const [ui, setUi] = useState("grid");
  const [sort, setSort] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const fetchProductsHandler = useCallback(async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/`);
      const data = await response.json();

      console.log(data);

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  const onChangeHandler = (e) => {
    const { value } = e.target;

    setSort(value);
  };

  const sortedProduct = useMemo(() => {
    let data = products;
    if (!data && data === []) return;

    if (sort === "relevance") products.sort((a, b) => a.onStock - b.onStock0);

    if (sort === "atoz") {
      data.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sort === "ztoa") {
      data.sort((a, b) => b.title.localeCompare(a.title));
    }

    if (sort === "lowtohigh") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "hightolow") data.sort((a, b) => b.price - a.price);

    return data;
  }, [products, sort]);

  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastProducts - productsPerPage;
  const currentProducts = sortedProduct.slice(
    indexOfFirstPost,
    indexOfLastProducts
  );

  console.log(indexOfLastProducts);
  console.log(indexOfFirstPost);
  console.log(currentProducts);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className={classes.products_page}>
      <div className="margin">
        <div className={classes.products_wrapper}>
          {/* <div className={classes.filter_box}>
            <div className={classes.price_filter_box}>
              <h3>Price</h3>
              <div className={classes.price_min_max}>
                <p>
                  $ <span>{}</span> - $ <span>{}</span>
                </p>
              </div>
            </div>
          </div> */}

          <div className={classes.container}>
            <div className={classes.sort_products_container}>
              <div className={classes.change_ui}>
                <div className={classes.change_ui_buttons}>
                  <button
                    disabled={ui === "grid"}
                    style={ui === "grid" ? { color: "#808080" } : null}
                    onClick={() => {
                      setUi("grid");
                    }}
                  >
                    <IoGrid />
                  </button>

                  <button
                    disabled={ui === "list"}
                    style={ui === "list" ? { color: "#808080" } : null}
                    onClick={() => {
                      setUi("list");
                    }}
                  >
                    <FaThList />
                  </button>
                </div>

                <div className={classes.sorted_products_number}>
                  <h4>There are 15 products</h4>
                </div>
              </div>

              <div className={classes.sort_by}>
                <span>Sort by:</span>

                <select
                  className={classes.select_menu}
                  name="sort"
                  defaultValue="default"
                  onChange={onChangeHandler}
                >
                  <option value="relevance">Relevance</option>
                  <option value="atoz">Name, A to Z</option>
                  <option value="ztoa">Name, Z to A</option>
                  <option value="lowtohigh">Price, low to high</option>
                  <option value="hightolow">Price, high to low</option>
                </select>
              </div>
            </div>

            <div
              className={
                ui === "grid"
                  ? classes.products_container_grid
                  : classes.products_container_list
              }
            >
              {currentProducts?.map((p, i) => (
                <SingleProduct
                  ui={ui}
                  product={p}
                  key={i}
                  currentCollection={collection}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={classes.pagination_box}>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default ProductsPage;

// const compare = (a, b) => {
//   if (a.title < b.title) {
//     return -1;
//   }
//   if (a.title > b.title) {
//     return 1;
//   }
//   return 0;
// };

// if (sort === "atoz") {
//   products?.sort((a, b) => {
//     if (a.title.toLowerCase() > b.title.toLowerCase()) {
//       return 1;
//     }

//     if (a.title.toLowerCase() < b.title.toLowerCase()) {
//       return -1;
//     }
//   });
// }

// if (sort === "atoz" && sort === "ztoa") {
//   products?.sort((a, b) =>
//     a.title > b.title ? 1 : b.title > a.title ? -1 : 0
//   );
// }

// if (sort === "atoz") {
//   products?.sort((a, b) => {
//     console.log(b);
//   });

// products?.sort((a, b) => {
//   if (a.title > b.title) return 1;

//   // console.log(textA);
//   // console.log(textB);

//   // return textA > textB ? 1 : (textA < textB) - 1;
// });
// }
