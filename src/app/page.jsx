import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <SkillsSection />
        <WorkExperience />
        <FooterSection />
      </main>
    </div>
  );
}
