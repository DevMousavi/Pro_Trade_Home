import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="w-full flex justify-center items-center mt-12 py-20 border-t-[1px] border-b-[1px] border-gray_15">
      <div className="w-[90%] flex as:flex-col sm:flex-row justify-between items-center gap-5">
        <div className="as:w-[90%] sm:w-[75%] flex flex-col gap-5">
          <h1 className="font-semibold text-3xl dark:text-white textShadowLight dark:textShadowDark ">
            امروز سفر املاک و مستغلات خود را شروع کنید
          </h1>
          <p className="dark:text-gray_60">
            ملک رویایی شما تنها با یک کلیک فاصله دارد. چه به دنبال یک خانه جدید،
            یک سرمایه گذاری استراتژیک، یا مشاوره تخصصی املاک و مستغلات باشید،
            Estatein اینجاست تا در هر مرحله به شما کمک کند. اولین قدم را به سمت
            اهداف املاک خود بردارید و املاک موجود ما را کشف کنید یا برای کمک
            شخصی با تیم ما تماس بگیرید.
          </p>
        </div>
        <div className="w-[90%] sm:w-[25%] lg:w-[15%] flex  justify-center items-center">
          <Link
            to={"/aaa"}
            className="w-full sm:w-48  h-16 flex justify-center items-center bg-green-700 rounded-xl p-2 text-white as:text-base lg:text-lg  font-medium hover:bg-inherit boxShadowLight hover:boxShadowLight "
          >
            کاوش ویژگی ها
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Explore;
