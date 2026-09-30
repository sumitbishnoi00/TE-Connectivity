"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { benefitsData } from "@/utils/helper";
import Icon from "../common/Icons";
import Heading from "../common/Heading";
import Para from "../common/Para";

const Benefits = () => {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="bg-orange/4">
      <div
        className="
          mx-auto
          max-w-360
          w-full
          px-4
          py-5
          sm:px-8
          sm:py-6
          md:px-10
          lg:px-12.5
          lg:py-7.5
        "
      >

        <Heading vari={"primary"} className="text-center mb-7.5 animate__animated animate__fadeInDown">Benefits that Drive Better Manufacturing</Heading>

        <div
          className="
            
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-6
            lg:grid-cols-5
            gap-y-4
            md:gap-x-0
          "
        >
          {benefitsData.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-down"
              data-aos-delay={index * 300}
              data-aos-duration="700"
              data-aos-once="true"
              className={`
                group
                flex
                flex-col
                items-center
                
                px-4 
                md:px-4
                text-center
                lg:pt-0
                pb-1.5
                
                 ${index === 4
                  ? "sm:col-span-2"
                  : ""
                }

                ${index === 0 || index === 2
                  ? "sm:border-r sm:border-off-black/8"
                  : ""
                }
                ${index < 3
                  ? "md:col-span-2 lg:col-span-1"
                  : index === 3
                    ? "md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                    : "md:col-span-2 md:col-start-4 lg:col-span-1 lg:col-start-auto"
                }
                ${index === 0 ? "md:border-r md:border-off-black/8" : index === 1 ? "md:border-r md:border-off-black/8" : index === 2 ? "md:border-r-0" : index === 3 ? "md:border-r md:border-off-black/8" : ""}

                ${index === 0
                  ? "lg:pr-4 lg:pl-0"
                  : index === benefitsData.length - 1
                    ? "lg:pl-4 lg:pr-0"
                    : "lg:px-4"
                }
                ${index !== benefitsData.length - 1
                  ? "lg:border-r lg:border-off-black/8"
                  : ""
                }
              `}
            >
              {/* Icon */}

              <Icon icon={item.icon} />

              {/* Title */}
              <h3
                className="
                  mt-6
                  mb-2
                  text-lg
                  font-medium
                  leading-160
                  text-off-black
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <Para vari={"ghost"} className="max-w-[242.4px] w-full">{item.description}</Para>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;