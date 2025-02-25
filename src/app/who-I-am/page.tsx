import React from "react";

function WhoIAm() {
  return (
    <section className="bg-background grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col justify-center items-center row-start-2 gap-8 text-center">
        {/* Text */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
            Who I am
          </h1>
          <p className="text-md sm:text-lg text-tertiary max-w-3xl mx-auto">
            I'm a web developer from Portugal, looking forward to starting my
            career in this field. Alongside that, I have a deep passion for
            music. Learning is a lifelong journey for me, whether through formal
            education or self-study. In my free time, I enjoy playing guitar,
            singing, listening to music, cooking, baking, watching anime and
            series, programming, enjoying nature, and focusing on
            self-development. I also love connecting with people and building
            meaningful relationships. Since I can't share my name or picture, I
            want to show you who I am in other ways. Through pictures, audio,
            and other media, I'll share bits of my world—my passions, dreams,
            and the things that matter to me. As a hobby, I produce, compose,
            and write music and lyrics. Although my music isn't out yet, I dream
            that one day, when I do publish it, my words and melodies will reach
            others, make an impact, and help people navigate life.
          </p>
        </div>
        <div className="bg-card p-6 sm:p-8 rounded-2xl mx-auto w-full max-w-xl">
          <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-2 text-center">
            Purpose of this section
          </h2>
          <p className="text-md sm:text-lg text-tertiary text-center">
            Since I can't share my name or picture, I want to show you who I am
            in other ways. Through pictures, audio, and other media, I'll share
            bits of my world—my passions, dreams, and the things that matter to
            me.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhoIAm;
