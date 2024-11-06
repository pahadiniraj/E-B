import React from "react";
import VegetableBasket from "../../../assets/Timer/Veg.png";
import ManVeg from "../../../assets/Timer/Man.png";
import AddButton from "../../Button/AddButton";
import Stopwatch from "../../Stopwatch/Stopwatch";
import Clock from "../../Clock/Clock";
import { NavLink } from "react-router-dom";

function Timer() {
  return (
    <>
      <div className="bg-[#EDF2EE] md:py-9  pb-5 ">
        <div className="flex justify-center   items-center  gap-5  xs:container xs:mx-auto  ">
          <div className="xxxs:hidden md:block  w-full">
            <img src={VegetableBasket} alt="img" />
          </div>
          <div className="flex flex-col items-center justify-center  gap-2  ">
            <h2 className="text-[#00B207] text-xs ">BEST DEALS</h2>
            <h2 className=" font-semibold text-xl text-center xs:text-2xl md:text-3xl">
              Our Special Products Deal of the Month
            </h2>
            <Clock />
            <NavLink to={"shop"}>
              <AddButton
                className={
                  " bg-[#00B207] rounded-3xl p-2 w-40 text-white font-medium flex justify-center gap-3 items-center hover:bg-[#0bc70b] text-xs mt-5"
                }
                text="Shop Now"
              />
            </NavLink>
          </div>
          <div className="xxxs:hidden md:block w-full relative top-16">
            <img src={ManVeg} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
