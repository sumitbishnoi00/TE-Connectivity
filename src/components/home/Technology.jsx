"use client";

import { RIGHT_MAGNER } from "@/utils/helper";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import Heading from "../common/Heading";
import Image from "next/image";
import Para from "../common/Para";
import Icon from "../common/Icons";

const PopupModal = ({ item, onClose }) => {
  const modalRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    // Prevent background scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl w-full max-w-335 max-h-[90vh] overflow-y-auto p-6 relative"
      >
        <div className="flex flex-col lg:flex-row gap-10 w-full">
          <div className={`${item.heading === RIGHT_MAGNER[0].heading ? "lg:w-80" : "lg:w-92"}`}>
            <h3 className="text-2xl font-semibold text-off-black mb-4 leading-140">
              {item.heading}
            </h3>
            <ul className="">
              {item.popup.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-dark-gray-100 font-normal text-lg leading-160"
                >
                  <span className="mt-2.75 shrink-0 w-1.25 h-1.25 rounded-full bg-dark-gray-100" />
                  {bullet}
                </li>
              ))}
            </ul>
            <a
              className="group flex items-center max-w-max gap-1 text-xl font-medium leading-131 mt-6 text-off-black transition-opacity hover:opacity-70 cursor-pointer"
              href=""
            >
              Learn More{" "}
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                <Icon icon={"chevronleft2"} />
              </span>
            </a>
          </div>
          <div className="">
            {(() => {
              const imgObj = item.popup.images.find((x) => x.src);
              const specItems = item.popup.images.filter((x) => x.title);
              if (imgObj && specItems.length > 0) {
                // Flex layout: image left, specs right
                return (
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <img
                      src={imgObj.src}
                      alt={imgObj.label || ""}
                      className="w-full sm:max-w-68.75 rounded-lg object-cover"
                    />
                    <div className=" flex flex-col gap-6 max-w-[375.5px] w-full">
                      {specItems.map((spec, i) => (
                        <div key={i}>
                          <p className="text-base font-medium text-off-black leading-160 mb-3">
                            {spec.title}
                          </p>
                          <div className="flex flex-col gap-2">
                            {spec.about.map((point, j) => (
                              <p
                                key={j}
                                className="font-normal text-sm text-gray-150 leading-160 text-dark-gray-100"
                              >
                                {point}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              // Default grid layout
              return (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {item.popup.images.map((imgItem, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-3 w-full"
                    >
                      <p className="text-base text-center text-off-black font-medium leading-160">
                        {imgItem.label}
                      </p>
                      <img
                        src={imgItem.src}
                        alt={imgItem.label}
                        className="w-full max-sm:max-w-90 md:max-w-68.75 rounded-lg object-cover"
                      />
                      {imgItem.about && imgItem.about.length > 0 && (
                        <div className="w-full max-sm:max-w-90 md:max-w-68.75 flex flex-col gap-2 mt-2">
                          {imgItem.about.map((point, j) => (
                            <p
                              key={j}
                              className="font-normal text-sm text-dark-gray-100 leading-160"
                            >
                              {point}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <div className="px-4 sm:px-8 md:px-10 lg:px-12.5 py-10 sm:py-15 md:py-15 lg:pt-30 lg:pb-12.5">
        <div className="max-w-335 mx-auto w-full flex flex-col items-center  justify-center">
          <Heading vari={"primary"} className="animate__animated animate__flipInX" >
            Choose the Right Magnet Wire Termination Technology
          </Heading>
          <Para vari={"secondary"} className="mt-4">
            Find the best TE solution for your motor or coil design.
          </Para>

          <div className="max-sm:max-w-125 max-lg:max-w-183.5 max-lg:mx-auto mt-12.5 grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {RIGHT_MAGNER.map((items, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 250}
                data-aos-duration="700"
                data-aos-once="true"
                className={` border border-black/8  bg-off-gray-100 p-4 rounded-xl flex flex-col justify-between `}
              >
                <div>
                  <Image
                    className="rounded-lg h-57 object-cover object-center w-full"
                    src={items.img}
                    alt={items.heading}
                    width={285}
                    height={228}

                  />
                  <h4 className="font-medium mt-6 text-lg leading-160 text-off-black">
                    {items.heading}
                  </h4>
                  <Para vari={"ghost"} className="mt-3">{items.para}</Para>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setActivePopup(items)}
                    className="group text-orange font-medium text-base leading-131 flex items-center gap-1 max-w-max transition-opacity hover:opacity-70 cursor-pointer"
                  >
                    {items.link}
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      <Icon icon={"chevronleft"} />
                    </span>

                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Popup Modal */}
      {activePopup && (
        <PopupModal item={activePopup} onClose={() => setActivePopup(null)} />
      )}
    </>
  );
};

export default Team;