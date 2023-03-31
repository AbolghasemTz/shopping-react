import React from "react";
import { products } from "../../data";
import { AiTwotoneHeart } from "react-icons/ai";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import {
  useCart,
  useCartActions,
} from "../../context/CartContext/CartProvider";
import { checkInCart } from "../../utils/checkInCart";

function ProductHome({ product }) {
  const dispatch = useCartActions();
  const { cart } = useCart();

  const incHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="mx-10">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={4}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
      
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            <div className="shadow-xl border rounded-lg relative">
              <img
                className="w-full h-[300px] rounded-tr-md rounded-tl-md "
                src={product.image}
              />

              <div className="flex flex-row-reverse justify-between px-5 mt-5">
                <p className="text-sm font-bold">{product.title}</p>
                <p className="text-sm text-emerald-700 font-semibold">
                  تومان {product.price}
                </p>
              </div>
              <div className="flex justify-between items-center mt-6 pb-4 mx-4">
                <Link
                  className="bg-gray-700 text-gray-50 px-2 py-1 rounded-md text-sm hover:bg-gray-900 duration-300"
                  to="/details"
                >
                  جزییات
                </Link>

                <div>
                  {checkInCart(cart,product.id) ? (
                    <Link className="bg-gray-600 text-gray-100 px-2 py-1 rounded-md text-sm hover:bg-gray-800 duration-300" to="/cart">سبد خرید</Link>
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
              <div className="absolute top-4 right-4">
                <AiTwotoneHeart
                  className="text-red-600 cursor-pointer"
                  size={30}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
       
      </Swiper>
    </div>
  );
}

export default ProductHome;
