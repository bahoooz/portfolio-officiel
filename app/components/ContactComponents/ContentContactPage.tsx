"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContentContactPage() {
  return (
    <div className="flex justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lightBrown dark:text-lightYellow text-2xl sm:text-3xl font-bold my-16 mt-24 md:my-24 xl:my-32 w-[302px] sm:w-[404px] md:w-[431px] lg:w-[845px] xl:w-[1076px] 2xl:w-[1378px]"
      >
        Formulaire de contact
      </motion.h1>
    </div>
  );
}
