import React from "react";
import AddButton from "../../Button/AddButton";
import Img1 from "../../../assets/Banner/Milk.png";
import Img2 from "../../../assets/Banner/Drink.png";
import Img3 from "../../../assets/Banner/Breakfast.png";
import Banner from "./Banner";

export const BannerCom = () => {
  const banner = [
    {
      name: "100% Fresh Cow Milk",
      para: "Starting at",
      price: "$14.99",
      button: (
        <AddButton
          className={
            "bg-[#00B207] rounded-3xl p-2 w-48 text-white font-medium flex justify-center gap-3 items-center hover:bg-[#0bc70b]"
          }
        ></AddButton>
      ),
      src: Img1,
      left: true,
    },
    {
      name: "Water & Soft Drink",
      head: "DRINK SALE",

      button: (
        <AddButton
          className={
            "bg-[#00B207] rounded-3xl p-2 w-48 text-white font-medium flex justify-center gap-3 items-center hover:bg-[#0bc70b]"
          }
        ></AddButton>
      ),
      src: Img2,
      middle: true,
    },
    {
      name: "Quick Breakfast",
      head: "100% ORGANIC ",

      button: (
        <AddButton
          className={
            "bg-[#00B207] rounded-3xl p-2 w-48 text-white font-medium flex justify-center gap-3 items-center hover:bg-[#0bc70b]"
          }
        ></AddButton>
      ),
      src: Img3,
      right: true,
    },
  ];

  return (
    <>
      <div className="w-full py-16 xxxs:hidden md:block ">
        <div className="flex container mx-auto  ">
          {banner.map((value, index) => (
            <Banner
              head={value.head}
              key={index}
              name={value.name}
              para={value.para}
              price={value.price}
              button={value.button}
              src={value.src}
              left={value.left}
              right={value.right}
              middle={value.middle}
            ></Banner>
          ))}
        </div>
      </div>
    </>
  );
};
