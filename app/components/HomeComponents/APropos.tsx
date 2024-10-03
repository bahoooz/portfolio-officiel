"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { AProposTypes } from "./types/typeHome";

export default function APropos({ title, text, btn }: AProposTypes) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="my-24 lg:my-36"
      id="about"
    >
      <div className="lg:flex lg:justify-center lg:gap-16 xl:gap-24 2xl:gap-32">
        <div className="flex flex-col items-center">
          <div className="max-w-[302px] sm:max-w-[404px] md:max-w-[431px] xl:max-w-[480px] 2xl:max-w-[500px]">
            <h2 className="text-lightBrown dark:text-lightYellow text-2xl sm:text-3xl md:text-4xl xl:text-[40px] font-bold mb-8 lg:mb-12">
              {title}
            </h2>
            <p className="mb-7 leading-8">
              {/* Jeune développeur web avec{" "}
              <span className="text-lightBrown dark:text-darkYellow">
                1-2 ans d’expérience
              </span>{" "}
              initié au développement web par la formation “La Toile” de{" "}
              <span className="text-lightBrown dark:text-darkYellow">
                l’emlyon business school
              </span>{" "}
              4ème meilleure école de commerce française. Formé en autodidacte à
              la maison en suivant de nombreux tutoriels sur internet j’ai pu
              réaliser de nombreux projets personnels et également en commençant
              le{" "}
              <span className="text-lightBrown dark:text-darkYellow">
                freelancing avec Fiverr
              </span>{" "}
              j’ai pu me faire mes premiers clients et travailler sur des
              projets plus concrêts. */}
              {text}
            </p>
            <Link href={"/CV Julien.pdf"} target="_blank">
              <button className="bg-lightBrown dark:bg-darkYellow dark:text-bgColor px-7 py-3 rounded-xl text-sm text-white hover:bg-opacity-75 dark:hover:bg-opacity-75 transition-all">
                {btn}
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-7 lg:relative lg:w-[350px] xl:w-[400px] 2xl:w-[500px] lg:mt-0 lg:h-[400px] xl:h-[450px] lg:gap-0">
          <Image
            src={"/assets/trophy_a_propos.jpg"}
            alt="photo trophée"
            width={3024}
            height={4032}
            className="w-[90%] sm:w-[404px] md:w-[431px] h-[35vw] sm:h-48 xl:h-52 object-cover mx-auto rounded-lg lg:absolute lg:top-1/3 xl:top-1/4 lg:-translate-y-1/2 right-0 lg:w-3/4 xl:w-4/5 2xl:"
          />
          <Image
            src={"/assets/la_toile.jfif"}
            alt="photo la toile"
            width={1417}
            height={945}
            className="w-[90%] sm:w-[404px] md:w-[431px] h-[35vw] sm:h-48 xl:h-52 object-cover mx-auto rounded-lg lg:absolute lg:bottom-1/4 xl:bottom-[35%] lg:translate-y-1/2 left-0 lg:w-3/4 xl:w-4/5"
          />
        </div>
      </div>
    </motion.div>
  );
}
