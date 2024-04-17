"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    video: "/videoer/echo.mp4",
    title: "ECHO prøver naturterapi",
    thumbnail: "/thumbnail/echo.png",
    url: "https://www.youtube.com/watch?v=B1F20-hF0X8",
    kategoriOgDato: "Non-fiction • 2024",
    description:
      "The first episode of a documentary series, that explores nature therapy as an alternative treatment for young people with mental health issues.",
    stilbilede: "/stilbillede/natur.png",
  },
  {
    id: 5,
    video: "/videoer/medicin.mp4",
    title: "Fremtidens medicin",
    thumbnail: "/thumbnail/medicin.png",
    url: "https://www.youtube.com/watch?v=G9GXI_YcdvY",
    kategoriOgDato: "Non-fiction • 2023",
    description:
      "Natalie is a healer, who holds space for others to release their trauma. When cancer confronted her, she changed her life and redefined her purpose. She aspires to do something impactful with the life she has been given. Can spirituality become the medicine of the future?",
    stilbilede: "/stilbillede/medicin.png",
  },
  {
    id: 6,
    video: "/videoer/kvindekrop.mp4",
    title: "Fanget i min kvindekrop",
    thumbnail: "/thumbnail/kvindekrop.png",
    url: "https://www.youtube.com/watch?v=ICK0Y6gGdQg ",
    kategoriOgDato: "Non-fiction • 2023",
    description:
      "Ditte decided to be sterilized, driven by her lifelong certainty of not wanting children. She articulates feeling confined by societal expectations but finds liberation in reclaiming control over her body and destiny.",
    stilbilede: "/stilbillede/kvindekrop.png",
  },
  {
    id: 1,
    video: "/videoer/bg-video.mp4",
    title: "I Vor Dødstime",
    thumbnail: "/thumbnail/dødstime.png",
    url: "https://www.youtube.com/watch?v=isBMCkc_AzY",
    kategoriOgDato: "Fiction • Coming Soon",
    description: `"In The Hour Of Death" follows Eva on her way to her sister Ester’s funeral, as she is triggered by memories from her childhood that reveal why she left her beloved sick sister behind. Raised in isolation under strict rules and unwavering faith, Eva's beliefs are tested as her older sister Ester becomes ill and loses her faith in God. Eva is faced with deep fear as she contemplates the possibility of not reuniting with Ester in heaven when they die. Eva's journey unveils the complexities between doubt and devotion to faith. "In The Hour Of Death" delves into the fear of losing loved ones and the uncertainty of afterlife, illustrating how facing death can deepen our appreciation for life and reshape our beliefs.`,
    stilbilede: "/stilbillede/dødstime.png",
  },
  {
    id: 3,
    video: "/videoer/smil.mp4",
    title: "Smil Prinsesse",
    thumbnail: "/thumbnail/prinsesse.png",
    url: "https://www.ekkofilm.dk/shortlist/film/smil-prinsesse/",
    kategoriOgDato: "Fiction • 2022",
    description:
      "Milena is training for the Danish boxing championships. A few days before an important match, her long-lost father suddenly returns home after ten years. He wants to be a part of the family again, and Milena's world is turned upside down.",
    stilbilede: "/stilbillede/prinsesse.png",
  },
  {
    id: 2,
    video: "/videoer/rød-sol.mp4",
    title: "Solen er så rød mor",
    thumbnail: "/thumbnail/rødsol.png",
    url: "https://www.youtube.com/watch?v=PlfcZpQwqq4",
    kategoriOgDato: "Fiction • 2021",
    description:
      "Max and Mona, unable to have kids, adopt 8-year-old Noa. Their joy turns to terror when they realize Noa didn't move in with them alone.",
    stilbilede: "/stilbillede/rødsol.png",
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
    <div className="fixed inset-0 z-20">
      {/* slide overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.6, 0.01, 0.05, 0.95],
          type: "tween",
        }}
        className="absolute w-full h-full bg-background top-0 left-0"
      ></motion.div>

      {/* slide card */}
      <motion.div
        className="fixed w-full md:w-2/3 lg:w-1/2 xl:w-[40%] 2xl:w-1/3 h-screen z-30 inset-0 bg-foreground text-background py-10 px-12 overflow-hidden"
        initial={{ x: "-100%" }}
        animate={isActive ? { x: "0%" } : { x: "-100%" }}
        transition={{
          duration: 0.4,
          ease: [0.6, 0.01, 0.05, 0.95],
          type: "tween",
        }}
      >
        {/* close button */}
        <motion.button
          onClick={callSlideIn}
          whileHover={{ rotate: 180, scale: 1.2 }}
          whileTap={{ rotate: 0, scale: 1 }}
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

        <div className="flex flex-col gap-6 md:gap-0">
          <div>
            <p className="text-sm font-light mt-6">{card.kategoriOgDato}</p>
            <h3 className="font-semibold text-lg pb-2">{card.title}</h3>
            <div className="h-[2px] w-full bg-background mb-6"></div>
          </div>

          <div className="w-full h-[30vh] relative hidden sm:block md:mb-6">
            <img
              src={card.stilbilede}
              alt="Project stills"
              className="object-cover absolute inset-0 w-full h-full"
            />
          </div>

          <p className="text-base">{card.description}</p>

          <div className="flex justify-center">
            <LinkRotate
              linkText="Experience the"
              linkTextTwo="work"
              linkTextThree=""
              linkRef={card.url}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectGallery;
