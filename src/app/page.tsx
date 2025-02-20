import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link href={"http://google.com"}>
          <div>
            <Image
              src="/GoFundMe-WebsiteIMG-Final-6c-NW.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </Link>
        <Link href={"http://google.com"}>
          <div>
            <Image
              src="/GoFundMe-WebsiteIMG-Final-6c-NW-Rev.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div></div>
      </footer>
    </div>
  );
}

export default Home;
