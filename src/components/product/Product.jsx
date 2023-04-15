import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { checkInCart } from "../../utils/checkInCart";
import {
  useCart,
  useCartActions,
} from "../../context/CartContext/CartProvider";
import {sucessNotify} from '../../utils/toast'
function Product({ product }) {
  const { cart } = useCart();
  const dispatch = useCartActions();
  const incHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    sucessNotify("با موفقیت انجام شد")
  };
  return (
    <motion.div
      layout
      className="lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12 mx-2 gap-y-8 mt-5"
    >
      <div className="shadow-xl border rounded-lg relative">
        <img className="w-full h-[300px] rounded-lg p-3 " src={product.image} />

        <div className="px-5 mt-5">
          <p className="text-sm font-bold mb-4">{product.title}</p>
          <p className="text-sm text-emerald-700 font-semibold">
            تومان {product.price}
          </p>
        </div>
        <div className="flex justify-between items-center mt-6 pb-4 mx-4">
          <Link
            className="bg-gray-700 text-gray-50 px-2 py-1 rounded-md text-sm hover:bg-gray-900 duration-300"
            to={`/details/${product.id}`}
            state={{ product: product }}
          >
            جزییات
          </Link>

          <div>
            {checkInCart(cart, product.id) ? (
              <Link
                className="bg-gray-600 text-gray-100 px-2 py-1 rounded-md text-sm hover:bg-gray-800 duration-300"
                to="/cart"
              >
                سبد خرید
              </Link>
            ) : (
              <button
                onClick={() => incHandler(product)}
                className="bg-gray-700 text-gray-50 px-2 py-1 rounded-md text-sm hover:bg-gray-900 duration-300"
              >
                اضافه کردن به سبد
              </button>
            )}
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-gray-50 p-2 rounded-md">
          <p>{product.category}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Product;
