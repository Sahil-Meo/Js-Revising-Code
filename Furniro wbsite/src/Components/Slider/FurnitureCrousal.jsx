import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

const FurnitureCrousal = () => {
     const [activeIndex, setActiveIndex] = useState(0);
     const navigate = useNavigate();
     const slides = [
          { id: 1, imgSrc: '/first_image.jpeg', alt: 'Slide 1' },
          { id: 2, imgSrc: '/second_image.jpg', alt: 'Slide 2' },
          { id: 3, imgSrc: '/third_image.jpg', alt: 'Slide 3' },
          { id: 4, imgSrc: '/fourth_image.jpg', alt: 'Slide 4' },
          { id: 5, imgSrc: '/fifth_image.jpg', alt: 'Slide 5' },
          { id: 6, imgSrc: '/sixth_image.jpg', alt: 'Slide 6' }
     ];

     const handleSliderCardClick = () => {
          navigate('/shop')
     }

     return (
          <div className="w-full max-w-4xl mx-auto">
               <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
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
                    <div className="fle items-start justify-start">
                         {slides.map((slide, i) => (
                              <SwiperSlide key={slide.id}>
                                   <div className="flex items-start justify-center h-full relative">
                                        <img
                                             src={slide.imgSrc}
                                             alt={slide.alt}
                                             className={`w-full object-cover rounded-sm transition-all duration-500 ${activeIndex === i ? 'h-[60vh] sm:h-[80vh]' : 'h-[40vh] sm:h-[60vh]'
                                                  }`}
                                        />
                                        <div className={`absolute items-end bottom-10 left-10 text-black p-2 
                                             rounded ${activeIndex === i ? 'flex' : ' hidden'} transition-opacity duration-300 delay-100`}>
                                             <div className="flex flex-col items-start gap-2 p-5 bg-blue-400/10 backdrop-blur-sm ">
                                                  <span className='text-gray-700'>{slide.id}-Bed Room</span>
                                                  <p className='text-2xl font-medium text-black'>Inner Peace</p>
                                             </div>
                                             <button onClick={handleSliderCardClick} className=' bg-ochre w-12 h-12 flex items-center justify-center text-white'>
                                                  <i className="fas fa-chevron-right text-xl"></i>
                                             </button>

                                        </div>
                                   </div>
                              </SwiperSlide>
                         ))}
                    </div>
               </Swiper>
          </div>
     );
};

export default FurnitureCrousal;
