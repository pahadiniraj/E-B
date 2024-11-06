import React from "react";
import { LuSettings2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import FilterOption from "../FilterOption/FilterOption";
const FilterProduct = ({ onGetSelect, length }) => {
  const handleOnChange = (event) => {
    onGetSelect(event.target.value);
  };

  return (
    <div className="">
      <div className=" mt-4   ">
        <div className="flex justify-between md:container md:mx-auto     ">
          <div className="md:flex  md:w-2/5  ">
            <div className="w-full md:block ">
              <div className="bg-[#00B207] rounded-3xl text-white text-sm xxxs:hidden  md:w-3/6 px-2 py-3 md:justify-center  md:flex md:gap-3 ">
                <div className="text-sm">Filter</div>
                <div className="">
                  <LuSettings2 className="text-xl " />
                </div>
              </div>
            </div>

            <div className="flex justify-center   items-center md:gap-4 ">
              <div>
                <p className="text-xs text-[#808080]">Sort by:</p>
              </div>
              <div className=" text-slate-500 text-xs  border rounded-md ">
                <label htmlFor="filter-select">
                  <select
                    onChange={handleOnChange}
                    id="filter-select"
                    className=" focus:outline-none p-2  rounded-md"
                  >
                    <option value="">All</option>
                    <option value="latest"> Latest</option>
                    <option value="popular">Popular</option>
                    <option value="sale">Sale</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-1 text-xs items-center ">
            {" "}
            <p className="font-bold ">{length}</p>
            <p className="text-[#666666]">Result Found</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
