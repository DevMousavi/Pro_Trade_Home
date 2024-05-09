import { Link } from "react-router-dom";

const CartFreqAsk = () => {
  return (
    <div className="flex flex-col gap-10 as:w-[98%] h-auto lg:w-[32%] rounded-xl p-10 hover:scale-105 primaryTransition  border-primary_green_light bg-white dark:bg-inherit boxShadowLight dark:boxShadowLight">
      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-xl dark:text-white">
          چگونه می توانم برای املاک در Estatein جستجو کنم؟
        </h3>
        <p className="dark:text-white">
          تجربه ما با Estatein فوق العاده بود. فداکاری و حرفه ای بودن تیم آنها،
          یافتن خانه رویایی ما را آسان کرد. بسیار توصیه شده!
        </p>
      </div>
      <div className="flex gap-2">
        <Link
          className=" text-nowrap p-3  rounded-xl boxShadowLight dark:boxShadowLight border-primary_green_light dark:text-white dark:bg-gray_10 hover:bg-green-700 dark:hover:bg-green-700 hover:text-white"
          to="/aaaaaaa"
        >
          ادامه مطلب
        </Link>
      </div>
    </div>
  );
};
export default CartFreqAsk;
