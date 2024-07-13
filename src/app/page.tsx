import ProjectCards from "@/components/ProjectCards";
import HeroSection from "@/components/HeroSection";
import Blogs from "@/components/Blogs";
import Aboutme from "@/components/Aboutme";
import SkillsCard from "@/components/SkillsCard";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <ProjectCards />
      <SkillsCard />
      <Blogs />
      <Aboutme />
    </main>
  );
}
