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
    <div className="w-full flex justify-center  dark:bg-primary_Color_Light">
      <div className="flex flex-col gap-4 p-3 w-96 sm:w-[500px] md:w-[1000px] lg:w-[1280px]  xl:w-[1596px] bg-gray-500">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-2xl">آنچه مشتریان ما می گویند</h1>
          <div className="flex justify-between ">
            <p>
              داستان های موفقیت و توصیفات صمیمانه مشتریان گرامی را بخوانید. کشف
              کنید که چرا آنها Estatein را برای نیازهای املاک خود انتخاب کردند.
            </p>
            <Link className="hidden sm:flex" to={"*"}>
              مشاهده بیشتر
            </Link>
          </div>
        </div>
        <div className="w-96 h-96 rounded-lg border-2 border-primary_green_light">
          <div>
            <span className="w-6 h-6 rounded-full border-2 border-primary_green_light">
              xx
            </span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <h3></h3>
            <p></p>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default UserComments;
