"use client";

import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavbarTypes } from "./types/typesComponents";

export default function Navbar({ get_quote }: NavbarTypes) {
  const pathname = usePathname();
  const linkHref = pathname.startsWith("/en")
    ? pathname.slice(3) || "/"
    : "/en" + pathname;
  const flag = pathname.startsWith("/en")
    ? "/assets/flag_fr.png"
    : "/assets/flag_en.png";
  const [isOpen, setIsOpen] = useState(false);
  const isEnglish = pathname.startsWith("/en");

  return (
    <nav className="fixed h-14 z-20 top-5 w-full flex justify-between items-center px-10">
      <Link
        className="hidden md:block text-darkBrown dark:text-lightYellow hover:underline"
        href={isEnglish ? "/en/contact" : "/contact"}
        onClick={() => setIsOpen(false)}
      >
        {get_quote}
      </Link>
      <div className="flex gap-16 justify-between w-full md:w-fit">
        <div className="flex gap-4 items-center">
          <ThemeSwitcher />
          <Link href={linkHref} onClick={() => setIsOpen(false)}>
            <Image
              src={flag}
              className="w-8 hover:scale-95 hover:opacity-90 transition-all"
              alt="langue en"
              width={512}
              height={512}
            />
          </Link>
        </div>
        <BurgerMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          home_link={isEnglish ? "Home" : "Accueil"}
          project_galery_link={
            isEnglish ? "Projects galery" : "Galerie des projets"
          }
          findme_link={isEnglish ? "My background" : "Mon parcours"}
          contact_link={isEnglish ? "Contact me" : "Me contacter"}
        />
      </div>
    </nav>
  );
}
