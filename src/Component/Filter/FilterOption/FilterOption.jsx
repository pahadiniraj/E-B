import React from "react";
import AllCatagories from "../AllCatagories/AllCatagories";
import Price from "../Price/Price";
import Rating from "../Rating/Rating";
import PopularTag from "../PopularTag/PopularTag";

const FilterOption = ({ isOpen }) => {
  return (
    <div className="">
      <div className="bg-red-200">
        {isOpen && (
          <div className="bg-red-200">
            <div className=" absolute top-14 left-1 w-72 accent-[#00B207] ">
              <div className="flex  flex-col justify-start   gap-2 ">
                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterOption;
