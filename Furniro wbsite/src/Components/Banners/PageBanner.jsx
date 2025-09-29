import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const PageBanner = ({ lable }) => {
     return (
          <div
               className="w-full max-h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center  "
               style={{ backgroundImage: 'url("/background.jpg")' }}
          >
               <div className="flex flex-col items-center gap-2 sm:gap-4 antialiased backdrop-blur-[6px] w-full p-5 md:p-20">
                    <img src="/Icon.png" alt="Icon" className='w-14' />
                    <h1 className='antialiased text-3xl sm:text-4xl md:text-5xl font-medium'>{lable}</h1>
                    <div className="flex items-center gap-0 sm:gap-1 md:gap-2 text-base sm:text-lg md:text-xl text-primary  ">
                         <h2 className='font-medium'><Link to="/">Home</Link></h2> <ChevronRight className='w-6 h-6 font-bold' /> <span>{lable}</span>
                    </div>
               </div>

          </div>
     )
}

export default PageBanner
