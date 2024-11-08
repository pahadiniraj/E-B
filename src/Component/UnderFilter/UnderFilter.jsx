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
        <div className="w-full flex flex-col xxxs:gap-5">
          <div className="md:w-3/6 w-full mt-4   flex justify-center items-center gap-5   ">
            <AllCatagories handleCatagories={handleCatagories} />
            <Rating handleRating={handleRating} />
            <Price handleSelectedPrice={handleSelectedPrice} />
            <PopularTag handleTag={handleTag} />
            <FilterDiscount />
            <SaleProduct />
          </div>
          <div className="w-full ">
            <MainProducts productList={productList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderFilter;
