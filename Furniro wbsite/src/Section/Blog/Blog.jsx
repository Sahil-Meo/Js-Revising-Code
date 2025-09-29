import React, { useState } from 'react'
import PageBanner from '../../Components/Banners/PageBanner'
import MaxWidthWrapper from '../../Components/Wrapper/MaxWidthWrapper'
import Separator from '../../Components/Seprator.jsx/Separator'
import Policies from '../../Components/Policies/Policies'
import PaginationButtons from '../../Components/Buttons/PaginationButtons'
import Blogs from '../../Components/Blogs/Blogs'
import BlogCategories from '../../Components/Categories/BlogCategories'
import BorderLine from '../../Components/StaticInfo/BorderLine'

const Blog = () => {
     const [isActive, setIsActive] = useState(false)
     return (
          <>
               <PageBanner lable={"Blog"} />
               <MaxWidthWrapper>
                    <Separator />
                    <div className=" flex flex-col lg:flex-row w-full gap-10 md:gap-14 relative">
                         <Blogs />
                         <BlogCategories />
                    </div>
                    <Separator />
                    <PaginationButtons />
                    <Separator />
               </MaxWidthWrapper>
               <Policies />
               <BorderLine />
          </>
     )
}

export default Blog
