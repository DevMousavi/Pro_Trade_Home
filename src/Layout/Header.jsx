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
            <div className="bg-white w-full primaryBoxShadowLight flex items-center justify-between dark:bg-primary_Color_Light px-2 md:hidden">
                <HiOutlineBars3BottomLeft className="w-7 h-7 dark:text-yellow-500" />
                <Link to="/">
                    <img
                        src="./../src/assets/Logo.png"
                        alt="LOGO.PNG"
                        className="as:w-12"
                    />
                </Link>
                <MdOutlineDarkMode
                    onClick={changeHandler}
                    className="w-7 h-7 dark:text-yellow-600 dark:hidden"
                />
                <IoSunnyOutline
                    onClick={changeHandler}
                    className="w-7 h-7 hidden dark:flex dark:text-yellow-600"
                />
            </div>
            <div className="af:hidden md:flex mb-5 primaryBoxShadowLight w-full h-20 items-center px-3 flex flex-row justify-between dark:text-white dark:bg-primary_Color_Light">
                <span className="flex flex-row items-center gap-20">
                    <span>
                        <MdOutlineDarkMode
                            onClick={changeHandler}
                            className="w-7 h-7 dark:text-yellow-600 dark:hidden"
                        />
                        <IoSunnyOutline
                            onClick={changeHandler}
                            className="w-7 h-7 hidden dark:flex dark:text-yellow-600"
                        />
                    </span>
                    <span className="flex flex-row items-center gap-2 px-4 py-2 rounded-lg primaryTransition hover:bg-[#FFB74D] hover:border-2 hover:border-[#D84315] hover:text-white ">
                        <h2>ثبت نام</h2>
                        <TbLogin className="dark:text-yellow-600" />
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
                        <IoIosArrowDown className="dark:text-yellow-600" />
                    </li>
                </ul>
                <Link to="/">
                    <img
                        src="./../src/assets/Logo.png"
                        alt="LOGO.PNG"
                        className="w-14"
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
