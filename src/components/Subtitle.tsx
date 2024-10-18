import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Subtitle = () => {
  const titles = [
    "Software Engineer",
    "Full Stack Developer",
    "Traveller",
    "Backend Developer",
    "ML Engineer",
    "Food Enthusiast",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <motion.div
      key={currentTitleIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-lg absolute"
    >
      {titles[currentTitleIndex]}
    </motion.div>
  );
};

export default Subtitle;
