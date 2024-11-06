import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function AddButton({ click, text, className }) {
  return (
    <button onClick={click} className={`  ${className}`}>
      <p className="pb-1 mt-1">{text} </p>
      <FaArrowRightLong></FaArrowRightLong>
    </button>
  );
}

export default AddButton;
