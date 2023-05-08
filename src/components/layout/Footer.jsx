import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./../Wrapper";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-6 px-10 mt-8">
      <div className="grid grid-cols-12 md:gap-8 gap-4">
        <div className="md:col-span-4 col-span-12 w-full ">
          <div className="font-oswald font-medium uppercase text-sm cursor-pointer mb-4">
            فروشگاه
          </div>
          <div className="font-oswald font-medium uppercase text-sm cursor-pointer my-3">
            هدیه
          </div>
          <div className="font-oswald font-medium uppercase text-sm cursor-pointer my-3">
            ثبت نام
          </div>
          <div className="font-oswald font-medium uppercase text-sm cursor-pointer my-3">
            ارسال نظرات
          </div>
          <div className="font-oswald font-medium uppercase text-sm cursor-pointer my-3">
            تخفیف دانشجویی
          </div>
        </div>
        <div className="md:col-span-4 col-span-12  w-full ">
          <div className="font-oswald font-medium uppercase text-sm mb-4">
            لینک هی کمکی
          </div>
          <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer my-3">
            وضعیت سفارش
          </div>
          <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer my-3">
            تحویل
          </div>
          <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer my-3">
            برگشت کالا
          </div>
          <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer my-2">
            گزینه های پرداخت
          </div>
          <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer my-3">
            تماس با ما
          </div>
        </div>

        <div className="md:col-span-4 col-span-12  w-full ">
          <div className="font-oswald font-medium uppercase text-sm mb-4">
            درباره نایک
          </div>
          <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer my-3">
            خبر ها
          </div>
          <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer my-3">
            مشاغل
          </div>
          <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
            سرمایه گذاران
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center md:justify-start my-8">
        <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
          <FaFacebookF size={20} />
        </div>
        <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
          <FaTwitter size={20} />
        </div>
        <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
          <FaYoutube size={20} />
        </div>
        <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
          <FaInstagram size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
