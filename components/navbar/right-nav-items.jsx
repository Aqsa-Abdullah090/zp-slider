/* eslint-disable @next/next/no-img-element */
import UserSvg from "../svg/user-svg";
import ZigProSell from "../svg/zig-pro-sell-svg";
import clsx from "clsx";
import React from "react";

const RightNavItems = ({ variant, expanded = false }) => {
  return (
    <>
      <div
        className={clsx(
          variant === "fixed" && "duration-300 ease-linear",
          variant === "fixed" && !expanded
            ? "absolute z-0 translate-x-[150px]"
            : expanded
            ? "translate-x-0"
            : ""
        )}
      >
        <ZigProSell className="fill-inherit" />
      </div>
      <UserSvg className="w-auto h-[16.67px] lg:h-[23.08px] 3xl:h-[30px] flex-shrink-0 z-10 text-white" />

      <div className="z-10">
        <img
          src="/assest/uk-flag.png"
          alt="uk flag"
          className="w-[80px] h-auto flex-shrink-0"
        />
      </div>
    </>
  );
};

export default RightNavItems;

