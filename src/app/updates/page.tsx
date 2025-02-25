"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, ArrowDown } from "lucide-react";
import updatesData from "../../data/updates.json";

interface Update {
  title: string;
  date: string;
  text: string;
  image: string | null;
}

const Updates: React.FC = () => {
  const updates: Update[] = updatesData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <section className="bg-background grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col justify-center items-center row-start-2 gap-8 text-center">
        {/* Floating Navigation Buttons */}
        <div className="fixed right-6 bottom-6 sm:top-1/2 sm:transform sm:-translate-y-1/2 flex flex-col sm:gap-4 gap-2">
          {/* Go to Latest Updates (Top) */}
          <button
            onClick={scrollToTop}
            className="p-1 sm:p-2 bg-quartary text-tertiary hover:text-secondary rounded-full hover:bg-primary-dark transition duration-300 flex flex-col items-center shadow-md shadow-quartary"
          >
            <ArrowUp size={24} />
            <span className="text-xs mt-1">Latest</span>
          </button>

          {/* Go to Oldest Updates (Bottom) */}
          <button
            onClick={scrollToBottom}
            className="p-1 sm:p-2 bg-quartary text-tertiary hover:text-secondary rounded-full hover:bg-primary-dark transition duration-300 flex flex-col items-center shadow-md shadow-quartary"
          >
            <ArrowDown size={24} />
            <span className="text-xs mt-1">Oldest</span>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center text-center w-full max-w-3xl">
          {/* Header */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
              Weekly updates
            </h1>
            <p className="text-md sm:text-lg text-tertiary max-w-3xl mx-auto">
              Every week, I&apos;ll be updating you about my journey. Stay tuned for
              exciting news, new challenges, and key milestones along the way!
            </p>
          </div>

          {/* Updates List */}
          <div className="mt-4 w-full space-y-8">
            {updates.map((update, index) => (
              <div
                key={index}
                className="bg-card p-6 sm:p-8 rounded-2xl shadow-md shadow-quartary border border-border text-left mx-auto w-full max-w-xl"
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-2 text-center">
                  {update.title}
                </h2>
                <p className="text-md sm:text-lg text-tertiary text-center">
                  {update.text}
                </p>

                {/* Conditionally render image if available */}
                {update.image && (
                  <div className="flex mt-4 justify-center">
                    <Image
                      src={update.image}
                      alt={update.title}
                      width={300}
                      height={200}
                      layout="intrinsic"
                      className="rounded-lg"
                    />
                  </div>
                )}
                <p className="text-md sm:text-lg mt-4 text-center text-tertiary">
                  {update.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updates;
