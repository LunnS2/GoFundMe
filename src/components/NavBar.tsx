"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-quartary text-secondary p-2 fixed w-full top-0 left-0 z-50">
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
          <Link href="/">Welcome</Link>
          <Link href="/updates">Updates</Link>
          <Link href="/who-i-am">Who I Am</Link>
          <Link href="/get-in-touch">Get In Touch</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
