"use client";
import React from "react";
import { ButtonsCard } from "./ui/tailwindcss-buttons";

export function SkillButtons() {
  return (
    <div className="pb-40 px-4 w-full">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto gap-10 "> */}
      <div>
        {buttons.map((button, idx) => (
          <ButtonsCard key={idx}>{button.component}</ButtonsCard>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

interface Button {
  name: string;
  description: string;
  component: React.ReactNode;
  category?: string;
}

const dockerButtonStyle = (text: any) => (
  <button className="p-[3px] relative ">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
    <div className="px-[8px] py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
      {text}
    </div>
  </button>
);

export const buttons = [
  {
    name: "HTML",
    category: "Frontend",
    component: dockerButtonStyle("HTML"),
  },
  {
    name: "JavaScript",
    category: "Frontend",
    component: dockerButtonStyle("JavaScript"),
  },
  {
    name: "CSS",
    category: "Frontend",
    component: dockerButtonStyle("CSS"),
  },
  {
    name: "Tailwind",
    category: "Frontend",
    component: dockerButtonStyle("Tailwind"),
  },
  {
    name: "React",
    category: "Frontend",
    component: dockerButtonStyle("React"),
  },
  {
    name: "TypeScript",
    category: "Frontend",
    component: dockerButtonStyle("TypeScript"),
  },
  {
    name: "NodeJS",
    category: "Backend",
    component: dockerButtonStyle("NodeJS"),
  },
  {
    name: "Redis",
    category: "Backend",
    component: dockerButtonStyle("Redis"),
  },
  {
    name: "MongoDB",
    category: "Backend",
    component: dockerButtonStyle("MongoDB"),
  },
  {
    name: "Express",
    category: "Backend",
    component: dockerButtonStyle("Express"),
  },
  {
    name: "NextJs",
    category: "Backend",
    component: dockerButtonStyle("NextJs"),
  },
  {
    name: "Appwrite",
    category: "Backend",
    component: dockerButtonStyle("Appwrite"),
  },
  {
    name: "Socket.io",
    category: "Backend",
    component: dockerButtonStyle("Socket.io"),
  },
  {
    name: "Docker",
    category: "Deployment",
    component: dockerButtonStyle("Docker"),
  },
  {
    name: "Nginx",
    category: "Deployment",
    component: dockerButtonStyle("Nginx"),
  },
  {
    name: "Linode",
    category: "Deployment",
    component: dockerButtonStyle("Linode"),
  },
  {
    name: "VSCode",
    category: "Tools",
    component: dockerButtonStyle("VSCode"),
  },
  {
    name: "Git",
    category: "Tools",
    component: dockerButtonStyle("Git"),
  },
  {
    name: "Postman",
    category: "Tools",
    component: dockerButtonStyle("Postman"),
  },
  {
    name: "Ubuntu",
    category: "Tools",
    component: dockerButtonStyle("Ubuntu"),
  },
];
