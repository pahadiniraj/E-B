import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const AllCatagories = ({ handleCatagories }) => {
  const list = [
    {
      name: "Fresh Fruit",
      category: "freshfruit",
    },
    {
      name: "Vegetables",
      category: "vegetables",
    },
    {
      name: "Cooking",
      category: "cooking",
    },
    {
      name: "Snacks",
      category: "snacks",
    },
    {
      name: "Beverages",
      category: "beverages",
    },
    {
      name: "Beauty & Health",
      category: "beautyandhealth",
    },
    {
      name: "Bread & Bakery",
      category: "breadandbakery",
    },
  ];

  const [showList, setShowList] = useState(false);

  const handleCatagoriesClick = () => {
    setShowList(!showList);
  };

  return (
    <div className="border-b border-slate-200 py-3 ">
      <div className="">
        <button
          className="w-full text-left flex items-center justify-between "
          onClick={handleCatagoriesClick}
        >
          <div className="text-xs font-medium md:text-base ">
            All Catagories
          </div>
          <div className="text-xs md:text-lg">
            {showList ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </button>
      </div>
      {showList && (
        <div className="py-2 ">
          {list.map((val, idx) => (
            <div
              className="py-1 text-xs md:text-sm flex items-center"
              key={idx}
            >
              <input
                type="radio"
                id={idx}
                name="catagories"
                value={val.category}
                className="mr-1 "
                onChange={(event) => {
                  handleCatagories(event.target.value);
                }}
              />
              <label htmlFor={idx}>{val.name}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCatagories;
