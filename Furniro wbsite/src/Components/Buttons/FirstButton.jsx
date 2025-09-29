import React from 'react'
import { useNavigate } from 'react-router-dom'

const FirstButton = ({ label, path }) => {
     const navigate = useNavigate()
     const handleClick = () => {
          if (path) navigate(`${path}`)
               console.log('Click: On this button', path);
               
     }
     return (
          <button onClick={handleClick} className="font-bold uppercase bg-ochre border border-ochre hover:bg-transparent hover:text-ochre duration-300 py-3 px-8 lg:px-16 lg:py-5 text-white">{label}</button>
     )
}

export default FirstButton
