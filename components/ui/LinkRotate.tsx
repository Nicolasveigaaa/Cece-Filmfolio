"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface LinkRotateProps {
  linkText: string;
  linkTextTwo: string;
  linkTextThree: string;
  linkRef: string;
}

const LinkRotate: React.FC<LinkRotateProps> = ({
  linkRef,
  linkText,
  linkTextTwo,
  linkTextThree,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={linkRef}
      className="inline-block overflow-hidden mt-16 lg:mt-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="flex">
        {linkText} &nbsp;
        <div className="relative flex flex-col text-primaryaccent">
          <motion.div
            animate={isHovered ? { y: -30 } : { y: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.6, 0.01, 0.05, 0.95],
              type: "tween",
            }}
          >
            {linkTextTwo}
          </motion.div>
          <motion.div
            className="absolute top-0"
            animate={isHovered ? { y: 0 } : { y: 30 }}
            transition={{
              duration: 0.3,
              ease: [0.6, 0.01, 0.05, 0.95],
              type: "tween",
            }}
          >
            {linkTextTwo}
          </motion.div>
        </div>
        &nbsp; {linkTextThree}
      </div>

      {/* Underliner */}
      <motion.div
        className="flex overflow-hidden w-full mt-[1px] relative"
        style={{ position: "relative" }}
      >
        {/* Divider 1 */}
        <motion.div
          className="h-[2px] bg-background w-full"
          initial={{ x: 0 }}
          animate={{ x: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        ></motion.div>

        {/* Divider 2 */}
        <motion.div
          className="h-[2px] bg-primaryaccent w-full absolute"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "0%" : "-100%" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>
    </a>
  );
};

export default LinkRotate;
