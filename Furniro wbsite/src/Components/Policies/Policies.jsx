import React from 'react'
import PolicyItem from './PolicyItem'
import { CheckCircleIcon, HeadsetIcon, LucideHandCoins, TrophyIcon } from 'lucide-react'

const Policies = () => {
     return (
          <div className="bg-[#FAF3EA] gap-10 lg:gap-2 p-8 lg:px-12 lg:py-20 flex flex-col md:flex-row">
               <div className='flex items-center gap-4 md:gap-6'>
                    <span className=''> <TrophyIcon size={50} /> </span>
                    <div className="flex flex-col items-start">
                         <h4 className='text-xl text-primary font-semibold leading-tight cursor-pointer '>High Quality</h4>
                         <p className="text-base text-secondary font-normal leading-tight">Crafted from top materials</p>
                    </div>
               </div>
               <div className='flex items-center gap-4 md:gap-6'>
                    <span className=''> <CheckCircleIcon size={50} /> </span>
                    <div className="flex flex-col items-start">
                         <h4 className='text-xl text-primary font-semibold leading-tight cursor-pointer'>Warranty Protection</h4>
                         <p className="text-base text-secondary font-normal leading-tight">Over 2 year</p>
                    </div>
               </div>
               <div className='flex items-center gap-4 md:gap-6'>
                    <span className=''> <LucideHandCoins size={50} /> </span>
                    <div className="flex flex-col items-start">
                         <h4 className='text-xl text-primary font-semibold leading-tight  cursor-pointer'>Free Shipping</h4>
                         <p className="text-base text-secondary font-normal leading-tight">Order Over 150 $ </p>
                    </div>
               </div>
               <div className='flex items-center gap-4 md:gap-6'>
                    <span className=''> <HeadsetIcon size={50} /> </span>
                    <div className="flex flex-col items-start">
                         <h4 className='text-xl text-primary font-semibold leading-tight cursor-pointer'>24 / 7 Support</h4>
                         <p className="text-base text-secondary font-normal leading-tight">Dedicated Support</p>
                    </div>
               </div>
          </div>
     )
}

export default Policies
