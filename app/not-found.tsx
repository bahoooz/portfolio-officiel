/* eslint-disable react/no-unescaped-entities */

"use client";

import { House } from "@phosphor-icons/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen py-32 flex items-center justify-center">
      <div className="flex flex-col gap-8 w-[302px] sm:w-fit">
        <span className="text-2xl uppercase">Erreur 404 / Error 404</span>
        <h1 className="dark:text-lightYellow text-darkBrown text-xl">
          La page que vous recherchez n'existe pas ou plus / <br /> The page
          you are looking for does not exist or no longer exists
        </h1>
        <Link
          href="/"
          className="flex items-center bg-darkBrown text-bgColorLight dark:bg-lightYellow dark:text-bgColorDark px-8 w-fit py-3 gap-3 rounded-xl font-medium dark:hover:bg-opacity-75 hover:bg-opacity-75"
        >
          <House size={26} weight="fill" /> Retourner à l'accueil / Return to
          home
        </Link>
      </div>
    </div>
  );
}
