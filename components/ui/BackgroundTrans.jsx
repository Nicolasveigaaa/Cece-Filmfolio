"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const BackgroundTrans = ({ children }) => {
  const container = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  let lastScroll = 0;
  let lastTime = Date.now();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start", "end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#D9D9D9", "#2B2B2B"]
  );

  // Attempt to measure scroll speed to adjust the smoothness dynamically
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const currentTime = Date.now();
      const speed = (currentScroll - lastScroll) / (currentTime - lastTime);

      setScrollSpeed(speed);

      lastScroll = currentScroll;
      lastTime = currentTime;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Potentially use scrollSpeed to adjust animation parameters dynamically

  return (
    <motion.div ref={container} style={{ backgroundColor }}>
      {children}
    </motion.div>
  );
};

export default BackgroundTrans;
