import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import TestimonialCard from "@/components/TestimonialCard";
import WhyMe from "@/components/WhyMe";

export default function Home() {
  return (
    <main>
    <HeroSection  />
    <Projects/>
    <WhyMe/>
    <TestimonialCard/>
    <SocialLinks/>
    </main>
  );
}
