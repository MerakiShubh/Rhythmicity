"use client";
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "Frontend",
    description: "Frontend technologies",
    category: "Frontend",
  },
  {
    title: "Backend",
    description: "Backend technologies",
    category: "Backend",
  },
  {
    title: "Deployment",
    description: "Deployment tools",
    category: "Deployment",
  },
  {
    title: "Tools",
    description: "Development tools",
    category: "Tools",
  },
];

const SkillsCard = () => {
  return (
    <>
      <div className="text-center">
        <p className="mt-10 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">
          Skills
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </>
  );
};

export default SkillsCard;
