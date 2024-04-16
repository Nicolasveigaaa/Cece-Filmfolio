"use client";
import styles from "./styles.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#2B2B2B", "#D9D9D9"]
  );

  const scale4 = useTransform(scrollYProgress, [0, 1], [4, 1]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [5, 1]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [6, 1]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [8, 1]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [9, 1]);

  const pictures = [
    {
      src: "./BTS/bg-billeder-2.png",
      scale: scale4,
    },
    {
      src: "./BTS/bg-billeder-7.png",
      scale: scale5,
    },
    {
      src: "./BTS/bg-billeder-1.png",
      scale: scale6,
    },
    {
      src: "./BTS/bg-billeder-13.png",
      scale: scale5,
    },
    {
      src: "./BTS/gallery-2.png",
      scale: scale6,
    },
    {
      src: "./BTS/bg-billeder-6.png",
      scale: scale8,
    },
    {
      src: "./BTS/gallery-3.png",
      scale: scale9,
    },
  ];

  return (
    <motion.section style={{ backgroundColor }}>
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div key={index} style={{ scale }} className={styles.el}>
                <div className={styles.imageContainer}>
                  <img
                    src={src}
                    alt="image"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="inset-0 bg-background absolute opacity-20"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
