"use client";

import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FooterTypes } from "./types/typesComponents";

export default function Footer({ home_link, find_me_link }: FooterTypes) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const linkPrefix = isEnglish ? "/en" : "";
  const linkHref = pathname === "/en" ? "/" : "/en";
  const flag =
    pathname === "/en" ? "/assets/flag_fr.png" : "/assets/flag_en.png";

  return (
    <footer className="bg-bgFooterLight dark:bg-bgFooterDark relative overflow-hidden py-24 md:py-36">
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
              <Link href={`${linkPrefix}/`} className="hover:underline">
                {home_link}
              </Link>
            </li>
            <li>
              <Link
                href={`${linkPrefix}/portfolio`}
                className="hover:underline"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link href={`${linkPrefix}/parcours`} className="hover:underline">
                {find_me_link}
              </Link>
            </li>
            <li>
              <Link href={`${linkPrefix}/contact`} className="hover:underline">
                Contact
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
                target="_blank"
              >
                Linkedin
              </Link>
            </li>
            <li>
              <Link
                href={
                  "https://fr.fiverr.com/bahoz_dev/create-your-website-or-landing-page-in-web-development?context_referrer=seller_page&ref_ctx_id=1fd9dd31207f4413ab23a641067880cd&pckg_id=1&pos=1&seller_online=true&imp_id=4d30a857-3751-4448-9388-3a6fcb5946f0"
                }
                className="hover:underline"
                target="_blank"
              >
                Fiverr
              </Link>
            </li>
            <li>
              <Link
                href={"https://github.com/bahoooz"}
                className="hover:underline"
                target="_blank"
              >
                Github
              </Link>
            </li>
            <li>
              <Link href={"https://x.com/bahozdev"} className="hover:underline" target="_blank">
                Twitter / X
              </Link>
            </li>
            <li>
              <Link href={`${linkPrefix}/contact`} className="hover:underline">
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
          © Copyright 2025 - Julien Brault--Chérif
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
