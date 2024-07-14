import React from "react";
import { Vortex } from "./ui/vortex";

interface Socials {
  title: string;
  url: string;
}

const socials: Socials[] = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/merakishubh",
  },
  {
    title: "Twitter",
    url: "https://x.com/merakishubh",
  },
  {
    title: "Github",
    url: "https://github.com/MerakiShubh",
  },
  {
    title: "Hashnode",
    url: "https://hashnode.com/@merakishubh",
  },
];

function ConnectWithMe() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Let&apos;s Collaborate
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Together, we can create something truly special.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          {socials.map((social) => (
            <a
              key={social.title}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
            >
              {social.title}
            </a>
          ))}
        </div>
      </Vortex>
    </div>
  );
}

export default ConnectWithMe;
