import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function GetInTouch() {
  return (
    <section className="bg-background grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col justify-center items-center row-start-2 gap-8 text-center">
        {/* Text */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
            Get in touch
          </h1>
          <p className="text-md sm:text-lg text-tertiary max-w-3xl mx-auto">
            You can reach out to me on Instagram by clicking the image below and
            help share my story by checking out my post. If you prefer an
            alternative way to connect, feel free to email me at{" "}
            <a
              href="mailto:my.go.fund.family@gmail.com"
              className="text-primary underline"
            >
              my.go.fund.family@gmail.com
            </a>
          </p>
        </div>
        {/* Image */}
        <Link
          href="http://google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block"
        >
          <div className="relative">
            <Image
              src="/instagram-logo-light.svg"
              width={290}
              height={290}
              alt="Picture of the author"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
            {/* Text overlay */}
            <span className="absolute bg-quartary px-4 py-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-3xl font-bold text-secondary transition-opacity duration-300 rounded-full">
              My Instagram
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
