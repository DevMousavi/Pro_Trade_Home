// React ...
import React from "react";
import { Link } from "react-router-dom";

// My Components...
import Header from "../Layout/Header.jsx";
import Category from "../Components/Category.jsx";
import UserComments from "../Components/UserComments.jsx";
import SpecialOffer from "../Components/SpecialOffer.jsx";
import FreqAsked from "../Components/FreqAsked.jsx";
import Explore from "../Components/Explore.jsx";
import Footer from "../Layout/Footer.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <main className="af:hidden as:flex as:flex-col">
                <h2 className="af:hidden sm:flex sm:text-5xl lg:hidden justify-center mt-30 textShadowLight dark:text-white dark:textShadowDark dark:text-nowrap">
                    اینجا ،
                    <span className="mx-8 text-red-700 font-bold dark:text-green-400">
                        رویاها
                    </span>
                    به
                    <span className="mx-8 text-blue-700 font-bold">خانه</span>
                    می‌رسند
                </h2>
                <div className="as:flex as:flex-col as:gap-10 md:gap-0 lg:flex-row-reverse items-center justify-center mt-24">
                    <img
                        src="./../src/assets/ImageHome.png"
                        alt=""
                        className="as:w-[90%] sm:w-[50%] lg:w-[40%] as:mx-auto md:mx-0 md:ml-8"
                    />
                    <div>
                        <h2 className="as:text-center sm:hidden lg:block  mr-5 as:text-2xl as:mt-7  md:text-4xl  as:mb-5 md:mb-20 textShadowLight dark:text-white dark:textShadowDark dark:text-nowrap">
                            اینجا ،{" "}
                            <span className="mx-2 text-red-700 font-bold dark:text-green-400">
                                رویاها
                            </span>{" "}
                            به{" "}
                            <span className="mx-2 text-blue-700 font-bold">
                                خانه
                            </span>{" "}
                            می رسند
                        </h2>
                        <div className="as:w-auto sm:w-[490px] md:w-[600px] md:mt-8">
                            <Category />
                        </div>
                    </div>
                </div>
                <div className="container my-12">
                    <SpecialOffer />
                    <div className="w-full flex items-center justify-center">
                        <Link
                            to="/dsgfsfdg"
                            className="boxShadowLight px-10 py-4 my-8 rounded-md hover:scale-105 primaryTransition bg-white dark:bg-gray_10 dark:text-white"
                        >
                            مشاهده بیشتر
                        </Link>
                    </div>
                </div>
                <UserComments />
                <FreqAsked />
                <Explore />
               
            </main>
            <Footer />
        </>
    );
};

export default Home;

{
    /* <div className="as:w-[90%] sm:w-[90%] as:mx-auto bg-white dark:bg-gray-950 dark:text-white md:mr-5 text-justify boxShadowLight py-4 px-9 rounded-xl xl:py-8 2xl:py-16">
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
    className="flex justify-end text-green-900 textShadowLight  hover:text-red-800 dark:text-blue-400 dark:textShadowDark primaryTransition dark:hover:text-red-600"
>
    مشاهده بیشتر
</Link>
</div> */
}
