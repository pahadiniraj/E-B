import React, { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import img1 from "../../assets/Popup/Popup.png";

const Subscribe = ({ onClose }) => {
  const subRef = useRef();

  const closeSub = (e) => {
    if (subRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      className="fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm justify-center flex items-center p-5 md:p-0"
      ref={subRef}
      onClick={closeSub}
    >
      <div>
        <div className="md:h-[300px] md:w-[700px]  bg-white md:p-2  rounded-md flex gap-4 relative">
          <div
            className=" bg-cover md:w-2/5 md:h-full bg-top rounded-sm"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
          <div className="text-center flex justify-center py-12">
            <div className="w-4/5  flex flex-col gap-3">
              <h3 className="text-4xl font-semibold">
                Subcribe to Our Newsletter
              </h3>
              <p className="text-xs">
                Subscribe to our newlletter and Save your 20% money with
                discount code today.
              </p>
              <div className="flex relative ">
                <input
                  type="text"
                  placeholder="Your Email address"
                  className="py-3 rounded-3xl w-5/6 border focus:outline-green-600 text-xs text-start px-2"
                />

                <button className="bg-[#00B207] py-3 px-5 rounded-3xl absolute right-1 text-xs text-white">
                  Subscribe
                </button>
              </div>
              <div className="flex justify-center items-center  mt-4 md:mt-0 gap-1 ">
                <input type="checkbox" />
                <p className="text-xs">Do not show this window</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="absolute right-2 text-xl">
            <IoCloseOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
