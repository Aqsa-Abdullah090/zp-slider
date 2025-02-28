"use client";
import { useRef, useEffect, useState } from "react";
import Index from "./text-section/Index";

export default function HorScroll() {

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

  return (
    <section className="bg-black">
      <div
        className="flex w-full"
      >
        {/* Text Container */}
        <div className="text-container">
          <Index />
         
        </div>

        {/* Images */}
        <div className="flex gap-16 whitespace-nowrap">
          {IMAGES.map((src, idx) => (
            <div key={idx} className={`scroll${idx + 1} flex-shrink-0`}>
              <img
                src={src}
                alt={`image-${idx + 1}`}
                className="img w-[55vw] h-[60vh]  object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

