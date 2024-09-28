"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function ProjectPage() {
  const pathname = usePathname();
  const project_name = pathname.split("/").pop();
  return <div>Projet {project_name}</div>;
}
