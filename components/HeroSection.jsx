"use client";

import React from "react";
import HorScroll from "./HorScroll";
import Header from "./header";
import Address from "./Address";
import Footer from "./Footer";
import MiniNavProvider from "./mini-nav-provider";

export default function Hero() {
  const mockData = {
    country_name: "USA",
    region_state: "California",
    city: "Los Angeles",
    address_line_1: "123 Sunset Blvd",
    id: "001",
  };

  return (
    <div className="relative w-full h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <MiniNavProvider />
      </div>
      <div className="fixed top-[0px] left-0 w-full z-40">
        <Header />
      </div>
      <div className="mt-[65px]">
        <HorScroll />
        <div className="fixed bottom-0 w-full z-40">
          <Address />
        </div>
      </div>
      <Footer data={mockData} /> {/* ✅ Pass data to Footer */}
    </div>
  );
}

