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
      <div className="absolute w-full h-full bg-bgColorLight bg-opacity-75 top-0 -z-10 dark:hidden"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-20 dark:-z-20"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/bg-portfolio-light.mp4" type="video/mp4" />
      </video>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-30 dark:-z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/bg-portfolio-dark.mp4" type="video/mp4" />
      </video>
      <div className="flex justify-center lg:items-end lg:gap-32 xl:gap-48">
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
              Julien Brault Chérif
            </h2>
            <h3 className="dark:text-darkYellow text-darkBrown font-bold text-xl sm:text-2xl md:text-3xl">
              {specialty}
            </h3>
          </div>
          <p className="my-10 md:my-16 lg:my-32 lg:mb-0 dark:font-extralight font-light dark:text-white text-black">
            "{citation}" <br className="sm:hidden" /> -{" "}
            <span className="dark:text-lightYellow text-lightBrown">
              {author}
            </span>
          </p>
        </motion.div>
        <motion.div
          className="relative rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute w-full h-full bg-black opacity-30"></div>
          <Image
            src={"/assets/me_header.png"}
            width={1000}
            height={1000}
            alt="photo Julien"
            className="hidden lg:block h-96 w-52 object-cover"
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
            href={"https://www.tiktok.com/@bahoz.coding?_t=8q1DYHqeDOy&_r=1"}
            target="_blank"
            className="rounded-full bg-[rgb(74,74,74,.5)] h-14 w-14 flex items-center justify-center group overflow-hidden"
          >
            <Image
              src={"/assets/tiktok_icon.svg"}
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
