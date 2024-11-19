import Link from "next/link";
import BorderButton from "./ui/BorderButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

import { FaLocationArrow } from "react-icons/fa";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-40 md:-left-40 md:-top-24 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-[13%] h-[80vh] w-[50vw]"
          fill="blue"
        />
        <Spotlight
          className="top-40 left-[98%] h-[80vh] w-[50vw]"
          fill="purple"
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:-max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-wide text-[10px] md:text-xs text-center text-blue-100 max-w-[80%]">
            Dynamic web with some magic (hopefull bug-free)
          </h2>

          <TextGenerateEffect
            className="text-center text-3xl md:text-5xl lg:text-6xl "
            words="Turn Every Ideas Into Reality (I'm trying man)."
          />
          <p className="text-center text-[10px] md:text-sm lg:text-base mb-2 md:tracking-normal">
            Hi, I&apos;m Abdul (AJ), a programmer (yes I&apos;m a generalist)
            based in Indonesia
          </p>

          <Link href="/" className="mt-5">
            <BorderButton
              content="Try it"
              icon={<FaLocationArrow />}
              position="left"
            />
          </Link>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
