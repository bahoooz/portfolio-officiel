"use client";

import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const linkHref = pathname === "/en" ? "/" : "/en";
  const flag =
    pathname === "/en" ? "/assets/flag_fr.png" : "/assets/flag_en.png";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed h-14 z-20 top-5 w-full flex justify-between items-center px-10">
      <Link
        className="hidden md:block text-darkBrown dark:text-lightYellow hover:underline"
        href={"/contact"}
        onClick={() => setIsOpen(false)}
      >
        Obtenir un devis
      </Link>
      <div className="flex gap-4 md:absolute md:left-1/2 md:-translate-x-1/2 ">
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
      <div onClick={() => setIsOpen(!isOpen)}>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}
