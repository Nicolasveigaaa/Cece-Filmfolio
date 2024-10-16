"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isThereOnlyOneImage, setIsThereOnlyOneImage] = useState(false);

  // Handlers for Next and Prev buttons
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const onlyOneImageHandler = () => {
    if (images.length === 1) {
      setIsThereOnlyOneImage(true);
    } else {
      setIsThereOnlyOneImage(false);
    }
  };

  // Call onlyOneImageHandler when the component mounts or when images change
  useEffect(() => {
    onlyOneImageHandler();
  });

  return (
    <div className={`${isThereOnlyOneImage ? "mb-5" : ""}`}>
      {/* Image Display */}
      <div className='overflow-x-hidden flex gap-4 relative h-[200px] md:h-[35vh] w-full'>
        <div
          className='flex w-full'
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Still image ${index + 1}`}
              className='object-cover w-full h-auto'
              style={{ flexShrink: 0, minWidth: "100%" }}
            />
          ))}
        </div>
      </div>

      {/* Image Counter */}
      <div
        className={`flex justify-between items-center mt-2 mb-6 ${
          isThereOnlyOneImage ? "hidden" : ""
        }`}
      >
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label='Previous'
          className={`bg-background p-2.5 rounded-full disabled:opacity-50 transition-all group ${
            currentIndex !== 0 ? "hover:bg-primaryaccent" : ""
          }`}
        >
          <ArrowLeft
            className={`w-5 h-5 text-white  ${
              currentIndex !== 0 ? "group-hover:text-background" : ""
            }`}
          />
        </button>

        <span>
          {currentIndex + 1}/{images.length}
        </span>

        <button
          onClick={handleNext}
          aria-label='Next'
          disabled={currentIndex === images.length - 1}
          className={`bg-background p-2.5 rounded-full disabled:opacity-50 transition-all group ${
            currentIndex === images.length - 1 ? "" : "hover:bg-primaryaccent"
          }`}
        >
          <ArrowRight
            className={`w-5 h-5 text-white  ${
              currentIndex === images.length - 1
                ? ""
                : "group-hover:text-background"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
