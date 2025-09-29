import React, { useState } from 'react'
import Separator from '../../Components/Seprator.jsx/Separator'
import PageBanner from '../../Components/Banners/PageBanner'
import Policies from '../../Components/Policies/Policies'
import MaxWidthWrapper from "../../Components/Wrapper/MaxWidthWrapper";
import Products from '../Products/Products';
import PaginationButtons from '../../Components/Buttons/PaginationButtons'
import ProductToolbar from '../../Components/ProductTolbar/ProductToolbar';
import BorderLine from '../../Components/StaticInfo/BorderLine';

const Shop = () => {
     const [isActive, setIsActive] = useState(false)
     return (
          <div>
               <PageBanner lable={"Shop"} />
               <ProductToolbar />
               <MaxWidthWrapper>
                    <Separator />
                    <Products />
                    <Separator />
                    <PaginationButtons />
                    <Separator />
               </MaxWidthWrapper>
               <Policies />
               <BorderLine />
          </div>
     )
}

export default Shop
