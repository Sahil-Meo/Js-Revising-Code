import React, { useState } from 'react';

const slides = [
  {
    img: '/img/categories/dining.png',
    title: '1 - Bed Room',
    subtitle: 'Inner Peace',
  },
  {
    img: '/img/categories/dining.png',
    title: '2 - Bed Room',
    subtitle: 'Inner Peace',
  },
  {
    img: '/img/categories/dining.png',
    title: '3 - Bed Room',
    subtitle: 'Inner Peace',
  },
  {
    img: '/img/categories/dining.png',
    title: '4 - Bed Room',
    subtitle: 'Inner Peace',
  },
];

const SliderWith = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden lg:col-span-2">
      {/* Slides */}
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full relative">
            <img
              src={slide.img}
              alt="slide"
              className="object-cover w-full h-[400px] transition-transform duration-300 ease-in-out"
              loading="lazy"
            />
            <div className="slide-about absolute flex bottom-20 items-end left-6">
              <div className="bg-[#FFFFFFB8] z-10 gap-2 p-4 flex flex-col backdrop-blur-sm">
                <span className="text-[#616161] font-medium">{slide.title}</span>
                <span className="text-[#3A3A3A] font-semibold text-3xl">{slide.subtitle}</span>
              </div>
              <button className="-translate-x-28 z-0 bg-ochre text-white text-2xl p-3">→</button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="bg-white rounded-full h-10 w-10 flex justify-center items-center shadow-lg hover:bg-neutral-100 duration-300"
        >
          <img className="rotate-180" src="/assets/slider-arrow-18375029.svg" alt="Prev" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white rounded-full h-10 w-10 flex justify-center items-center shadow-lg hover:bg-neutral-100 duration-300"
        >
          <img src="/assets/slider-arrow-18375029.svg" alt="Next" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full cursor-pointer border-2 ${currentIndex === index ? 'bg-ochre border-ochre' : 'border-gray-400'
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderWith;
