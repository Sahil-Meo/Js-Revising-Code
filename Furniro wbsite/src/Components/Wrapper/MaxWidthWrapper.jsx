import React from 'react'

const MaxWidthWrapper = ({ children }) => {
     return (

          <div className='w-full mx-auto max-w-[1500px] sm:px-2.5 px-5'>{children}</div>

     )
}

export default MaxWidthWrapper
