import React from "react";
import { useCart, useCartActions } from "../context/CartContext/CartProvider";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { errorNotify } from "../utils/toast";

function CartPage(props) {
  // context
  const { cart, total } = useCart();
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
    errorNotify("با موفقیت پاک شد")
  };

  return (
    <div className="min-h-screen md:mt-9  flex md:flex-row flex-col justify-between w-[92%] mx-auto">
      <div className="md:w-[70%] w-full  ml-3">
        {!cart.length ? (
          <h2 className="text-center mt-5 text-2xl">سبد خرید خالی است !</h2>
        ) : (
          cart.map((product) => (
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
          ))
        )}
      </div>
      <div className="md:w-[30%] w-full shadow-lg bg-gray-100 rounded-md p-3 self-start">
        <CartSummery cart={cart} total={total} />
      </div>
    </div>
  );
}

export default CartPage;


// Cart Summery

const CartSummery = ({ cart }) => {
  console.log(cart);
  const originalPrice = cart.length
    ? cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
    : 0;

  return (
    <section className="">
      <h3 className="text-center text-xl py-5 ">پرداخت</h3>
      <div className="flex justify-between items-center">
        <h4>مبلغ </h4>
        <p>{originalPrice}تومان</p>
      </div>

      <div className="flex justify-between items-center mt-5 border-t pt-2 border-gray-300">
        <h4>مبلغ کل: </h4>
        <p>{originalPrice}تومان</p>
      </div>
      <Link
        to="#"
        className="mt-7 inline-block text-center bg-slate-800 px-4 py-2 text-gray-50 rounded-md hover:bg-slate-900 duration-300"
      >
        پرداخت
      </Link>
    </section>
  );
};
