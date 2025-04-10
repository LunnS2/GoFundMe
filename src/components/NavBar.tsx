"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  return (
    <nav className="bg-quartary text-secondary p-2 fixed w-full top-0 left-0 z-50 fade-in">
      <div className="mx-auto flex justify-between items-center px-4 lg:px-8">
        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-secondary focus:outline-none transition-colors duration-300"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>

        {/* Centered Links for Large Screens */}
        <div
          className={`lg:flex lg:items-center lg:space-x-[100px] ${
            isOpen ? "flex flex-col space-y-4" : "hidden"
          } lg:block mx-auto`}
        >
          {[
            { href: "/", label: "Welcome" },
            { href: "/updates", label: "Updates" },
            { href: "/about-me", label: "Who I Am" },
            { href: "/get-in-touch", label: "Get In Touch" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-black ${
                pathname === link.href ? "text-black font-semibold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
