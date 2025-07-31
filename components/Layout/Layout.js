import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: -10 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children, wide = false }) => {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear", duration: 0.5 }}
      className="flex items-center justify-center flex-grow w-full h-full min-h-screen bg-white dark:bg-darkMode">
      {/* <div> */}
      <div
        className={`${
          wide ? "flex w-full h-full" : "mx-auto container max-w-screen-xl px-4 lg:px-8"
        }`}>
        {children}
      </div>
    </motion.main>
  );
};

export default Layout;
