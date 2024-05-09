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
        <header className="af:hidden as:flex as:flex-row as:h-20 as:mb-4 w-full sticky top-0 z-50 bg-green-50">
            <div className="bg-white w-full primaryBoxShadowLight flex items-center justify-between dark:bg-[#141414] px-4 md:hidden">
                <HiOutlineBars3BottomLeft className="w-10 h-10 dark:text-primary_green_light cursor-pointer hover:rotate-[900deg] primaryTransition dark:hover:text-orange-400 primaryTransition hover:bg-primary_green_light dark:hover:bg-[#141414] rounded-lg py-0 px-1" />
                <Link to="/">
                    <img
                        src="./../src/assets/Logo2.png"
                        alt="LOGO.PNG"
                        className="as:w-12 hover:scale-125 primaryTransition"
                    />
                </Link>
                <MdOutlineDarkMode
                    onClick={changeHandler}
                    className="w-10 h-10 dark:text-primary_green_light dark:hidden cursor-pointer primaryTransition hover:bg-primary_green_light rounded-lg py-0 px-1"
                />
                <IoSunnyOutline
                    onClick={changeHandler}
                    className="w-7 h-7 hidden dark:flex dark:text-primary_green_light dark:cursor-pointer dark:hover:text-orange-400 hover:rotate-[900deg] primaryTransition hover:bg-primary_green_light dark:hover:bg-[#141414]"
                />
            </div>
            <div className="af:hidden md:flex mb-5 primaryBoxShadowLight w-full h-20 items-center px-10 flex flex-row justify-between dark:text-white dark:bg-[#141414]">
                <span className="flex flex-row items-center gap-20">
                    <span>
                        <MdOutlineDarkMode
                            onClick={changeHandler}
                            className="w-10 h-10 dark:text-primary_green_light dark:hidden hover:cursor-pointer primaryTransition hover:bg-primary_green_light rounded-lg py-0 px-1"
                        />
                        <IoSunnyOutline
                            onClick={changeHandler}
                            className="w-7 h-7 hidden dark:flex dark:text-primary_green_light hover:cursor-pointer dark:hover:text-orange-400 hover:rotate-[900deg] primaryTransition"
                        />
                    </span>
                    <span className="flex flex-row items-center gap-2 px-4 py-2 rounded-xl primaryTransition hover:bg-green-700 hover:cursor-pointer  hover:text-white boxShadowLight">
                        <h2 className="font-bold ">ثبت نام</h2>
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
                        className="w-14 hover:scale-125 primaryTransition"
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
