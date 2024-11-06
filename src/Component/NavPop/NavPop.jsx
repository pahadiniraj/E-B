import React from "react";
import { CiApple } from "react-icons/ci";
import { GiBowlOfRice } from "react-icons/gi";
import { IoFishOutline } from "react-icons/io5";
import { TbMeat } from "react-icons/tb";
import { IoIceCreamOutline } from "react-icons/io5";
import { RiCake3Line } from "react-icons/ri";
import { GiButter } from "react-icons/gi";
import { GiCampCookingPot } from "react-icons/gi";

const NavPop = () => {
  const cate = [
    {
      name: "Fresh Fruit",
      link: "/shop",
      icon: <CiApple />,
    },
    {
      name: "Vegetables",
      link: "/shop",
      icon: <GiBowlOfRice />,
    },
    {
      name: "River Fish",
      link: "/shop",
      icon: <IoFishOutline />,
    },
    {
      name: "Chicken Meat",
      link: "/shop",
      icon: <TbMeat />,
    },
    {
      name: "Yogurt & Ice Cream",
      link: "/shop",
      icon: <IoIceCreamOutline />,
    },
    {
      name: "Cake & Bread",
      link: "/shop",
      icon: <RiCake3Line />,
    },
    {
      name: "Butter & Cream",
      link: "/shop",
      icon: <GiButter />,
    },
    {
      name: "Cooking",
      link: "/shop",
      icon: <GiCampCookingPot />,
    },
  ];

  return (
    <div className="text-xs border border-gray-300">
      {cate.map((items, index) => (
        <ul key={index}>
          <li className="flex items-center justify-start gap-2 p-2 hover:bg-[#00B207] group">
            <div className="text-lg text-gray-400 group-hover:text-white">
              {items.icon}
            </div>
            <div className="group-hover:text-white">{items.name}</div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default NavPop;
