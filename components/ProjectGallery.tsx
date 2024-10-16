"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LinkRotate from "./ui/LinkRotate";
import ImageCarousel from "./ui/ImageCarousel";

type CardType = {
  url: string;
  title: string;
  kategoriOgDato: string;
  thumbnail: string;
  video: string;
  description: string;
  stilbileder: string[];
  noLink?: boolean;
  noVideo: boolean;
};

const cards: CardType[] = [
  {
    video: "/videoer/bg-video.webm",
    title: "Between Waves",
    thumbnail: "/stilbillede/between-waves/pic3.png",
    url: "https://www.youtube.com/watch?v=3SLHMSmBB_w",
    kategoriOgDato: "Fiction • Coming Soon, 2025",
    description: `30-year-old Leila cares for her wheelchair-bound father while longing for the lives of those around her. How far will one go to escape loneliness?`,
    stilbileder: [
      "/stilbillede/between-waves/pic1.png",
      "/stilbillede/between-waves/pic2.png",
      "/stilbillede/between-waves/pic3.png",
      "/stilbillede/between-waves/pic4.png",
      "/stilbillede/between-waves/pic5.png",
      "/stilbillede/between-waves/pic6.png",
      "/stilbillede/between-waves/pic7.png",
    ],
    noLink: true,
    noVideo: true,
  },
  {
    video: "/videoer/bg-video.webm",
    title: "I Vor Dødstime",
    thumbnail: "/thumbnail/dødstime.webp",
    url: "https://www.youtube.com/watch?v=3SLHMSmBB_w",
    kategoriOgDato: "Fiction • 2024",
    description: `In The Hour Of Death" follows Eva on her way to her sister Ester’s funeral, as she is triggered by memories from her childhood that reveal why she left her beloved sick sister behind. Raised in isolation under strict rules and unwavering faith, Eva's beliefs are tested as her older sister Ester becomes ill and loses her faith in God. Eva is faced with deep fear as she contemplates the possibility of not reuniting with Ester in heaven when they die. Eva's journey unveils the complexities between doubt and devotion to faith. "In The Hour Of Death" delves into the fear of losing loved ones and the uncertainty of afterlife, illustrating how facing death can deepen our appreciation for life and reshape our beliefs.`,
    stilbileder: [
      "/stilbillede/dodstime/pic1.png",
      "/stilbillede/dodstime/pic2.png",
      "/stilbillede/dodstime/pic3.png",
      "/stilbillede/dodstime/pic4.png",
      "/stilbillede/dodstime/pic5.png",
      "/stilbillede/dodstime/pic6.png",
    ],
    noVideo: false,
  },
  {
    video: "/videoer/smil.webm",
    title: "Smil Prinsesse",
    thumbnail: "/thumbnail/prinsesse.webp",
    url: "https://www.ekkofilm.dk/shortlist/film/smil-prinsesse/",
    kategoriOgDato: "Fiction • 2022",
    description:
      "Milena is training for the Danish boxing championships. A few days before an important match, her long-lost father suddenly returns home after ten years. He wants to be a part of the family again, and Milena's world is turned upside down.",
    stilbileder: [
      "/stilbillede/smil-prinsesse/pic1.png",
      "/stilbillede/smil-prinsesse/pic2.png",
      "/stilbillede/smil-prinsesse/pic3.png",
      "/stilbillede/smil-prinsesse/pic4.png",
      "/stilbillede/smil-prinsesse/pic5.png",
      "/stilbillede/smil-prinsesse/pic6.png",
    ],
    noVideo: false,
  },
  {
    video: "/videoer/rød-sol.webm",
    title: "Solen er så rød mor",
    thumbnail: "/thumbnail/rødsol.webp",
    url: "https://www.youtube.com/watch?v=PlfcZpQwqq4",
    kategoriOgDato: "Fiction • 2021",
    description:
      "Max and Mona, unable to have kids, adopt 8-year-old Noa. Their joy turns to terror when they realize Noa didn't move in with them alone.",
    stilbileder: [
      "/stilbillede/solen-rod/pic1.png",
      "/stilbillede/solen-rod/pic2.png",
      "/stilbillede/solen-rod/pic3.png",
      "/stilbillede/solen-rod/pic4.png",
      "/stilbillede/solen-rod/pic5.png",
      "/stilbillede/solen-rod/pic6.png",
    ],
    noVideo: false,
  },
  {
    video: "/videoer/echo.webm",
    title: "ECHO prøver naturterapi",
    thumbnail: "/thumbnail/echo.webp",
    url: "https://www.youtube.com/watch?v=B1F20-hF0X8",
    kategoriOgDato: "Non-fiction • 2024",
    description:
      "The first episode of a documentary series, that explores nature therapy as an alternative treatment for young people with mental health issues.",
    stilbileder: [
      "/stilbillede/natur-tera/pic1.png",
      "/stilbillede/natur-tera/pic2.png",
      "/stilbillede/natur-tera/pic3.png",
      "/stilbillede/natur-tera/pic4.png",
      "/stilbillede/natur-tera/pic5.png",
      "/stilbillede/natur-tera/pic6.png",
    ],
    noVideo: false,
  },
  {
    video: "/videoer/medicin.webm",
    title: "Fremtidens medicin",
    thumbnail: "/thumbnail/medicin.webp",
    url: "https://www.youtube.com/watch?v=G9GXI_YcdvY",
    kategoriOgDato: "Non-fiction • 2023",
    description:
      "Natalie is a healer, who holds space for others to release their trauma. When cancer confronted her, she changed her life and redefined her purpose. She aspires to do something impactful with the life she has been given. Can spirituality become the medicine of the future?",
    stilbileder: [
      "/stilbillede/frem-med/pic1.png",
      "/stilbillede/frem-med/pic2.png",
      "/stilbillede/frem-med/pic3.png",
      "/stilbillede/frem-med/pic4.png",
      "/stilbillede/frem-med/pic5.png",
      "/stilbillede/frem-med/pic6.png",
    ],
    noVideo: false,
  },
  {
    video: "/videoer/kvindekrop.webm",
    title: "Fanget i min kvindekrop",
    thumbnail: "/thumbnail/kvindekrop.webp",
    url: "https://www.youtube.com/watch?v=ICK0Y6gGdQg ",
    kategoriOgDato: "Non-fiction • 2023",
    description:
      "Ditte decided to be sterilized, driven by her lifelong certainty of not wanting children. She articulates feeling confined by societal expectations but finds liberation in reclaiming control over her body and destiny.",
    stilbileder: [
      "/stilbillede/ditte/pic1.png",
      "/stilbillede/ditte/pic2.png",
      "/stilbillede/ditte/pic3.png",
      "/stilbillede/ditte/pic4.png",
    ],
    noVideo: false,
  },
  {
    video: "/videoer/afskearm.webm",
    title: "Afskærmet",
    thumbnail: "/stilbillede/afskearm/pic7.png",
    url: "https://youtu.be/1Wc7IaYG2ps",
    kategoriOgDato: "Non fiction, 2022",
    description: `Afskærmet is a portrait of Balder, who chooses to live outside of society. Screens don’t interest him. He would rather draw what he sees around him and feels within. He is an outsider, connected to the things most people no longer notice.`,
    stilbileder: [
      "/stilbillede/afskearm/pic1.png",
      "/stilbillede/afskearm/pic2.png",
      "/stilbillede/afskearm/pic3.png",
      "/stilbillede/afskearm/pic4.png",
      "/stilbillede/afskearm/pic5.png",
      "/stilbillede/afskearm/pic6.png",
      "/stilbillede/afskearm/pic7.png",
      "/stilbillede/afskearm/pic8.png",
    ],
    noVideo: false,
  },
  {
    video: "/videoer/bg-video.webm",
    title: "Plugin Heat Club",
    thumbnail: "/stilbillede/plugin/pic4.png",
    url: "https://www.youtube.com/watch?v=_E_5b-nkq4o",
    kategoriOgDato: "Commerical, 2023",
    description: `A short commercial for Plugin Heat Club. Linnea shares her inspiring journey from a life filled with stress and unhappiness to discovering joy and purpose through Plugin.`,
    stilbileder: [
      "/stilbillede/plugin/pic1.png",
      "/stilbillede/plugin/pic2.png",
      "/stilbillede/plugin/pic3.png",
      "/stilbillede/plugin/pic4.png",
    ],
    noVideo: true,
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
    <div className='max-w-[1280px] mt-24 mb-20 lg:my-44 w-10/12 mx-auto overflow-hidden'>
      <h2 className='font-light uppercase text-lg w-full pb-10 pt-2'>
        Some of my <span className='text-primaryaccent'>recent work</span>
      </h2>
      <div>
        {cards.map((card, index) => (
          <Card key={index} card={card} callSlideIn={() => callSlideIn(card)} />
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
      className='w-full mb-10'
      onClick={callSlideIn}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='transition-all cursor-pointer relative max-w-[1280px] h-[30vh] md:h-[40vh] flex mx-auto'>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={card.thumbnail}
            alt='Project thumbnail'
            className='object-cover rounded-xl absolute inset-0 w-full h-full'
          />
        </motion.div>
        <video
          ref={videoRef}
          muted
          loop
          className={`object-cover w-full rounded-xl ${
            card.noVideo ? "hidden" : "block"
          }`}
        >
          <source src={card.video} type='video/webm' />
        </video>
        <img
          src={card.stilbileder[1]}
          alt='stillbillede'
          className={`object-cover w-full rounded-xl ${
            card.noVideo ? "block" : "hidden"
          }`}
        />
        <div className='absolute bg-background inset-0 w-full h-full opacity-30'></div>
        <div className='w-full absolute bottom-0 p-8 uppercase font-semibold md:text-lg flex flex-col sm:flex-row justify-between text-white'>
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
    <div className='fixed inset-0 z-20 overflow-hidden'>
      {/* Slide Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.6, 0.01, 0.05, 0.95],
          type: "tween",
        }}
        className='absolute w-full h-full bg-background top-0 left-0'
        onClick={callSlideIn}
      ></motion.div>

      {/* Slide Card (Drawer) */}
      <motion.div
        className='fixed w-full md:w-2/3 lg:w-1/2 xl:w-[40%] 2xl:w-1/3 max-h-screen z-30 inset-0 bg-foreground text-background px-6 py-10 md:px-12 overflow-y-auto'
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
          className='absolute top-8 right-12 inline-block cursor-pointer p-2'
          style={{ width: "30px", height: "30px" }}
        >
          <div
            className='absolute h-[1px] bg-background w-7'
            style={{
              transform: "rotate(45deg)",
              left: "50%",
              top: "50%",
              transformOrigin: "center",
              marginLeft: "-14px",
            }}
          ></div>
          <div
            className='absolute h-[1px] bg-background w-7'
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
        <div className='flex flex-col gap-2 overflow-hidden'>
          <div className='overflow-hidden'>
            <p className='text-sm font-light mt-6'>{card.kategoriOgDato}</p>
            <h3 className='font-semibold text-lg pb-2'>{card.title}</h3>
            <div className='h-[2px] w-full bg-background mb-6'></div>
          </div>

          <ImageCarousel images={card.stilbileder} />

          <div className={`mb-4 ${card.noLink ? "hidden" : "block"}`}>
            <LinkRotate
              linkText='Experience the'
              linkTextTwo='work'
              linkTextThree=''
              linkRef={card.url}
            />
          </div>

          <p className='text-base overflow-auto no-scrollbar'>
            {card.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectGallery;
