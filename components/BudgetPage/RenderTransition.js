import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: -10 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const RenderTransition = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear", duration: 0.5 }}
      className="flex items-center justify-center bg-white dark:bg-darkMode">
      <div className="flex flex-grow w-full">{children}</div>
    </motion.div>
  );
};

export default RenderTransition;
