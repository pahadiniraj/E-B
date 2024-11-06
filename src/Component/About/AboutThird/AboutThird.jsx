import React from "react";
import img from "../../../assets/About/Man3.png";
import AddButton from "../../Button/AddButton";
import { FaCheck } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const AboutThird = () => {
  const para = [
    {
      icon: <FaCheck />,
      para: "Sed in metus pellentesque.",
    },
    {
      icon: <FaCheck />,
      para: "Fusce et ex commodo, aliquam nulla efficitur, tempus lorem..",
    },
    {
      icon: <FaCheck />,
      para: "Maecenas ut nunc fringilla erat varius.",
    },
  ];
  return (
    <div className="w-full">
      <div className="container  mx-auto px-32">
        <div className="flex mt-10 gap-10">
          <div className="w-2/4 flex flex-col justify-center items-start">
            <h1 className=" text-4xl font-semibold">We Delivered, You </h1>
            <h1 className=" text-4xl font-semibold">Enjoy Your Order.</h1>
            <p className="text-sm mt-4">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
              ultrices consectetur velit dapibus eu. Mauris sollicitudin
              dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor
              bibendum nunc eget elementum.
            </p>
            {para.map((value, index) => (
              <div className="mt-4" key={index}>
                <div className="flex gap-3 text-xs">
                  <div className="bg-green-200  rounded-full">{value.icon}</div>
                  <span className="text-xs">{value.para}</span>
                </div>
              </div>
            ))}

            <NavLink className="w-full" to="/shop">
              <AddButton
                text="Shop Now"
                className={`w-2/6 mt-3 bg-[#00B207] text-white hover:bg-green-600 flex justify-center items-center gap-2 p-1 rounded-3xl`}
              />
            </NavLink>
          </div>
          <div className="w-3/6">
            <img src={img} alt="Man Holding veggies" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThird;
