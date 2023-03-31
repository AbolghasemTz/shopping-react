import React from "react";
import Layout from "../components/layout/Layout";
import justPic from "../assets/images/just.jpg";
import { Link } from "react-router-dom";

// icons
import { GiWorld } from "react-icons/gi";
import { BsClock, BsGift, BsPaypal } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";

import Carousel from "../components/HomeComponents/Carousel";
import ProductHome from "../components/HomeComponents/ProductHome";

function Home(props) {
  return (
    <Layout>
      <Carousel />

      <section className="flex md:flex-row flex-col-reverse  justify-around items-center md:mt-28 sm:mt-[-300px] mt-[-220px] mb-24 ">
        <div className="md:m-0 mt-16">
          <h3 className="font-bold text-3xl border-b border-dotted border-gray-800 pb-8">
            هیچ وقت متوقف نشو ..
          </h3>
          <p className="p-8 text-xl">هیچ چیز غیر ممکن نیست!</p>

          <Link
            to="/shop"
            className="bg-gray-800 text-gray-100 rounded-3xl px-6 py-3 inline-block 
                    hover:bg-gray-300 hover:text-gray-800 duration-300 
                    "
          >
            فروشگاه
          </Link>
        </div>
        <div>
          <img
            className="w-96 cursor-pointer hover:translate-x-[-5px] duration-300"
            src={justPic}
            alt="just do it"
          />
        </div>
      </section>

      {/* popular Products */}
      <section>
        <h3 className="text-center md:py-8 py-4 md:text-3xl text-2xl  ">
          محصولات پر طرفدار
        </h3>

        <ProductHome />
      </section>

      <section className="flex sm:flex-row flex-col justify-between items-center md:px-24 px-10 md:mt-32 mt-20 mb-8">
        <div className="md:m-0 ">
          <div
            className=" p-1 cursor-pointer rounded-lg flex justify-center items-center
          text-gray-500 hover:text-gray-800 duration-300 
          "
          >
            <GiWorld size={25} className="hover:translate-y-[-1px]" />
          </div>
          <p className="text-sm mt-2">ارسال رایگان</p>
        </div>
        <div className="md:m-0 mt-8 ">
          <div
            className="p-1 cursor-pointer rounded-lg flex justify-center items-center
            text-gray-500 hover:text-gray-800 duration-300 
            
          "
          >
            <BsClock size={25} className="hover:translate-y-[-1px]" />
          </div>
          <p className="text-sm mt-2">پشتیبانی 24/7</p>
        </div>
        <div className="md:m-0 mt-8 ">
          <div
            className="p-1 cursor-pointer rounded-lg flex justify-center items-center
            text-gray-500 hover:text-gray-800 duration-300 
            
          "
          >
            <BsGift size={25} className="hover:translate-y-[-1px]" />
          </div>
          <p className="text-sm mt-2">کارت هدیه</p>
        </div>
        <div className="md:m-0 mt-8 ">
          <div
            className="p-1 cursor-pointer rounded-lg flex justify-center items-center
            text-gray-500 hover:text-gray-800 duration-300 
            
          "
          >
            <BsPaypal size={25} className="hover:translate-y-[-1px]" />
          </div>
          <p className="text-sm mt-2">انواع روش پرداخت</p>
        </div>
        <div className="md:m-0 mt-8 ">
          <div
            className="p-1 cursor-pointer rounded-lg flex justify-center items-center
            text-gray-500 hover:text-gray-800 duration-300 
            
          "
          >
            <FaHandHoldingUsd size={25} className="hover:translate-y-[-1px]" />
          </div>
          <p className="text-sm mt-2"> پرداخت امن</p>
        </div>
      </section>

      {/* Client */}

      <section className="mt-6 mb-8">
        <h3 className="text-center md:py-16 py-8 md:text-3xl text-2xl  ">
          نظر مشتریان
        </h3>

        <div className="flex md:flex-row flex-col items-center px-10 ">
          <div className="w-[92%] py-4 px-6 mx-1 md:mt-0 mt-6  rounded-lg border border-gray-300 shadow-xl">
            <p className="text-sm leading-8 pt-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
            </p>
            <div>
              <div className="w-20 h-20 rounded-full bg-emerald-800 mb-6 mt-6"></div>
              <p className="mt-4">میلاد</p>
            </div>
          </div>

          <div className="w-[92%] py-4 px-6 mx-1 md:mt-0 mt-6   rounded-lg border border-gray-300 shadow-xl">
            <p className="text-sm leading-8 pt-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
            </p>
            <div>
              <div className="w-20 h-20 rounded-full bg-emerald-800 mb-6 mt-6"></div>
              <p className="mt-4">میلاد</p>
            </div>
          </div>

          <div className="w-[92%] py-4 px-6 mx-1 md:mt-0 mt-6  rounded-lg border border-gray-300 shadow-xl">
            <p className="text-sm leading-8 pt-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
            </p>
            <div>
              <div className="w-20 h-20 rounded-full bg-emerald-800 mb-6 mt-6"></div>
              <p className="mt-4">میلاد</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
