import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex justify-center items-center flex-col relative overflow-hidden mx-auto py-10 md:py-0">
      {/* Spotlight - Centered */}
      <Spotlight
        className="absolute left-1/3"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center">
        <h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Master the Art of Music
        </h1>
        <p
          className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >
          Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills, join us to unlock your true potential.
        </p>
      </div>

      <div className="mt-4">
        <Link href={"/courses"} className="text-blue-500 hover:underline">
          <Button 
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          > Explore courses</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
