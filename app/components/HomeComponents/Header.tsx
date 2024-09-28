"use client";

import { CaretDown } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="z-10 relative min-h-screen pt-40 lg:pt-32 pb-24 xl:pt-40">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 dark:-z-20"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/bg-portfolio-light.mp4" type="video/mp4" />
      </video>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-20 dark:-z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/bg-portfolio-dark.mp4" type="video/mp4" />
      </video>
      <div className="flex justify-center lg:items-end lg:gap-32 xl:gap-48">
        <div>
          <div className="flex flex-col gap-4 md:gap-5 xl:gap-6">
            <h1 className="dark:text-white text-black font-bold text-2xl sm:text-3xl md:text-4xl xl:text-[40px]">
              Développeur Web à Paris
            </h1>
            <h2 className="dark:text-lightYellow text-lightBrown font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl">
              Julien Brault--Chérif
            </h2>
            <h3 className="dark:text-darkYellow text-darkBrown font-bold text-xl sm:text-2xl md:text-3xl">
              18 ans
            </h3>
          </div>
          <p className="my-10 md:my-16 lg:my-32 lg:mb-0 font-extralight dark:text-white text-black">
            “Notre vie est ce qu’en font nos pensées.”{" "}
            <br className="sm:hidden" /> -{" "}
            <span className="dark:text-lightYellow text-lightBrown">
              Marc Aurèle
            </span>
          </p>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute w-full h-full bg-black opacity-30"></div>
          <Image
            src={"/assets/me_header.png"}
            width={1000}
            height={1000}
            alt="photo Julien"
            className="hidden lg:block h-96 w-52 object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center gap-5 sm:gap-8 lg:mt-24">
        <Link
          href={
            "https://www.linkedin.com/in/julien-brault-ch%C3%A9rif-aa276226b/"
          }
          target="_blank"
          className="rounded-full bg-[rgb(10,102,194,.5)] h-14 w-14 flex items-center justify-center"
        >
          <Image
            src={"/assets/linkedin_icon.svg"}
            alt="linkedin icon"
            width={36}
            height={36}
          />
        </Link>
        <Link
          href={"https://fr.fiverr.com/bahoz_dev?up_rollout=true"}
          target="_blank"
          className="rounded-full bg-[rgb(29,191,115,.5)] h-14 w-14 flex items-center justify-center"
        >
          <Image
            src={"/assets/fiverr_icon.svg"}
            alt="linkedin icon"
            width={36}
            height={36}
          />
        </Link>
        <Link
          href={"https://www.tiktok.com/@bahoz.coding?_t=8q1DYHqeDOy&_r=1"}
          target="_blank"
          className="rounded-full bg-[rgb(74,74,74,.5)] h-14 w-14 flex items-center justify-center"
        >
          <Image
            src={"/assets/tiktok_icon.svg"}
            alt="linkedin icon"
            width={36}
            height={36}
          />
        </Link>
        <Link
          href={"/contact"}
          className="rounded-full bg-[rgb(229,57,53,.5)] h-14 w-14 flex items-center justify-center"
        >
          <Image
            src={"/assets/gmail_icon.svg"}
            alt="linkedin icon"
            width={36}
            height={36}
          />
        </Link>
      </div>
      <Link
        href={"#about"}
        className="flex justify-center items-center font-light gap-3 mt-16 xl:mt-24 dark:text-white text-black"
      >
        Découvrir la suite <CaretDown size={20} />
      </Link>
    </header>
  );
}
