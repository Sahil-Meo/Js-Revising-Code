import React, { useState } from "react";

const images = [
  "/Img1.jpg",
  "/Img2.jpg",
  "/Img3.jpg",
  "/Img4.jpg",
  "/Img5.jpg",
  "/Img6.jpg"
];

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Get 3 visible images based on current index
  const getVisibleImages = () => {
    return images.slice(startIndex, startIndex + 3).length === 3
      ? images.slice(startIndex, startIndex + 3)
      : [...images.slice(startIndex), ...images.slice(0, 3 - (images.length - startIndex))];
  };

  const handleNext = () => {
    const newStart = (startIndex + 1) % images.length;
    setStartIndex(newStart);
    setActiveIndex(newStart); // set the first visible image as active
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="w-full overflow-hidden">
      <div className="relative flex items-center justify-center">
        {/* Carousel Container */}
        <div className="flex gap-4 transition-all duration-500 ease-in-out max-w-4xl mx-auto">
          {visibleImages.map((img, i) => {
            const globalIndex = (startIndex + i) % images.length;
            const isActive = globalIndex === activeIndex;

            return (
              <div
                key={globalIndex}
                className={`rounded-lg overflow-hidden shadow-lg bg-cover bg-center bg-no-repeat
                transition-all ease-in-out duration-500 
                ${isActive ? "w-[40vh] h-[50vh]" : "w-[40vh] h-[40vh]"}`}
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded hover:bg-black/70 transition"
        >
          ➡
        </button>
      </div>
    </div>
  );
};

export default Carousel;
