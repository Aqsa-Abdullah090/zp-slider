import BuyEntryNow from "../button/BuyEntryNow";
import Timer from "./Timer";

export default function PriceCard() {
  return (
    <section className="flex w-full lg:h-[160px] 3xl:h-[218px] mt-4 px-4 ">
      {/* Left Section: Agent Logo */}
      <div className="w-[41.62%] flex flex-col items-center justify-between border-r-2 h-full">
        <div className="flex-grow flex items-center justify-center">
          <img
            src="https://zimopro.com/assets/temp/agents_logos/Sotherbys.svg"
            className="h-[50px] 3xl:h-[75px] max-w-[200px] object-contain"
            alt="Agent Logo"
          />
        </div>
        <p className="text-[9px] 3xl:text-[12px] tracking-[1px]">#78612345617</p>
      </div>

      {/* Right Section: Pricing, Button, Timer, and Progress Bar */}
      <div className="w-[58.38%] px-[48px]">
        <div className="w-[230px] 3xl:w-[300px] flex flex-col gap-4">
          {/* Price Info */}
          <div className="text-[23px] flex justify-between leading-[0.7] tracking-[3px] 3xl:tracking-[4px]">
            <p className="tracking-[5px] 3xl:tracking-[6px]">£355,767</p>
            <p>GBP</p>
          </div>

          {/* Buy Entry Button */}
          <div>
            <BuyEntryNow />
            </div>

          {/* Timer */}
          <div>
            <Timer />
          </div>

          {/* Progress Bar */}
          <div>
            <div className="h-[2px] bg-white/25">
              <div className="h-full bg-golden" style={{ width: "40%" }}></div>
            </div>
            <p className="text-[10px] pt-[1.5px]">0%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
