"use client";
import React from "react";
import { ButtonsCard } from "./ui/tailwindcss-buttons";

export function SkillButtons() {
  return (
    <div className="pb-40 px-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto gap-10">
        {buttons.map((button, idx) => (
          <ButtonsCard key={idx}>{button.component}</ButtonsCard>
        ))}
      </div>
    </div>
  );
}

interface Button {
  name: string;
  description: string;
  component: React.ReactNode;
  category?: string;
}

export const buttons = [
  {
    name: "React",
    category: "Frontend",
    component: (
      <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
        React
      </button>
    ),
  },
  {
    name: "HTML",
    category: "Frontend",
    component: (
      <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
        HTML
      </button>
    ),
  },
  {
    name: "CSS",
    category: "Frontend",
    component: (
      <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
        CSS
      </button>
    ),
  },
  {
    name: "NodeJS",
    category: "Backend",
    component: (
      <button className="px-8 py-2 rounded-md bg-slate-800 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-slate-800">
        NodeJS
      </button>
    ),
  },
  {
    name: "Express",
    category: "Backend",
    component: (
      <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
        Express
      </button>
    ),
  },
  {
    name: "MongoDB",
    category: "Backend",
    component: (
      <button className="px-8 py-2 border border-black bg-transparent text-black dark:border-white relative group transition duration-200">
        <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
        <span className="relative">MongoDB</span>
      </button>
    ),
  },
  {
    name: "Docker",
    category: "Deployment",
    component: (
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
          Docker
        </div>
      </button>
    ),
  },
  {
    name: "Nginx",
    category: "Deployment",
    component: (
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Nginx
        </span>
      </button>
    ),
  },
  {
    name: "Ubuntu",
    category: "Tools",
    component: (
      <button className="px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]">
        Ubuntu
      </button>
    ),
  },
  {
    name: "VSCode",
    category: "Tools",
    component: (
      <button className="px-8 py-2 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
        VSCode
      </button>
    ),
  },
];
