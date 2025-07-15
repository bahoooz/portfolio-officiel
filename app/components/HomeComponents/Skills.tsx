"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { MesSkillsTypes } from "../types/typesComponents";

export default function Skills({ title, autres_title }: MesSkillsTypes) {
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
        <div className="flex gap-24 xl:gap-20 2xl:gap-24 xl:justify-center overflow-x-scroll pb-2 scrollbar-custom">
          <div className="flex flex-col gap-9">
            <p className="dark:text-darkYellow text-darkBrown">languages</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href={"https://developer.mozilla.org/fr/docs/Web/JavaScript"}
                  target="_blank"
                  className="hover:underline"
                >
                  javascript
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.typescriptlang.org/"}
                  target="_blank"
                  className="hover:underline"
                >
                  typescript
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-9">
            <p className="dark:text-darkYellow text-darkBrown w-[164px]">
              frameworks & librarys
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href={"https://nextjs.org/"}
                  target="_blank"
                  className="hover:underline"
                >
                  nextjs
                </Link>
              </li>
              <li>
                <Link
                  href={"https://fr.react.dev/"}
                  target="_blank"
                  className="hover:underline"
                >
                  reactjs
                </Link>
              </li>
              <li>
                <Link
                  href={"https://tailwindcss.com/"}
                  target="_blank"
                  className="hover:underline"
                >
                  tailwindcss
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.framer.com/motion/"}
                  target="_blank"
                  className="hover:underline"
                >
                  framer motion
                </Link>
              </li>
              <li>
                <Link
                  href={"https://zustand-demo.pmnd.rs/"}
                  target="_blank"
                  className="hover:underline"
                >
                  zustand
                </Link>
              </li>
              <li>
                <Link
                  href={"https://ui.shadcn.com/"}
                  target="_blank"
                  className="hover:underline"
                >
                  shadcn/ui
                </Link>
              </li>
              <li>
                <Link
                  href={"https://zod.dev/"}
                  target="_blank"
                  className="hover:underline"
                >
                  zod
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-9">
            <p className="dark:text-darkYellow text-darkBrown w-[111px]">
              design & video
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href={"https://www.figma.com/fr-fr/"}
                  target="_blank"
                  className="hover:underline"
                >
                  figma
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.adobe.com/fr/products/photoshop.html"}
                  target="_blank"
                  className="hover:underline"
                >
                  photoshop
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.adobe.com/fr/products/illustrator.html"}
                  target="_blank"
                  className="hover:underline"
                >
                  illustrator
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.adobe.com/fr/products/premiere.html"}
                  target="_blank"
                  className="hover:underline"
                >
                  premiere pro
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-9">
            <p className="dark:text-darkYellow text-darkBrown">backend</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href={"https://nodejs.org/fr"}
                  target="_blank"
                  className="hover:underline"
                >
                  nextjs backend
                </Link>
              </li>
              <li>
                <Link
                  href={"https://nodejs.org/fr"}
                  target="_blank"
                  className="hover:underline"
                >
                  nodejs
                </Link>
              </li>
              <li>
                <Link
                  href={"https://expressjs.com/"}
                  target="_blank"
                  className="hover:underline"
                >
                  expressjs
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.mongodb.com/fr-fr"}
                  target="_blank"
                  className="hover:underline"
                >
                  mongodb
                </Link>
              </li>
              <li>
                <Link
                  href={"https://supabase.com/"}
                  target="_blank"
                  className="hover:underline"
                >
                  supabase
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-9">
            <p className="dark:text-darkYellow text-darkBrown">
              {autres_title}
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href={"https://github.com/"}
                  target="_blank"
                  className="hover:underline"
                >
                  github
                </Link>
              </li>
              <li>
                <Link
                  href={"https://git-scm.com/"}
                  target="_blank"
                  className="hover:underline"
                >
                  git
                </Link>
              </li>
              <li>
                <Link
                  href={"https://vercel.com/home"}
                  target="_blank"
                  className="hover:underline"
                >
                  vercel
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.netlify.com/"}
                  target="_blank"
                  className="hover:underline"
                >
                  netlify
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.heroku.com/home"}
                  target="_blank"
                  className="hover:underline"
                >
                  heroku
                </Link>
              </li>
              <li>
                <Link
                  href={"https://openai.com/fr-FR/"}
                  target="_blank"
                  className="hover:underline"
                >
                  open ai
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
