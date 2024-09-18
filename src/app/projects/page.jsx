"use client"
import { HoverEffect } from "../../components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div>
        <h1 className="flex justify-center mt-40 text-4xl font-bold">My Projects</h1>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </div>
  );
}
export const projects = [
  {
    title: "Gym Website",
    description:
      "This is a gym frontend website showing various plans and about the trainers of the gym and map feature showing the loaction of the gym",
    link: "https://trainingstudiobypratyush.netlify.app/",
  },
  {
    title: "ChatApp",
    description:
      "This is a chat app where you can chat with your friends with search option and notification sound and best looking UI",
    link: "https://pratyush-chatapp.onrender.com/",
  },

  ,
  {
    title: "Manage",
    description:
      "Manage makes it simple for software teams to plan day-to-day tasks while keeping larger team goals in view(frontend project)",
    link: "https://managebypratyush.netlify.app/",
  },
  {
    title: "More projects coming soon....",
    description:
      "I have made some private projects that are currently not deployed if you want to see that also drop me a mail :)",
    link: "https://meta.com",
  },

];
