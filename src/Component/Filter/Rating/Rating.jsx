import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Stars from "../../Stars/Stars";

const Rating = ({ handleRating }) => {
  const [showRating, setShowRating] = useState(false);

  const listStar = [
    {
      stars: 5,
    },
    {
      stars: 4,
    },
    {
      stars: 3,
    },
    {
      stars: 2,
    },
    {
      stars: 1,
    },
  ];

  const handleRatingClick = () => {
    setShowRating(!showRating);
  };

  const [rating, setRating] = useState([]);

  const handleChange = (value) => {
    const updatedRating = rating.includes(value)
      ? rating.filter((rate) => rate !== value)
      : [...rating, value];
    setRating(updatedRating);
    handleRating(updatedRating);
  };

  return (
    <div className="md:border-b border-slate-200 py-3 ">
      <div>
        <button
          onClick={handleRatingClick}
          className="flex w-full justify-between gap-2 items-center"
        >
          <div className="text-medium font-medium text-xs md:text-base">
            Rating{" "}
          </div>
          <div className="text-xs md:text-lg">
            {showRating ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </button>
        {showRating && (
          <div className=" absolute">
            {listStar.map((value, index) => (
              <div
                className="flex justify-start items-center gap-2 py-2"
                key={index}
              >
                <input
                  type="checkbox"
                  id={index}
                  name={value.stars}
                  onChange={(event) => handleChange(event.target.value)}
                  value={value.stars}
                />
                <div htmlFor={value.stars}>
                  <Stars
                    stars={value.stars}
                    className={`flex gap-1 text-[#FF8A00]  items-center justify-start`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rating;
