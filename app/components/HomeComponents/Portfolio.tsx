"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { PortfolioTypes } from "../types/typesComponents";
import { usePathname } from "next/navigation";

export default function Portfolio({ text }: PortfolioTypes) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const portfolioLink = isEnglish ? "/en/portfolio" : "/portfolio";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col items-center">
        <div className="w-[302px] sm:w-[404px] md:w-[431px] lg:w-[845px] xl:w-[976px] 2xl:w-[1128px]">
          <h2 className="text-lightBrown dark:text-lightYellow text-2xl sm:text-3xl md:text-4xl xl:text-[40px] font-bold mb-8 sm:mb-12 md:mb-16">
            Portfolio
          </h2>
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            <Link
              href={
                isEnglish
                  ? "/en/portfolio/mgr"
                  : "/portfolio/mgr"
              }
              className="w-full h-[200px] bg-[#f5dfbb] flex justify-center items-center rounded-lg hover:scale-105 transition-all"
            >
              <Image
                src={"/assets/mgr_logo.png"}
                alt="mgr logo"
                width={1024}
                height={1024}
                className="max-h-full w-32 object-cover"
                unoptimized={true}
              />
            </Link>
            <Link
              href={
                isEnglish
                  ? "/en/portfolio/melovibs"
                  : "/portfolio/melovibs"
              }
              className="w-full h-[200px] bg-[#27263C] flex justify-center items-center rounded-lg hover:scale-105 transition-all"
            >
              <Image
                src={"/assets/melovibs_logo.png"}
                alt="melovibs logo"
                width={1024}
                height={1024}
                className="max-h-full w-28 object-cover"
                unoptimized={true}
              />
            </Link>
            <Link
              href={isEnglish ? "/en/portfolio/gmc" : "/portfolio/gmc"}
              className="w-full h-[200px] bg-[#000] flex justify-center items-center rounded-lg hover:scale-105 transition-all"
            >
              <Image
                src={"/assets/gmc_logo.png"}
                alt="gmc logo"
                width={2000}
                height={2000}
                className="max-h-full w-32 object-cover"
                unoptimized={true}
              />
            </Link>
          </div>
          <div className="flex justify-center">
            <Link
              className="flex justify-center mt-8 text-lightBrown dark:text-darkYellow underline hover:scale-95 transition-all hover:opacity-85 w-fit"
              href={portfolioLink}
            >
              {text}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
