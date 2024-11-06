import React from "react";
import img from "../../../assets/About/Man2.png";
import imgb from "../../../assets/About/Man2bg.png";
import Icon from "../Icon";

const AboutSecond = () => {
  return (
    <div className="w-full py-10">
      <div
        className=" container mx-auto px-32 bg-cover bg-left-top "
        style={{ backgroundImage: `url(${imgb})` }}
      >
        <div className="flex  gap-10  bg-gradient-to-l from-white from-40%">
          <div className="w-2/4">
            <img src={img} alt="Man Holding veggies" />
          </div>
          <div className="w-2/4 flex flex-col justify-center items-start  ">
            <h1 className=" text-4xl font-semibold">100% Trusted</h1>
            <h1 className=" text-4xl font-semibold">Organic Food Store</h1>
            <p className="text-xs mt-4">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>
            <div className=" grid grid-rows-3 grid-flow-col gap-3 mt-4 w-full">
              {Icon.map((value, index) => (
                <div
                  className="flex items-center justify-start gap-2 "
                  key={index}
                >
                  <div className="bg-green-100 rounded-full p-2">
                    {value.icon}
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold">{value.text}</h2>
                    <p className="text-[9px] text-[#808080]">{value.subText}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSecond;
