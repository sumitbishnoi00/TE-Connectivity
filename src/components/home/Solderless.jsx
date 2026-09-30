"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Image from "next/image";
import { tabData } from "@/utils/helper";


export default function SolderlessTermination() {
  const [activeTab, setActiveTab] = useState("magnet");

  const activeData = tabData[activeTab];

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="bg-ivory-white px-4 py-10 md:px-8 md:py-11.5 lg:p-12.5">
      <div className="mx-auto max-w-335 w-full ">

        {/* Heading */}
        <div className="flex flex-col xl:items-start items-center xl:text-start text-center ">
          <Heading vari={"primary"} className="animate__animated animate__backInRight">How Solderless Magnet Wire Termination Works</Heading>

          <Para vari={"secondary"} className="mt-4 max-w-204">
            Solderless terminals can be terminated using various methods, including Insulation Displacement Contact and Open-Barrel Crimping depending on the application requirements.
          </Para>
        </div>

        {/* Tabs */}
        <div className="mt-12.5 grid grid-cols-2 border-b-2 border-off-black/8">

          {/* IDC TAB */}
          <button
            type="button"
            onClick={() => setActiveTab("magnet")}
            className={`border-b-2 px-4 pt-0 pb-3.5 text-center text-xl text-off-black leading-140 transition-colors duration-300 cursor-pointer ${activeTab === "magnet"
              ? "border-off-black font-semibold"
              : "border-transparent font-normal"
              }`}
          >
            IDC (MAG-MATE/SIAMEZE)
          </button>

          {/* OPEN BARREL TAB */}
          <button
            type="button"
            onClick={() => setActiveTab("openBarrel")}
            className={`border-b-2 px-4 pt-0 pb-3.5 text-center text-xl text-off-black leading-140 transition-colors duration-300 cursor-pointer ${activeTab === "openBarrel"
              ? "border-off-black font-semibold"
              : "border-transparent font-normal"
              }`}
          >
            Open-Barrel (AMPLIVAR)
          </button>

        </div>

        {/* Cards */}
        <div
          className={`mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 ${activeData.cards.length === 3
            ? "lg:grid-cols-3"
            : "lg:grid-cols-2"
            }`}
        >
          {activeData.cards.map((card) => (

            <div
              key={card.number}
              data-aos="fade-up"
              data-aos-delay={Number(card.number) * 200}
              data-aos-duration="700"
              data-aos-once="true"
              className={` flex min-h-100 md:min-h-120 lg:min-h-145.75 flex-col rounded-xl bg-off-gray-100 p-4 sm:p-5 ${activeData.cards.length === 3 ? "sm:last:col-span-2 sm:last:w-1/2 sm:last:justify-self-center lg:last:col-span-1 lg:last:w-full" : ""} `}
            >
              {/* Number */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-off-black text-2xl font-medium leading-160 text-off-gray-100">
                {card.number}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-custom-22 md:text-2xl font-medium leading-140 text-off-black">
                {card.title}
              </h3>

              {/* Description */}
              <Para vari={"secondary"} className="mt-3">{card.description}</Para>


              {/* Image */}
              <div className="mt-auto pt-7">
                <div className={` overflow-hidden rounded-lg ${activeData.cards.length === 3 ? "h-50 md:h-65" : "h-60 md:h-76.5"} `}>
                  <Image src={card.image} width={391} height={306} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}