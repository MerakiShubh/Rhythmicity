import Link from "next/link";
import Image from "next/image";
import mypic from "../../public/mypic.png";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-10 md:space-y-0 md:space-x-10">
        {/* <div className="flex-shrink-0">
          <Image
            src={mypic}
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div> */}
        <div className="md:flex-grow w-full">
          <p className="text-2xl">Hello, I’m</p>
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Shubham Tiwari
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            CREATIVE FULL STACK WEB DEVELOPER
          </p>
          <div className="mt-4">
            <Link
              href="https://drive.google.com/file/d/1rEGBUbuCwKiZc7hOHYnXqwnu1Zc9R12h/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
