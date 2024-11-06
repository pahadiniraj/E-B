import React from "react";
import img from "../../assets/FilterDisImg/Banner.png";
import AddButton from "../Button/AddButton";
const FilterDiscount = () => {
  return (
    <div className="my-2 xxxs:hidden md:block">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="  text-center  rounded-xl bg-top "
      >
        <div className="flex flex-col h-[295px] j py-4 ">
          <div>
            <span className="text-xl">
              <h2>
                <span className="text-2xl text-[#FF8A00] mr-2 font-semibold">
                  79%
                </span>
                Discount
              </h2>
            </span>
          </div>
          <div className="text-sm text-[#4D4D4D]">
            <p>on your first order</p>
          </div>
          <AddButton
            text="Shop Now"
            className={`flex gap-2 justify-center items-center text-[#00B207] text-sm font-semibold`}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterDiscount;
