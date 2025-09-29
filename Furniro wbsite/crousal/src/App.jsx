import React from 'react'
import FirstCrousal from './Crousals/FirstCrousal'
import SecondCrousal from './Crousals/SecondCrousal'
import Carousel from './Crousals/GptCrousal'
import ComputerLabCarousel from './Crousals/DeepCarousal'
import SwiperCarousel from './Crousals/CrousalSwiper'

const App = () => {
     return (
          <div>
               {/* <FirstCrousal /> */}
               {/* <SecondCrousal /> */}
               {/* <Carousel /> */}
               {/* <ComputerLabCarousel /> */}
               <div className="flex items-center justify-center min-h-screen bg-[#e9ca9c]">
                    <SwiperCarousel />
               </div>
          </div>
     )
}

export default App
