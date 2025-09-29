import React, { useEffect, useState } from 'react'
import BreadCrumps from '../../Components/Buttons/BreadCrumps'
import Separator from '../../Components/Seprator.jsx/Separator'
import ProductGallery from '../../Components/Gallary/ProductGallary'
import MaxWidthWrapper from '../../Components/Wrapper/MaxWidthWrapper'
import CustomHeading from '../../Components/CustomHeading/CustomHeading'
import Products from './Products'
import SecondButton from '../../Components/Buttons/SecondButton'
import { useParams, useNavigate } from 'react-router-dom'

const ProductDetails = () => {
     const { id } = useParams();
     const [product, setProduct] = useState(null);
     const [relatedProducts, setRelatedProducts] = useState([]);
     const navigate = useNavigate();

     const handleViewMore = () => {
          navigate('/shop');
     }

     useEffect(() => {
          const fetchProduct = async () => {
               try {
                    const response = await fetch(`https://dummyjson.com/products/${id}`);
                    const data = await response.json();
                    setProduct(data);
               } catch (error) {
                    console.error('Failed to fetch product:', error);
               }
          }

          fetchProduct();
     }, [id]);

     useEffect(() => {
          const fetchRelatedProducts = async () => {
               if (!product?.category) return;

               try {
                    const response = await fetch(`https://dummyjson.com/products/category/${product.category}`);
                    const data = await response.json();
                    setRelatedProducts(data.products);
               } catch (error) {
                    console.error('Error fetching related products:', error);
               }
          };

          fetchRelatedProducts();
     }, [product?.category]);

     return (
          <div className='w-full'>
               <BreadCrumps label={"Sofas"} />
               <MaxWidthWrapper>
                    <Separator />
                    <ProductGallery item={product} />
                    <CustomHeading Heading={"Related Products"} />
                    <Products items={relatedProducts} />
                    <div className="w-fit mx-auto my-8 lg:my-10">
                         <SecondButton onClick={handleViewMore} label={"View More"} />
                    </div>
               </MaxWidthWrapper>
               <div className="h-[1px] bg-[#D9D9D9] mb-8 md:mb-16"></div>
          </div>
     )
}

export default ProductDetails
