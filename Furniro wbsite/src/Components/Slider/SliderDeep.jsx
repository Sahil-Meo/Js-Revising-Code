import React, { useState, useEffect } from 'react';

const SliderDeep = () => {
     const slides = [
          {
               id: 1,
               image: '/img/categories/dining.png',
               bedrooms: '1 - Bed Room',
               title: 'Inner Peace'
          },
          {
               id: 2,
               image: '/img/categories/dining.png',
               bedrooms: '2 - Bed Room',
               title: 'Inner Peace'
          },
          {
               id: 3,
               image: '/img/categories/dining.png',
               bedrooms: '3 - Bed Room',
               title: 'Inner Peace'
          },
          {
               id: 4,
               image: '/img/categories/dining.png',
               bedrooms: '4 - Bed Room',
               title: 'Inner Peace'
          }
     ];

     const [currentSlide, setCurrentSlide] = useState(0);
     const [autoPlay, setAutoPlay] = useState(true);

     const nextSlide = () => {
          setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
     };

     const prevSlide = () => {
          setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
     };

     const goToSlide = (index) => {
          setCurrentSlide(index);
     };

     useEffect(() => {
          let interval;
          if (autoPlay) {
               interval = setInterval(() => {
                    nextSlide();
               }, 2000);
          }
          return () => clearInterval(interval);
     }, [currentSlide, autoPlay]);

     return (
          <div className="lg:col-span-2 relative">
               <div className="relative overflow-hidden w-full max-h-[80vh]">
                    <div
                         className="flex transition-transform duration-300 ease-in-out"
                         style={{ transform: `translateX(-${currentSlide * 25}%)` }}
                    >
                         {slides.map((slide, index) => (
                              <div
                                   key={slide.id}
                                   className="max-w-sm flex-shrink-0 relative"
                              >
                                   <img
                                        loading="lazy"
                                        className="w-full h-auto object-cover"
                                        src={slide.image}
                                        alt={`slide ${index + 1}`}
                                   />
                                   <div className="slide-about absolute flex bottom-20 items-end left-6">
                                        <div className="bg-[#FFFFFFB8] z-10 gap-2 p-4 flex flex-col backdrop-blur-sm">
                                             <span className="text-[#616161] font-medium">{slide.bedrooms}</span>
                                             <span className="text-[#3A3A3A] font-semibold text-3xl">{slide.title}</span>
                                        </div>
                                        <button className="-translate-x-28 z-0 bg-ochre text-white text-2xl p-3">→</button>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>

               {/* Navigation arrows */}
               <div className="flex absolute lg:-left-5 top-1/2 justify-between w-full text-ochre text-sm">
                    <button
                         onClick={prevSlide}
                         className="bg-white rounded-full h-10 w-10 flex justify-center items-center shadow-lg hover:bg-neutral-100 duration-300"
                         aria-label="Previous slide"
                    >
                         <img className="rotate-180" src="/assets/slider-arrow-18375029.svg" alt="arrow" />
                    </button>
                    <button
                         onClick={nextSlide}
                         className="bg-white rounded-full h-10 w-10 flex justify-center items-center shadow-lg hover:bg-neutral-100 duration-300"
                         aria-label="Next slide"
                    >
                         <img src="/assets/slider-arrow-18375029.svg" alt="arrow" />
                    </button>
               </div>

               {/* Dots indicator */}
               <div className="flex justify-center mt-4">
                    {slides.map((_, index) => (
                         <button
                              key={index}
                              onClick={() => goToSlide(index)}
                              className={`mx-1 rounded-full w-3 h-3 ${currentSlide === index ? 'bg-ochre' : 'bg-gray-300'}`}
                              aria-label={`Go to slide ${index + 1}`}
                         />
                    ))}
               </div>
          </div>
     );
};

export default SliderDeep;