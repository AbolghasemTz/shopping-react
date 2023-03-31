import React from "react";
import { useCart, useCartActions } from "../context/CartContext/CartProvider";
import { BsFillTrashFill } from "react-icons/bs";

function CartPage(props) {
  // context
  const { cart } = useCart();
  const dispatch = useCartActions();

  //   actions
  const increment = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const decrement = (product) => {
    dispatch({ type: "DECREMENT", payload: product });
  };
  const removeHandler = (product) => {
    dispatch({ type: "REMOVE", payload: product });
  };




  return (
    <div className="min-h-screen mt-9 flex md:flex-row flex-col justify-between   w-[92%] mx-auto">
      <div className="md:w-[70%] w-full  ml-3">
        {!cart.length ? <h2 className="text-center mt-5 text-2xl">سبد خرید خالی است !</h2>: cart.map((product) => (
          <div
            key={product.id}
            className="mb-5 mt-5 p-3 shadow-md bg-gray-200 rounded-lg"
          >
            <div className="flex justify-between items-center">
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="md:w-24 md:h-32 w-20 h-24"
                />
              </div>

              <h5 className="md:text-base text-sm">{product.title}</h5>
              <p className="md:text-base text-sm text-emerald-700">
                تومان{product.price}
              </p>

              <button onClick={() => removeHandler(product)}>
                <BsFillTrashFill className="text-red-500" size={25} />
              </button>
            </div>
            <div className="flex item-center mr-36 ">
              <button
                onClick={() => increment(product)}
                className="bg-gray-300 px-2 py-1 rounded-md text-slate-600 text-xl"
              >
                +
              </button>
              <button className="bg-gray-300 px-2 py-1 rounded-md text-orange-500 text-md mx-4">
                {product.quantity}
              </button>
              <button
                onClick={() => decrement(product)}
                className="bg-gray-300 px-2 py-1 rounded-md text-slate-400 text-2xl"
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="md:w-[30%] w-full shadow-lg bg-gray-100 rounded-md p-3">
        {" "}
        تسویه{" "}
      </div>
    </div>
  );
}

export default CartPage;
