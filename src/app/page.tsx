"use client";
import React from "react";
import ProjectCards from "@/components/ProjectCards";
import HeroSection from "@/components/HeroSection";
import Blogs from "@/components/Blogs";
import Responses from "@/components/Responses";
import SkillsCard from "@/components/SkillsCard";
import ConnectWithMe from "@/components/ConnectWithMe";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <section id="home">
        <HeroSection />
      </section>
      <section id="projects">
        <ProjectCards />
      </section>
      <section id="skills">
        <SkillsCard />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="contact">
        <ConnectWithMe />
      </section>
      <section id="responses">
        <Responses />
      </section>
    </main>
  );
}
