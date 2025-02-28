"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/HeroSection";

export default function Slider() {
  const horScrollRef = useRef(null);
  const [hasScrolledHorizontal, setHasScrolledHorizontal] = useState(false);

  const IMAGES = [
    "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2Fbackground_carousel%2F2400%2FZP172594.jpg?alt=media&token=0faf3bf5-71c0-4d99-9fd2-7248411ad332",
    "./assest/2.png",
    "./assest/3.png",
    "./assest/4.png",
    "./assest/1.png",
    "./assest/2.png",
    "./assest/3.png",
    "./assest/4.png",
    "./assest/1.png",
    "./assest/2.png",
    "./assest/3.png",
    "./assest/4.png",
  ];


  const handleScroll = (e) => {
    e.preventDefault();

    const horScroll = horScrollRef.current;

    if (horScroll) {
      const maxScrollLeft = horScroll.scrollWidth - horScroll.clientWidth;

      if (horScroll.scrollLeft < maxScrollLeft && e.deltaY > 0) {
        horScroll.scrollLeft += e.deltaY;
        animateTextContainer();
        setHasScrolledHorizontal(true); // Update state when scrolling horizontally
      } else if (horScroll.scrollLeft > 0 && e.deltaY < 0) {
        animateTextContainer(true);
        horScroll.scrollLeft += e.deltaY;
        setHasScrolledHorizontal(true); // Update state for horizontal scroll
      } else if (horScroll.scrollLeft >= maxScrollLeft && e.deltaY > 0) {
      }
    }
  };


  // TEXT ANIMATION
  const animateTextContainer = (reverse = false) => {
    gsap.to(".text-container", {
      opacity: 1,
      x: reverse ? "0%" : "-100%",
      duration: 1,
      delay: reverse ? 0 : 0.2,
    });
  };

  // HORIZONTAL SCROLLER IMAGES ANIMATIONS
  const animateImage = (selector, { scale, delay = 0, duration = 0.1, trigger } = {}) => {
    gsap.from(selector, {
      scale,
      delay,
      duration,
      scrollTrigger: trigger
        ? {
            trigger,
            scroller: horScrollRef.current,
            horizontal: true,
            scrub: true,
          }
        : undefined,
    });
  };
  

  // Initialize GSAP animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate each image in the horizontal scroll
    IMAGES.forEach((_, idx) => {
      animateImage(`.scroll${idx + 1} .img`, {
        scale: idx === 0 ? 1 : 0.5, 
        duration: idx === 0 ? 0 : 0.01, 
        delay: idx === 0 ? 1 : 0.1, 
        trigger: `.scroll${idx + 1} .img`,
      });
    });

  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white flex flex-col">
      {/* Horizontal Scroll Section */}
      <div
        ref={horScrollRef}
        onWheel={handleScroll}
        className="h-screen w-screen flex overflow-x-scroll scrollbar-hide flex-shrink-0"
      >
        <Hero />
      </div>

    </div>
  );
}