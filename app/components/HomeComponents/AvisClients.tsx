"use client";

import React from "react";
import { AvisClientsTypes } from "../types/typesComponents";
import { motion } from "framer-motion";
import CardAvisClient from "./CardAvisClient";
import Link from "next/link";

const avis = [
  {
    name: "Karla Rodrigues",
    commentary_fr:
      "Prestation réalisée avec grand professionnalisme pour mon activité professionnelle. Je recommande vivement !",
    commentary_en:
      "Prestation réalisée avec grand professionnalisme pour mon activité professionnelle. Je recommande vivement !",
    stars: 5,
    release_date: "21/05/2025",
  },
  {
    name: "Maxime LUCCHI",
    commentary_fr:
      "Je remercie Bahoz, pour sa rapidité et sa qualité de travail, je travail avec lui depuis plusieurs mois déjà et suis toujours très satisfait de ses services. Je recommande sans hésitation pour votre projet web",
    commentary_en:
      "I thank Bahoz, for his speed and his quality of work, I have been working with him for several months already and I am always very satisfied with his services. I recommend without hesitation for your web project",
    stars: 5,
    release_date: "12/05/2025",
  },
  {
    name: "Arken Ice",
    commentary_fr:
      "Développeur très pro, qui m'a créé un site à la hauteur de mes attentes, dans les temps, et avec des prix très intéressants !",
    commentary_en:
      "Very professional developer, who created a site to my expectations, on time, and with very interesting prices!",
    stars: 5,
    release_date: "11/05/2025",
  },
];

export default function AvisClients({ title, text }: AvisClientsTypes) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex justify-center my-24 lg:my-36"
    >
      <div className="w-[302px] sm:w-[404px] md:w-[431px] lg:w-[845px] xl:w-[976px] 2xl:w-[1128px]">
        <h2 className="text-lightBrown dark:text-lightYellow text-2xl sm:text-3xl md:text-4xl xl:text-[40px] font-bold mb-12 lg:mb-16">
          {title}
        </h2>
        <div className="flex gap-24 xl:gap-20 2xl:gap-24 xl:justify-start overflow-x-scroll pb-2 scrollbar-custom">
          <ul className="flex gap-6">
            {avis.map((avis) => (
              <CardAvisClient
                key={avis.name}
                name={avis.name}
                commentary_fr={avis.commentary_fr}
                commentary_en={avis.commentary_en}
                stars={avis.stars}
                release_date={avis.release_date}
              />
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <Link
            target="_blank"
            href={"https://g.co/kgs/39R463K"}
            className="mt-8 text-lightBrown dark:text-darkYellow underline text-center"
          >
            {text}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
