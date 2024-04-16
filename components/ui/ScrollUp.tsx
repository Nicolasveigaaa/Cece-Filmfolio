"use client";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const ScrollUp = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (isHovered) {
      controls.start({
        x: 15,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      });
    } else {
      controls
        .start({
          x: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        })
        .then(() => {
          controls.start({
            x: [0, 15, 0],
            transition: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              type: "tween",
            },
          });
        });
    }
  }, [isHovered, controls]);

  return (
    <motion.a
      href="#"
      className="inline-flex flex-col items-center justify-center gap-2 rotate-[-90deg] whitespace-nowrap"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="uppercase text-background">
        <span className="text-primaryaccent">Back </span>to top
      </p>
      <motion.svg
        width="130"
        height="16"
        viewBox="0 0 139 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={controls}
      >
        <path
          d="M138.707 8.70711C139.098 8.31658 139.098 7.68342 138.707 7.29289L132.343 0.928932C131.953 0.538408 131.319 0.538408 130.929 0.928932C130.538 1.31946 130.538 1.95262 130.929 2.34315L136.586 8L130.929 13.6569C130.538 14.0474 130.538 14.6805 130.929 15.0711C131.319 15.4616 131.953 15.4616 132.343 15.0711L138.707 8.70711ZM0 9H138V7H0L0 9Z"
          fill="#2B2B2B"
        />
      </motion.svg>
    </motion.a>
  );
};

export default ScrollUp;
