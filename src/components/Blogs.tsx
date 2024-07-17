"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const blogsContent = [
  {
    title: "Introduction to Virtual Machines: A Comprehensive Guide",
    description:
      "Discover the evolution and architecture of virtual machines, and learn how to set up and manage them using a Type-2 hypervisor. Perfect for web developers looking to deploy applications efficiently on VMs.",
    url: "https://merakishubh.hashnode.dev/virtual-machine",
  },
  {
    title: "Building Your Own YouTube Clone with MERN Stack",
    description:
      "Explore how to create a YouTube-like video sharing platform using the MERN stack. This guide covers the tech stack, frontend, backend, and deployment processes to help you build and deploy your own Videotube project.",
    url: "https://merakishubh.hashnode.dev/videotube-project",
  },
  {
    title: "Introduction to Virtual Machines: A Comprehensive Guide",
    description:
      "Discover the evolution and architecture of virtual machines, and learn how to set up and manage them using a Type-2 hypervisor. Perfect for web developers looking to deploy applications efficiently on VMs.",
    url: "https://merakishubh.hashnode.dev/virtual-machine",
  },
  {
    title: "Building Your Own YouTube Clone with MERN Stack",
    description:
      "Explore how to create a YouTube-like video sharing platform using the MERN stack. This guide covers the tech stack, frontend, backend, and deployment processes to help you build and deploy your own Videotube project.",
    url: "https://merakishubh.hashnode.dev/videotube-project",
  },
  {
    title: "Introduction to Virtual Machines: A Comprehensive Guide",
    description:
      "Discover the evolution and architecture of virtual machines, and learn how to set up and manage them using a Type-2 hypervisor. Perfect for web developers looking to deploy applications efficiently on VMs.",
    url: "https://merakishubh.hashnode.dev/virtual-machine",
  },
  {
    title: "Building Your Own YouTube Clone with MERN Stack",
    description:
      "Explore how to create a YouTube-like video sharing platform using the MERN stack. This guide covers the tech stack, frontend, backend, and deployment processes to help you build and deploy your own Videotube project.",
    url: "https://merakishubh.hashnode.dev/videotube-project",
  },
];

function Blogs() {
  return (
    <div>
      <div className="text-center">
        <p className="mt-10 pb-6 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">
          Blogs
        </p>
      </div>
      <StickyScroll content={blogsContent} />
    </div>
  );
}

export default Blogs;
