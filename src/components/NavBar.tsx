"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-quartary text-secondary rounded-full fixed top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95 
      w-full md:max-w-6xl md:w-[calc(100%-2rem)] md:left-1/2 md:-translate-x-1/2 mt-4">
      <div className="mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Mobile Menu Button */}
          <div className="lg:hidden w-full flex justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary p-2 rounded-lg hover:bg-tertiary/10 transition-all duration-300"
            >
              {isOpen ? (
                <X className="w-7 h-7 animate-spin-in" />
              ) : (
                <MenuIcon className="w-7 h-7 animate-pop" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex w-full max-w-4xl mx-auto justify-between items-center">
            {[
              { href: "/", label: "Welcome" },
              { href: "/updates", label: "Updates" },
              { href: "/about-me", label: "Who I Am" },
              { href: "/get-in-touch", label: "Get In Touch" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group px-4 py-2 transition-all duration-500"
              >
                <span
                  className={`text-lg ${
                    pathname === link.href
                      ? "text-black font-medium"
                      : "hover:text-black"
                  }`}
                >
                  {link.label}
                </span>
                <span
                  className={`absolute left-1/2 -translate-x-1/2 -top-1 w-0 h-0.5 bg-black transition-all duration-300 ${
                    pathname === link.href
                      ? "w-4/5 -translate-x-1/2"
                      : "group-hover:w-4/5 group-hover:-translate-x-1/2"
                  }`}
                ></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="pb-4 flex flex-col items-center space-y-3">
            {[
              { href: "/", label: "Welcome" },
              { href: "/updates", label: "Updates" },
              { href: "/about-me", label: "Who I Am" },
              { href: "/get-in-touch", label: "Get In Touch" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`w-full text-center py-3 rounded-xl text-lg transition-all duration-300 ${
                  pathname === link.href
                    ? "bg-tertiary/10 text-black font-semibold"
                    : "hover:bg-tertiary/10 hover:text-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;