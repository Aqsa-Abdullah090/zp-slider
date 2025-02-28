import BuyEntryNow from "./button/BuyEntryNow";
import Loaded from "./loaded";
import Timer from "./text-section/Timer";

function FooterPricing({ data }) {
  if (!data) {
    return null; // Prevents rendering if data is undefined
  }

  return (
    <div className="flex gap-4 3xl:gap-8 absolute bottom-8 h-[86px] w-max left-[60vw] footer-pricing">
      <img
        src={data?.agent_logo || ""}
        className="h-[37px] 3xl:h-[52px] w-auto my-auto max-w-[150px] 3xl:max-w-[200px] object-contain"
        alt=""
      />

      <div className="h-full w-[1px] 3xl:w-[2px] bg-black" />
      <div className="flex flex-col justify-between w-[230px] 3xl:w-[300px]">
        <div className="text__30 flex justify-between tracking-[3px] 3xl:tracking-[4px] w-full leading-[0.7]">
          <p className="tracking-[5px] 3xl:tracking-[6px]">
            <span dir="ltr">$</span>
            {data?.price || "N/A"}
          </p>{" "}
          <p>{data?.currency || "N/A"}</p>
        </div>
        <Timer />
      </div>

      <div className="flex flex-col justify-between">
        <BuyEntryNow />
        <Loaded number={parseInt(data?.completion_percentage || "0")} />
      </div>
    </div>
  );
}
export default FooterPricing;



