// React ...
import React, { useEffect } from "react";

// Icons...

const UserComments = () => {
  useEffect(() => {
    const mode = localStorage.getItem("mode");

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="w-full flex justify-center dark:bg-primary_Color_Light">
      <div className="w-96   xl:w-[1596px] lg:w-[1280px]  bg-gray-500">
        <div>
          <h1>آنچه مشتریان ما می گویند</h1>
          <p>
            داستان های موفقیت و توصیفات صمیمانه مشتریان گرامی را بخوانید. کشف
            کنید که چرا آنها Estatein را برای نیازهای املاک خود انتخاب کردند.
          </p>
        </div>
        <div>
          <div>
            <span></span>
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
