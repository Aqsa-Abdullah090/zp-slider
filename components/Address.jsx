"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Address() {
  const addressRef = useRef(null);
  const hasAnimated = useRef(false); // To prevent repeated animations

  useEffect(() => {
    const handleScroll = () => {
      // Trigger animation only once when scrolling starts
      if (!hasAnimated.current) {
        gsap.to(addressRef.current, {
          x: "-35vw", // Move to the left
          scale: 0.8, // Slightly shrink
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        });
        hasAnimated.current = true; // Prevent multiple triggers
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div
      ref={addressRef}
      className="fixed left-1/2 bottom-[-1%] transform -translate-x-1/2 -translate-y-1/2 flex items-center text-[8px] 3xl:text-[14px] w-max mx-auto lg:mt-auto px-4 lg:px-0 flex-wrap lg:flex-nowrap gap-1.5 lg:gap-6 mt-8"
    >
      <img
        src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimo%2Fcategories%2F1701925788521.png?alt=media&token=e639c433-2a76-40a2-a31f-9d1d9684d7f2"
        className="h-3 lg:h-6"
        alt="Location Icon"
      />
      <p>Regent Street</p>
      <p>The Lloyd’s Building</p>
      <p>London</p>
      <p>WC2N</p>
      <p>United Kingdom</p>
    </div>
  );
}


