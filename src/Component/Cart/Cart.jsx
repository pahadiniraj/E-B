import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../Features/CartSlice";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
function Cart() {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
      <div className="container mx-auto px-5">
        <p className="text-center mt-5 font-semibold text-lg">
          My Shopping Cart
        </p>
        <div className="w-full flex py-10 gap-5">
          <div className="w-4/5 p-4 border rounded-md ">
            <table className="w-full ">
              <thead>
                <tr className="border-b-2 text-sm">
                  <th className="text-left p-2">Product</th>
                  <th className="text-left p-2">Price</th>
                  <th className="text-left p-2">Quantity</th>
                  <th className="text-left p-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((value, index) => (
                  <tr className="border-b text-xs" key={index}>
                    <td className="p-2 flex items-center gap-2">
                      <img
                        src={value.image}
                        alt={`Image of  ${value.name}`}
                        className=" h-24"
                      />
                      {value.name}
                    </td>
                    <td className="p-2 font-medium">{`${value.price}`}</td>
                    <td className="">
                      <div className="flex gap-2 border rounded-3xl justify-between px-2 py-1 items-center w-2/3 text-sm">
                        <div
                          className="border h-7 w-9 text-center rounded-full flex items-center justify-center bg-slate-100"
                          onClick={() =>
                            dispatch(decreaseItemQuantity(value.id))
                          }
                        >
                          <button className="   rounded">-</button>
                        </div>
                        <p>{value.quantity}</p>
                        <div
                          className="border bg-slate-100 h-7 w-9 text-center rounded-full flex items-center justify-center"
                          onClick={() =>
                            dispatch(increaseItemQuantity(value.id))
                          }
                        >
                          <button className="rounded">+</button>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 font-medium ">
                      {value.price * value.quantity}
                    </td>
                    <td>
                      <button onClick={() => dispatch(removeItem(value.id))}>
                        <IoIosCloseCircleOutline className="text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}

                <tr className=" w-full ">
                  <td className="p-2 " colSpan="4">
                    <div className="flex justify-between mt-3">
                      <NavLink to="/shop">
                        <button className="bg-slate-200 px-4 py-2 rounded-3xl font-medium text-sm">
                          Return to Shop
                        </button>
                      </NavLink>
                      <button className="bg-slate-200 px-4 py-2 rounded-3xl font-medium text-sm">
                        Update Cart
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" w-2/5 p-4 border rounded-md flex flex-col gap-3 h-1/3">
            <p className="text-sm font-medium">Cart Total</p>
            <div className="flex justify-between border-b text-xs">
              <p className="">Subtotal: </p>
              <p className="text-xs">{totalPrice}</p>
            </div>
            <div className="flex justify-between border-b text-xs">
              <p>Shipping: </p>
              <p>Free</p>
            </div>
            <div className="flex justify-between border-b text-xs">
              <p className="text-sm font-normal">Subtotal: </p>
              <p>{totalPrice}</p>
            </div>
            <button className="bg-[#00B207] p-1 rounded-2xl text-white">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
