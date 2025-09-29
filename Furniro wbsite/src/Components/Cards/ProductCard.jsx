import { HeartIcon, Share2 } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import WebContext from '../../ContextApi/WebContext'

const ProductCard = ({ item, onCartClick }) => {
  const navigate = useNavigate()
  const { updateWishlistCount } = useContext(WebContext);

  const handleCardClick = (item) => {
    navigate(`/product/${item.id}`, {
      state: { item }
    })
  }


  const handleAddToCart = (e) => {
    e.stopPropagation()
    onCartClick(item);
  }

  const handleShare = (e) => {
    e.stopPropagation()
    toast.error('this not available yet')
  }

  const handleWishlist = (e) => {

    e.stopPropagation()
    if (localStorage.getItem('wishlist')) {
      const lsItems = JSON.parse(localStorage.getItem('wishlist'));
      if (lsItems.includes(item.id)) {
        toast.info('item already in wishlist')
      } else {
        lsItems.push(item.id);
        localStorage.setItem('wishlist', JSON.stringify(lsItems));
        toast.success('item added to wishlist')
      }
    } else {
      localStorage.setItem('wishlist', JSON.stringify([item.id]));
      toast.success('item added to wishlist')
    }
    updateWishlistCount()
  }

  return (
    <div onClick={() => handleCardClick(item)} className='bg-[#F4F5F7] cursor-pointer relative group overflow-hidden min-w-[310px] sm:min-w-[340px] max-w-[340px] mx-auto'>
      <img loading="lazy" className="h-80 w-full object-cover object-center" src={`${item?.thumbnail}`} alt="item Image" />
      <div className="p-4">
        <h5 className="text-[#3A3A3A] text-xl lg:text-2xl font-semibold"> {item?.title.split(' ').slice(0, 2).join(' ')}</h5>
        <p className="text-[#898989] font-medium my-1">{item?.tags[0]}</p>
        <div className="flex gap-4 items-center">
          <span className="font-semibold text-[#3A3A3A] lg:text-xl">Rs:{item?.price}</span>
          <span className="font-normal text-base line-through text-secondary/80 ">Rs:{(item?.price / 100 * item.discountPercentage) + item?.price}</span>
        </div>
      </div>
      <div className="-left-[300px] bg-opacity-0 absolute flex justify-center items-center  lg:group-hover:inset-0 bg-black lg:group-hover:bg-opacity-60 duration-300 p-6">
        <div className="flex items-center duration-300 gap-6 flex-col w-full font-semibold">
          <button
            onClick={handleAddToCart}
            className="text-ochre text-center w-2/3 bg-white py-3 hover:text-white hover:bg-ochre duration-300"
          >
            Add to cart
          </button>
          <div className="flex justify-center gap-10 text-white w-full">
            <button onClick={handleShare} className="flex items-center gap-1">
              <span className='flex items-center gap-1  '> <Share2 size={18} /> Share </span>
            </button>
            <button onClick={handleWishlist} className="flex items-center gap-1">
              <span className='flex items-center gap-1  '><HeartIcon size={18} /> Like </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
