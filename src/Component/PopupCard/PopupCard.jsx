import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Stars from "../Stars/Stars";
import { IoClose } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { addToCart } from "../../Features/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { updateSubtotals } from "../../Features/CartSlice";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  getCartTotal,
} from "../../Features/CartSlice";

const PopupCard = ({
  discount,
  image,
  name,
  price,
  stars,
  reviews,
  Stock,
  onClose,
  menu,
  brandImg,
  catagory,
  tags,
  id,
  quantity,
}) => {
  const { cart, items, totalQuantity } = useSelector((state) => state.allCart);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  console.log(cart);

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const nav = useNavigate();

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const icons = [
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/",
    },
    {
      icon: <FaTwitter />,
      url: "https://www.twitter.com/",
    },
    {
      icon: <FaPinterestP />,
      url: "https://www.pinterest.com/",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/",
    },
  ];

  const handleCartClick = () => {
    dispatch(addToCart(menu));
    nav("/cart");
  };

  const dispatch = useDispatch();

  return (
    <div className="fixed  inset-0  bg-opacity-40 bg-black z-10 backdrop-blur-sm  justify-center flex items-center ">
      <div className="h-[400px] w-[800px] bg-white p-2  rounded-md flex gap-4 relative">
        <button onClick={onClose} className="absolute right-2">
          <IoClose />
        </button>
        <Slider
          {...settings}
          className=" w-3/6  "
          showThumbs={false}
          thumbWidth={100}
          showIndicators={false}
        >
          <div className="w-full  justify-center items-center ">
            <img src={image} className="w-full" />
          </div>
          <div>
            <img src={image} className="w-full" />
          </div>
        </Slider>
        <div className="flex flex-col gap-3 w-full p-2">
          <div className="flex justify-start items-center gap-2">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <div className="bg-green-200  border-black border p-1 text-xs text-[#2C742F]  rounded-md">
              {Stock ? <div>In Stock</div> : <div>Out of Stock</div>}
            </div>
          </div>

          <div className="flex justify-start items-center gap-1">
            <Stars stars={stars} className={`text-[#FF8A00] flex`} />

            <span className="text-xs text-[#666666]">{reviews} Review</span>
          </div>
          <div className="flex justify-start items-center gap-4 border-b-2 pb-4  ">
            <div className="text-xl font-medium text-[#2C742F]">{price}</div>
            {discount ? (
              <div className="bg-red-100 text-red-600 px-2 py-1 rounded-2xl text-xs">
                {discount}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <p className="text-xs  font-normal">Brand</p>
              <img src={brandImg} alt="happy" className="h-10" />
            </div>
            <div className="flex items-center ">
              <p className=" w-full text-xs font-medium mr-1">Share Items :</p>
              {icons.map((icon, idx) => (
                <div
                  className=" group hover:bg-green-600 p-2 rounded-full "
                  key={idx}
                >
                  <a
                    href={icon.url}
                    key={idx}
                    target="_blank"
                    className="group-hover:text-white text-md"
                  >
                    {icon.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xxs">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.
            </p>
          </div>
          <div className="flex gap-2 w-full items-center">
            <div className="border border-slate-300 rounded-3xl w-1/4 flex items-center justify-between py-1 px-1">
              <button
                className="h-6 w-6 border-2 rounded-full bg-gray-200"
                onClick={() => useDispatch(decreaseItemQuantity(id))}
              >
                -
              </button>
              {cart.quantity}
              <button className="h-6 w-6 border rounded-full bg-gray-200 ">
                +
              </button>
            </div>
            <button
              onClick={handleCartClick}
              className="w-3/5 bg-[#00B207] flex justify-center rounded-3xl py-2"
            >
              <p className="text-white text-sm font-semibold flex items-center gap-3">
                Add To Cart
                <FaCartShopping />
              </p>
            </button>
            <button className="h-9 w-9 bg-green-100 text-green-600 rounded-full flex justify-center items-center ">
              <CiHeart className="text-xl" />
            </button>
          </div>
          <div className="text-xs  gap-2">
            <div className="flex gap-2">
              <p className="font-medium">Category:</p>
              <p className="text-slate-400">{catagory}</p>
            </div>
            <div className="flex  gap-2">
              <p className="font-medium">Tags:</p>
              <p className="text-slate-400"> {tags}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
