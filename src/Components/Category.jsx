import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="my-10 w-full text-white as:mx-auto flex as:flex-col as:gap-4 xl:gap-16  md:flex-row md:w-[90%] md:mx-auto">
            <Link
                to=""
                className="as:w-[90%] text-primary_dark font-bold dark:font-bold as:h-16 lg:h-20 flex items-center justify-center mx-auto rounded-xl boxShadowLight dark:text-white dark:bg-gray-950 cursor-pointer dark:boxShadowLight primaryTransition hover:text-xl  hover:text-pink-800"
            >
                فروش
            </Link>
            <Link
                to=""
                className="as:w-[90%] text-primary_dark font-bold dark:font-bold as:h-16 lg:h-20 flex items-center justify-center mx-auto rounded-xl boxShadowLight dark:text-white dark:bg-gray-950 cursor-pointer dark:boxShadowLight primaryTransition hover:text-xl  hover:text-pink-800"
            >
                رهن و اجاره
            </Link>
            <Link
                to=""
                className="as:w-[90%] text-primary_dark font-bold dark:font-bold as:h-16 lg:h-20 flex items-center justify-center mx-auto rounded-xl boxShadowLight dark:text-white dark:bg-gray-950 cursor-pointer dark:boxShadowLight primaryTransition hover:text-xl  hover:text-pink-800"
            >
                رهن
            </Link>
            <Link
                to=""
                className="as:w-[90%] text-primary_dark font-bold dark:font-bold as:h-16 lg:h-20 flex items-center justify-center mx-auto rounded-xl boxShadowLight dark:text-white dark:bg-gray-950 cursor-pointer dark:boxShadowLight primaryTransition hover:text-xl  hover:text-pink-800"
            >
                ثبت آگهی
            </Link>
        </div>
    );
};

export default Category;
