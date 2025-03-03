/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import LeftArrow from "./svg/left-arrow";
import MiceSvg from "./svg/mice-svg";
import FooterPricing from "./FooterPricing";

function Footer({ data }) {
  return (
    <footer
      className={clsx(
        "text-[7px] 3xl:text-[12px] uppercase mt-4 lg:mt-auto relative w-full flex gap-8",
        "mb-6 lg:mb-4 2xl:mb-6 3xl:mb-8 px-4 lg:px-12"
      )}
    >
      <div className="2xl:flex flex-wrap lg:flex-nowrap gap-1 lg:gap-3 items-center hidden">
        <a href="#">real estate</a>
        <LeftArrowWrapper />
        <a href="#">{data.country_name}</a>

        {data.region_state && (
          <>
            <LeftArrowWrapper /> <a href="#">{data.region_state}</a>
          </>
        )}
        <LeftArrowWrapper />
        <a href="#">{data.city}</a>
        <LeftArrowWrapper />
        <a href="#">{data.address_line_1}</a>
        <LeftArrowWrapper />
        <p>#786123456{data.id}</p>
      </div>

      {/* mouse animation part */}
      <div
        className={clsx(
          "absolute right-8 3xl:right-12 bottom-0 3xl:bottom-8 hidden lg:flex items-center gap-5 z-[100]"
        )}
      >
        <img
          src="/assets/icons/left-arrow.svg"
          className="h-[18px] 3xl:h-[25px] scroll-arrow-left opacity-25 transition-all duration-200 mt-2 3xl:mt-3.5"
          alt=""
        />
        <div className="scroll__animation">
          <div className="mouse">
            <MiceSvg fill="#fff" />
          </div>
        </div>
        <img
          src="/assets/icons/right-arrow.svg"
          className="h-[18px] 3xl:h-[25px] scroll-arrow-right transition-all duration-200 mt-2 3xl:mt-3.5"
          alt=""
        />
      </div>

      <div className="relative hidden lg:block">
        <FooterPricing data={data} />
      </div>
    </footer>
  );
}
export default Footer;

const LeftArrowWrapper = () => {
  return (
    <LeftArrow
      className={clsx(
        "h-2 3xl:h-3 stroke-white"
      )}
    />
  );
};
