import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperCarousel = () => {
     const [activeIndex, setActiveIndex] = useState(0);
     const slides = [
          { id: 1, imgSrc: '/first_image.jpeg', alt: 'Slide 1' },
          { id: 2, imgSrc: '/second_image.jpg', alt: 'Slide 2' },
          { id: 3, imgSrc: '/third_image.jpg', alt: 'Slide 3' },
          { id: 4, imgSrc: '/fourth_image.jpg', alt: 'Slide 4' },
          { id: 5, imgSrc: '/fifth_image.jpg', alt: 'Slide 5' },
          { id: 6, imgSrc: '/sixth_image.jpg', alt: 'Slide 6' }
     ];

     return (
          <div className="w-full max-w-4xl mx-auto">
               <h1> </h1>
               <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    centeredSlides={false}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                         delay: 5000,
                         disableOnInteraction: false
                    }}
                    onSlideChange={(swiper) => {
                         setActiveIndex(swiper.realIndex);
                    }}
               >
                    <div className="fle items-start ">
                         {slides.map((slide, i) => (
                              <SwiperSlide key={slide.id}>
                                   <div className="flex items-start justify-center h-full relative">
                                        <img
                                             src={slide.imgSrc}
                                             alt={slide.alt}
                                             className={`w-full object-cover rounded-xl transition-all duration-500 ${activeIndex === i ? 'h-96' : 'h-64'
                                                  }`}
                                        />
                                        <button className={`absolute bottom-4 right-4 bg-white text-black p-2 rounded ${activeIndex === i ? 'opacity-90' : 'opacity-0'} transition-opacity duration-300 delay-100`}>Learn More</button>
                                   </div>
                              </SwiperSlide>
                         ))}
                    </div>
               </Swiper>
          </div>
     );
};

export default SwiperCarousel;
