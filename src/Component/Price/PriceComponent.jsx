import React from "react";
import ReactSlider from "react-slider";
import { useState } from "react";

const PriceComponent = ({ handleSelectedPrice }) => {
  const [sliderValue, setSliderValue] = useState([50, 1500]);

  const handleChangePrice = (value) => {
    setSliderValue(value);
    handleSelectedPrice(value);
  };
  return (
    <div>
      <ReactSlider
        className="horizontal-slider   my-5  appearance-none flex items-center"
        trackClassName="example-track bg-green-500 h-1 rounded  "
        thumbClassName="example-thumb bg-white w-4 h-4 rounded-full border-green-500 border-2  "
        defaultValue={[300, 1300]}
        min={50}
        max={1500}
        onChange={(value) => handleChangePrice(value)}
        renderThumb={(props, state) => <div {...props}></div>}
        activeClassName="ring-blue-500"
      />
      <div>
        <p className=" text-sm">
          <span className="text-[#4D4D4D] text-xs  md:text-base">price : </span>
          <span className=" font-medium text-xs  md:text-base">
            {sliderValue[0]} -{sliderValue[1]}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PriceComponent;
