"use client";

import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BurgerMenuTypes } from "./types/typesComponents";
import { usePathname } from "next/navigation";

export default function BurgerMenu({
  isOpen,
  setIsOpen,
  home_link,
  project_galery_link,
  findme_link,
  contact_link,
}: BurgerMenuTypes) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const linkPrefix = isEnglish ? "/en" : "";

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <X
            size={32}
            className="dark:text-lightYellow text-darkBrown cursor-pointer"
          />
        ) : (
          <List
            size={32}
            className="dark:text-lightYellow text-darkBrown cursor-pointer"
          />
        )}
      </div>
      <div
        className={`bg-bgColorLight dark:bg-bgColorDark h-[100dvh] w-full fixed -z-10 left-0 top-0 transition-transform duration-500 transform flex flex-col items-start justify-center ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="ml-20 sm:ml-40 md:ml-48 lg:ml-80 xl:ml-96 flex flex-col gap-8 -mt-6">
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href={`${linkPrefix}/`}
              className="link relative text-2xl font-light dark:text-darkYellow text-darkBrown"
            >
              {home_link}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href={`${linkPrefix}/portfolio`}
              className="link relative text-2xl font-light dark:text-darkYellow text-darkBrown"
            >
              {project_galery_link}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href={`${linkPrefix}/parcours`}
              className="link relative text-2xl font-light dark:text-darkYellow text-darkBrown"
            >
              {findme_link}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              href={`${linkPrefix}/contact`}
              className="link relative text-2xl font-light dark:text-darkYellow text-darkBrown"
            >
              {contact_link}
            </Link>
          </li>
        </ul>
        <Image
          src={"/assets/diamond_icon.png"}
          alt="diamond icon"
          width={50}
          height={50}
          className="absolute bottom-8 lg:bottom-12 xl:bottom-16 right-8 lg:right-12 xl:right-16 sm:w-16 hidden dark:block"
        />
        <Image
          src={"/assets/diamond_icon_black.png"}
          alt="diamond icon"
          width={50}
          height={50}
          className="absolute bottom-8 lg:bottom-12 xl:bottom-16 right-8 lg:right-12 xl:right-16 sm:w-16 block dark:hidden"
        />
      </div>
    </div>
  );
}
