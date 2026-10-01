"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { footerCards, footerLinks } from "@/utils/helper";
import Heading from "./Heading";
import Para from "./Para";
import Icon from "./Icons";



const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <footer className=" bg-off-black ">
      {/* CTA Section */}
      <div className="mx-auto w-full max-w-360 px-4 pt-10 sm:px-6 sm:pt-10 md:px-8 md:pt-15 lg:px-12.5 lg:pt-12.5">
        {/* Heading */}
        <div className="mx-auto max-w-222.5 text-center flex flex-col items-center">
          <Heading vari={"secondary"} className="animate__animated animate__flipInX">Need Help Selecting the Right Magnet Wire Solution?</Heading>

          <Para vari={"primary"} className="max-w-149 mt-4 text-off-gray-100/80">Our product experts can help you select the right terminal, tooling and process for your motor design and production needs.</Para>
        </div>

        {/* Cards */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-12.5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {footerCards.map((card, index) => (
            <div
              key={index}
              data-aos="flip-up"
              data-aos-delay={index * 200}
              data-aos-duration="700"
              data-aos-once="true"
              className="rounded-lg bg-dark-charcoal py-4.75 px-5 sm:min-h-37 sm:last:col-span-2 sm:last:justify-self-center lg:last:col-span-1"
            >
              <h3 className="text-lg font-medium leading-160 text-off-gray-100">
                {card.title}
              </h3>

              <p className="mt-2.75 text-base font-normal leading-160 text-off-gray-100/80">
                {card.description}
              </p>

              <button
                className="group mt-4.75 inline-flex items-center gap-1 text-base font-medium leading-132 text-orange transition-opacity hover:opacity-70 cursor-pointer"
              >
                <span>
                  <Icon icon={card.icon} />
                </span>
                <span>{card.link}</span>

                {index !== 1 && (
                  <span className=" transition-transform duration-300 group-hover:translate-x-2">
                    <Icon icon={"chevronleft4"} />

                  </span>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-off-gray-100/8 mt-8 sm:mt-10 md:mt-12 lg:mt-15">
        <div className="mx-auto flex w-full max-w-360 flex-col gap-4 lg:flex-row items-center lg:justify-between py-4 sm:py-5 md:py-7.5 px-4 sm:px-6 md:px-8 lg:px-12.5">
          {/* Copyright */}
          <p className="text-base xl:text-lg font-normal leading-160 text-off-gray-100/80">
            © {currentYear} TE Connectivity. All Rights Reserved.
          </p>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link, index) => (
              <a
                href="#"
                key={index}
                className="text-base xl:text-lg font-normal leading-160 text-off-gray-100/80 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;