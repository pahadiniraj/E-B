import React from "react";
import PropTypes from "prop-types";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const Stars = ({ stars, reviews, className }) => {
  const ratingStars = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return stars >= index + 1 ? (
      <IoIosStar key={index} />
    ) : stars >= number ? (
      <IoIosStarHalf key={index} />
    ) : (
      <IoIosStarOutline key={index} />
    );
  });

  return (
    <div className={className}>
      {ratingStars}
      <div className="xxxs:hidden md:block md:text-xxs">
        {reviews && <span></span>}
      </div>
    </div>
  );
};

Stars.propTypes = {
  stars: PropTypes.number.isRequired,
  reviews: PropTypes.number,
  className: PropTypes.string,
};

export default Stars;
