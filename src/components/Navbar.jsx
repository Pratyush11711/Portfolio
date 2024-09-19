"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [navOpen, setNavOpen] = useState(false); // State to manage hamburger menu

  const toggleMenu = () => {
    setNavOpen(!navOpen); // Toggle the state of the menu
  };

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          <Link href="/">
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <Link href="/about">
            <MenuItem setActive={setActive} active={active} item="About" />
          </Link>
          <Link href="/projects">
            <MenuItem setActive={setActive} active={active} item="Projects" />
          </Link>
          <Link href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact" />
          </Link>
        </Menu>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-center">
        <button
          onClick={toggleMenu} // Toggle the menu when clicked
          className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span>Menu</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && ( // Conditional rendering based on the state
        <div className="md:hidden flex flex-col space-y-4 text-md w-full bg-[#18191B] p-4 rounded-md mt-3 text-white">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </div>
  );
}
