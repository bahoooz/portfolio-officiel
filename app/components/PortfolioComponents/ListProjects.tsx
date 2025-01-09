import React from "react";
import ProjectsByYear from "./ProjectsByYear";

export default function ListProjects() {
  return (
    <div className="flex flex-col gap-28 lg:gap-40 xl:gap-48">
      <ProjectsByYear year={2025} />
      <ProjectsByYear year={2024} />
      <ProjectsByYear year={2023} />
    </div>
  );
}
