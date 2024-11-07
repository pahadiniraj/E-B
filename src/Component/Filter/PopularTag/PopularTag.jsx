import { button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const PopularTag = ({ handleTag }) => {
  const tags = [
    {
      name: "Healthy",
      tag: "healthy",
    },
    {
      name: "Low Fat",
      tag: "lowfat",
    },
    {
      name: "Vegetarian",
      tag: "vegetarian",
    },
    {
      name: "Kid foods",
      tag: "kidfoods",
    },
    {
      name: "Vitamins",
      tag: "vitamins",
    },
    {
      name: "Bread",
      tag: "bread",
    },
    {
      name: "Meat",
      tag: "meat",
    },
    {
      name: "Snacks",
      tag: "snacks",
    },
    {
      name: "Tiffin",
      tag: "tiffin",
    },
    {
      name: "Lunch",
      tag: "lunch",
    },
    {
      name: "Dinner",
      tag: "dinner",
    },
    {
      name: "Breakfast",
      tag: "breakfast",
    },
    {
      name: "Fruits",
      tag: "fruits",
    },
  ];

  const [showTag, setShowTag] = useState(false);

  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (value) => {
    const updatedTag = selectedTags.includes(value)
      ? selectedTags.filter((tag) => tag !== value)
      : [...selectedTags, value];
    setSelectedTags(updatedTag);
    handleTag(updatedTag);
  };

  const handleTagClick = () => {
    setShowTag(!showTag);
  };

  return (
    <div className="py-3">
      <div>
        <button
          onClick={handleTagClick}
          className="flex w-full justify-between"
        >
          <div className="text-xs md:text-base font-medium">Tags</div>
          <div className="text-xs">
            {showTag ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </button>
        <div>
          {showTag && (
            <div className="py-2">
              {tags.map((value, index) => (
                <button
                  key={index}
                  className={`p-1 text-xxxs md:text-sm md:p-2 bg-[#F2F2F2]  rounded-2xl m-1 ${
                    selectedTags.includes(value.tag)
                      ? "bg-green-600 text-white"
                      : ""
                  }`}
                  onClick={() => {
                    toggleTag(value.tag);
                  }}
                >
                  {value.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularTag;
