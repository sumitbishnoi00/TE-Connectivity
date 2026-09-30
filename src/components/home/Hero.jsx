import { bottomTabs } from "@/utils/helper";
import Button from "../common/Button";
import Icon from "../common/Icons";
import Para from "../common/Para";


const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-125
        overflow-hidden
        bg-[url('/assets/images/webp/Hero-section.webp')]
        bg-cover
        bg-center
        bg-no-repeat
        sm:bg-center
      "
    >
     

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-125
          max-w-360
          flex-col
          justify-between
          px-4
          py-10
          sm:px-8
          sm:py-15
          md:px-10
          md:py-15
          lg:px-12.5
          lg:pt-17.5
          lg:pb-18.25 
        "
      >
        {/* LEFT CONTENT */}
        <div className="max-w-227.25 w-full">
          <h1
            className="
              w-full
              font-medium
              lg:text-custom-42
              md:text-custom-40
              sm:text-4xl
              text-custom-32
              leading-120
              text-off-gray-100
            "
          >
            Solderless Magnet Wire Termination Solutions
          </h1>

          <Para vari={"primary"} className="sm:max-w-172.75 max-w-full mt-3">TE provides high-quality, cost-effective terminating solutions tailored for motor, coil, and solenoid applications. Explore our robust portfolio of magnet wire solutions.</Para>

          {/* 3 COMMON BUTTONS */}
          <div
            className="
              lg:mt-10
              lg:mb-12.5
              sm:mt-8
              md:mb-12
              sm:mb-10
              mt-7
              mb-8
              flex
              flex-wrap
              items-center
              gap-3
              md:gap-4
              lg:gap-5
            "
          >
            <Button vari={"primary"}> Selector Tool</Button>
            <Button vari={"outline"}>Savings Calculator</Button>
            <Button vari={"Secondary"}>
              Download Reference Guide

              <span className="transition-transform duration-300 text-off-gray-100 group-hover:text-orange ease-out  group-hover:translate-y-0.5 [&_svg_path]:stroke-off-gray-100 group-hover:[&_svg_path]:stroke-orange">
                <Icon icon={"download"} />
              </span>
              </Button>
          </div>

          <div className=" w-full border-t border-off-gray-100/20 mb-8 sm:mb-10 lg:mb-12.5"></div>

          <div className="flex gap-3 overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden">
            {bottomTabs.map((tab) => (
              <a href="#" key={tab} className="group relative isolate shrink-0 overflow-hidden rounded-full border border-off-gray-100/20 bg-linear-to-b from-white/4 to-white/12 backdrop-blur-md sm:px-5 px-4 sm:py-2.25 py-2 font-normal text-sm sm:text-base leading-160 text-off-gray-100 cursor-pointer transition-all duration-500 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] before:absolute before:inset-y-0 before:-left-full before:z-[-1] before:w-full before:skew-x-[-20deg] before:bg-linear-to-r before:from-transparent before:via-white/15 before:to-transparent before:transition-all before:duration-700 hover:before:left-full">{tab}</a>
            ))}
          </div>

        </div>

        
      </div>
    </section>
  );
};



export default Hero;