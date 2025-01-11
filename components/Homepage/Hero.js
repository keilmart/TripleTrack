import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center mb-20 py-14 justify-evenly md:justify-between md:flex-row md:mb-2">
      <div className="md:w-1/2">
        <span className="inline-block mt-2 mb-3 text-xl antialiased leading-4 text-tertiary sm:text-2xl">
          Hello, I&apos;m Keil —
        </span>
        <h1 className="text-4xl antialiased font-bold tracking-tight font-montserrat sm:text-7xl text-primary dark:text-syncWave leading-titles">
          {/* <h1 className="text-4xl antialiased font-bold tracking-tight font-montserrat sm:text-5xl text-primary dark:text-syncWave leading-titles"> */}
          TripleTrack
        </h1>
        <span className="inline-block antialiased uppercase text-md sm:text-lg text-tertiary dark:text-slate-200">
          Software Developer
        </span>
      </div>
      <div>
        <Image
          src="/pictures/promo.png"
          alt="promo image"
          height="600"
          width="850"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
