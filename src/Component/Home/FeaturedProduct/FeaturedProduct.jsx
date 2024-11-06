import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import Stars from "../../Stars/Stars";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../../Cards/Cards";

const FeaturedProduct = () => {
  const allItems = useSelector((state) => state.allCart.items);
  const featuredItems = allItems.filter((item) => item.featured === true);
  console.log(featuredItems);
  const dispatch = useDispatch();

  return (
    <div className="w-full  flex items-center justify-center py-10">
      <div className=" md:container md:mx-auto   ">
        <div className="flex justify-center items-center  text-2xl  font-semibold">
          <h2 className="pb-3">FEATURED PRODUCT</h2>
        </div>
        <div className=" grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 px-4 ">
          {featuredItems.map((menu, index) => (
            <Cards
              key={index}
              tags={menu.tag}
              discount={menu.discount}
              image={menu.image}
              name={menu.name}
              price={menu.price}
              stars={menu.stars}
              reviews={menu.reviews}
              Stock={menu.Stock}
              menu={menu}
              dispatch={dispatch}
              brandImg={menu?.brandImg}
              catagory={menu.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
