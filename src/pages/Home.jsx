import React from "react";
import Header from "../Layout/Header.jsx";
import UserComments from "../Components/UserComments.jsx";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header />
            <main className="af:hidden as:flex as:flex-col">
                <div className="as:flex as:flex-col md:flex-row-reverse items-center justify-between mt-24">
                    <img
                        src="./../src/assets/ImageHome.png"
                        alt=""
                        className="as:w-[90%] sm:w-[50%] lg:w-[60%] as:mx-auto md:mx-0 md:ml-8 dark:border-dashed dark:border-2 dark:border-green-600 dark:rounded-3xl"
                    />
                    <div className="">
                        <h2 className="as:text-center md:text-right sp:text-ellipsis mr-5 as:text-3xl as:mt-7 md:text-5xl lg:text-6xl mb-9 textShadowLight dark:text-white dark:textShadowDark">
                            اندکی درباره ما...
                        </h2>
                        <div className="as:w-[80%] sm:w-[90%] as:mx-auto bg-white dark:bg-gray-950 dark:text-white md:mr-5 text-justify boxShadowLight py-4 px-9 rounded-xl xl:py-8 2xl:py-16">
                            <p className="font-bold mb-5">
                                سفر شما برای یافتن ملک عالی از اینجا شروع می
                                شود. فهرست های ما را کاوش کنید تا خانه ای را
                                پیدا کنید که با رویاهای شما مطابقت دارد.
                            </p>
                            <p>
                                داستان ما داستان رشد و تکامل مستمر است. ما به
                                عنوان یک تیم کوچک با رویاهای بزرگ شروع کردیم،
                                مصمم به ایجاد یک پلت فرم املاک و مستغلات که
                                فراتر از معمول باشد. در طول سال‌ها، ما دامنه خود
                                را گسترش داده‌ایم، مشارکت‌های ارزشمندی ایجاد
                                کرده‌ایم و اعتماد مشتریان بی‌شماری را به دست
                                آورده‌ایم.
                            </p>
                            <Link
                                to="/about_us"
                                className="flex justify-end text-green-900 textShadowLight hover:text-red-800 dark:text-blue-400 dark:textShadowDark primaryTransition dark:hover:text-red-600"
                            >
                                مشاهده بیشتر
                            </Link>
                        </div>
                    </div>
                </div>
                <UserComments />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </main>
        </>
    );
};

export default Home;
