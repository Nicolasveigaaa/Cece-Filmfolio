"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface LinkHoverProps {
  linkText: string;
  linkRef: string;
  linkTarget: string;
}

const LinkHover: React.FC<LinkHoverProps> = ({
  linkText,
  linkRef,
  linkTarget,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (linkRef.startsWith("#")) {
      // Check if it is an anchor link
      e.preventDefault(); // Prevent default link behavior
      const id = linkRef.substring(1); // Remove the '#' to get the ID
      const element = document.getElementById(id);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: top, // Scroll to the element
          behavior: "smooth", // Make the scroll smooth
        });
      }
    }
  };

  return (
    <Link
      href={linkRef}
      target={linkTarget}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleAnchorClick} // Attach the custom click handler
      className="inline-block"
    >
      <motion.div className="relative flex flex-col overflow-hidden">
        <motion.div
          animate={
            isHovered
              ? { y: -30 }
              : {
                  y: 0,
                  transition: {
                    duration: 0.3,
                    ease: [0.6, 0.01, 0.05, 0.95],
                    type: "tween",
                  },
                }
          }
        >
          <p>{linkText}</p>
        </motion.div>

        <motion.div
          className="absolute top-0"
          animate={
            isHovered
              ? { y: 0 }
              : {
                  y: 30,
                  transition: {
                    duration: 0.3,
                    ease: [0.6, 0.01, 0.05, 0.95],
                    type: "tween",
                  },
                }
          }
        >
          <p>{linkText}</p>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default LinkHover;
