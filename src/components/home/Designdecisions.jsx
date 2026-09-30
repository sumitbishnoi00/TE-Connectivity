"use client";

import "animate.css";
import React, { useEffect, useRef, useState } from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Icon from "../common/Icons";
import { designDecisionsData } from "@/utils/helper";
import Button from "../common/Button";

const Designdecisions = () => {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);

  const [translateX, setTranslateX] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [step, setStep] = useState(335);

  const handlePrev = () => {
    setTranslateX((prev) => Math.max(prev - step, 0));
  };

  const handleNext = () => {
    setTranslateX((prev) => Math.min(prev + step, maxTranslate));
  };

  useEffect(() => {
    const calculateSlider = () => {
      if (!sliderRef.current || !trackRef.current) return;

      const containerWidth = sliderRef.current.clientWidth;
      const trackWidth = trackRef.current.scrollWidth;

      const card = trackRef.current.children[0];

      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 20;

        setStep(cardWidth + gap);
      }

      const max = Math.max(trackWidth - containerWidth, 0);

      setMaxTranslate(max);

      setTranslateX((prev) => Math.min(prev, max));
    };

    calculateSlider();

    window.addEventListener("resize", calculateSlider);

    return () => {
      window.removeEventListener("resize", calculateSlider);
    };
  }, []);

  return (
    <section className="overflow-hidden bg-off-gray-100">
      <div
        className="
          mx-auto
          w-full
          max-w-360
          py-10
          pl-4
          sm:py-15
          sm:pl-8
          md:py-15
          lg:py-17.5
          lg:pl-12.5
        "
      >
        {/* ================= HEADER ================= */}
        <div
          className="
            mb-6
            flex
            flex-col
            gap-6
            sm:mb-8
            md:mb-10
            lg:mb-12.5
            lg:pr-12.5
            sm:pr-8
            pr-4
            md:flex-row
            md:items-start
            md:justify-between
          "
        >
          {/* HEADING */}
          <div className="max-w-150.5">
            <Heading vari="primary" className="animate__animated animate__fadeInDown">
              Expert Resources to Guide Your Design Decisions
            </Heading>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex max-w-95.25 flex-col items-start gap-4">
            <Para vari="secondary">
              Access white papers, guides and case studies.
            </Para>

            <Button vari={"danger"}>View All Resources</Button>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div ref={sliderRef} className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="
              flex
              gap-5
              transition-transform
              duration-500
              ease-in-out
            "
            style={{
              transform: `translateX(-${translateX}px)`,
            }}
          >
            {designDecisionsData.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="
                  flex
                  min-h-71
                  w-78.75
                  min-w-78.75
                  shrink-0
                  flex-col
                  rounded-xl
                  border
                  border-off-black/8
                  bg-off-gray-100
                  p-3.5
                  sm:p-5
                "
              >
                {/* CARD TYPE */}
                <span
                  className="
                    mb-3
                    text-sm
                    font-medium
                    uppercase
                    leading-140
                    text-dark-gray-100
                  "
                >
                  {item.type}
                </span>

                {/* CARD TITLE */}
                <h3
                  className="
                    text-lg
                    font-medium
                    leading-150
                    text-off-black
                  "
                >
                  {item.title}
                </h3>

                {/* CARD DESCRIPTION */}
                <Para vari={"ghost"} className="mt-3">{item.description}</Para>

                {/* CARD ACTION */}
                <button
                  type="button"
                  className="
                    group
                    mt-auto
                    flex
                    w-fit
                    items-center
                    gap-1
                    text-base
                    font-medium
                    leading-100
                    text-orange
                    transition-all
                    hover:opacity-70
                    duration-300 
                    cursor-pointer
                  "
                >
                  {item.action}

                  {item.action === "Download" ? (
                    <span className="transition-transform duration-300 ease-out group-hover:translate-y-1.5">
                      <Icon icon={"download"} />
                    </span>
                  ) : (
                    <span className="transition-transform duration-300 ease-out group-hover:translate-x-2">
                      <Icon icon={"chevronleft3"} />
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ================= ARROWS ================= */}
        <div
          className="
            mt-7.5 flex items-center justify-center gap-3.5 pr-4 sm:pr-8 lg:pr-12.5
          "
        >
          {/* PREVIOUS */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={translateX === 0}
            aria-label="Previous resources"
            className="
              group
              flex h-12 w-12
              items-center justify-center
              rounded-full
              bg-transparent
              transition-all 
              duration-500
              hover:bg-off-black
              hover:text-white
              disabled:cursor-not-allowed
              disabled:opacity-50 
              cursor-pointer
            "
          >
            <Icon icon={"leftarrow2"} />
          </button>

          {/* NEXT */}
          <button
            type="button"
            onClick={handleNext}
            disabled={translateX >= maxTranslate}
            aria-label="Next resources"
            className="
              group
              flex h-12 w-12
              items-center justify-center
              rounded-full
              bg-transparent
              transition-all 
              duration-500
              hover:bg-off-black
              hover:text-white
              disabled:cursor-not-allowed
              disabled:opacity-50 
              cursor-pointer
            "
          >
            <Icon icon={"rightarrow2"} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Designdecisions;