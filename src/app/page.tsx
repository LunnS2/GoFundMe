import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <div className="bg-background grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className=" flex flex-col gap-8 row-start-2">
        <Link
          href="http://google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block"
        >
          <div className="relative float-right">
            <Image
              src="/GoFundMe-WebsiteIMG-Final-6c-NW.svg"
              width={600}
              height={600}
              alt="Picture of the author"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Link>
        <Link
          href="http://google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block"
        >
          <div className="relative float-right">
            <Image
              src="/GoFundMe-WebsiteIMG-Final-6c-NW-Rev.svg"
              width={600}
              height={600}
              alt="Picture of the author"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="flex border rounded-md bg-foreground">
        </div>
      </footer>
    </div>
  );
}

export default Home;
