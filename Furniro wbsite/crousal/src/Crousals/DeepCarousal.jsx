import { useState, useEffect, useRef } from 'react';

const ComputerLabCarousel = () => {
     // Array of AI computer lab images
     const labImages = [
          '/Img1.jpg',
          '/Img2.jpg',
          '/Img3.jpg',
          '/Img4.jpg',
          '/Img5.jpg',
          '/Img6.jpg'
     ];

     const [currentIndex, setCurrentIndex] = useState(0);
     const [isAnimating, setIsAnimating] = useState(false);
     const carouselRef = useRef(null);

     // Create infinite loop by duplicating the array
     const items = [...labImages, ...labImages, ...labImages];

     const handleNext = () => {
          if (isAnimating) return;
          setIsAnimating(true);
          setCurrentIndex(prev => (prev + 1) % labImages.length);

          setTimeout(() => {
               setIsAnimating(false);
          }, 500); // Match this with your transition duration
     };

     const handlePrev = () => {
          if (isAnimating) return;
          setIsAnimating(true);
          setCurrentIndex(prev => (prev - 1 + labImages.length) % labImages.length);

          setTimeout(() => {
               setIsAnimating(false);
          }, 500);
     };

     // Auto-rotate every 5 seconds
     useEffect(() => {
          const interval = setInterval(() => {
               handleNext();
          }, 5000);

          return () => clearInterval(interval);
     }, []);

     // Calculate which cards to display
     const getVisibleCards = () => {
          const visibleCards = [];
          for (let i = 0; i < 3; i++) {
               const index = (currentIndex + i) % labImages.length;
               visibleCards.push({
                    src: labImages[index],
                    isActive: i === 0 // First card is active
               });
          }
          return visibleCards;
     };

     const visibleCards = getVisibleCards();

     return (
          <div className="relative w-full max-w-6xl mx-auto py-12 px-4">
               <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">AI Computer Labs</h2>

               <div className="relative overflow-hidden h-[40vh]">
                    <div
                         ref={carouselRef}
                         className="flex items-center h-full transition-transform duration-500 ease-in-out"
                         style={{
                              transform: `translateX(-${currentIndex * (100 / 3)}%)`
                         }}
                    >
                         {items.map((image, index) => {
                              // Determine if this card should be visible
                              const isVisible = index >= currentIndex && index < currentIndex + 3;
                              const isActive = index === currentIndex;

                              return (
                                   <div
                                        key={`${index}-${image}`}
                                        className={`absolute h-full transition-all duration-500 ease-in-out ${isActive ? 'w-[50vh] z-10' : 'w-[30vh] z-0'
                                             } ${isVisible ? 'opacity-100' : 'opacity-0'
                                             }`}
                                        style={{
                                             left: `${((index - currentIndex) * 30) + (isActive ? 0 : 50)}vh`,
                                        }}
                                   >
                                        <div className={`h-full rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${isActive ? 'ring-4 ring-blue-500' : 'ring-1 ring-gray-200'
                                             }`}>
                                             <img
                                                  src={image}
                                                  alt={`AI Computer Lab ${index + 1}`}
                                                  className="w-full h-full object-cover"
                                             />
                                        </div>
                                   </div>
                              );
                         })}
                    </div>
               </div>

               {/* Navigation arrows */}
               <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-20"
                    aria-label="Previous"
               >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
               </button>

               <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-20"
                    aria-label="Next"
               >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
               </button>

               {/* Indicators */}
               <div className="flex justify-center mt-6 space-x-2">
                    {labImages.map((_, index) => (
                         <button
                              key={index}
                              onClick={() => {
                                   if (!isAnimating) {
                                        setIsAnimating(true);
                                        setCurrentIndex(index);
                                        setTimeout(() => setIsAnimating(false), 500);
                                   }
                              }}
                              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                                   }`}
                              aria-label={`Go to slide ${index + 1}`}
                         />
                    ))}
               </div>
          </div>
     );
};

export default ComputerLabCarousel;