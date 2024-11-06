import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { motion, MotionConfig } from "framer-motion";
import { IoIosHome, IoIosInformationCircle, IoMdContact } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import { RiPagesLine } from "react-icons/ri";
import { LiaBlogSolid } from "react-icons/lia";

const AnimatedNav = ({ handleClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const subRef = useRef();

  const handleBlur = (event) => {
    if (!subRef.current.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const link = [
    {
      name: "Home",
      link: "/",
      logo: <IoIosHome />,
    },
    {
      name: "Shop",
      link: "/shop",
      logo: <FaShop />,
    },
    {
      name: "Pages",
      link: "/pages",
      logo: <RiPagesLine />,
    },
    {
      name: "Blog",
      link: "/blog",
      logo: <LiaBlogSolid />,
    },
    {
      name: "About",
      link: "/about",
      logo: <IoIosInformationCircle />,
    },
    {
      name: "Contact",
      link: "/contact",
      logo: <IoMdContact />,
    },
  ];

  return (
    <motion.div
      variants={{
        open: {
          x: 0,
          transition: {
            when: "beforeChildren",
          },
        },
        close: {
          x: "-100%",
          transition: {
            when: "afterChildren",
          },
        },
      }}
      initial="close"
      animate={isOpen ? "open" : "close"}
      onAnimationComplete={() => {
        if (!isOpen) {
          handleClose();
        }
      }}
      className="fixed inset-0 md:hidden xs:container xs:w-3/5 xxxs:bg-black xxs:bg-opacity-95 z-10 xs:backdrop-blur-sm w-full"
      ref={subRef}
      tabIndex={-1}
      onBlur={handleBlur}
    >
      <ul className="w-full relative h-full flex flex-col justify-start items-start px-5 py-8 gap-5 ">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 xs:top-8 xxs:top-8 text-white text-3xl"
        >
          <IoCloseOutline />
        </button>
        {link.map((items, index) => (
          <li key={index} className="w-full flex">
            <MotionConfig>
              <motion.div
                variants={{
                  open: {
                    x: "10%",
                    opacity: 1,
                  },
                  close: {
                    y: "20%",
                    opacity: 0,
                  },
                }}
              >
                <NavLink
                  to={items.link}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-[#00B207]   " : "text-white"
                    } flex justify-center items-center `
                  }
                >
                  <div className="flex gap-2  justify-center items-center">
                    <div className="xxxs:text-4xl">{items.logo}</div>
                    <div className="xxxs:text-xl mt-3">{items.name}</div>
                  </div>
                </NavLink>
              </motion.div>
            </MotionConfig>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AnimatedNav;
