"use client";

import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const linkHref = pathname === "/en" ? "/" : "/en";
  const flag =
    pathname === "/en" ? "/assets/flag_fr.png" : "/assets/flag_en.png";
  return (
    <footer className="bg-lightYellow dark:bg-bgFooter relative overflow-hidden py-24 md:py-36">
      <Image
        src={"/assets/diamond_icon.png"}
        alt="diamond icon"
        width={50}
        height={50}
        className="absolute hidden dark:block -rotate-45 right-3 md:right-12 top-5 md:top-11"
      />
      <Image
        src={"/assets/diamond_icon_black.png"}
        alt="diamond icon"
        width={50}
        height={50}
        className="absolute block dark:hidden -rotate-45 right-3 md:right-12 top-5 md:top-11"
      />
      <div className="flex justify-center">
        <div className="flex w-[302px] sm:w-[404px] md:w-[431px] lg:w-[845px] xl:w-[976px] 2xl:w-[1128px] gap-14">
          <ul className="flex flex-col gap-6  text-lightBrown dark:text-darkYellow">
            <li>
              <Link href={"/"} className="hover:underline">
                Accueil
              </Link>
            </li>
            <li>
              <Link href={"/portfolio"} className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href={"/parcours"} className="hover:underline">
                Où me retrouver
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-6 text-darkBrown dark:text-lightYellow ">
            <li>
              <Link
                href={
                  "https://www.linkedin.com/in/julien-brault-ch%C3%A9rif-aa276226b/"
                }
                className="hover:underline"
              >
                Linkedin
              </Link>
            </li>
            <li>
              <Link
                href={"https://fr.fiverr.com/bahoz_dev?up_rollout=true"}
                className="hover:underline"
              >
                Fiverr
              </Link>
            </li>
            <li>
              <Link
                href={
                  "https://www.tiktok.com/@bahoz.coding?_t=8q1DYHqeDOy&_r=1"
                }
                className="hover:underline"
              >
                Tiktok
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="hover:underline">
                Mail
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center my-16 md:hidden">
        <div className="flex gap-6">
          <ThemeSwitcher />
          <Link href={linkHref}>
            <Image
              src={flag}
              className="w-8"
              alt="langue en"
              width={512}
              height={512}
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-center md:mr-11 md:items-center md:mt-16 md:gap-11 md:absolute md:right-0">
        <p className="w-[302px] sm:w-[404px] md:w-fit">
          © Copyright 2024 - Julien Brault--Chérif
        </p>
        <div className="hidden md:gap-6 md:flex">
          <ThemeSwitcher />
          <Link href={linkHref}>
            <Image
              src={flag}
              className="w-8 hover:scale-95 hover:opacity-90 transition-all"
              alt="langue en"
              width={512}
              height={512}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
