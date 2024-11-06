import React from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "../../Button/AddButton";

const Banner = ({ name, para, price, middle, src, left, head, right }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
  };

  return (
    <div className="   w-full ">
      <div className=" ">
        <div className="p-3">
          <div
            style={{ backgroundImage: `url(${src})` }}
            className="rounded-lg bg-cover"
          >
            <div
              className={` p-4  ${
                left
                  ? "text-white flex flex-col justify-center px-4 gap-2"
                  : "  "
              } ${right ? "text-black flex flex-col justify-center gap-3 " : ""}
              ${
                middle ? "text-black flex flex-col  items-end  px-4 gap-3 " : ""
              }
              `}
            >
              <div className={`py-2  ${middle ? "text-end " : ""}`}>
                <p className="text-xs">{head}</p>
                <h2 className="text-xl font-semibold w-[140px]">{name}</h2>
                <span className="flex gap-1 items-center">
                  <span className="text-xs">{para}</span>
                  <span className="text-ms  font-medium">{price}</span>
                </span>
              </div>
              <AddButton
                text="Shop now"
                className="bg-white rounded-3xl p-1 w-2/4 text-[#0bc70b] font-medium flex justify-center gap-3 items-center hover:bg-slate-200 text-sm "
                click={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
