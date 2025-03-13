import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col justify-center items-center row-start-2 gap-8 text-center">
        {/* Text */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
            Join me on my journey
          </h1>
          <p className="text-md sm:text-lg text-tertiary max-w-3xl mx-auto">
            This website was built to give you an inside look at my journey, keep
            you updated on my cause, help you get to know me better, and offer a
            space for us to connect.If you&apos;d like to learn about my cause,
            visit my GoFundMe by tapping the image below.
          </p>
        </div>

        {/* Image */}
        <Link
          href="/finish-line"
          className="group relative inline-block"
        >
          <div className="relative">
            <Image
              src="/GoFundMe-Final-Image-L.svg"
              width={600}
              height={600}
              alt="Picture of the author"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
            {/* Text overlay */}
            <span className="absolute bg-quartary px-4 py-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-3xl font-bold text-secondary transition-opacity duration-300 rounded-full">
              My Go Fund Me
            </span>
          </div>
        </Link>

        {/* Mobile Message */}
        <p className="text-sm text-tertiary max-w-xs text-center block lg:hidden">
          Tap the image to visit my GoFundMe
        </p>
      </main>
    </div>
  );
}
