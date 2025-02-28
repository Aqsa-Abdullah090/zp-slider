/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import CenterNavItems from "./center-nav-items";
import RandomizedAudioWaveAnimation from "./randomized-audio-wave-animation";
import { NAV_BEHEIVIOURS } from "@/lib/constants";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Navbar = ({ page }: { page: string }) => {
  const reelsPage = page === "reels";

  const { navbarColor } = useSelector((state: RootState) => state.navbar);

  console.log(navbarColor);

  return (
    <div className="space-y-[8px]">
      <div
        //   onViewportEnter={() => dispatch(isFixedVisibleReducer(false))}
        //   onViewportLeave={() => dispatch(isFixedVisibleReducer(true))}
        className={clsx(
          "container__padding__y  flex justify-between items-center lg:grid lg:grid-cols-[135px_auto_135px] xl:grid-cols-[200px_auto_200px] 3xl:grid-cols-[250px_auto_250px]",
          reelsPage ? "px-[30px]" : "container__padding",
          // "text-white fill-white"
          "bg-transparent",
          navbarColor === NAV_BEHEIVIOURS.transparentBg && !reelsPage
            ? "text-white fill-white"
            : "",
          navbarColor === NAV_BEHEIVIOURS.solidBg && !reelsPage
            ? "text-white fill-white"
            : "",

          navbarColor === NAV_BEHEIVIOURS.solidwhiteBg &&
            "fill-black text-black"
        )}
      >
        {/* center, HIDDEN in small screens for now  */}
        <div className="hidden lg:flex justify-self-center">
          <CenterNavItems />
        </div>
      </div>
      {/* items below navbar audio, List with us */}
      {!reelsPage && (
        <div className=" container__padding flex justify-between items-center">
          <div>
            <RandomizedAudioWaveAnimation />
          </div>
          <p className="uppercase text-white tracking_2 base__font__size opacity_hover_animation">
            list with us
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
