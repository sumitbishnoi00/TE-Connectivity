"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setSearchOpen(false);
  };

  return (
    <header className="bg-white">

      {/* ================= NAVBAR ================= */}
      <nav className="mx-auto flex h-20 sm:h-25 max-w-287 items-center gap-4 md:gap-6 px-4">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="shrink-0"
        >
          <Image
            src="/assets/images/webp/Logo.webp"
            alt="TE Connectivity"
            width={138}
            height={60}
            className="h-auto w-25 sm:w-34.5"
          />
        </Link>

        {/* =================================================
            SEARCH BAR
            768px AND ABOVE
        ================================================= */}
        <div className="hidden flex-1 md:block">
          <div className="mx-auto w-full max-w-157.5">
            <div className="relative">

              <input
                type="text"
                placeholder="Search by part # or keyword"
                className="h-12 w-full rounded-sm bg-off-black/8 pl-3.5 pr-12 font-normal text-base leading-160 text-dark-gray-100 outline-none transition-all duration-200 placeholder:text-[#888888] focus:bg-white focus:ring-1 focus:ring-[#d8d8d8]"
              />

              <button
                type="button"
                aria-label="Search"
                className="absolute right-1 top-1.5 flex h-9 w-9 items-center justify-center text-off-black transition-transform duration-200"
              >
                <Icon icon={"search"} />
              </button>

            </div>
          </div>
        </div>

        {/* =================================================
            MOBILE SEARCH ICON
            BELOW 768px
        ================================================= */}
        <button
          type="button"
          aria-label="Open search"
          onClick={handleSearchToggle}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-full bg-off-black/8 text-off-black transition-all duration-200 md:hidden"
        >
          {searchOpen ? <Icon icon={"closeicon"} /> : <Icon icon={"search"} />}
        </button>

        {/* =================================================
            DESKTOP LOGIN + CART
            1024px AND ABOVE
        ================================================= */}
        <div className="hidden items-center gap-6 lg:flex">

          {/* ================= LOGIN ================= */}
          <Link
            href="/login"
            className="group flex items-center gap-2.5 font-normal text-lg leading-160 text-off-black"
          >
            <span>
              <Icon icon={"usericon"} />
            </span>

            <span className="whitespace-nowrap">
            <span className=" transition-colors duration-300 hover:text-orange">
              Login
            </span>
            <span className="mx-1.25">
              /
            </span>
            <span className=" transition-colors duration-300 hover:text-orange">
              Register
            </span>
            </span>
          </Link>

          {/* ================= CART ================= */}
          <button
            type="button"
            className="group flex items-center gap-2.5 font-normal text-lg leading-160 text-off-black cursor-pointer transition-all duration-500"
          >
            <span className="group-hover:scale-105">
              <Icon icon={"cardicon"} />
            </span>
            <span className="transition-colors duration-200 group-hover:text-orange">
              Cart
            </span>
          </button>

        </div>

        {/* =================================================
            MENU BUTTON
            BELOW 1024px
        ================================================= */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-off-black/8 transition-all duration-200 lg:hidden"
        >
          <span className="flex w-5 flex-col gap-1">

            <span
              className={`h-[1.5px] w-full bg-off-black transition-all duration-300 ${
                menuOpen
                  ? "translate-y-[5.5px] rotate-45"
                  : ""
              }`}
            />

            <span
              className={`h-[1.5px] w-full bg-off-black transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-[1.5px] w-full bg-off-black transition-all duration-300 ${
                menuOpen
                  ? "translate-y-[-5.5px] -rotate-45"
                  : ""
              }`}
            />

          </span>
        </button>

      </nav>

      {/* =================================================
          MOBILE SEARCH DROPDOWN
          BELOW 768px
      ================================================= */}
      <div
        className={`overflow-hidden border-y border-off-black/8 bg-white transition-all duration-300 md:hidden ${
          searchOpen
            ? "max-h-24 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 sm:px-8">

          <div className="relative">

            <input
                type="text"
                placeholder="Search by part # or keyword"
                className="h-12 w-full rounded-sm bg-off-black/8 pl-3.5 pr-12 font-normal text-base leading-160 text-dark-gray-100 outline-none transition-all duration-200 placeholder:text-[#888888] focus:bg-white focus:ring-1 focus:ring-[#d8d8d8]"
              />

              <button
                type="button"
                aria-label="Search"
                className="absolute right-1 top-1.5 flex h-9 w-9 items-center justify-center text-off-black transition-transform duration-200"
              >
                <Icon icon={"search"} />
              </button>

          </div>

        </div>
      </div>

      {/* =================================================
          TABLET / MOBILE MENU
          BELOW 1024px
      ================================================= */}
      <div
        className={`overflow-hidden border-y border-off-black/8 bg-white transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-24 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-5 sm:px-8">

          <div className="grid grid-cols-2 gap-3">

            {/* ================= LOGIN ================= */}
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="flex h-14 items-center justify-center gap-2.5 rounded-[5px] border border-off-black/8 font-normal text-sm leading-160 text-off-black transition-all duration-200"
            >
              <Icon icon={"usericon2"} />

              <span>
                Login / Register
              </span>
            </Link>

            {/* ================= CART ================= */}
            <button
              type="button"
              className="flex h-14 items-center justify-center gap-2 rounded-[5px] border border-off-black/8 font-normal text-base leading-160 text-off-black transition-all duration-200"
            >
              <span className="relative">

                <Icon icon={"cardicon2"} />

              </span>

              <span>
                Cart
              </span>
            </button>

          </div>

        </div>
      </div>

    </header>
  );
};




export default Navbar;