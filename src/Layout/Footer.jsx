import { Link } from "react-router-dom";
//icons
import { MdOutlineMail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col ">
      <div className="h-96 flex justify-center items-center p-20">
        <div className="w-[90%] flex flex-row  justify-between">
          <div className="af:w-full sm:w-[30%]   flex flex-col  gap-8">
            <div className="flex  items-center gap-2">
              <Link to="/">
                <img
                  src="./../src/assets/Logo2.png"
                  alt="LOGO.PNG"
                  className="as:w-12 hover:scale-125 primaryTransition"
                />
              </Link>
              <h1 className="font-bold text-xl dark:text-white">اسم سایت</h1>
            </div>
            <div className="w-96 h-16 flex justify-between items-center border-[1px] border-gray_15 p-5 rounded-lg">
              <div className="flex justify-center items-center gap-1">
                <MdOutlineMail className="dark:text-white w-5 h-5" />
                <input
                  className="p-4 bg-inherit"
                  type="text"
                  placeholder="ایمیل خود را وارد نمایید"
                />
              </div>
              <div className="cursor-pointer">
                <SiMinutemailer className="dark:text-white w-7 h-7" />
              </div>
            </div>
          </div>
          <div className="w-[60%] flex xl:gap-20 lg:gap-18 md:gap-10 as:gap-6">
            <div>
              <ul className="flex flex-col gap-4  dark:text-white">
                <li className="font-bold">صفحه اصلی</li>
                <li>پیشنهاد ویژه</li>
                <li>سوالات متداول</li>
                <li>گواهی نامه ها</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4  dark:text-white">
                <li className="font-bold">درباره ما</li>
                <li>داستان ما</li>
                <li>کار با ما</li>
                <li>تیم ما</li>
                <li>مشتری ها</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4  dark:text-white">
                <li className="font-bold">صفحه اصلی</li>
                <li>پیشنهاد ویژه</li>
                <li>سوالات متداول</li>
                <li>گواهی نامه ها</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4  dark:text-white">
                <li className="font-bold">صفحه اصلی</li>
                <li>پیشنهاد ویژه</li>
                <li>سوالات متداول</li>
                <li>گواهی نامه ها</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4  dark:text-white">
                <li className="font-bold">صفحه اصلی</li>
                <li>پیشنهاد ویژه</li>
                <li>سوالات متداول</li>
                <li>گواهی نامه ها</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4  dark:text-white">
                <li className="font-bold">ارتباط با ما</li>
                <li>راه های ارتباطی</li>
                <li>آدرس</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[104px] bg-gray_20 dark:bg-gray_10">
        <div className="w-[90%] flex justify-between items-center">
          <div>
            <h1 className="text-white">متن پیشنهادی</h1>
          </div>
          <div className="flex gap-2">
            <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_40 dark:border-gray_15 bg-gray_40 dark:bg-gray_08 cursor-pointer">
              <FaFacebookF className="w-6 h-6 text-white" />
            </div>
            <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_40 dark:border-gray_15 bg-gray_40 dark:bg-gray_08 cursor-pointer ">
              <FaLinkedinIn className="w-6 h-6 text-white" />
            </div>
            <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_40 dark:border-gray_15 bg-gray_40 dark:bg-gray_08 cursor-pointer ">
              <FaTwitter className="w-6 h-6 text-white" />
            </div>
            <div className="flex justify-center items-center w-11 h-11 rounded-full border-[1px] border-gray_40 dark:border-gray_15 bg-gray_40 dark:bg-gray_08 cursor-pointer ">
              <FaTelegramPlane className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
