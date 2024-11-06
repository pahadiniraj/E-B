import React from "react";
import img1 from "../../assets/SaleImg/GreenCap.png";
import img2 from "../../assets/SaleImg/RedCap.png";
import img3 from "../../assets/SaleImg/Sijapuri.png";
import Stars from "../Stars/Stars";

const SaleProduct = () => {
  const saleProduct = [
    {
      name: "Red Capsicum",
      cost: "$32.00",
      stars: 4,
      src: img1,
      discount: "$20.99",
    },
    {
      name: "Red Capsicum",
      cost: "$32.00",
      stars: 4,
      src: img2,
      discount: "$20.99",
    },
    {
      name: "Red Capsicum",
      cost: "$32.00",
      stars: 4,
      src: img3,
      discount: "$20.99",
    },
  ];

  return (
    <div className="xxxs:hidden md:block">
      <div>
        <h2 className="font-medium text-medium text-xl pt-2">Sale Product</h2>
        <div className="w-full ">
          {saleProduct.map((val, idx) => (
            <div
              key={idx}
              className="flex justify-start items-center border  my-2  rounded-md hover:border-[#2C742F] gap-3 group shadow hover:shadow-[#4CC951]"
            >
              <div className="w-20 m-1">
                <img src={val.src} alt="img" />
              </div>
              <div>
                <p className="text-xs group-hover:text-[#2C742F]">{val.name}</p>
                <div className="flex gap-2">
                  <p className="text-sm font-medium">{val.cost}</p>
                  <s className="text-sm text-[#999999] ">{val.discount}</s>
                </div>

                <Stars stars={val.stars} className={`text-[#FF8A00] flex`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaleProduct;
