import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../../Components/Cards/ProductCard'
import { PRODUCTS_LIST } from '../../Lib/Constants/Index'
import AddToCartPopup from '../../Components/Cards/AddToCartPopup'
import { toast } from 'react-toastify'
import WebContext from '../../ContextApi/WebContext'
import { useParams } from 'react-router-dom'

const Products = () => {
     const { updateCartCount, fetchItems, setTotalProducts } = useContext(WebContext)
     const [ProductsList, setProductsList] = useState([])
     const [selectedProduct, setSelectedProduct] = useState(null);
     const [newCartItem, setNewCartItem] = useState({
          id: '',
          title: '',
          price: '',
          quantity: '',
          size: '',
          color: '',
          thumbnail: ''
     });
     const useparam = useParams()
     const search = useparam.search
     // console.log(search);


     const handleAddToCartClick = (product) => {
          setSelectedProduct(product);
     };

     const handleClosePopup = () => {
          setSelectedProduct(null);
     };

     const handleAddToCartSubmit = (options) => {
          console.log(selectedProduct);

          const newItem = {
               id: selectedProduct.id,
               title: selectedProduct.title.split(' ').slice(0, 2).join(' '),
               price: selectedProduct.price,
               quantity: options.quantity,
               thumbnail: selectedProduct.thumbnail,
               size: options.size,
               color: options.color
          };

          const cartitems = JSON.parse(localStorage.getItem('cart')) || [];

          const existingItem = cartitems.find(item =>
               item.id === newItem.id &&
               item.size === newItem.size &&
               item.color === newItem.color
          );

          if (existingItem) {
               toast.error('Item already in cart');
               return;
          }
          console.log(newItem);

          cartitems.push(newItem);
          localStorage.setItem('cart', JSON.stringify(cartitems));
          toast.success('Item added to cart');


          handleClosePopup();
          updateCartCount()
     };


     useEffect(() => {
          const fetchProducts = async () => {
               try {
                    const response = await fetch(`https://dummyjson.com/products?limit=${fetchItems.limit}&skip=${fetchItems.skip}`)
                    const data = await response.json()
                    setProductsList(data.products)
                    setTotalProducts(data.totalresults)
               } catch (error) {
                    console.error('Error fetching products:', error)
               }
          }
          fetchProducts()
     }, [fetchItems.limit, fetchItems.skip])

     return (
          <>
               <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-between'>
                    {ProductsList?.map((item) => (
                         <ProductCard key={item.id} item={item} onCartClick={handleAddToCartClick} />
                    ))}
               </div>
               {selectedProduct && (
                    <AddToCartPopup
                         productName={selectedProduct.name}
                         onClose={handleClosePopup}
                         onAddToCart={handleAddToCartSubmit}
                    />
               )}

          </>
     )
}

export default Products
