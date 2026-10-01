"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { solderlessData, traditionalData } from "@/utils/helper";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Icon from "../common/Icons";
import Image from "next/image";

const WhySwitch = () => {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="bg-off-gray-100">
      <div
        className="
          mx-auto
          w-full
          max-w-360
          px-4
          py-10
          sm:px-6
          sm:py-10
          md:px-8
          md:py-15
          lg:px-12.5
          lg:py-17.5
        "
      >
        <div className="flex flex-col xl:flex-row max-xl:items-center  gap-6 lg:gap-20">

          {/* Left Content */}
          <div className="flex xl:max-w-81.5 max-w-233.5 w-full flex-col xl:text-start text-center lg:shrink-0">
            <Heading vari={"primary"} className="animate__animated animate__bounce">
              Why Switch from Soldered to Solderless Termination?
            </Heading>

            <Para vari={"secondary"} className="mt-4">
              Traditional soldering adds process steps, variability and heat stress. TE solderless solutions help you build better products, faster and more cost-effectively.
            </Para>
          </div>

          {/* Right Cards */}
          <div className="relative flex max-w-233.5 w-full flex-col gap-6 sm:flex-row">

            {/* Traditional Card */}
            <div
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-once="true"
              className="
                w-full
                rounded-xl
                border
                border-off-black/8
                bg-gray-100
                sm:p-6
                p-4
              "
            >
              <h3 className="text-xl font-medium leading-140 text-off-black">
                Traditional Welding/Soldering
              </h3>

              <div className="mt-7 flex flex-col gap-4">
                {traditionalData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2"
                  >
                    <span>
                      <Icon icon={"cut"} />
                    </span>

                    <Para vari={"ghost"}>{item}</Para>
                  </div>
                ))}
              </div>
            </div>

            {/* VS Circle */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                z-10
                hidden
                h-19.25
                w-19.25
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-off-gray-100
                font-semibold
                text-custom-28
                leading-160
                text-off-black
                shadow-[0px_0px_40px_0px_#AFAFAF40]
                sm:flex
              "
            >
              VS
            </div>

            {/* Solderless Card */}
            <div
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-delay="200"
              data-aos-once="true"
              className="
                w-full
                rounded-xl
                border
                border-orange/40
                bg-orange/10
                sm:p-6
                p-4
              "
            >
              {/* TE Header */}
              <div className="flex items-center gap-4">

                <Image src={"/assets/images/webp/Logo.webp"} width={76} height={28} className="w-19 h-7" />

                <h3 className="text-xl font-medium leading-140 text-off-black">
                  TE Solderless Solution
                </h3>
              </div>

              <div className="mt-7 flex flex-col gap-4">
                {solderlessData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-2 ${index === 0 ? "items-center" : "items-start"}`}
                  >
                    <span className={`flex items-center justify-center w-6 shrink-0 ${index === 0 ? "h-6" : "h-6.5"} `}>
                      <Icon icon={"check"} />
                    </span>

                    <Para vari={"ghost"}>{item}</Para>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySwitch;