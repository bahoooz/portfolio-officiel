"use client";

import React from "react";
import { usePathname } from "next/navigation";
import projects2024 from "@/app/portfolio/2024 Projects/projects.json";
import projects2023 from "@/app/portfolio/2023 Projects/projects.json";
import Image from "next/image";
import Techno from "@/app/components/PortfolioComponents/Techno";
import Link from "next/link";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import projects2025 from "@/app/portfolio/2025 Projects/projects.json";
const projects = [
  ...Object.values(projects2023),
  ...Object.values(projects2024),
  ...Object.values(projects2025),
];

export default function ProjectPage() {
  const pathname: string | undefined = usePathname();
  const project_title = pathname
    ? decodeURIComponent(pathname.split("/").pop() as string) || ""
    : "";
  const project = Object.values(projects).find(
    (project) => project.link === project_title
  );

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="flex flex-col items-center py-32 md:py-40 lg:py-48 relative">
      <Link
        className="fixed right-5 lg:right-auto bottom-5 lg:bottom-auto lg:left-16 2xl:left-32 lg:top-24 2xl:top-32 z-10 bg-darkBrown dark:bg-darkYellow p-1 rounded-full"
        href={"/portfolio"}
      >
        <ArrowCircleLeft className="text-white" size={32} />
      </Link>
      <div className="lg:flex lg:justify-center gap-12 xl:gap-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ backgroundColor: project.color_bg }}
          className="rounded-xl justify-center items-center hidden lg:flex w-80 xl:w-96 2xl:w-[450px] lg:p-8"
        >
          <Image
            src={project.img_primary}
            width={project.width_img}
            height={project.height_img}
            alt={project.title}
            className="xl:max-w-80"
            unoptimized={true}
          />
        </motion.div>
        <div className="w-[302px] sm:w-[404px] md:w-[431px] flex flex-col lg:items-start gap-8">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-2xl xl:text-3xl font-medium dark:text-darkYellow text-lightBrown"
          >
            {project.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: project.color_bg }}
            className="rounded-xl flex justify-center items-center lg:hidden p-8"
          >
            <Image
              src={project.img_primary}
              width={project.width_img}
              height={project.height_img}
              alt={project.title}
              className="max-w-64"
              unoptimized={true}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="leading-[26px]"
          >
            {project.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="flex lg:flex-col gap-3 overflow-x-scroll lg:overflow-x-auto scrollbar-custom pb-2">
              {Object.values(project.technos).map(
                (techno: string, i: number) => (
                  <Techno name={techno} key={i} />
                )
              )}
            </div>
          </motion.div>
          <motion.div
            className="bg-lightBrown dark:bg-lightYellow flex items-center justify-center text-center text-white dark:text-bgColorDark rounded-xl font-medium lg:w-full h-[50px] hover:bg-opacity-75 dark:hover:bg-opacity-75"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <Link
              className="w-full h-full flex justify-center items-center"
              href={project.website_link}
              target="_blank"
            >
              <p>Visiter le site</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
