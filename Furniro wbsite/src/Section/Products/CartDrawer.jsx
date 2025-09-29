import React, { useState, useEffect, useContext } from 'react';
import WebContext from '../../ContextApi/WebContext';


const CartDrawer = () => {
     const { isCartOpen, openCart, updateCartCount } = useContext(WebContext);

     const [cartItems, setCartItems] = useState([]);

     const handleRemove = (id) => {
          const lsCartItems = JSON.parse(localStorage.getItem('cart')) || [];
          const updatedCartItems = lsCartItems.filter((item) => item.id !== id);
          console.log('updatedCartItems', updatedCartItems[0]);

          localStorage.setItem('cart', JSON.stringify(updatedCartItems));
          setCartItems(updatedCartItems);
          updateCartCount();
     };

     const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

     useEffect(() => {
          document.body.style.overflow = isCartOpen ? 'hidden' : 'auto';
          return () => {
               document.body.style.overflow = 'auto';
          };
     }, [isCartOpen]);

     useEffect(() => {
          const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
          setCartItems(storedCartItems);
          // console.log('storedCartItems', storedCartItems);

     }, [localStorage.getItem('cart')]);

     return (
          <div
               className={`fixed w-full inset-0 z-40 transition-all duration-700 flex  transform  ease-in-out
    ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
               onClick={openCart}
          >

               <div className="fixed inset-0 bg-black bg-opacity-50" />


               <div
                    className={`translate-x-0 right-0 w-full lg:w-[30%] bg-white fixed h-screen py-5 px-8`}
                    onClick={(e) => e.stopPropagation()}
               >

                    <div className="flex justify-between items-center">
                         <p className="font-semibold text-2xl">Shopping Cart</p>
                         <button onClick={openCart}>
                              <i className="fas fa-times text-xl"></i>
                         </button>
                    </div>

                    <span className="h-[1px] w-9/12 block bg-[#D9D9D9] my-6"></span>


                    <div className="h-[60vh] overflow-y-auto flex flex-col gap-6 pr-2">
                         {cartItems.length === 0 ? (
                              <p className="text-center text-gray-400">Your cart is empty.</p>
                         ) : (
                              cartItems?.map((item) => (
                                   <div key={item.id} className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                             <img
                                                  loading="lazy"
                                                  className="bg-[#B88E2F38] rounded-lg w-24 h-24 object-cover"
                                                  src={item.thumbnail}
                                                  alt={item.title}
                                             />
                                             <div className="flex flex-col gap-2 text-sm">
                                                  <a href={`/products/${item.id}`} className="font-semibold">
                                                       {item.title}{' '}
                                                       <span className="text-gray-400">
                                                            ({item.color}/{item.size})
                                                       </span>
                                                  </a>
                                                  <div className="flex items-center gap-2 text-xs">
                                                       <span className="text-[16px]">{item.quantity}</span>
                                                       <span>X</span>
                                                       <span className="text-ochre">Rs. {item.price}</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <button
                                             onClick={() => handleRemove(item.id)}
                                             className="text-[#9F9F9F] text-2xl"
                                        >
                                             ✖
                                        </button>
                                   </div>
                              ))
                         )}
                    </div>


                    <div className="flex py-6 justify-between items-center text-base font-medium">
                         <span>Subtotal</span>
                         <div className="text-ochre font-semibold">
                              Rs. {subtotal.toLocaleString()}
                         </div>
                    </div>


                    <div className="text-sm flex w-full gap-4 border-t border-t-[#D9D9D9] pt-10">
                         <a
                              className="border w-1/2 border-black rounded-full p-2 text-center hover:bg-black hover:text-white transition"
                              href="/cart"
                         >
                              Cart
                         </a>
                         <a
                              className="border w-1/2 text-center border-black rounded-full p-2 hover:bg-black hover:text-white transition"
                              href="/checkout"
                         >
                              Checkout
                         </a>
                    </div>
               </div>
          </div>
     );
};

export default CartDrawer;
