// React ...
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Icons...
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import CartComment from "./CartComment";
import { data } from "autoprefixer";

const UserComments = () => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  useEffect(() => {
    const mode = localStorage.getItem("mode");

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="w-full flex justify-center  mt-20">
      <div className="flex flex-col gap-8 p-1 w-96 sm:w-[550px] md:w-[600px] lg:w-[1100px]  xl:w-[1596px] ">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-3xl  dark:text-white textShadowLight dark:textShadowDark ">
            آنچه مشتریان ما می گویند
          </h1>
          <div className="flex justify-between items-center gap-2 ">
            <p className="dark:text-white_99 font-normal text-lg  lg:w-[750px] xl:w-[1200px]">
              داستان های موفقیت و توصیفات صمیمانه مشتریان گرامی را بخوانید. کشف
              کنید که چرا آنها Estatein را برای نیازهای املاک خود انتخاب کردند.
            </p>
            <Link
              className="hidden md:flex p-3  rounded-xl boxShadowLight dark:boxShadowLight border-primary_green_light dark:text-white dark:bg-gray_10 hover:bg-green-700 dark:hover:bg-green-700 hover:text-white"
              to={"/"}
            >
              مشاهده بیشتر
            </Link>
          </div>
        </div>

        <div className="flex as:flex-col sm:flex-row justify-center items-center gap-10">
          {/* {
            count.slice(0,3).map((item) => {
          <CartComment />

            })
          } */}
          <CartComment />
          <CartComment />
          <CartComment />
        </div>

        <div className="flex justify-center items-center w-full h-20 mt-10 border-t-[1px] border-gray_15">
          <div className="flex gap-3 w-28">
            <div className="flex justify-center items-center w-11 h-11 rounded-full boxShadowLight cursor-pointer dark:text-white hover:bg-green-700">
              <GoArrowRight />
            </div>
            <div className="flex justify-center items-center w-11 h-11 rounded-full boxShadowLight cursor-pointer dark:text-white hover:bg-green-700">
              <GoArrowLeft />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComments;
