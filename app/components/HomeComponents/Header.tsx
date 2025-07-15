/* eslint-disable react/no-unescaped-entities */
"use client";

import { CaretDown } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { HeaderTypes } from "../types/typesComponents";

export default function Header({
  title,
  specialty,
  citation,
  author,
  discover_the_rest,
}: HeaderTypes) {

  return (
    <header className="z-10 relative min-h-screen pt-40 lg:pt-32 pb-24 xl:pt-40">
      <div className="absolute w-full h-full bg-bgColorLight bg-opacity-50 top-0 -z-10 dark:hidden"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 -hue-rotate-90 block dark:hidden"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/bg-portfolio-light-full-hd.mp4" type="video/mp4" />
      </video>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 hidden dark:block"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/bg-portfolio-dark-full-hd.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full bg-[#8f67fd] dark:bg-[#120731] bg-opacity-25 dark:bg-opacity-70 top-0 -z-20 dark:-z-[5]"></div>
      <div className="flex justify-center items-center flex-col lg:flex-row lg:items-end lg:gap-24 xl:gap-32">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-4 md:gap-5 xl:gap-6">
            <h1 className="dark:text-white text-black font-bold text-2xl sm:text-3xl md:text-4xl xl:text-[40px]">
              {title}
            </h1>
            <h2 className="dark:text-lightYellow text-lightBrown font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl">
              Julien Brault--Chérif
            </h2>
            <h3 className="dark:text-darkYellow text-darkBrown font-bold text-xl sm:text-2xl md:text-3xl">
              {specialty}
            </h3>
          </div>
          <p className="mt-10 md:mt-16 lg:my-32 lg:mb-0 dark:font-extralight font-light dark:text-white text-black">
            "{citation}" <br className="sm:hidden" /> -{" "}
            <span className="dark:text-lightYellow text-lightBrown">
              {author}
            </span>
          </p>
        </motion.div>
        <motion.div
          className="flex justify-center items-center rounded-lg overflow-hidden lg:h-96 w-40 lg:w-80 mt-4 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={"/assets/logo_portfolio_light.png"}
            width={1000}
            height={1000}
            alt="logo"
            className="block dark:hidden lg:dark:hidden object-cover w-full"
          />
          <Image
            src={"/assets/logo_portfolio_dark.png"}
            width={1000}
            height={1000}
            alt="logo"
            className="hidden dark:block object-cover w-full"
          />
        </motion.div>
      </div>
      <div className="flex justify-center gap-5 sm:gap-8 lg:mt-24">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href={
              "https://www.linkedin.com/in/julien-brault-ch%C3%A9rif-aa276226b/"
            }
            target="_blank"
            className="rounded-full bg-[rgb(10,102,194,.5)] h-14 w-14 flex items-center justify-center group overflow-hidden"
          >
            <Image
              src={"/assets/linkedin_icon.svg"}
              alt="linkedin icon"
              width={36}
              height={36}
              className="group-hover:scale-[170%] duration-300 transition-all"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href={"https://fr.fiverr.com/bahoz_dev?up_rollout=true"}
            target="_blank"
            className="rounded-full bg-[rgb(29,191,115,.5)] h-14 w-14 flex items-center justify-center group overflow-hidden"
          >
            <Image
              src={"/assets/fiverr_icon.svg"}
              alt="linkedin icon"
              width={36}
              height={36}
              className="group-hover:scale-[170%] duration-300 transition-all"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href={"https://github.com/bahoooz"}
            target="_blank"
            className="rounded-full bg-[rgba(148,148,148,0.5)] h-14 w-14 flex items-center justify-center group overflow-hidden"
          >
            <Image
              src={"/assets/github_icon.svg"}
              alt="linkedin icon"
              width={36}
              height={36}
              className="group-hover:scale-[190%] duration-300 transition-all"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link
            href={"/contact"}
            className="rounded-full bg-[rgb(229,57,53,.5)] h-14 w-14 flex items-center justify-center group overflow-hidden"
          >
            <Image
              src={"/assets/gmail_icon.svg"}
              alt="linkedin icon"
              width={36}
              height={36}
              className="group-hover:scale-[125%] duration-300 transition-all"
            />
          </Link>
        </motion.div>
      </div>
      <div className="flex justify-center items-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1, delay: 0.9 }}
          onClick={() => window.scrollBy({ top: 720, behavior: "smooth" })}
          className="flex items-center font-light gap-3 mt-16 xl:mt-24 dark:text-white text-black cursor-pointer lg:hover:text-[15px] transition-all"
        >
          {discover_the_rest} <CaretDown size={20} />
        </motion.p>
      </div>
    </header>
  );
}
