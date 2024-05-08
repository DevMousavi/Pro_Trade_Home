// React ...
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Icons...

const UserComments = () => {
  useEffect(() => {
    const mode = localStorage.getItem("mode");

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="w-full flex justify-center  dark:bg-primary_dark">
      <div className="flex flex-col gap-4 p-1 w-96 sm:w-[500px] md:w-[1000px] lg:w-[1280px]  xl:w-[1596px]">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-5xl dark:text-white">
            آنچه مشتریان ما می گویند
          </h1>
          <div className="flex justify-between gap-2">
            <p className="dark:text-white_99 font-normal text-lg">
              داستان های موفقیت و توصیفات صمیمانه مشتریان گرامی را بخوانید. کشف
              کنید که چرا آنها Estatein را برای نیازهای املاک خود انتخاب کردند.
            </p>
            <Link
              className="hidden sm:flex p-3 border-[1px] rounded-lg  border-primary_green_light dark:text-white dark:bg-gray_10"
              to={"/"}
            >
              مشاهده بیشتر
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-96 h-96 rounded-lg p-9 border-[1px] border-primary_green_light">
          <div className="flex gap-2">
            <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray-400 bg-[#262626]">
              <img
                src="./../src/assets/Star.svg"
                alt="Star.svg"
                className="w-6 h-6"
              />
            </div>
            <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray-400 bg-[#262626]">
              <img
                src="./../src/assets/Star.svg"
                alt="Star.svg"
                className="w-6 h-6"
              />
            </div>
            <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray-400 bg-[#262626]">
              <img
                src="./../src/assets/Star.svg"
                alt="Star.svg"
                className="w-6 h-6"
              />
            </div>
            <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray-400 bg-[#262626]">
              <img
                src="./../src/assets/Star.svg"
                alt="Star.svg"
                className="w-6 h-6"
              />
            </div>
            <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray-400 bg-[#262626]">
              <img
                src="./../src/assets/Star.svg"
                alt="Star.svg"
                className="w-6 h-6"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-2xl dark:text-white">
              خدمات استثنایی!
            </h3>
            <p className="dark:text-white">
              تجربه ما با Estatein فوق العاده بود. فداکاری و حرفه ای بودن تیم
              آنها، یافتن خانه رویایی ما را آسان کرد. بسیار توصیه شده!
            </p>
          </div>
          <div className="flex gap-2">
            
            <img
              src="./../src/assets/Profile1.png"
              alt="Profile1.svg"
              
            />
            <div className="flex flex-col gap-1">
              <h3  className="text-xl font-normal">رضا فریدی</h3>
              <p className="text-lg font-normal text-gray_60">مازندران،رشت</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default UserComments;
