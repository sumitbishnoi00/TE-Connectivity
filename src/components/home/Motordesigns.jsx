"use client";

import "animate.css";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Icon from "../common/Icons";

const Motordesigns = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const createPlayer = () => {
      if (
        cancelled ||
        !window.YT ||
        !window.YT.Player ||
        !playerContainerRef.current ||
        playerRef.current
      ) {
        return;
      }

      playerRef.current = new window.YT.Player(
        playerContainerRef.current,
        {
          videoId: "blgaIgoZjSQ",

          playerVars: {
            autoplay: 0,
            rel: 0,
            playsinline: 1,
          },

          events: {
            onReady: () => {
              if (isPlaying) {
                playerRef.current?.playVideo();
              }
            },

            onStateChange: (event) => {
              // 0 = Ended
              // 1 = Playing
              // 2 = Paused

              if (event.data === 0 || event.data === 2) {
                setIsPlaying(false);
              }
            },

            onError: () => {
              setIsPlaying(false);
            },
          },
        }
      );
    };

    // API already loaded
    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      const existingScript = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      );

      window.onYouTubeIframeAPIReady = createPlayer;

      if (!existingScript) {
        const script = document.createElement("script");

        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;

        document.body.appendChild(script);
      }
    }

    return () => {
      cancelled = true;

      if (window.onYouTubeIframeAPIReady) {
        window.onYouTubeIframeAPIReady = null;
      }

      /*
       * IMPORTANT:
       * Don't call player.destroy() here.
       *
       * YouTube removes its iframe itself and React also
       * manages the DOM. Calling destroy() can cause:
       *
       * NotFoundError: removeChild
       */
    };
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);

    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  return (
    <section className="bg-ivory-white">
      <div className="mx-auto flex flex-col xl:flex-row xl:items-start items-center w-full max-w-360  gap-8 px-4 py-10 sm:px-8 md:gap-10 md:py-12 md:px-8 lg:p-12.5 lg:gap-12.5">

        {/* LEFT CONTENT */}
        <div className="w-full  xl:max-w-132.5 flex flex-col xl:text-start text-center gap-4">

          <Heading vari={"primary"} className="animate__animated animate__fadeInDown">
            Optimize Motor Designs with Advanced Termination Solutions
          </Heading>

          <Para vari={"secondary"} className="xl:max-w-122.25 w-full">
            Discover how manufacturers are optimizing motor designs and cutting costs with TE Connectivity’s robust portfolio of MAG-MATE and SIAMEZE terminals for Aluminum Magnet Wire. Enhance your processes with innovative termination solutions tailored to today's needs. Explore efficient magnet wire connections for motors, compressors, transformers, and other windings.
          </Para>
        </div>

        
        {/* RIGHT IMAGE / VIDEO */}
        <div className="w-full xl:max-w-190">
          <div className="relative aspect-608/330 w-full overflow-hidden rounded-xl">

            {/* YOUTUBE PLAYER - ALWAYS IN DOM */}
            <div
              ref={playerContainerRef}
              className="absolute inset-0 h-full w-full"
            />

            {/* IMAGE + PLAY BUTTON */}
            {!isPlaying && (
              <div className="absolute inset-0 z-10">
                <Image
                  src="/assets/images/webp/solution-section.webp"
                  alt="Solderless Magnet Wire Termination"
                  fill
                  priority
                  className="object-cover"
                />

                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Play YouTube video"
                  className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/20 backdrop-blur-[20px] transition-transform duration-200 hover:scale-110"
                >
                  <span>
                    <Icon icon="playicon" />
                  </span>
                </button>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Motordesigns;