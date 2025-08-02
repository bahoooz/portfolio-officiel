"use client";

import React from "react";
import { motion } from "framer-motion";
import { MesSkillsTypes } from "../types/typesComponents";
import Image from "next/image";

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
                <a
                  href={"https://developer.mozilla.org/fr/docs/Web/JavaScript"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/js_icon.png"}
                    alt="js icon"
                    width={27}
                    height={27}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  javascript
                </a>
              </li>
              <li>
                <a
                  href={"https://www.typescriptlang.org/"}
                  target="_blank"
                  className="flex items-center gap-[6px] hover:scale-95 transition-all duration-300 -ml-0.5"
                >
                  <Image
                    src={"/assets/technos_icon/ts_icon.png"}
                    alt="js icon"
                    width={27}
                    height={27}
                    className="size-5 rounded-sm"
                    unoptimized
                  />
                  typescript
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-9">
            <p className="dark:text-darkYellow text-darkBrown w-[164px]">
              frameworks & librarys
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={"https://nextjs.org/"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/next_icon.png"}
                    alt="js icon"
                    width={27}
                    height={27}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  nextjs
                </a>
              </li>
              <li>
                <a
                  href={"https://fr.react.dev/"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/react_icon.png"}
                    alt="js icon"
                    width={27}
                    height={27}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  reactjs
                </a>
              </li>
              <li>
                <a
                  href={"https://tailwindcss.com/"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/tailwind_icon.png"}
                    alt="js icon"
                    width={27}
                    height={27}
                    className="size-4 w-6 rounded-sm"
                    unoptimized
                  />
                  tailwindcss
                </a>
              </li>
              <li>
                <a
                  href={"https://www.framer.com/motion/"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/framer_motion_icon.png"}
                    alt="js icon"
                    width={27}
                    height={27}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  framer motion
                </a>
              </li>
              <li>
                <a
                  href={"https://zustand-demo.pmnd.rs/"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/zustand_icon.svg"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  zustand
                </a>
              </li>
              <li>
                <a
                  href={"https://ui.shadcn.com/"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/shadcn_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  shadcn/ui
                </a>
              </li>
              <li>
                <a
                  href={"https://zod.dev/"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/zod_icon.webp"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  zod
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-9">
            <p className="dark:text-darkYellow text-darkBrown w-[111px]">
              design & video
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={"https://www.figma.com/fr-fr/"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/figma_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  figma
                </a>
              </li>
              <li>
                <a
                  href={"https://www.adobe.com/fr/products/photoshop.html"}
                  target="_blank"
                  className="flex items-center gap-[6px] hover:scale-95 transition-all duration-300 -ml-0.5"
                >
                  <Image
                    src={"/assets/technos_icon/photoshop_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-6 rounded-sm"
                    unoptimized
                  />
                  photoshop
                </a>
              </li>
              <li>
                <a
                  href={"https://www.adobe.com/fr/products/illustrator.html"}
                  target="_blank"
                  className="flex items-center gap-[6px] hover:scale-95 transition-all duration-300 -ml-0.5"
                >
                  <Image
                    src={"/assets/technos_icon/illustrator_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-6 rounded-sm"
                    unoptimized
                  />
                  illustrator
                </a>
              </li>
              <li>
                <a
                  href={"https://www.adobe.com/fr/products/premiere.html"}
                  target="_blank"
                  className="flex items-center gap-[6px] hover:scale-95 transition-all duration-300 -ml-0.5"
                >
                  <Image
                    src={"/assets/technos_icon/premiere_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-6 rounded-sm"
                    unoptimized
                  />
                  premiere pro
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-9">
            <p className="dark:text-darkYellow text-darkBrown">backend</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={"https://nodejs.org/fr"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/nodejs_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-4 h-5 rounded-sm"
                    unoptimized
                  />
                  nodejs
                </a>
              </li>
              <li>
                <a
                  href={"https://expressjs.com/"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/express_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  expressjs
                </a>
              </li>
              <li>
                <a
                  href={"https://nodejs.org/fr"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/next_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  server actions
                </a>
              </li>
              <li>
                <a
                  href={"https://www.prisma.io/"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/prisma_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  prisma
                </a>
              </li>
              <li>
                <a
                  href={"https://www.mongodb.com/fr-fr"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/mongodb_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  mongodb
                </a>
              </li>
              <li>
                <a
                  href={"https://supabase.com/"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/supabase_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-4 h-5 rounded-sm"
                    unoptimized
                  />
                  supabase
                </a>
              </li>
              <li>
                <a
                  href={"https://www.postgresql.org/"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/postgresql_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  postgresql
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-9">
            <p className="dark:text-darkYellow text-darkBrown">
              {autres_title}
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={"https://github.com/"}
                  target="_blank"
                  className="flex items-center gap-[6px] hover:scale-95 transition-all duration-300 -ml-0.5"
                >
                  <Image
                    src={"/assets/technos_icon/github_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-5 rounded-sm"
                    unoptimized
                  />
                  github
                </a>
              </li>
              <li>
                <a
                  href={"https://git-scm.com/"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/git_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-5 rounded-sm"
                    unoptimized
                  />
                  git
                </a>
              </li>
              <li>
                <a
                  href={"https://vercel.com/home"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/vercel_icon.svg"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  vercel
                </a>
              </li>
              <li>
                <a
                  href={"https://www.netlify.com/"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/netlify_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  netlify
                </a>
              </li>
              <li>
                <a
                  href={"https://render.com/"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/render_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  render
                </a>
              </li>
              <li>
                <a
                  href={"https://www.heroku.com/home"}
                  target="_blank"
                  className="flex items-center gap-2 hover:scale-95 transition-all duration-300"
                >
                  <Image
                    src={"/assets/technos_icon/heroku_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-4 rounded-sm"
                    unoptimized
                  />
                  heroku
                </a>
              </li>
              <li>
                <a
                  href={"https://openai.com/fr-FR/"}
                  target="_blank"
                  className="flex items-center gap-[6px] hover:scale-95 transition-all duration-300 -ml-0.5"
                >
                  <Image
                    src={"/assets/technos_icon/chatgpt_icon.png"}
                    alt="js icon"
                    width={16}
                    height={16}
                    className="size-5 rounded-sm"
                    unoptimized
                  />
                  open ai
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
