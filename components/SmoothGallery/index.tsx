"use client";
import styles from "./styles.module.scss";
import Picture1 from "../../public/BTS/bg-billeder-5.jpg";
import Picture2 from "../../public/BTS/bg-billeder-1.jpg";
import Picture3 from "../../public/BTS/bg-billeder-2.jpg";
import Picture4 from "../../public/BTS/bg-billeder-3.jpg";
import Picture5 from "../../public/BTS/bg-billeder-4.jpg";
import Picture6 from "../../public/BTS/bg-billeder-5.jpg";
import Picture7 from "../../public/BTS/bg-billeder-6.jpg";
import Image from "next/image";
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
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
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
                  <Image src={src} fill alt='image' placeholder='blur' />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
