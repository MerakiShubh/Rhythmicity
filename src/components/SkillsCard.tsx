"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import { buttons } from "./Skills";

export const projects = [
  {
    title: "Frontend",
    category: "Frontend",
    buttons: buttons.filter((button) => button.category === "Frontend"),
  },
  {
    title: "Backend",
    category: "Backend",
    buttons: buttons.filter((button) => button.category === "Backend"),
  },
  {
    title: "Deployment",
    category: "Deployment",
    buttons: buttons.filter((button) => button.category === "Deployment"),
  },
  {
    title: "Tools",
    category: "Tools",
    buttons: buttons.filter((button) => button.category === "Tools"),
  },
];

const SkillsCard = () => {
  return (
    <>
      <div className="text-center">
        <p className="mt-10 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
          Skills
        </p>
      </div>
      <div className="">
        <HoverEffect items={projects} />
      </div>
    </>
  );
};

export default SkillsCard;
