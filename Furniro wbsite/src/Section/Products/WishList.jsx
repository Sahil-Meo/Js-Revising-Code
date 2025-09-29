import React, { useEffect, useState } from 'react'
import PageBanner from '../../Components/Banners/PageBanner'
import MaxWidthWrapper from '../../Components/Wrapper/MaxWidthWrapper'
import Separator from '../../Components/Seprator.jsx/Separator'
import WishListCard from '../../Components/Cards/WishListCard'

const WishList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const items = localStorage.getItem('wishlist')

    if (items) {
      const parsedItems = JSON.parse(items);
      setProducts(parsedItems)
    }
  }, [localStorage.getItem('wishlist')])


  return (
    <div>
      <PageBanner lable={"WishList"} />
      <MaxWidthWrapper>
        <Separator />
        <div className="flex flex-col gap-4 md:gap-6 md:px-8 w-full">
          {products.length > 0 ? (
            products?.map((product) => (
              <WishListCard key={product} id={product} />
            ))
          ) : (
            <div className="w-full text-center">
              <p className='text-2xl font-medium text-primary'>There are no products in your wishlist</p>
            </div>
          )}
        </div>
        <Separator />
      </MaxWidthWrapper>
    </div>
  )
}

export default WishList
