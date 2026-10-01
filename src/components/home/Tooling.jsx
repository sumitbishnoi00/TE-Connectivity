"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { tabData, tabData2 } from "@/utils/helper";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Image from "next/image";



export default function ApplicationTooling() {
  const [activeTab, setActiveTab] = useState("magMate");

  const activeData = tabData2[activeTab];

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-10 md:px-8 md:py-15 lg:px-12.5 lg:pb-12 lg:pt-17.5">
      <div className="mx-auto max-w-335 w-full">

        {/* Heading */}
        <Heading vari={"primary"} className="animate__animated animate__shakeY">Application Tooling Options for Magnet Wire Terminations</Heading>

        <Para vari={"secondary"} className="mt-4">
          Explore the manual, semi-automatic, and automatic application tooling solutions for our solderless terminals.
        </Para>

        {/* Tabs */}
        <div className="mt-12.5 grid grid-cols-2 border-b-2 border-off-black/8">

          <button
            type="button"
            onClick={() => setActiveTab("magMate")}
            className={` relative border-b-2 px-4 pt-0 pb-3.5 text-center text-xl text-off-black leading-140 transition-colors duration-300 cursor-pointer ${activeTab === "magMate"
              ? "border-off-black font-semibold"
              : "border-transparent font-normal"
              }`}
          >
            MAG-MATE/SIAMEZE
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("amplivar")}
            className={`relative border-b-2 px-4 pt-0 pb-3.5 text-center text-xl text-off-black leading-140 transition-colors duration-300 cursor-pointer ${activeTab === "amplivar"
              ? "font-semibold border-off-black"
              : "font-normal border-transparent"
              }`}
          >
            AMPLIVAR
          </button>

        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activeData.cards.map((card, index) => (
            <div
              key={card.title}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              data-aos-duration="700"
              data-aos-once="true"
              className={` flex min-h-227 flex-col rounded-xl border border-off-black/8 bg-off-gray-100 p-4 ${"md:last:col-span-2 md:last:w-1/2 md:last:justify-self-center lg:last:col-span-1 lg:last:w-full"} `}
            >

              {/* Title */}
              <h3 className="text-2xl font-medium leading-140 text-off-black">
                {card.title}
              </h3>

              {/* Details */}
              <div className="mt-5 flex flex-col gap-2.5">

                {/* Machine Rate */}
                <div className="grid grid-cols-[1fr_1fr] xl:grid-cols-[202px_1fr] gap-2.5 border-b border-off-black/8 pb-2.5">
                  <span className="text-sm font-semibold leading-160 text-off-black sm:text-base">
                    Machine Rate (estimated):
                  </span>

                  <span className=" font-normal text-sm leading-160 text-dark-gray-100 sm:text-base">
                    {card.machineRate}
                  </span>
                </div>

                {/* Price */}
                <div className="grid grid-cols-[1fr_1fr] xl:grid-cols-[202px_1fr] gap-2.5 border-b border-off-black/8 pb-2.5">
                  <span className="text-sm font-semibold leading-160 text-off-black sm:text-base">
                    Price Range (estimated):
                  </span>

                  <div className="font-normal text-sm leading-160 text-dark-gray-100 sm:text-base">
                    {Array.isArray(card.priceRange) ? (
                      <ul className="list-disc pl-4">
                        {card.priceRange.map((price) => (
                          <li key={price}>{price}</li>
                        ))}
                      </ul>
                    ) : (
                      <div>{card.priceRange}</div>
                    )}
                  </div>
                </div>

                
                {/* Purchase From */}
                <div className="grid grid-cols-[1fr_1fr] xl:grid-cols-[202px_1fr] gap-2.5 border-b border-off-black/8 pb-2.5">
                  <span className="text-sm font-semibold leading-160 text-off-black sm:text-base">
                    Purchase From:
                  </span>

                  <div className="font-normal text-sm leading-160 text-dark-gray-100 sm:text-base">
                    {Array.isArray(card.purchaseFrom) ? (
                      <>
                        <div className="mb-2">{card.purchaseFrom[0]}</div>

                        <ul className="list-disc pl-4 flex flex-col gap-2">
                          {card.purchaseFrom.slice(1).map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <div>{card.purchaseFrom}</div>
                    )}
                  </div>
                </div>

                {/* Lead Time */}
                <div className="grid grid-cols-[1fr_1fr] xl:grid-cols-[202px_1fr] gap-2.5 border-b border-off-black/8 pb-2.5">
                  <span className="text-sm font-semibold leading-160 text-off-black sm:text-base">
                    Lead Time:
                  </span>

                  <span className="text-sm font-semibold leading-160 text-off-black sm:text-base">
                    {card.leadTime}
                  </span>
                </div>

                {/* Splice Type */}
                {card.spliceTypes && (
                  <div className="grid grid-cols-[1fr_1fr] xl:grid-cols-[202px_1fr] gap-2.5 border-b border-off-black/8 pb-2.5">
                    <span className="text-sm font-semibold leading-160 text-off-black sm:text-base">
                      Splice Type(s):
                    </span>

                    <span className="text-sm font-semibold leading-160 text-off-black sm:text-base">
                      {card.spliceTypes}
                    </span>
                  </div>
                )}

                {/* Additional Information */}
                <div className="grid grid-cols-[1fr_1fr] xl:grid-cols-[202px_1fr] gap-2.5">
                  <span className="text-sm font-semibold leading-160 text-off-black sm:text-base">
                    Additional Information:
                  </span>

                  <div className="text-sm font-semibold leading-160 text-off-black sm:text-base">
                    {Array.isArray(card.additionalInfo) ? (
                      <ul className="list-disc pl-4">
                        {card.additionalInfo.map((info) => (
                          <li key={info} className=" mb-1.5">
                            {info}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span>{card.additionalInfo}</span>
                    )}
                  </div>
                </div>

              </div>

              {/* Image */}
              <div className="mt-auto pt-1.5">
                <div className="h-90 overflow-hidden rounded-lg">
                  <Image src={card.image} width={399} height={360} className="h-full w-full xl:max-w-99.75 object-cover" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}