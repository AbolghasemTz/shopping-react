import React from "react";
import { products } from "../../data";
import { Link } from "react-router-dom";

// icons
import { AiTwotoneHeart } from "react-icons/ai";

// swiper
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// components
import Product from "../product/Product";

function ProductHome() {
  return (
    <div className="swiper-container md:mx-10 mx-3 ">
      <div className="swiper-wrapper">
        <Swiper
          navigation
          autoplay
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductHome;
