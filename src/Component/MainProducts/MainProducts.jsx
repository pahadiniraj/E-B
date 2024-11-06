import React from "react";
import Cards from "../Cards/Cards";
import { useDispatch } from "react-redux";
const MainProducts = ({ productList }) => {
  const dispatch = useDispatch();
  return (
    <div className="py-4 pl-3">
      <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 ">
        {productList.map((menu, index) => (
          <Cards
            className={`rounded-md `}
            key={index}
            discount={menu.discount}
            image={menu.image}
            name={menu.name}
            price={menu.price}
            stars={menu.stars}
            reviews={menu.reviews}
            Stock={menu.Stock}
            catagory={menu.category}
            tags={menu.tag}
            brandImg={menu.brandImg}
            dispatch={dispatch}
            menu={menu}
            id={menu.id}
            quantity={menu.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default MainProducts;
