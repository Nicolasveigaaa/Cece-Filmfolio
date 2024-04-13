"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const ScrollArrow = () => {
  const controls = useAnimation(); // To control animation

  useEffect(() => {
    const updateOpacity = () => {
      // Example condition: start fading out after scrolling 100px
      if (window.scrollY > 100) {
        controls.start({ opacity: 0 });
      } else {
        controls.start({ opacity: 1 });
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", updateOpacity);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", updateOpacity);
  }, [controls]);

  return (
    <motion.div
      className='absolute bottom-24 right-4 items-start flex flex-col justify-center rotate-90'
      initial={{ opacity: 1 }} // Start fully visible
      animate={controls} // Use the animation controls
      transition={{ duration: 0.2 }}
    >
      <motion.svg
        width='130'
        height='16'
        viewBox='0 0 139 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        initial={{ x: 0 }} // Initial state of the arrow animation
        animate={{ x: [0, 15, 0] }} // Arrow animation
        transition={{
          duration: 2, // Total duration of the arrow animation
          ease: "easeInOut", // Easing function
          repeat: Infinity, // Repeat indefinitely
        }}
      >
        <path
          d='M138.707 8.70711C139.098 8.31658 139.098 7.68342 138.707 7.29289L132.343 0.928932C131.953 0.538408 131.319 0.538408 130.929 0.928932C130.538 1.31946 130.538 1.95262 130.929 2.34315L136.586 8L130.929 13.6569C130.538 14.0474 130.538 14.6805 130.929 15.0711C131.319 15.4616 131.953 15.4616 132.343 15.0711L138.707 8.70711ZM0 9H138V7H0L0 9Z'
          fill='white'
        />
      </motion.svg>
      <p className='uppercase text-white'>
        Scroll <span className='text-primaryaccent'>down</span>
      </p>
    </motion.div>
  );
};

export default ScrollArrow;
