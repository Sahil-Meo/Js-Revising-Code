import React from 'react'
import { CATEGORIES_ITEMS } from '../../Lib/Constants/Index'
import CategoryItems from '../../Components/CategoryItems/CategoryItems'

const Category = () => {
     return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center ">
               {CATEGORIES_ITEMS.map((category) => (
                    <CategoryItems key={category.id} category={category} />
               ))}
          </div>
     )
}

export default Category
