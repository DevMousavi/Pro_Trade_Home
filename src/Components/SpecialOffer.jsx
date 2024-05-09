import React from "react";
import CardProducts from "./CardProducts";

const SpecialOffer = () => {
    return (
        <>
            <h2 className="text-secondary_blue_light font-bold text-center mb-6 as:text-3xl sm:text-5xl xl:text-7xl xl:mb-12 textShadowLight dark:text-pink-400 dark:textShadowDark">
                پیشنهاد ویژه
            </h2>
            <div className="flex container as:flex-col lg:flex-row lg:gap-2 as:gap-10">
                <CardProducts />
                <CardProducts />
                <CardProducts />
            </div>
        </>
    );
};

export default SpecialOffer;
