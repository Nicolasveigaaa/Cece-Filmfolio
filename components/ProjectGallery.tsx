"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LinkRotate from "./ui/LinkRotate";

type CardType = {
  id: number;
  url: string;
  title: string;
  kategoriOgDato: string;
  thumbnail: string;
  video: string;
  description: string;
  stilbilede: string;
};

const cards: CardType[] = [
  {
    id: 4,
    video: "/videoer/echo.webm",
    title: "ECHO prøver naturterapi",
    thumbnail: "/thumbnail/echo.webp",
    url: "https://www.youtube.com/watch?v=B1F20-hF0X8",
    kategoriOgDato: "Non-fiction • 2024",
    description:
      "The first episode of a documentary series, that explores nature therapy as an alternative treatment for young people with mental health issues.",
    stilbilede: "/stilbillede/natur.webp",
  },
  {
    id: 5,
    video: "/videoer/medicin.webm",
    title: "Fremtidens medicin",
    thumbnail: "/thumbnail/medicin.webp",
    url: "https://www.youtube.com/watch?v=G9GXI_YcdvY",
    kategoriOgDato: "Non-fiction • 2023",
    description:
      "Natalie is a healer, who holds space for others to release their trauma. When cancer confronted her, she changed her life and redefined her purpose. She aspires to do something impactful with the life she has been given. Can spirituality become the medicine of the future?",
    stilbilede: "/stilbillede/medicin.webp",
  },
  {
    id: 6,
    video: "/videoer/kvindekrop.webm",
    title: "Fanget i min kvindekrop",
    thumbnail: "/thumbnail/kvindekrop.webp",
    url: "https://www.youtube.com/watch?v=ICK0Y6gGdQg ",
    kategoriOgDato: "Non-fiction • 2023",
    description:
      "Ditte decided to be sterilized, driven by her lifelong certainty of not wanting children. She articulates feeling confined by societal expectations but finds liberation in reclaiming control over her body and destiny.",
    stilbilede: "/stilbillede/kvindekrop.webp",
  },
  {
    id: 1,
    video: "/videoer/bg-video.webm",
    title: "I Vor Dødstime",
    thumbnail: "/thumbnail/dødstime.webp",
    url: "https://www.youtube.com/watch?v=3SLHMSmBB_w",
    kategoriOgDato: "Fiction • Coming Soon",
    description: `"In The Hour Of Death" follows Eva on her way to her sister Ester’s funeral, as she is triggered by memories from her childhood that reveal why she left her beloved sick sister behind. Raised in isolation under strict rules and unwavering faith, Eva's beliefs are tested as her older sister Ester becomes ill and loses her faith in God. Eva is faced with deep fear as she contemplates the possibility of not reuniting with Ester in heaven when they die. Eva's journey unveils the complexities between doubt and devotion to faith. "In The Hour Of Death" delves into the fear of losing loved ones and the uncertainty of afterlife, illustrating how facing death can deepen our appreciation for life and reshape our beliefs.`,
    stilbilede: "/stilbillede/dødstime.webp",
  },
  {
    id: 3,
    video: "/videoer/smil.webm",
    title: "Smil Prinsesse",
    thumbnail: "/thumbnail/prinsesse.webp",
    url: "https://www.ekkofilm.dk/shortlist/film/smil-prinsesse/",
    kategoriOgDato: "Fiction • 2022",
    description:
      "Milena is training for the Danish boxing championships. A few days before an important match, her long-lost father suddenly returns home after ten years. He wants to be a part of the family again, and Milena's world is turned upside down.",
    stilbilede: "/stilbillede/prinsesse.webp",
  },
  {
    id: 2,
    video: "/videoer/rød-sol.webm",
    title: "Solen er så rød mor",
    thumbnail: "/thumbnail/rødsol.webp",
    url: "https://www.youtube.com/watch?v=PlfcZpQwqq4",
    kategoriOgDato: "Fiction • 2021",
    description:
      "Max and Mona, unable to have kids, adopt 8-year-old Noa. Their joy turns to terror when they realize Noa didn't move in with them alone.",
    stilbilede: "/stilbillede/rødsol.webp",
  },
];

const ProjectGallery = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeCard, setActiveCard] = useState<CardType | null>(null);

  const callSlideIn = (card?: CardType) => {
    if (card) {
      setActiveCard(card);
      setIsActive(true);
    } else {
      setTimeout(() => {
        setIsActive(false);
      }, 400); // Duration should match the animation exit duration
      setActiveCard(null);
    }
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
      <AnimatePresence>
        {isActive && activeCard && (
          <FilmInfo
            card={activeCard}
            isActive={isActive}
            callSlideIn={() => callSlideIn()}
          />
        )}
      </AnimatePresence>
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
    <button
      className="w-full mb-10"
      onClick={callSlideIn}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="transition-all cursor-pointer relative max-w-[1280px] h-[30vh] md:h-[40vh] flex mx-auto">
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
          <source src={card.video} type="video/webm" />
        </video>
        <div className="absolute bg-background inset-0 w-full h-full opacity-30"></div>
        <div className="w-full absolute bottom-0 p-8 uppercase font-semibold md:text-lg flex flex-col sm:flex-row justify-between text-white">
          <p>{card.title}</p>
          <p>{card.kategoriOgDato}</p>
        </div>
      </div>
    </button>
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
  // Handle disabling background scrolling when the drawer is active
  useEffect(() => {
    const handleBodyScroll = isActive ? "hidden" : "auto";
    document.body.style.overflow = handleBodyScroll;

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isActive]);

  return (
    <div className="fixed inset-0 z-20 overflow-hidden">
      {/* Slide Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.6, 0.01, 0.05, 0.95],
          type: "tween",
        }}
        className="absolute w-full h-full bg-background top-0 left-0"
        onClick={callSlideIn}
      ></motion.div>

      {/* Slide Card (Drawer) */}
      <motion.div
        className="fixed w-full md:w-2/3 lg:w-1/2 xl:w-[40%] 2xl:w-1/3 max-h-screen z-30 inset-0 bg-foreground text-background py-10 px-12 overflow-y-auto"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        transition={{
          duration: 0.4,
          ease: [0.6, 0.01, 0.05, 0.95],
          type: "tween",
        }}
        onWheel={(e) => e.stopPropagation()}
      >
        <motion.button
          onClick={callSlideIn}
          whileHover={{ rotate: 180, scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ rotate: 0, scale: 1 }}
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

        {/* Content Container */}
        <div className="flex flex-col gap-2 overflow-hidden">
          <div className="overflow-hidden">
            <p className="text-sm font-light mt-6">{card.kategoriOgDato}</p>
            <h3 className="font-semibold text-lg pb-2">{card.title}</h3>
            <div className="h-[2px] w-full bg-background mb-6"></div>
          </div>
          <div className="w-full h-[30vh] relative sm:block mb-5">
            <img
              src={card.stilbilede}
              alt="Project stills"
              className="object-cover absolute inset-0 w-full h-full"
            />
          </div>

          <div className="mb-4">
            <LinkRotate
              linkText="Experience the"
              linkTextTwo="work"
              linkTextThree=""
              linkRef={card.url}
            />
          </div>

          <p className="text-base overflow-auto no-scrollbar">
            {card.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectGallery;
