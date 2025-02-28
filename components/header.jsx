import Image from "next/image";

export default function Header() {
  return (
    <header className="flex w-full bg-[black] z-0 px-4 lg:pl-12 3xl:pl-16 lg:pr-8 3xl:pr-12 mb-2 3xl:mb-4 mt-[8vh] lg:mt-[6vh] 2xl:mt-[8vh] 3xl:mt-[12vh]">

      {/* Back Button */}
      <button className="flex items-center gap-2 lg:gap-4">
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56.69 41.21"
          className="h-[9px] 3xl:h-[11px] -scale-x-[1] fill-white"
        >
          <path
            id="Path_7815"
            d="M36.08,0l-3.24,3.24,15.09,15.08H0v4.58h47.92l-15.09,15.08,3.24,3.24,20.62-20.6L36.08,0Z"
          />
        </svg>
        <p className="uppercase text-[12px] opacity-25 hover:opacity-100">back</p>
      </button>

      <div className="flex items-end gap-3 lg:gap-4 3xl:gap-6 ml-auto">
        <button className="w-6 3xl:w-8">
          <Image
            src="/assest/icons/heart-red.svg"
            className="h-[20px] 3xl:h-[30px] w-auto"
            alt="Heart Icon"
            width={30}
            height={30}
          />
        </button>
        <button>
          <Image
            src="/assest/icons/share.svg"
            className="h-[20px] 3xl:h-[30px]"
            alt="Share Icon"
            width={30}
            height={30}
          />
        </button>
        <button>
          <Image
            src="/assest/icons/cam.svg"
            className="h-[20px] 3xl:h-[30px]"
            alt="Camera Icon"
            width={30}
            height={30}
          />
        </button>
      </div>
    </header>
  );
}

