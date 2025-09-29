import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import WebContext from '../../ContextApi/WebContext'
import { toast } from 'react-toastify'

const WishListCard = ({ id }) => {
     const { NumOfWishlistItems, setNumOfWishlistItems } = useContext(WebContext)
     const [product, setProduct] = useState(null)
     const [isVisible, setIsVisible] = useState(true)
     const navigate = useNavigate()

     useEffect(() => {
          const fetchProduct = async () => {
               try {
                    const response = await fetch(`https://dummyjson.com/products/${id}`)
                    const data = await response.json()
                    setProduct(data)
               } catch (error) {
                    console.error('Error fetching product:', error)
               }
          }
          if (isVisible) fetchProduct()
     }, [id, isVisible])

     const handleRemoveFromWishlist = () => {
          const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
          const updatedWishlist = wishlist.filter(item => item !== id)
          localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
          setNumOfWishlistItems(updatedWishlist.length)
          setIsVisible(false)
          toast.info('Item removed from wishlist')
     }

     if (!isVisible) return null

     return (
          <>
               <div className="bg-flow px-5 sm:px-10 py-4 shadow-md rounded flex items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-center  gap-2 sm:gap-6 ">
                         <img loading="lazy" className="w-20 h-20 rounded object-cover"
                              src={product?.thumbnail} alt={product?.name} />
                         <span className="font-semibold cursor-pointer text-sm sm:text-lg text-gray-800 hover:text-primary duration-300 block"
                              onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                         >{product?.title.split(' ').slice(0, 2).join(' ')}</span>
                         <p className="text-sm sm:text-base text-gray-500 flex ">{product?.price} <span>Rp</span></p>
                    </div>
                    <button className="">
                         <span
                              onClick={handleRemoveFromWishlist}
                              className="text-2xl text-neutral-500 "
                         >✖</span>
                    </button>
               </div>
          </>
     )
}

export default WishListCard
