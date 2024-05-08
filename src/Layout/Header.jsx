// React ...
import React from "react";
import { Link, NavLink } from "react-router-dom";

// Icons...
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import { TbLogin } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    const changeHandler = () => {
        const mode = localStorage.getItem("mode");

        if (mode === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("mode", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("mode", "light");
        }
    };

    React.useEffect(() => {
        const mode = localStorage.getItem("mode");

        if (mode === "dark") {
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <header className="af:hidden as:flex as:flex-row as:h-20 as:mb-4 w-full">
            <div className="bg-white w-full primaryBoxShadowLight flex items-center justify-between dark:bg-primary_dark px-2 md:hidden">
                <HiOutlineBars3BottomLeft className="w-7 h-7 dark:text-primary_green_light" />
                <Link to="/">
                    <img
                        src="./../src/assets/Logo2.png"
                        alt="LOGO.PNG"
                        className="as:w-12"
                    />
                </Link>
                <MdOutlineDarkMode
                    onClick={changeHandler}
                    className="w-7 h-7 dark:text-primary_green_light dark:hidden"
                />
                <IoSunnyOutline
                    onClick={changeHandler}
                    className="w-7 h-7 hidden dark:flex dark:text-primary_green_light"
                />
            </div>
            <div className="af:hidden md:flex mb-5 primaryBoxShadowLight w-full h-20 items-center px-3 flex flex-row justify-between dark:text-white dark:bg-primary_dark">
                <span className="flex flex-row items-center gap-20">
                    <span>
                        <MdOutlineDarkMode
                            onClick={changeHandler}
                            className="w-7 h-7 dark:text-primary_green_light dark:hidden hover:cursor-pointer"
                        />
                        <IoSunnyOutline
                            onClick={changeHandler}
                            className="w-7 h-7 hidden dark:flex dark:text-primary_green_light hover:cursor-pointer"
                        />
                    </span>
                    <span className="flex flex-row items-center gap-2 px-4 py-2 rounded-lg primaryTransition hover:bg-primary_green_light hover:cursor-pointer hover:border-2 hover:border-[#345720] hover:text-white ">
                        <h2>ثبت نام</h2>
                        <TbLogin className="dark:text-primary_green_light" />
                    </span>
                </span>
                <ul className="flex flex-row items-center gap-12 lg:gap-20">
                    <li>
                        <NavLink to="/" className="px-4 py-[29px]">
                            صفحه اصلی
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/vvvv" className="px-4 py-[29px]">
                            درباره ما
                        </NavLink>
                    </li>
                    <li className="flex flex-row items-center gap-4 md:gap-1 ">
                        <NavLink to="/vvvv" className="px-4 py-[29px]">
                            دسته بندی ها
                        </NavLink>
                        <IoIosArrowDown className="dark:text-primary_green_light" />
                    </li>
                </ul>
                <Link to="/">
                    <img
                        src="./../src/assets/Logo2.png"
                        alt="LOGO.PNG"
                        className="w-14"
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
