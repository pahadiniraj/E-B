import React, { useState } from "react";
import Stars from "../Stars/Stars";
import { GiShoppingBag } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import PopupCard from "../PopupCard/PopupCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/CartSlice";
import { useNavigate } from "react-router-dom";
const Cards = ({
  discount,
  image,
  name,
  price,
  stars,
  reviews,
  className,
  Stock,
  menu,
  dispatch,
  brandImg,
  catagory,
  tags,
  id,
  quantity,
}) => {
  const [hover, setHover] = useState(false);
  const [loveClicked, setLoveClicked] = useState(false);
  const [lookClicked, setLookClicked] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const nav = useNavigate();

  const handleLoveClick = () => {
    setLoveClicked(!loveClicked);
  };
  const handleLookClick = () => {
    setLookClicked(!lookClicked);
  };
  const handleCartClicked = () => {
    setCartClicked(!cartClicked);
    dispatch(addToCart(menu));
    nav("/cart");
  };
  const handlepopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`bg-white border group  hover:border-green-600 shadow-md hover:shadow-green-300 relative ${className}`}
      >
        {Stock ? (
          discount ? (
            <div className="absolute text-xs left-2 top-2 bg-red-500 text-white px-2 rounded">
              {discount}
            </div>
          ) : (
            <div className="absolute"></div>
          )
        ) : (
          <div className="absolute text-xs left-2 top-2 bg-black text-white px-2 rounded">
            Out of Stock
          </div>
        )}
        <div className=" flex items-center justify-center py-2  ">
          <div
            className="  cursor-pointer "
            onClick={() => setShowPopup(!showPopup)}
          >
            <img src={image} alt={name} className="rounded-md " />
          </div>
        </div>
        <div className="flex justify-between mx-2 ">
          <div className="">
            <p
              className="text-slate-500 text-xxs xs:text-xs group-hover:text-[#2C742F] cursor-pointer"
              onClick={() => setShowPopup(!showPopup)}
            >
              {name}
            </p>
            <p className="font-medium text-xs xs:text-base">{`$${price}`}</p>

            <Stars
              stars={stars}
              reviews={reviews}
              className={`flex text-[#FF8A00] items-center text-xs xs:text-base py-1`}
            />
          </div>
          {hover && (
            <button
              className={` border border-slate-400 w-8 h-8 flex justify-center items-center rounded-full mt-2 mx-2  absolute top-2 right-3   ${
                loveClicked ? "bg-slate-100 text-red-600" : ""
              } `}
            >
              <FaHeart
                className={`text-xl  cursor-pointer  `}
                onClick={handleLoveClick}
              />
            </button>
          )}
          {hover && (
            <button
              className={`border border-slate-400 w-8 h-8 flex justify-center items-center rounded-full mt-2 mx-2   absolute top-12 right-3 ${
                lookClicked ? "text-white bg-green-600" : ""
              }`}
            >
              <FaEye
                onClick={handleLookClick}
                className={`text-xl cursor-pointer `}
              />
            </button>
          )}

          <button
            className={` border border-slate-400 xxxs:w-6 xxxs:h-6 xxs:w-8 xxs:h-8 md:w-10 md:h-10 flex justify-center items-center rounded-full   absolute bottom-4 right-3 cursor-pointer group-hover:bg-green-600  group-hover:text-white ${
              cartClicked ? "bg-blue-700 text-white" : ""
            }`}
            onClick={handleCartClicked}
          >
            <GiShoppingBag className={`text-md xxs:text-lg md:text-xl `} />
          </button>
        </div>
      </div>
      {showPopup && (
        <PopupCard
          onClose={handlepopup}
          discount={discount}
          name={name}
          price={price}
          stars={stars}
          reviews={reviews}
          image={image}
          Stock={Stock}
          menu={menu}
          catagory={catagory}
          dispatch={dispatch}
          brandImg={brandImg}
          tags={tags}
          id={id}
          quantity={quantity}
        />
      )}
    </div>
  );
};

export default Cards;
