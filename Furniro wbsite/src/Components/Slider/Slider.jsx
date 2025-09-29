import React from 'react'



const Slider = () => {
     return (
          <div class="lg:col-span-2 relative">
               <div className="relative overflow-hidden max-w-2xl">
                    <div className="flex">
                         <img src="" alt="" className='w-full max-h-[60vh]' />
                    </div>
                    <div className="flex max-h-[50vh]">
                         {Images?.map((img) => (
                              <img src={img.src} alt="" />
                         ))}
                    </div>
               </div>
          </div>
     )
}

export default Slider
