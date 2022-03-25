import {
  CodeIcon,
  PencilIcon,
  BeakerIcon,
  CloudDownloadIcon,
  FastForwardIcon,
  SparklesIcon,
  PuzzleIcon,
} from "@heroicons/react/Outline";

import { DiamondIcon, SquirqleIcon, CircleIcon } from "../StripeIcons";

import Hero from "./Hero";
import Capsule from "../Capsule/Capsule";
import SectionHeader from "../SectionHeader/SectionHeader";

import HomepageBlogList from "../HomepageBlogList/HomepageBlogList";
import HomepageWorkList from "../HomepageWorkList/HomepageWorkList";
import HomepagePersonalList from "../HomepagePersonalList/HomepagePersonalList";

const Homepage = () => {
  return (
    <>
      <Hero />

      <section className="max-w-3xl px-5 py-6 mx-auto mt-6 mb-10 text-center bg-gray-100 border-2 border-gray-200 border-dotted rounded-lg md:mb-20 md:mt-32 md:py-12 md:px-14">
        <h2 className="text-xl font-semibold md:text-2xl text-primary">
          Some of the skills you can find in my toolbox
        </h2>
        <div className="flex justify-center mt-6">
          <div className="flex flex-wrap justify-center max-w-sm sm:max-w-lg">
            <Capsule
              text="React"
              className="m-1 hover:rotate-1"
              icon={<BeakerIcon className="w-5 h-6 text-darkseafoam" />}
            />
            <Capsule
              text="Next.js"
              className="m-1 hover:-rotate-1"
              icon={<FastForwardIcon className="w-5 h-6 text-red-600" />}
            />
            <Capsule
              text="Gatsby"
              className="m-1 hover:rotate-1"
              icon={<SparklesIcon className="w-5 h-6 text-lime-600" />}
            />
            <Capsule
              text="JavaScript"
              className="m-1 hover:-rotate-1"
              icon={<CodeIcon className="w-5 h-6 text-purple-600" />}
            />
            <Capsule
              text="Firebase"
              className="m-1 hover:-rotate-1"
              icon={<CloudDownloadIcon className="w-5 h-6 text-indigo-500" />}
            />
            <Capsule
              text="Tailwind"
              className="m-1 hover:-rotate-1"
              icon={<PuzzleIcon className="w-5 h-6 text-yellow-400" />}
            />
            <Capsule
              text="Figma"
              className="m-1 hover:rotate-1"
              icon={<PencilIcon className="w-5 h-6 text-darkseafoam" />}
            />
          </div>
        </div>
      </section>
      <a id="blogPosts" />
      <section className="mx-auto mb-10 md:mb-15">
        <SectionHeader
          title="My Feed"
          subtitle="MOCKUP"
          icon={
            <div className="transition duration-1000 ease-in-out hover:scale-150 hover:rotate-180">
              <CircleIcon />
            </div>
          }
        />
        <div className="pt-8" />
        <HomepageBlogList />
        <a id="workProjects" />
      </section>
      <section className="mx-auto mb-10 md:mb-20">
        <SectionHeader
          title="Work Projects"
          subtitle="MOCKUP"
          icon={
            <div className="transition duration-1000 ease-in-out hover:scale-150 hover:rotate-90">
              <DiamondIcon />
            </div>
          }
        />
        <div className="pt-12" />
        <HomepageWorkList />
      </section>
      <section className="mx-auto mb-10 md:mb-20">
        <SectionHeader
          title="Personal Projects"
          subtitle="MOCKUP"
          icon={
            <div className="transition duration-1000 ease-in-out hover:scale-150 hover:-rotate-12">
              <SquirqleIcon />
            </div>
          }
        />
        <div className="pt-12" />
        <HomepagePersonalList />
      </section>
    </>
  );
};

export default Homepage;
