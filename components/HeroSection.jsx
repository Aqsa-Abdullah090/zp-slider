"use client";

import React from "react";
import HorScroll from "./HorScroll";
import Header from "./header";
// import Navbar from "./Navbar";
import Address from "./Address";
import Footer from "./Footer";
import MiniNavProvider from "./mini-nav-provider";
// import Navbar from "./navbar/index";

export default function Hero() {
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
        <div className="fixed bottom-0 w-full">
          <Address />
        </div>
      </div>
      <Footer />
    </div>
  );
}
