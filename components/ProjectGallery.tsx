"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ProjectGallery = () => {
  return (
    <div className='max-w-[1280px] mx-auto my-44'>
      <h2 className='font-light uppercase text-lg w-full pb-10 pt-2'>
        Some of <span className='text-primaryaccent'>her</span> recent work
      </h2>
      <div>
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </div>
  );
};

const Card = ({ card }: { card: CardType }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.currentTime = 0; // Restart the video
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <div
      key={card.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='transition-all'
    >
      <Link
        target='_blank'
        rel='noopener noreferrer'
        href={card.url}
        className='relative max-w-[1280px] h-[45vh] flex mx-auto mb-10'
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={card.thumbnail}
            alt='Project thumbnail'
            fill
            className='rounded-xl object-cover'
          />
        </motion.div>

        <video
          ref={videoRef}
          muted
          loop
          className='object-cover w-full rounded-xl'
        >
          <source src={card.video} type='video/mp4' />
        </video>

        <div className='absolute bg-background inset-0 w-full h-full opacity-30'></div>

        <div className='w-full absolute bottom-0 p-8 uppercase font-semibold text-lg flex justify-between text-white'>
          <p>{card.title}</p>
          <p>{card.kategoriOgDato}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectGallery;

type CardType = {
  url: string;
  title: string;
  kategoriOgDato: string;
  thumbnail: string;
  id: number;
  video: string;
};

const cards: CardType[] = [
  {
    video: "/videoer/bg-video.mp4",
    title: "Smil Prinsesse",
    thumbnail: "/thumbnail/prinsesse.png",
    id: 1,
    url: "https://www.ekkofilm.dk/shortlist/film/smil-prinsesse/",
    kategoriOgDato: "Fiction • 2022",
  },
  {
    video: "/videoer/bg-video.mp4",
    title: "Solen er så rød mor",
    thumbnail: "/thumbnail/rødsol.png",
    id: 1,
    url: "https://vimeo.com/874955781/60a956cf5b",
    kategoriOgDato: "Fiction • 2023",
  },
  {
    video: "/videoer/bg-video.mp4",
    title: "I Vor Dødstime",
    thumbnail: "/thumbnail/dødstime.png",
    id: 1,
    url: "https://www.ekkofilm.dk/shortlist/film/smil-prinsesse/",
    kategoriOgDato: "Fiction • Coming Soon",
  },
];
