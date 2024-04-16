"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type CardType = {
  id: number;
  url: string;
  title: string;
  kategoriOgDato: string;
  thumbnail: string;
  video: string;
  description: string;
};

const cards: CardType[] = [
  {
    id: 1,
    video: "/videoer/bg-video.mp4",
    title: "I Vor Dødstime",
    thumbnail: "/thumbnail/dødstime.png",
    url: "https://www.youtube.com/watch?v=isBMCkc_AzY",
    kategoriOgDato: "Fiction • Coming Soon",
    description: "i vor dødstime....",
  },
  {
    id: 2,
    video: "/videoer/rød-sol.mp4",
    title: "Solen er så rød mor",
    thumbnail: "/thumbnail/rødsol.png",
    url: "https://www.youtube.com/watch?v=PlfcZpQwqq4",
    kategoriOgDato: "Fiction • 2023",
    description: "solen er rød mama ...",
  },
  {
    id: 3,
    video: "/videoer/smil.mp4",
    title: "Smil Prinsesse",
    thumbnail: "/thumbnail/prinsesse.png",
    url: "https://www.ekkofilm.dk/shortlist/film/smil-prinsesse/",
    kategoriOgDato: "Fiction • 2022",
    description: "smil sødt lille prinsesse",
  },
  {
    id: 4,
    video: "/videoer/echo.mp4",
    title: "ECHO prøver naturterapi",
    thumbnail: "/thumbnail/echo.png",
    url: "https://www.youtube.com/watch?v=B1F20-hF0X8",
    kategoriOgDato: "Non-fiction • 2023",
    description: "ryg noget hash",
  },
  {
    id: 5,
    video: "/videoer/medicin.mp4",
    title: "Fremtidens medicin",
    thumbnail: "/thumbnail/medicin.png",
    url: "https://www.youtube.com/watch?v=G9GXI_YcdvY",
    kategoriOgDato: "Non-fiction • 2023",
    description: "drik noget mere creatine",
  },
  {
    id: 6,
    video: "/videoer/kvindekrop.mp4",
    title: "Fanget i min kvindekrop",
    thumbnail: "/thumbnail/kvindekrop.png",
    url: "https://www.youtube.com/watch?v=ICK0Y6gGdQg ",
    kategoriOgDato: "Non-fiction • 2023",
    description: "jeg er en mand...",
  },
];

const ProjectGallery = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeCard, setActiveCard] = useState<CardType | null>(null);

  const callSlideIn = (card?: CardType) => {
    setIsActive(!isActive);
    setActiveCard(card || null);
  };

  return (
    <div className="max-w-[1280px] mt-24 mb-20 lg:my-44 w-10/12 mx-auto overflow-hidden">
      <h2 className="font-light uppercase text-lg w-full pb-10 pt-2">
        Some of my <span className="text-primaryaccent">recent work</span>
      </h2>
      <div>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            callSlideIn={() => callSlideIn(card)}
          />
        ))}
      </div>
      {isActive && activeCard && (
        <FilmInfo
          card={activeCard}
          isActive={isActive}
          callSlideIn={() => callSlideIn()}
        />
      )}
    </div>
  );
};

const Card = ({
  card,
  callSlideIn,
}: {
  card: CardType;
  callSlideIn: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <div
      onClick={callSlideIn}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="transition-all cursor-pointer relative max-w-[1280px] h-[30vh] md:h-[40vh] flex mx-auto mb-10"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={card.thumbnail}
          alt="Project thumbnail"
          className="object-cover rounded-xl absolute inset-0 w-full h-full"
        />
      </motion.div>
      <video
        ref={videoRef}
        muted
        loop
        className="object-cover w-full rounded-xl"
      >
        <source src={card.video} type="video/mp4" />
      </video>
      <div className="absolute bg-background inset-0 w-full h-full opacity-30"></div>
      <div className="w-full absolute bottom-0 p-8 uppercase font-semibold md:text-lg flex flex-col sm:flex-row justify-between text-white">
        <p>{card.title}</p>
        <p>{card.kategoriOgDato}</p>
      </div>
    </div>
  );
};

const FilmInfo = ({
  card,
  isActive,
  callSlideIn,
}: {
  card: CardType;
  isActive: boolean;
  callSlideIn: () => void;
}) => {
  return (
    <motion.div
      className="fixed w-full h-screen z-30 inset-0 bg-foreground text-background py-10 px-12"
      initial={{ x: "-100%" }}
      animate={isActive ? { x: ["-100%", "0%"] } : { x: ["0%", "-100%"] }}
      transition={{
        duration: 0.3,
        ease: [0.6, 0.01, 0.05, 0.95],
        type: "tween",
      }}
    >
      {/* close button */}
      <motion.button
        onClick={callSlideIn}
        whileHover={{ rotate: 180 }}
        className="absolute top-8 right-12 inline-block cursor-pointer p-2"
        style={{ width: "30px", height: "30px" }}
      >
        <div
          className="absolute h-[1px] bg-background w-7"
          style={{
            transform: "rotate(45deg)",
            left: "50%",
            top: "50%",
            transformOrigin: "center",
            marginLeft: "-14px",
          }}
        ></div>
        <div
          className="absolute h-[1px] bg-background w-7"
          style={{
            transform: "rotate(-45deg)",
            left: "50%",
            top: "50%",
            transformOrigin: "center",
            marginLeft: "-14px",
          }}
        ></div>
      </motion.button>

      {/* Info */}
      <div className="">
        <p className="text-sm font-light mt-6">{card.kategoriOgDato}</p>
        <h3 className="font-semibold text-lg pb-2">{card.title}</h3>
        <div className="h-[2px] w-full bg-background mb-6"></div>

        <div className="w-full h-[30vh] relative mb-6">
          <img
            src={card.thumbnail}
            alt="portrait of Celena Veiga"
            className="object-cover rounded-xl absolute inset-0 w-full h-full"
          />
        </div>

        <p className="text-base">{card.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectGallery;
