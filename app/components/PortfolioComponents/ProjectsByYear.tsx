"use client";

import React from "react";
import projects2025 from "@/app/portfolio/2025 Projects/projects.json";
import projects2024 from "@/app/portfolio/2024 Projects/projects.json";
import projects2023 from "@/app/portfolio/2023 Projects/projects.json";
import { Project } from "@/app/portfolio/types/typesProject";
import { Projects } from "@/app/portfolio/types/typesProject";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ProjectsByYear({ year }: { year: number }) {
  const typedProjects2025: Projects = projects2025;
  const typedProjects2024: Projects = projects2024;
  const typedProjects2023: Projects = projects2023;
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <div>
      {year === 2025 ? (
        <div className="lg:flex lg:justify-center lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-12 xl:gap-24 relative lg:flex-row lg:justify-start lg:flex-wrap lg:w-[816px] xl:w-[912px] 2xl:w-[1056px]"
          >
            <span className="absolute w-[302px] lg:w-full lg:text-center -top-16 text-darkBrown dark:text-lightYellow font-medium">
              2025
            </span>
            {Object.keys(typedProjects2025).map((key: string) => (
              <div key={key} className="hover:scale-105 transition-all">
                <Link
                  href={`${isEnglish ? "/en" : ""}/portfolio/${
                    (typedProjects2025[key] as Project).link
                  }`}
                >
                  <div
                    style={{ backgroundColor: typedProjects2025[key].color_bg }}
                    className="h-36 lg:h-60 2xl:h-72 rounded-xl overflow-hidden flex justify-center items-center w-[350px] lg:w-60 2xl:w-72"
                  >
                    <Image
                      src={typedProjects2025[key].img_primary}
                      width={typedProjects2025[key].width_img}
                      height={typedProjects2025[key].height_img}
                      alt={typedProjects2025[key].title}
                      className="w-32 lg:w-40 object-cover"
                    />
                  </div>
                </Link>
                <h3 className="text-center mt-5 font-medium text-darkBrown dark:text-darkYellow xl:text-lg">
                  {isEnglish && typedProjects2025[key].enTitle
                    ? typedProjects2025[key].enTitle
                    : typedProjects2025[key].title}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      ) : year === 2024 ? (
        <div className="lg:flex lg:justify-center lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-12 xl:gap-24 relative lg:flex-row lg:justify-start lg:flex-wrap lg:w-[816px] xl:w-[912px] 2xl:w-[1056px]"
          >
            <span className="absolute w-[302px] lg:w-full lg:text-center -top-16 text-darkBrown dark:text-lightYellow font-medium">
              2024
            </span>
            {Object.keys(typedProjects2024).map((key: string) => (
              <div key={key} className="hover:scale-105 transition-all">
                <Link
                  href={`${isEnglish ? "/en" : ""}/portfolio/${
                    (typedProjects2024[key] as Project).link
                  }`}
                >
                  <div
                    style={{ backgroundColor: typedProjects2024[key].color_bg }}
                    className="h-36 lg:h-60 2xl:h-72 rounded-xl overflow-hidden flex justify-center items-center w-[350px] lg:w-60 2xl:w-72"
                  >
                    <Image
                      src={typedProjects2024[key].img_primary}
                      width={typedProjects2024[key].width_img}
                      height={typedProjects2024[key].height_img}
                      alt={typedProjects2024[key].title}
                      className="w-32 lg:w-40 object-cover"
                    />
                  </div>
                </Link>
                <h3 className="text-center mt-5 font-medium text-darkBrown dark:text-darkYellow xl:text-lg">
                  {isEnglish && typedProjects2024[key].enTitle
                    ? typedProjects2024[key].enTitle
                    : typedProjects2024[key].title}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      ) : year === 2023 ? (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:flex lg:justify-center lg:px-10"
        >
          <div className="flex flex-col items-center gap-12 xl:gap-24 relative lg:flex-row lg:justify-start lg:flex-wrap lg:w-[816px] xl:w-[912px] 2xl:w-[1056px]">
            <span className="absolute w-[302px] lg:w-full lg:text-center -top-16 text-darkBrown dark:text-lightYellow font-medium">
              2023
            </span>
            {Object.keys(typedProjects2023).map((key: string) => (
              <div key={key} className="hover:scale-105 transition-all">
                <Link
                  href={`${isEnglish ? "/en" : ""}/portfolio/${
                    (typedProjects2023[key] as Project).link
                  }`}
                >
                  <div
                    style={{ backgroundColor: typedProjects2023[key].color_bg }}
                    className="h-36 lg:h-60 2xl:h-72 rounded-xl overflow-hidden flex justify-center items-center w-[350px] lg:w-60 2xl:w-72"
                  >
                    <Image
                      src={typedProjects2023[key].img_primary}
                      width={typedProjects2023[key].width_img}
                      height={typedProjects2023[key].height_img}
                      alt={typedProjects2023[key].title}
                      className="w-32 lg:w-40 object-cover"
                    />
                  </div>
                </Link>
                <h3 className="text-center mt-5 font-medium text-darkBrown dark:text-darkYellow xl:text-lg">
                  {isEnglish && typedProjects2023[key].enTitle
                    ? typedProjects2023[key].enTitle
                    : typedProjects2023[key].title}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
}
