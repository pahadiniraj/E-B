import React from "react";
import AllCatagories from "../Filter/AllCatagories/AllCatagories";
import Rating from "../Filter/Rating/Rating";
import Price from "../Filter/Price/Price";
import PopularTag from "../Filter/PopularTag/PopularTag";
import FilterDiscount from "../FilterDiscount/FilterDiscount";
import SaleProduct from "../SaleProduct/SaleProduct";
import MainProducts from "../MainProducts/MainProducts";

const UnderFilter = ({
  handleCatagories,
  handleRating,
  handleSelectedPrice,
  handleTag,
  productList,
}) => {
  return (
    <div className="w-full">
      <div className="">
        <div className="w-full flex flex-col md:flex-row  xxxs:gap-5">
          <div className="md:w-2/6 w-full mt-4 flex-col   flex  gap-5   ">
            <AllCatagories handleCatagories={handleCatagories} />
            <Rating handleRating={handleRating} />
            <Price handleSelectedPrice={handleSelectedPrice} />
            <PopularTag handleTag={handleTag} />
            <FilterDiscount />
            <SaleProduct />
          </div>
          <div className="w-full md:w-4/6">
            <MainProducts productList={productList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderFilter;
