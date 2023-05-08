import React from "react";
import { useLocation } from "react-router-dom";
import {  useCartActions } from "../context/CartContext/CartProvider";

function Details() {
  const location = useLocation();
  const product = location.state?.product;
  console.log(product);

  const dispatch = useCartActions();

  //   actions
 
  const incHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="min-h-screen w-[92%] mx-auto flex md:flex-row flex-col justify-around mt-9 bg-white py-10 rounded-xl shadow-md">
      <div className="md:w-[40%] ">
        <img
          className="md:border md:border-gray-200 rounded-lg md:shadow-md md:px-0 md:w-auto  px-5 "
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="md:w-[50%] mt-4 mx-5">
        <h2 className="border-b border-gray-500 pb-2">{product.title}</h2>
        <div className="flex items-center justify-between mt-5">
          <p className=" text-gray-700">برند :</p>
          <p className="text-sm text-gray-900">{product.category}</p>
        </div>
        <div className="flex items-center justify-between mt-5">
          <p className=" text-gray-700">دسترسی :</p>
          <p className="text-sm text-gray-900">{product.Availability}</p>
        </div>
        <div className="flex items-center justify-between mt-5">
          <p className=" text-gray-700">قیمت :</p>
          <p className="text-sm text-gray-900">{product.price}تومان</p>
        </div>

        <div className="mt-5">
          <button
            onClick={() => incHandler(product)}
            className="bg-gray-700 text-gray-50 px-2 py-1 rounded-md text-sm hover:bg-gray-900 duration-300"
          >
            اضافه کردن به سبد
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
