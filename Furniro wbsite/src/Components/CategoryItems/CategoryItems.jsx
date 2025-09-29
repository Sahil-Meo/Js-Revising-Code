import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItems = ({ category }) => {
     return (
          <div className="flex flex-col w-full md:max-w-[400px] rounded-lg items-center justify-center mx-auto">
               <div>
                    <Link to={`/products/${category.id}`} className="w-full">
                         <img loading='lazy' className="rounded-t-lg" src={category.ImgSrc} alt={`${category.label}`} />
                    </Link>
               </div>

               <div className="pt-5 text-primary text-base font-semibold not-italic">
                    {category.label}
               </div>
          </div>
     )
}

export default CategoryItems
