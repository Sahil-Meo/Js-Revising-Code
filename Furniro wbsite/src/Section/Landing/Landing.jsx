import React from 'react'
import Hero from '../Hero/Hero'
import MaxWidthWrapper from '../../Components/Wrapper/MaxWidthWrapper'
import Separator from '../../Components/Seprator.jsx/Separator'
import CustomHeading from '../../Components/CustomHeading/CustomHeading'
import Category from '../Category/Category'
import Products from '../Products/Products'
import SliderWith from '../../Components/Slider/SliderWith'
import SliderDeep from '../../Components/Slider/SliderDeep'
import BorderLine from '../../Components/StaticInfo/BorderLine'
import FurnitureCrousal from '../../Components/Slider/FurnitureCrousal'
import { Link } from 'react-router-dom'

const Landing = () => {
     return (
          <div>
               <Hero />
               <MaxWidthWrapper>

                    <Separator />

                    <CustomHeading isReverse={false} Heading={"Browse The Range"} SubHeading={"Dive into the world of our new collection."} />
                    <Category />

                    <Separator />

                    <CustomHeading isReverse={false} Heading={"Our Products"} SubHeading={"Updated daily, discover our latest products."} />
                    <Products />

               </MaxWidthWrapper>
               <Separator />
               {/* <SliderDeep /> */}
               <div className="flex flex-col md:flex-row items-start justify-between w-full min-h-screen overflow-hidden sm:h-[90vh] bg-[#F5F5F5] rounded-xl px-5 py-5 md:px-20 gap-5">
                    <div className="flex w-full h-full flex-col justify-center items-start max-w-sm">
                         <h3 className="pb-1 text-[#3A3A3A] font-bold text-3xl lg:text-[40px]">50+ Beautiful rooms inspiration</h3>
                         <p className="w-11/12 pb-6 text-[#616161] font-medium">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                         <Link to="/shop" className="text-white w-fit bg-ochre border border-ochre hover:text-ochre hover:bg-transparent duration-300 font-semibold py-3 px-10">Explore More
                         </Link>
                    </div>
                    <FurnitureCrousal />
               </div>

               <Separator />




               <CustomHeading isReverse={true} Heading={"#FuniroFurniture"} SubHeading={"Share your setup with"} />

               <img
                    src="/img/grid.png"
                    alt="Shop Banner"
                    className="w-full h-auto object-cover "
               />

               <Separator />
               <BorderLine />

          </div>
     )
}

export default Landing
