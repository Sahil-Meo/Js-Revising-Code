import React from 'react'
import { TrophyIcon } from 'lucide-react'

const PolicyItem = () => {
     return (
          <div className='flex items-center gap-2'>
               <span className=''> <TrophyIcon size={50} /> </span>
               <div className="flex flex-col items-start">
                    <h4 className='text-xl text-primary font-semibold leading-tight'>High Quaility</h4>
                    <p className="text-base text-secondary font-normal leading-tight">Crafted from top materials</p>
               </div>
          </div>
     )
}

export default PolicyItem
