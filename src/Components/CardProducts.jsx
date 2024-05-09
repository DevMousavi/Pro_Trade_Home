import React from "react";
import { Link } from "react-router-dom";

import { IoIosArrowRoundBack } from "react-icons/io";

import { formatPrice } from "../Helper/priceFormater.js";

const CardProducts = () => {
    return (
        <div className="as:w-[95%] mx-auto  lg:w-[30%] flex flex-col gap-5 rounded-2xl py-5 px-3 bg-white boxShadowLight dark:bg-gray-950">
            <img
                src=""
                alt=""
                className="w-[90%] text-center as:h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96 mx-auto rounded-2xl overflow-hidden"
            />
            <h2 className="font-bold text-secondary_blue_light dark:text-white w-[90%] mx-auto as:text-2xl">
                اسم_آتیم
            </h2>
            <p className="w-[90%] mx-auto dark:text-gray-200">
                متن تستی جهت نمایش توضیحات آیتم ها بعدا با متن واقعی تفییر خواهد
                کرد.
            </p>
            <span className="as:w-full sm:w-[90%] sm:mx-auto flex as:gap-6 as:flex-col md:flex-row md:gap-0 md:justify-around lg:flex-col lg:gap-6">
                <p className="bg-gray-200 px-10 py-2 text-secondary_blue_light font-bold rounded-md text-nowrap text-center dark:bg-gray_10 dark:text-white_90 dark:boxShadowLight">
                    4 - اتاق
                </p>
                <p className="bg-gray-200 px-10 py-2 text-secondary_blue_light font-bold rounded-md text-nowrap text-center dark:bg-gray_10 dark:text-white_90 dark:boxShadowLight">
                    120 متر
                </p>
                <p className="bg-gray-200 px-10 py-2 text-secondary_blue_light font-bold rounded-md text-nowrap text-center dark:bg-gray_10 dark:text-white_90 dark:boxShadowLight">
                    طبفه دوم
                </p>
            </span>
            <div>
                <span className="flex flex-row-reverse gap-2 w-[90%] mx-auto items-center justify-end">
                    <p className="text-gray-400 dark:text-gray-600">تومان</p>
                    <p className="text-secondary_blue_light font-bold dark:text-white">
                        {formatPrice(1400000000)}
                    </p>
                </span>
                <p className="w-[90%] mx-auto text-gray-500 dark:text-gray-600">
                    <del>{formatPrice(2000000000)}</del>
                </p>
                <div className="w-[90%] mx-auto flex items-center justify-end">
                    <Link
                        to="/about_item"
                        className="text-secondary_blue_light flex flex-row-reverse items-center as:w-[60%] sm:w-[30%] lg:w-[60%] xl:w-[50%] rounded-md justify-center gap-1 text-nowrap  hover:scale-105 primaryTransition primaryBoxShadowLight dark:text-pink-400"
                    >
                        <IoIosArrowRoundBack />
                        اطلاعات بیشتر
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardProducts;
