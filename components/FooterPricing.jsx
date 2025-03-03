"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import BuyEntryNow from "./button/BuyEntryNow";
import Timer from "./text-section/Timer";

function FooterPricing({ data }) {
  const footerRef = useRef(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.set(footerRef.current, { left: "100vw", opacity: 0 }); // Start hidden

      gsap.to(footerRef.current, {
        left: "42vw", // Move to final position
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5, // Add a slight delay
      });
    }
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div
      ref={footerRef}
      className="flex gap-4 3xl:gap-8 absolute bottom-0 lg:h-[70px] 3xl:h-[218px] footer-pricing"
    >
      <section className="flex lg:h-[100px] 3xl:h-[218px]">
        {/* Left Section: Agent Logo */}
        <div className="flex flex-col items-center justify-between border-r-2 h-full pr-[20px]">
          <div className="flex-grow flex items-center justify-center">
            <img
              src="https://zimopro.com/assets/temp/agents_logos/Sotherbys.svg"
              className="h-[50px] 3xl:h-[75px] max-w-[200px] object-contain"
              alt="Agent Logo"
            />
          </div>
          <p className="text-[9px] 3xl:text-[12px] tracking-[1px]">
            #78612345617
          </p>
        </div>

        {/* Right Section: Pricing, Button, Timer, and Progress Bar */}
        <div className="pl-[20px]">
          <div className="flex gap-6">
            <section className="flex flex-col justify-between lg:h-[80px]">
              {/* Price Info */}
              <div className="text-[23px] flex justify-between leading-[0.7] tracking-[3px] 3xl:tracking-[4px]">
                <p className="tracking-[5px] 3xl:tracking-[6px]">£355,767</p>
                <p>GBP</p>
              </div>

              {/* Timer */}
              <div>
                <Timer />
              </div>
            </section>

            <section className="flex flex-col justify-between lg:h-[100px] w-[200px]">
              {/* Buy Entry Button */}
              <div>
                <BuyEntryNow />
              </div>

              {/* Progress Bar */}
              <div>
                <div className="h-[2px] bg-white/25">
                  <div className="h-full bg-golden" style={{ width: "40%" }}></div>
                </div>
                <p className="text-[10px] pt-[1.5px]">0%</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FooterPricing;
