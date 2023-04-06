import React from 'react';
import NotFoundPic from '../assets/images/404.avif'
import { Link } from 'react-router-dom';
function NotFound(props) {
    return (
        <div className='flex flex-col items-center w-[92%] mx-auto min-h-screen mt-9 '>
            <div className=''>
                <img className='w-[500px] h-[400px]' src={NotFoundPic} alt="NotFound Page"/>
            </div>
            <p>صفحه مورد نضر یافت نشد</p>
            <Link className='bg-gray-800 px-4 py-2 rounded-md  text-gray-50 inline-block mt-6 text-sm' to="/">برگشت به صفحه اصلی</Link>
        </div>
    );
}

export default NotFound;