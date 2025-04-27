"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Calendly from "./Calendly";
import Image from "next/image";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const navbar = document.querySelector("header"); // targets your sticky navbar

    if (element && navbar) {
      const navHeight = navbar.getBoundingClientRect().height;
      const y =
        element.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-[0.5px] border-slate-300 bg-white/80 backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={scrollToTop}
        >
          <Image
            src="/logo-transparent2.png"
            alt="Lumify Labs Logo"
            width={50}
            height={50}
          />{" "}
          <span className="text-xl font-bold tracking-tight">Lumify Labs</span>
        </Link>

        <nav className="flex-1 hidden md:flex items-center justify-center gap-8">
          <Link
            href="#services"
            className="text-md font-medium text-slate-600 hover:text-sky-600 hover:underline decoration-sky-500 underline-offset-6"
            onClick={(e) => scrollToSection(e, "services")}
          >
            Services
          </Link>
          <Link
            href="#process"
            className="text-md font-medium text-slate-600 hover:text-sky-600 hover:underline decoration-sky-500 underline-offset-6"
            onClick={(e) => scrollToSection(e, "process")}
          >
            Process
          </Link>
          <Link
            href="#contact"
            className="text-md font-medium text-slate-600 hover:text-sky-600 hover:underline decoration-sky-500  underline-offset-6"
            onClick={(e) => scrollToSection(e, "cta")}
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex justify-end">
          <Calendly className="bg-sky-500 hover:bg-sky-600 text-white cursor-pointer px-4 py-2 rounded-md font-medium">
            Book a Call
          </Calendly>
        </div>

        <button
          className="md:hidden text-slate-600 hover:text-sky-600 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden container px-4 pb-4 cursor-pointer">
          <nav className="flex flex-col gap-4">
            <Link
              href="#services"
              className="text-md font-medium text-slate-600 hover:text-sky-600 hover:underline decoration-sky-500 underline-offset-6"
              onClick={(e) => scrollToSection(e, "services")}
            >
              Services
            </Link>
            <Link
              href="#process"
              className="text-md font-medium text-slate-600 hover:text-sky-600 hover:underline decoration-sky-500 underline-offset-6"
              onClick={(e) => scrollToSection(e, "process")}
            >
              Process
            </Link>
            <Link
              href="#contact"
              className="text-md font-medium text-slate-600 hover:text-sky-600 hover:underline decoration-sky-500 underline-offset-6"
              onClick={(e) => scrollToSection(e, "cta")}
            >
              Contact
            </Link>
            <Calendly className="bg-sky-500 hover:bg-sky-600 text-white cursor-pointer w-full px-4 py-2 rounded-md font-medium">
              Book a Call
            </Calendly>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
