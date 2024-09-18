"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "I",
      className:"text-lg md:text-5xl"
    },
    {
      text: "am",
        className:"text-lg md:text-5xl"
    },
    {
      text: "Pratyush",
      className: "text-blue-500 dark:text-blue-500 text-lg md:text-5xl",
    },
    {
      text: "Gupta",
      className: "text-green-500 dark:text-green-500 text-lg md:text-5xl",
    },
    {
        text: "...",
  className:"text-lg md:text-5xl"
  
      },
    {
      text: "A",
  className:"text-lg md:text-5xl"
    },

    {
        text: "Web",
    className:"text-lg md:text-5xl"
      },
      {
        text: "Developer",
    className:"text-lg md:text-5xl"
      },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center  ">
    <TypewriterEffectSmooth words={words} />
    </div>
  );
}