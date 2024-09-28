import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Portfolio() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-[302px] sm:w-[404px] lg:w-[845px] xl:w-[976px] 2xl:w-[1128px]">
          <h2 className="text-lightBrown dark:text-lightYellow text-2xl sm:text-3xl md:text-4xl xl:text-[40px] font-bold mb-8 sm:mb-12 md:mb-16">
            Portfolio
          </h2>
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            <Link
              href={""}
              className="w-full h-[200px] bg-black flex justify-center items-center rounded-lg"
            >
              <Image
                src={"/assets/gmc_logo.png"}
                alt="gmc logo"
                width={2000}
                height={2000}
                className="max-h-full w-32 object-cover"
              />
            </Link>
            <Link
              href={""}
              className="w-full h-[200px] bg-black flex justify-center items-center rounded-lg"
            >
              <Image
                src={"/assets/sunline_logo.png"}
                alt="sunline logo"
                width={257}
                height={87}
                className="max-h-full w-32 object-cover"
              />
            </Link>
            <Link
              href={""}
              className="w-full h-[200px] bg-black flex justify-center items-center rounded-lg"
            >
              <Image
                src={"/assets/hydra_logo.png"}
                alt="hydra logo"
                width={1020}
                height={888}
                className="max-h-full w-32 object-cover"
              />
            </Link>
          </div>
          <div className="flex justify-center">
            <Link
              className="flex justify-center mt-8 text-darkYellow underline hover:scale-95 transition-all hover:opacity-85 w-fit"
              href={"/portfolio"}
            >
              Voir tous les projets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}