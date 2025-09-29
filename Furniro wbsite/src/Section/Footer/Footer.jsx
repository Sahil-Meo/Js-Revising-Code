import React from 'react'
import { Link } from 'react-router-dom'
import { FaPaperPlane } from 'react-icons/fa'

const Footer = () => {

     const underlineHover = "relative after:content-[''] after:absolute after:bg-primary after:h-[3px] after:w-0 hover:after:w-full after:duration-300 after:left-0 after:-bottom-[3px]";


     return (
          <footer className='bg-white m-4'>
               <div className="w-full max-w-screen-2xl mx-auto p-4 md:my-8">
                    <div className="flex flex-wrap items-start justify-between">

                         <div className="flex flex-col gap-5">
                              <Link to={'/'}>
                                   <img src="/footer_logo.png" alt="" />
                              </Link>
                              <p className="text-sm tracking-wide leading-1 max-w-[300px] text-secondary/60 font-semibold">400 University Drive Suite, 200 Coral Gables, <br /> FL 33134 PK</p>
                         </div>

                         <div className="flex flex-col gap-5">
                              <h4 className="text-base text-primary font-semibold">Links</h4>
                              <ul className='flex flex-col text-sm text-secondary font-semibold gap-4 '>
                                   <li><Link to="/" className={underlineHover}>Home</Link></li>
                                   <li><Link to="/shop" className={underlineHover}>Shop</Link></li>
                                   <li><Link to="/blog" className={underlineHover}>Blog</Link></li>
                                   <li><Link to="/contact" className={underlineHover}>Contact</Link></li>
                              </ul>
                         </div>

                         <div className="flex flex-col gap-5">
                              <h4 className="text-base text-primary font-semibold">Help</h4>
                              <ul className='flex flex-col text-sm text-secondary font-semibold gap-4 '>
                                   <li>Payment Option</li>
                                   <li>Return</li>
                                   <li><Link to="/privacy-policy" className={underlineHover}>privacy Policies</Link></li>
                              </ul>
                         </div>

                         <div className="flex flex-col gap-5">
                              <h4 className="text-base text-primary font-semibold">Newsletter</h4>
                              <div className="flex flex-row-reverse gap-1">
                                   <label htmlFor="newsletter" className='bg-flow text p-2 px-3 rounded-md font-medium flex items-center justify-center hover:text-ochre duration-300'><FaPaperPlane /> </label>
                                   <input id='newsletter' type="email" placeholder='Enter your email' className=' outline-none p-2 rounded-md  border-none bg-gray-50 placeholder:text-secondary/60' />
                              </div>
                         </div>

                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8" />

                    <span className="block text-sm text-gray-500 sm:text-center 0">
                         © 2023{" "}
                         <a href="/" className="hover:underline">
                              Furniro™
                         </a>
                         . All Rights Reserved.
                    </span>
               </div>
          </footer>
     )
}

export default Footer
