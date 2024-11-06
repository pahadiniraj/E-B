import BreadCrums from "./BreadCrums/BreadCrums";
import FilterProduct from "../Filter/FilterProduct/FilterProduct";
import UnderFilter from "../UnderFilter/UnderFilter";
import { useState, useEffect } from "react";
import Pagenation from "../Pagenation/Pagenation";
import { useSelector } from "react-redux";

function Shop() {
  const allItems = useSelector((state) => state.allCart.items);
  const [select, setSelect] = useState("");
  const [categories, setCategories] = useState("");
  const [rating, setRating] = useState([]);
  const [tag, setTag] = useState([]);
  const [price, setPrice] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    filterProducts();
  }, [select, categories, rating, tag, price, currentPage]);

  const filterProducts = () => {
    let filteredList = allItems;

    if (select) {
      filteredList = filteredList.filter(
        (product) => product.description === select
      );
      setFilteredProducts(filteredList);
    }

    if (categories) {
      filteredList = filteredList.filter(
        (product) => product.category === categories
      );
      setFilteredProducts(filteredList);
    }

    if (rating.length) {
      filteredList = filteredList.filter((product) =>
        rating.includes(parseInt(product.stars).toString())
      );
      setFilteredProducts(filteredList);
    }

    if (tag.length) {
      filteredList = filteredList.filter((product) =>
        tag.includes(product.tag)
      );
      setFilteredProducts(filteredList);
    }

    if (price.length) {
      filteredList = filteredList.filter(
        (product) =>
          parseInt(product.prices) > price[0] &&
          parseInt(product.prices) < price[1]
      );
      setFilteredProducts(filteredList);
    }

    setFilteredProducts(
      filteredList.slice(currentPage * 15, (currentPage + 1) * 15)
    );
  };

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const onListSelected = (value) => {
    setSelect(value);
  };

  const handleCatagories = (value) => {
    setCategories(value);
  };

  const handleRating = (value) => {
    setRating(value);
  };

  const handleTag = (value) => {
    setTag(value);
  };

  const handleSelectedPrice = (value) => {
    setPrice(value);
  };

  const handleCount = () => {
    return filteredProducts.length;
  };

  return (
    <div className="md:container md:mx-auto    md:px-8 xxxs:px-5 xxs:px-10 ">
      <FilterProduct onGetSelect={onListSelected} length={handleCount()} />
      <UnderFilter
        handleCatagories={handleCatagories}
        handleRating={handleRating}
        handleTag={handleTag}
        handleSelectedPrice={handleSelectedPrice}
        productList={filteredProducts}
      />
      <Pagenation
        handlePageClick={handlePageClick}
        totalPages={Math.ceil(allItems.length / 10)}
      />
    </div>
  );
}

export default Shop;
