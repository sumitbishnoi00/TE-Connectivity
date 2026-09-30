"use client";

import React, { useState } from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Icon from "../common/Icons";
import { applicationData } from "@/utils/helper";

const Application = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 2, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 2, applicationData.length - 2)
    );
  };

  const visibleCards = applicationData.slice(
    currentIndex,
    currentIndex + 2
  );

  return (
    <section className="bg-ivory-white">
      <div className="mx-auto w-full max-w-360 px-4 py-10 sm:px-8 md:py-12 md:px-8 lg:p-12.5">

        {/* HEADING */}
        <div className="mx-auto mb-10 max-w-126.75 text-center md:mb-12.5">
          <Heading vari="primary">
            Solutions for Every Application
          </Heading>

          <Para vari={"secondary"} className="mt-4">TE magnet wire terminals are used across a wide range of industries and motor types.</Para>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6">
          {visibleCards.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="
                flex min-h-47.5 w-full
                flex-row
                max-sm:flex-col
                max-sm:items-center
                max-sm:justify-center
                max-sm:text-center
                max-sm:gap-4
                max-sm:p-4
                items-center
                rounded-xl
                border border-off-black/8
                bg-warm-ivory
                p-4
                sm:p-5
                md:p-5
                lg:p-5
                gap-4
                sm:gap-6
                md:gap-8.5
              "
            >
              {/* CONTENT */}
              <div className="min-w-0 flex-1 border-r border-off-black/8 pr-4 sm:pr-6 md:pr-8.5 max-sm:order-2 max-sm:border-r-0 max-sm:border-t max-sm:pt-4 max-sm:pr-0">
                <h3 className="mb-3 text-2xl font-medium leading-140 text-off-black">
                  {item.title}
                </h3>

                <Para vari={"ghost"}>{item.description}</Para>

              </div>

              {/* ICON */}
              <div
                className="
                  flex shrink-0 items-center justify-center max-sm:order-1
                  
                "
              >
                <div>
                  <Icon icon={item.icon} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ARROWS */}
        <div className="mt-7.5 flex items-center justify-center gap-3.5">
          {/* PREVIOUS */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous applications"
            className="
              group
              flex h-12 w-12
              items-center justify-center
              rounded-full
              bg-transparent
              transition-all 
              duration-500
              hover:bg-black
              hover:text-off-gray-100
              disabled:cursor-not-allowed
              disabled:opacity-50 
              cursor-pointer
              
            "
          >
            <Icon icon="leftarrow" />
          </button>

          {/* NEXT */}
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= applicationData.length - 2}
            aria-label="Next applications"
            className="
              group
              flex h-12 w-12
              items-center justify-center
              rounded-full
              bg-transparent
              transition-all 
              duration-500
              hover:bg-black
              hover:text-off-gray-100
              disabled:cursor-not-allowed
              disabled:opacity-50 
              cursor-pointer
            "
          >
            <Icon icon="rightarrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Application;