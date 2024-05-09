const CartComment = () => {
    return (
        <div className="flex flex-col gap-10 as:w-[98%] h-auto lg:w-[512px] rounded-xl p-10 hover:scale-105 primaryTransition  border-primary_green_light bg-white dark:bg-inherit boxShadowLight dark:boxShadowLight">
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
                    تجربه ما با Estatein فوق العاده بود. فداکاری و حرفه ای بودن
                    تیم آنها، یافتن خانه رویایی ما را آسان کرد. بسیار توصیه شده!
                </p>
            </div>
            <div className="flex gap-2">
                <img
                    src="./../src/assets/Profile1.png"
                    alt="Profile1.svg"
                    className="as:w-14 h-14 rounded-full"
                />
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
    );
};
export default CartComment;
