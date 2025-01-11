import Image from "next/image";

import Layout from "../components/Layout/Layout";
import Emoji from "../components/Emoji/Emoji";
import SEO from "../components/SEO/SEO";

import { TriSquareIcon } from "../components/Homepage/HomepageIcons/Index";

import { motion } from "framer-motion";

const RotateIn = ({ children }) => {
  return (
    <motion.div
      className="hidden overflow-hidden md:block md:w-40 md:h-40"
      initial={{ rotate: 11 }}
      animate={{ rotate: 0 }}
      transition={{ type: "spring", bounce: 0.25, mass: 2 }}>
      {children}
    </motion.div>
  );
};

const ExternalLink = ({ href, title }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center mt-1 text-sm border-b border-gray-700 text-secondary hover:text-syncWave hover:border-syncWave hover:bg-gray-100 dark:hover:bg-transparent dark:text-slate-200 dark:border-slate-200 dark:hover:text-syncWave dark:hover:border-syncWave">
      <span className="mr-1">{title}</span>
      <span className="hidden mb-1 leading-snug sm:block">↗</span>
    </a>
  );
};

const About = () => {
  return (
    <Layout>
      <SEO
        og="og-about.png"
        title="About"
        description="About Keil Martin the Developer"
      />
      <div className="relative">
        <div className="absolute top-0 lg:right-48 right-24">
          <RotateIn>
            <Image
              src="/pictures/profile.JPG"
              alt="Personal photo of Keil Martin"
              height="170"
              width="170"
              className="rounded-full"
            />
          </RotateIn>
        </div>
      </div>
      <div className="max-w-3xl mx-auto my-8 text-xl antialiased leading-relaxed tracking-tight md:mb-20 md:mt-18 md:pt-10 text-tertiary">
        <div className="pb-8"></div>
        <TriSquareIcon />
        <h1 className="mt-4 mb-8 text-4xl antialiased font-bold font-montserrat text-primary dark:text-syncWave">
          About Me
        </h1>
        <div>
          <p className="mb-4">
            Creating cool tech stuff is more than just a job for me—it&apos;s what I live
            for. My love for coding kicked off back in my teen years, messing around on
            Myspace, turning it into a full-blown obsession. I was that kid who took apart
            Playstations and laptops just for the fun of seeing how they ticked. That urge
            to tinker and figure things out? It&apos;s never really left me.
          </p>
        </div>

        <ul className="flex items-baseline space-x-4">
          <p className="text-sm dark:text-slate-200">Find me on</p>
          <li>
            <ExternalLink href="https://www.linkedin.com/in/keilmart/" title="LinkedIn" />
          </li>
          <li>
            <ExternalLink href="https://github.com/keilmart" title="Github" />
          </li>
          <li>
            <ExternalLink href="mailto:keilwmartin@gmail.com" title="Email" />
          </li>
        </ul>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 mb-4 text-2xl font-semibold text-primary dark:text-slate-200">
          My Education
        </h2>
        <div>
          <p>
            My academic journey began in the Electrical Engineering Technology program at
            Georgian College, where my lifelong passion for technology found its
            direction. Throughout my childhood, I was captivated by the vast possibilities
            within the technological realm, yet undecided about which path to take—be it
            hardware, software, robotics, or another field. It wasn&apos;t until my third
            year, during a PLC class, that everything clicked into place. The moment I
            started programming and integrating a Raspberry Pi with a live circuit,
            witnessing my code transform into tangible actions, I experienced a profound
            sense of alignment with my career aspirations. That pivotal experience
            crystallized my ambition: to pursue a career in programming. From that point
            forward, I was resolute in my goal to become a programmer.
          </p>
          <br />
          <p className="mb-4">
            In 2019, I took a significant step toward my career goals by enrolling in the
            Front End Development Immersive bootcamp at Juno College of Technology,
            previously known as HackerYou. This intensive program equipped me with a
            comprehensive toolkit for software development, laying the groundwork for my
            future as a Software Developer.
          </p>
        </div>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 mb-4 text-2xl font-semibold text-primary dark:text-slate-200">
          Where I&apos;ve Worked
        </h2>
        <div>
          <p>
            Over the past three years, I have honed my skills as a Front End Developer,
            specializing in component-driven development with a primary focus on Next.js,
            React, Tailwind, and ScSS. During this dynamic journey, I have significantly
            contributed to more than a dozen large-scale projects, showcasing my ability
            to adapt and excel in a fast-paced environment. My role has expanded beyond
            development; I have embraced freelance projects where I led teams of up to
            four developers, serving not only as the lead developer but also as the
            technical project manager. My responsibilities encompassed direct client
            communication, team management, contract drafting, and being the primary
            liaison for client needs.
          </p>
        </div>

        <hr className="mb-12 border-t-2 border-dotted mt-14 dark:border-gray-400" />
        <h2 className="mt-12 text-2xl font-semibold text-secondary dark:text-slate-200">
          Resume & Portfolio Github
        </h2>
        <a
          className="mt-4 mr-4 btn-primary primary-grad"
          href="https://firebasestorage.googleapis.com/v0/b/portfoliov3-6fb9a.appspot.com/o/project-photos%2Fresume-dev.pdf?alt=media&token=21c32330-0c4b-438f-a71e-72a46f2de9fb"
          target="_blank"
          rel="noreferrer">
          View Resume
        </a>
        <a
          className="mt-4 btn-primary primary-grad"
          href="https://github.com/keilmart/portfolioV3"
          target="_blank"
          rel="noreferrer">
          View Github
        </a>
      </div>
    </Layout>
  );
};

export default About;
