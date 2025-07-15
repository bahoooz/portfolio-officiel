"use client";

import React from "react";
import { CardAvisClientTypes } from "../types/typesComponents";
import { Star } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

export default function CardAvisClient({
  name,
  commentary_fr,
  commentary_en,
  stars,
  release_date,
}: CardAvisClientTypes) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <div className="bg-lightYellow dark:bg-bgFooter w-[250px] xl:w-full p-3 rounded-xl flex flex-col gap-6 h-fit">
      <div className="flex gap-3">
        <div className="w-16 h-16 rounded overflow-hidden bg-black flex items-center justify-center">
          <span className="text-lightYellow text-3xl font-bold">{name.charAt(0)}</span>
        </div>
        <h3 className="max-w-[100px] text-xl text-lightBrown dark:text-lightBrown">{name}</h3>
      </div>
      <p className="text-sm">&quot;{isEnglish ? commentary_en : commentary_fr}&quot;</p>
      <div className="flex items-center justify-between">
        <p className="text-sm text-lightBrown dark:text-lightYellow">{release_date}</p>
        <div className="flex gap-1">
          {Array.from({ length: stars }, (_, index) => (
            <Star
              weight="fill"
              className="text-[#F0CE5B] dark:text-[#FFE167]"
              size={20}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
