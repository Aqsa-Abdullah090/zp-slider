import React from "react";
import { links } from "./contants";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

const CenterNavItems = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(term) {
    const formattedTerm = term.replaceAll(" ", "-");
    const params = new URLSearchParams(searchParams);
    const inReelsPage = pathname.includes("reels");

    if (inReelsPage) {
      if (formattedTerm) {
        params.set("type", formattedTerm);
      } else {
        params.delete("type");
      }
      router.replace(`${pathname}?${params.toString()}`);
    } else {
      router.push(`/beta/reels?type=${formattedTerm}`);
    }
  }

  return (
    <ul className="flex lg:space-x-3 xl:space-x-5 3xl:space-x-[48px] 4xl:space-x-[1vw]">
      {links.map((link) => (
        <li
          key={link}
          onClick={() => handleClick(link)}
          className={clsx(
            "uppercase text-[9.23px] tracking-[3px] whitespace-nowrap opacity-50",
            searchParams.get("type") === link.replaceAll(" ", "-")
              ? "opacity-100 cursor-pointer"
              : "opacity_hover_animation"
          )}
        >
          {link}
        </li>
      ))}
    </ul>
  );
};

export default CenterNavItems;

