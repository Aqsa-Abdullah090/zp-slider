"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-[7px] 3xl:text-[12px] uppercase mt-4 lg:mt-auto relative w-full flex gap-8 mb-6 lg:mb-4 2xl:mb-6 3xl:mb-8 px-4 lg:px-12">
      <div className="hidden 3xl:flex flex-wrap lg:flex-nowrap gap-1 lg:gap-3 items-center">
        <Link href="#">Real Estate</Link>
        <ArrowIcon />
        <Link href="#">United Kingdom</Link>
        <ArrowIcon />
        <Link href="#">London</Link>
        <ArrowIcon />
        <Link href="#">London</Link>
        <ArrowIcon />
        <Link href="#">Regent Street</Link>
        <ArrowIcon />
        <p>#78612345617</p>
      </div>
      <div className="fixed right-8 3xl:right-12 bottom-1 3xl:bottom-4 hidden lg:flex items-center gap-5 z-[100]">
        <Image
          src="/assest/icons/left-arrow.svg"
          alt="left arrow"
          width={18}
          height={18}
          className="h-[18px] 3xl:h-[25px] scroll-arrow-left transition-all duration-200 mt-2 3xl:mt-3.5 opacity-25"
        />
        <div className="mouse">
          <MouseIcon />
        </div>
        <Image
          src="/assest/icons/right-arrow.svg"
          alt="right arrow"
          width={18}
          height={18}
          className="h-[18px] 3xl:h-[25px] scroll-arrow-right transition-all duration-200 mt-2 3xl:mt-3.5"
        />
      </div>
    </footer>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5.207 9.414"
      className="h-2 3xl:h-3 stroke-white"
    >
      <path
        d="M74.805,384.151l4-4-4-4"
        transform="translate(-74.098 -375.444)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        opacity="0.25"
      ></path>
    </svg>
  );
}

function MouseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 43.18 78.92"
      className="w-[19.58px] lg:w-[27.12px] 3xl:w-[35.25px] h-auto animate-bounce"
      fill="#fff"
    >
      <path d="M21.59,0C9.69,0,0,9.69,0,21.59v35.74c0,11.9,9.69,21.59,21.59,21.59s21.59-9.69,21.59-21.59V21.59C43.18,9.69,33.49,0,21.59,0ZM41.18,57.33c0,10.8-8.79,19.59-19.59,19.59S2,68.13,2,57.33V21.59C2,10.79,10.79,2,21.59,2s19.59,8.79,19.59,19.59v35.74Z"></path>
    </svg>
  );
}
