// React ...
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Icons...
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const UserComments = () => {
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

        <div className="flex justify-center items-center gap-10">
          <div className="flex flex-col gap-6 w-96 h-96 md:w-[413px] lg:w-[512px] rounded-xl p-9  border-primary_green_light bg-white dark:bg-inherit boxShadowLight dark:boxShadowLight">
            <div className="flex gap-2">
              <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_15 bg-gray_10 ">
                <img
                  src="./../src/assets/Star.svg"
                  alt="Star.svg"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_15 bg-gray_10 ">
                <img
                  src="./../src/assets/Star.svg"
                  alt="Star.svg"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_15 bg-gray_10">
                <img
                  src="./../src/assets/Star.svg"
                  alt="Star.svg"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_15 bg-gray_10">
                <img
                  src="./../src/assets/Star.svg"
                  alt="Star.svg"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_15 bg-gray_10">
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
              <img src="./../src/assets/Profile1.png" alt="Profile1.svg" />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-normal dark:text-white">
                  رضا فریدی
                </h3>
                <p className="text-lg font-normal text-gray_60">
                  مازندران، رشت
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-96 h-96 md:w-[413px] lg:w-[512px] rounded-xl p-9  border-primary_green_light bg-white dark:bg-inherit boxShadowLight dark:boxShadowLight">
            <div className="flex gap-2">
              <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_15 bg-gray_10 ">
                <img
                  src="./../src/assets/Star.svg"
                  alt="Star.svg"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_15 bg-gray_10 ">
                <img
                  src="./../src/assets/Star.svg"
                  alt="Star.svg"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_15 bg-gray_10">
                <img
                  src="./../src/assets/Star.svg"
                  alt="Star.svg"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_15 bg-gray_10">
                <img
                  src="./../src/assets/Star.svg"
                  alt="Star.svg"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_15 bg-gray_10">
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
              <img src="./../src/assets/Profile1.png" alt="Profile1.svg" />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-normal dark:text-white">
                  رضا فریدی
                </h3>
                <p className="text-lg font-normal text-gray_60">
                  مازندران، رشت
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-96 h-96 md:w-[413px] lg:w-[512px] rounded-xl p-9  border-primary_green_light bg-white dark:bg-inherit boxShadowLight dark:boxShadowLight">
            <div className="flex gap-2">
              <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_15 bg-gray_10 ">
                <img
                  src="./../src/assets/Star.svg"
                  alt="Star.svg"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_15 bg-gray_10 ">
                <img
                  src="./../src/assets/Star.svg"
                  alt="Star.svg"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_15 bg-gray_10">
                <img
                  src="./../src/assets/Star.svg"
                  alt="Star.svg"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_15 bg-gray_10">
                <img
                  src="./../src/assets/Star.svg"
                  alt="Star.svg"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_15 bg-gray_10">
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
              <img src="./../src/assets/Profile1.png" alt="Profile1.svg" />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-normal dark:text-white">
                  رضا فریدی
                </h3>
                <p className="text-lg font-normal text-gray_60">
                  مازندران، رشت
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center w-full h-20 mt-10 border-t-[1px] border-gray_15">
          <div className="p-4">
            <span className="dark:text-white">01 از 10</span>
          </div>
          <div className="flex gap-3 w-28">
            <div className="flex justify-center items-center w-11 h-11 rounded-full boxShadowLight cursor-pointer dark:text-white">
              <GoArrowRight />
            </div>
            <div className="flex justify-center items-center w-11 h-11 rounded-full boxShadowLight cursor-pointer dark:text-white">
              <GoArrowLeft />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComments;
