import { parcoursPageMetadata } from "@/lib/metadata/parcourspage";
import React from "react";

export const metadata = parcoursPageMetadata;

export default function Parcours() {
  return (
    <div className="h-screen py-32 flex items-center justify-center">
      <h1 className="dark:text-lightYellow text-darkBrown leading-8 text-xl px-8">
        Cette page est en cours de création... <br /> Revenez dans quelques
        temps 😎
      </h1>
    </div>
  );
}
