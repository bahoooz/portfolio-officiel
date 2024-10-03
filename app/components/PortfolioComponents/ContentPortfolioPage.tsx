"use client";

import React from "react";
import ListProjects from "./ListProjects";
import { motion } from "framer-motion";
export default function ContentPortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-32"
    >
      <div className="flex justify-center">
        <h1 className="text-lightBrown dark:text-lightYellow text-2xl sm:text-3xl font-bold mb-24 md:mb-32 lg:mb-40 xl:mb-48 md:mt-16 w-[302px] sm:w-[404px] md:w-[431px] lg:w-[845px] xl:w-[1076px] 2xl:w-[1378px]">
          Galerie des projets
        </h1>
      </div>
      <ListProjects />
    </motion.div>
  );
}
