import React from 'react'


const SecondButton = ({ label, onClick }) => {

     return (
          <span onClick={onClick} className="text-ochre border-2 border-ochre hover:bg-ochre hover:text-white duration-300 py-3 px-20 font-semibold">{label}
          </span>
     )
}

export default SecondButton
