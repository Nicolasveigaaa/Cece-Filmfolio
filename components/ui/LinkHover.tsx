"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Define the component with proper TypeScript prop types
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

  return (
    <Link
      href={linkRef}
      target={linkTarget}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
