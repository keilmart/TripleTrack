import Hero from "./Hero";

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

const Homepage = () => {
  return (
    <FadeIn>
      <Hero />
    </FadeIn>
  );
};

export default Homepage;
