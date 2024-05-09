// React ...
import React from "react";
import { Link } from "react-router-dom";

// Icons...
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import CartComment from "./CartComment";

const UserComments = () => {
    const count = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className="w-full flex justify-center  mt-20">
            <div className="flex flex-col gap-8 p-1 as:w-[90%]">
                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-3xl  dark:text-white textShadowLight dark:textShadowDark ">
                        آنچه مشتریان ما می گویند
                    </h1>
                    <div className="flex justify-between items-center gap-2 ">
                        <p className="dark:text-white_99 font-normal text-lg  lg:w-[750px] xl:w-[1200px]">
                            داستان های موفقیت و توصیفات صمیمانه مشتریان گرامی را
                            بخوانید. کشف کنید که چرا آنها Estatein را برای
                            نیازهای املاک خود انتخاب کردند.
                        </p>
                        <Link
                            className="hidden text-nowrap md:flex p-3  rounded-xl boxShadowLight dark:boxShadowLight border-primary_green_light dark:text-white dark:bg-gray_10 hover:bg-green-700 dark:hover:bg-green-700 hover:text-white"
                            to="/aaaaaaa"
                        >
                            مشاهده بیشتر
                        </Link>
                    </div>
                </div>

                <div className="flex as:flex-col lg:flex-row justify-center items-center as:gap-6  md:gap-4 lg:gap-10">
                    {count.slice(0, 3).map((item) => (
                        <CartComment key={item}/>
                    ))}
                </div>

                <div className="lg:flex justify-center items-center w-full h-20 mt-10 border-t-[1px] border-gray_15">
                    <div className="af:hidden lg:flex gap-3 w-28">
                        <div className="flex justify-center items-center w-11 h-11 rounded-full boxShadowLight cursor-pointer dark:text-white hover:bg-green-700">
                            <GoArrowRight />
                        </div>
                        <div className="flex justify-center items-center w-11 h-11 rounded-full boxShadowLight cursor-pointer dark:text-white hover:bg-green-700">
                            <GoArrowLeft />
                        </div>
                    </div>
                    <Link
                        className="lg:hidden text-nowrap as:flex as:text-xs sm:text-base items-center justify-center w-[30%] mx-auto mt-4 p-3  rounded-xl boxShadowLight dark:boxShadowLight border-primary_green_light dark:text-white dark:bg-gray_10 primaryTransition hover:bg-green-700 dark:hover:bg-green-700 hover:text-white"
                        to="/aaaaaaa"
                    >
                        مشاهده بیشتر
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserComments;
