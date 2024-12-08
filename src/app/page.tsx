import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import WhyMe from "@/components/WhyMe";

export default function Home() {
  return (
    <main className="border border-white">
    <HeroSection  />
    <Projects/>
    <WhyMe/>
    </main>
  );
}
