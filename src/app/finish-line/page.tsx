import React from "react";
import Image from "next/image";

export default function FinishLine() {
  return (
    <section className="bg-background grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] fade-in">
      <div className="flex flex-col justify-center items-center row-start-2 gap-8 text-center">
        {/* Text */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
            Finish Line
          </h1>
          <p className="text-md sm:text-lg text-tertiary max-w-3xl mx-auto">
            This campaign is closed, along with its socials. Thank you for your
            support.
          </p>
        </div>
        {/* Image */}
        <Image
          src="finish-line.svg"
          width={290}
          height={290}
          alt="Finish Line update redirect image"
          className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
        />
      </div>
    </section>
  );
}
