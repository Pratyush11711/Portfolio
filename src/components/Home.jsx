"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";

export function LampDemo() {
  return (
    <div className="">
    <LampContainer className="overflow-hidden">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl ">
        I am Pratyush Gupta <br /> <div className="text-blue-500"> A Web Developer </div>

        <div className="text-2xl mt-10">Bringing ideas to life with full-stack precision and creativity.</div>
        <div className="text-lg">MERN Stack Developer</div>
      </motion.h1>
      
    </LampContainer></div>
  );
}
