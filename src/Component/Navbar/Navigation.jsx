import React from "react";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const Navigation = ({ className }) => {
  const link = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="   text-xs hidden md:block   ">
      <ul className=" flex justify-center items-center gap-4 ">
        {link.map((items, index) => (
          <li key={index}>
            <NavLink
              to={items.link}
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-[#00B207]" : "text-[#737373]"
                } flex justify-center items-center  `
              }
            >
              {items.name}
              <KeyboardArrowDownRoundedIcon></KeyboardArrowDownRoundedIcon>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
