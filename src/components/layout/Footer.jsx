import React from "react";
import logo from "../../assets/images/Logo.png";

// icons
import { FiTwitter } from "react-icons/fi";
import { BsGithub, BsLinkedin, BsInstagram, BsDribbble } from "react-icons/bs";
function Footer(props) {
  return (
    <footer className="bg-slate-900 pt-5 mt-10">
      <div className="">
        <div className="flex justify-around items-center mx-auto">
          <img src={logo} alt="LOGO" />
        </div>
        <div className="flex justify-around items-center md:w-96 w-auto mx-auto mt-12">
          <div>
            <FiTwitter
              className="text-white hover:text-blue-500 duration-300 cursor-pointer "
              size={28}
            />
          </div>
          <div>
            <BsGithub
              className="text-white hover:text-gray-400 duration-300 cursor-pointer "
              size={28}
            />
          </div>
          <div>
            <BsLinkedin
              className="text-white hover:text-blue-600 duration-300 cursor-pointer "
              size={28}
            />
          </div>
          <div>
            <BsInstagram
              className="text-white hover:text-red-500 duration-300 cursor-pointer "
              size={28}
            />
          </div>
          <div>
            <BsDribbble
              className="text-white hover:text-red-600 duration-300 cursor-pointer "
              size={28}
            />
          </div>
        </div>
        <div className="flex justify-center items-center md:w-96 py-6 mx-auto mt-12  border-t-2 border-b-2 border-gray-100 ">
          <input
            type="text"
            placeholder="ایمیل ..."
            className="px-4 py-2 text-gray-600 outline-none bg-gray-50 ml-4 rounded-lg "
          />
          <button className="text-gray-50 bac">ارسال</button>
        </div>
      </div>
      <div className=" w-[92%] mx-auto flex md:flex-row flex-col justify-between items-center md:pb-8 md:mt-16 mt-8"></div>
      <div className="flex md:flex-row flex-col md:justify-between justify-start items-center md:px-20 ">
        <div>
          <h3 className="mb-4 mt-4 text-white text-2xl border-b border-gray-200 pb-2">
            اطلاعات
          </h3>
          <ul className="text-gray-100">
            <li className="mb-4 text-sm cursor-pointer hover:translate-x-[-4px] duration-200 hover:text-orange-400">
              درباره ما
            </li>
            <li className="mb-4 text-sm cursor-pointer hover:translate-x-[-4px] duration-200 hover:text-orange-400">
              اطلاعات تحویل
            </li>
            <li className="mb-4 text-sm cursor-pointer hover:translate-x-[-4px] duration-200 hover:text-orange-400">
              سیاست حفظ حریم خصوصی
            </li>
            <li className="mb-4 text-sm cursor-pointer hover:translate-x-[-4px] duration-200 hover:text-orange-400">
              شرایط و ضوابط
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 mt-4 text-white text-2xl border-b border-gray-200 pb-2">
            پنل کاربری
          </h3>
          <ul className="text-gray-100">
            <li className="mb-4 text-sm cursor-pointer hover:translate-x-[-4px]  hover:text-orange-400 duration-300">
              {" "}
              نقشه سایت
            </li>
            <li className="mb-4 text-sm cursor-pointer hover:translate-x-[-4px]  hover:text-orange-400 duration-300">
              تماس با ما{" "}
            </li>
            <li className="mb-4 text-sm cursor-pointer hover:translate-x-[-4px]  hover:text-orange-400 duration-300">
              نقشه سایت
            </li>
            <li className="mb-4 text-sm cursor-pointer hover:translate-x-[-4px]  hover:text-orange-400 duration-300">
              راهنمای سفارش محصول{" "}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 mt-4 md:ml-0 ml-6 text-white text-2xl border-b border-gray-200 pb-2">
            تماس با ما
          </h3>
          <ul className="text-gray-100">
            <li className="mb-4 text-sm cursor-pointer hover:translate-x-[-4px]  hover:text-orange-400 duration-300">
              
              حساب من
            </li>
            <li className="mb-4 text-sm cursor-pointer hover:translate-x-[-4px]  hover:text-orange-400 duration-300">
              {" "}
              تاریخچه سفارسات
            </li>
            <li className="mb-4 text-sm cursor-pointer hover:translate-x-[-4px]  hover:text-orange-400 duration-300">
              لیست علاقه مندی
            </li>
            <li className="mb-4 text-sm cursor-pointer hover:translate-x-[-4px]  hover:text-orange-400 duration-300">
              {" "}
              وبلاگ{" "}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 mt-4 text-white text-2xl border-b border-gray-200 pb-2">
            اطلاعات فروشگاه
          </h3>
          <ul className="text-gray-100">
            <li className="mb-4 text-sm cursor-pointer hover:translate-x-[-4px]  hover:text-orange-400 duration-300">
             
              آدرس : ایران
            </li>
            <li className="mb-4 text-sm cursor-pointer hover:translate-x-[-4px]  hover:text-orange-400 duration-300">
              شماره تماس: 09354947002{" "}
            </li>
            <li className="mb-4 text-sm cursor-pointer hover:translate-x-[-4px]  hover:text-orange-400 duration-300">
              a.taziki70@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-center font-bold text-gray-50 border-t  py-6">design by Omid Taziki 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
