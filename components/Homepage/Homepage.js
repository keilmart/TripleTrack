import Hero from "./Hero";
import SectionHeader from "../SectionHeader/SectionHeader";
import HomepageSkillsList from "../HomepageSkillsList/HomepageSkillsList";
import HomepageFeaturedList from "../HomepageFeaturedList/HomepageFeaturedList";
import HomepageNotableList from "../HomepageNotableList/HomepageNotableList";
import HomepageComingList from "../HomepageComingList/HomepageComingList";
import HomepageTestimonialList from "../HomepageTestimonialList/HomepageTestimonialList";

import { DiamondIcon, SquirqleIcon, PentaIcon, CircleIcon } from "./HomepageIcons/Index";
import { motion } from "framer-motion";

const FadeIn = ({ children }) => {
  return (
    <motion.div
      viewport={{ once: false }}
      initial={{ opacity: 0, y: -8 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeInOut",
          duration: 1,
        },
      }}>
      {children}
    </motion.div>
  );
};

const Homepage = ({
  notableProjects,
  featuredProjects,
  comingProjects,
  mobileImages,
}) => {
  // console.log(mobileImages);
  return (
    <>
      <FadeIn>
        <Hero />
      </FadeIn>

      {/* <FadeIn>
        <section className="mx-auto mb-11 md:mb-16 lg:mb-20">
          <SectionHeader
            title="My Toolbox"
            subtitle="Personal branding moon imagery"
            icon={<DiamondIcon />}
          />
          <div className="pt-6 md:pt-11" />
          <HomepageSkillsList />
          <a id="featured" />
        </section>
      </FadeIn> */}

      {/* <FadeIn>
        <section className="mx-auto mb-11 md:mb-20">
          <SectionHeader
            title="Featured Work"
            subtitle="Personal branding moon imagery"
            icon={
              <div className="rotate-90">
                <SquirqleIcon />
              </div>
            }
          />
          <div className="pt-6 md:pt-11" />
          <HomepageFeaturedList projects={featuredProjects} />
        </section>
      </FadeIn> */}

      {/* <FadeIn>
        <section className="mx-auto mb-6">
          <SectionHeader
            title="Testimonials"
            subtitle="Personal branding moon imagery"
            icon={<PentaIcon />}
          />
          <div className="pt-11" />
          <HomepageTestimonialList />
          <a id="notable" />
        </section>
      </FadeIn> */}

      {/* <FadeIn>
        <section className="mx-auto mb-11 md:mb-20">
          <SectionHeader
            title="Notable Work"
            subtitle="Personal branding moon imagery"
            icon={<CircleIcon />}
          />
          <div className="pt-6 md:pt-11" />
          <HomepageNotableList projects={notableProjects} />
        </section>
      </FadeIn> */}

      {/* <FadeIn>
        <section className="mx-auto mb-11 md:mb-20">
          <SectionHeader
            title="Launching Soon"
            subtitle="Personal branding moon imagery"
            icon={<CircleIcon />}
          />
          <div className="pt-6 md:pt-11" />
          <HomepageComingList projects={comingProjects} />
        </section>
      </FadeIn> */}
    </>
  );
};

export default Homepage;
