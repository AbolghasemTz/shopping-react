import React, { useState } from "react";
import { Link } from "react-router-dom";

// icons
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";

// images
import logo from "../../assets/images/Logo.png";

// context
import { useCart } from "../../context/CartContext/CartProvider";

function Navigation(props) {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-slate-800 py-6 relative">
      <nav className="flex justify-between items-center w-[92%] mx-auto ">
        <div>
          <img className="w-24" src={logo} alt="Logo" />
        </div>
        <div
          className={`md:static absolute  md:min-h-fit min-h-[40vh] z-20  md:bg-slate-800 bg-slate-600 left-0 ${
            open ? "top-[5rem]" : "top-[-50rem]"
          } md:w-auto w-full flex items-center justify-center px-5 duration-300`}
        >
          <ul className="flex md:flex-row flex-col md:items-center  md:gap-[4vw]  gap-8">
            <li>
              <Link
                className="text-gray-100 hover:bg-slate-400 p-1 rounded-md hover:text-gray-800 duration-300"
                to="/"
              >
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-100 hover:bg-slate-400 p-1 rounded-md hover:text-gray-800 duration-300"
                to="/products"
              >
                فروشگاه
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 ">
          <div className="flex items-center">
            <div className="flex items-center bg-blue-400 py-2 px-3 rounded-md">
              <span className="inline-block ml-4 text-gray-100 text-xl">
                {cart.length}
              </span>
              |
              <Link to="/cart">
                <BsBagCheck size={30} className="text-gray-100 mr-3" />
              </Link>
            </div>
            <Link to="/signup">
              <AiOutlineUser size={30} className="text-gray-100 mr-6" />
            </Link>
          </div>
          <button onClick={() => setOpen(!open)}>
            {!open ? (
              <HiMenuAlt1
                size={30}
                className="text-white md:hidden cursor-pointer"
              />
            ) : (
              <AiOutlineClose
                size={30}
                className="text-white md:hidden cursor-pointer"
              />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
