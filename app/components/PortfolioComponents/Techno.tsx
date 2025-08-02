/* eslint-disable indent */
import Image from "next/image";
import React from "react";

export default function Techno({ name }: { name: string }) {
  const getImageSrc = (name: string) => {
    switch (name) {
      case "Nextjs":
        return "/assets/technos_icon/next_icon.png";
      case "NextAuth":
        return "/assets/technos_icon/nextauth_icon.png";
      case "Stripe":
        return "/assets/technos_icon/stripe_icon.png";
      case "TailwindCSS":
        return "/assets/technos_icon/tailwind_icon.png";
      case "React":
        return "/assets/technos_icon/react_icon.png";
      case "Nodejs":
        return "/assets/technos_icon/nodejs_icon.png";
      case "MongoDB":
        return "/assets/technos_icon/mongodb_icon.png";
      case "Expressjs":
        return "/assets/technos_icon/express_icon.png";
      case "HTML":
        return "/assets/technos_icon/html_icon.png";
      case "CSS":
        return "/assets/technos_icon/css_icon.png";
      case "Javascript":
        return "/assets/technos_icon/js_icon.png";
      case "Typescript":
        return "/assets/technos_icon/ts_icon.png";
      case "Framer Motion":
        return "/assets/technos_icon/framer_motion_icon.png";
      case "Supabase":
        return "/assets/technos_icon/supabase_icon.png";
      case "OpenAI":
        return "/assets/technos_icon/chatgpt_icon.png";
      case "Postgresql":
        return "/assets/technos_icon/postgresql_icon.png";
      case "Zustand":
        return "/assets/technos_icon/zustand_icon.svg";
      case "Prisma":
        return "/assets/technos_icon/prisma_icon.png";
      case "Vercel":
        return "/assets/technos_icon/vercel_icon.svg";
      case "Render":
        return "/assets/technos_icon/render_icon.png";
      case "Netlify":
        return "/assets/technos_icon/netlify_icon.png";
      case "Figma":
        return "/assets/technos_icon/figma_icon.png";
      default:
        return "";
    }
  };

  return (
    <div className="flex justify-center items-center dark:bg-black bg-darkBrown dark:bg-opacity-30 bg-opacity-40  px-6 lg:px-4 w-fit py-2 rounded-md gap-3">
      <Image
        src={getImageSrc(name)}
        width={27}
        height={27}
        alt={`${name} logo`}
        className="w-auto h-5"
        unoptimized={true}
      />
      <p className="text-white dark:text-lightYellow">{name}</p>
    </div>
  );
}
