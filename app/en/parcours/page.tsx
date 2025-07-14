import { parcoursPageMetadata } from "@/lib/metadata/en/backgroundpage";
import React from "react";

export const metadata = parcoursPageMetadata;

export default function ParcoursEn() {
  return (
    <div className="h-screen py-32 flex items-center justify-center">
      <h1 className="dark:text-lightYellow text-darkBrown leading-8 text-xl px-8">
        This page is under construction... <br /> Come back in a few times 😎
      </h1>
    </div>
  );
}
