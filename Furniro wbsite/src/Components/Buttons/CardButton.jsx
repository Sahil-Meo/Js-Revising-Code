import React from 'react'

const CardButton = ({ label }) => {
     return (
          <button className='text-ochre text-center w-2/3 bg-white py-3 hover:text-white hover:bg-ochre duration-300'>
               {label}
          </button>
     )
}

export default CardButton
