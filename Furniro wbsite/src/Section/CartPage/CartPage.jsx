import React, { useState, useEffect } from 'react';
import PageBanner from '../../Components/Banners/PageBanner';
import MaxWidthWrapper from '../../Components/Wrapper/MaxWidthWrapper';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import BorderLine from '../../Components/StaticInfo/BorderLine';

const CartPage = () => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (storedCart.length > 0) {
      setCart(storedCart);
    }
  }, []);

  const handleQuantityChange = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );

    localStorage.setItem('cart', JSON.stringify(cart))
  };

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <PageBanner lable={'Cart'} />
      <MaxWidthWrapper>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 my-10">  
          <div className="md:col-span-2 flex flex-col overflow-x-auto">
            <ul className="hidden md:flex font-medium bg-flow px-10 py-4 text-center justify-around text-sm sm:text-base text-gray-700 rounded-md">
              <li className="min-w-[100px] text-center">Product</li>
              <li className="min-w-[80px] text-center">Size</li>
              <li className="min-w-[80px] text-center">Color</li>
              <li className="min-w-[80px] text-center">Price</li>
              <li className="min-w-[140px] text-center">Quantity</li>
              <li className="min-w-[100px] text-center">Subtotal</li>
              <li className="text-center"></li>
            </ul>

            <div className="divide-y">
              {cart.length === 0 ? (
                <div className="text-center py-10 text-gray-500">Your cart is empty.</div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-wrap md:flex-nowrap items-center py-4 px-2 gap-1 text-sm justify-between"
                  >
                    <div className="min-w-[150px] flex items-center">
                      <img
                        src={item.image}
                        alt={item.product}
                        className="h-16 w-16 object-cover rounded mr-2"
                      />
                      <span>{item.product}</span>
                    </div>
                    <div className="min-w-[80px] text-center">{item.size}</div>
                    <div className="min-w-[80px] text-center">{item.color}</div>
                    <div className="min-w-[80px] text-center">Rs. {item.price}</div>
                    <div className="min-w-[140px] flex items-center justify-center gap-2">
                      <button
                        className="px-2 py-1 border rounded hover:bg-gray-200"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="px-2 py-1 border rounded hover:bg-gray-200"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                    <div className="min-w-[100px] text-center font-semibold">
                      Rs. {item.price * item.quantity}
                    </div>
                    <div className="min-w-[60px] text-center">
                      <button
                        className="text-red-500 hover:underline"
                        onClick={() => handleRemove(item.id)}
                      >
                        <X />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="w-full max-w-sm mx-auto bg-[#F9F1E7] rounded-xl shadow px-4 py-6 md:p-10 text-center">
            <p className="font-semibold text-2xl md:text-3xl mb-6">Cart Totals</p>
            <div className="flex flex-col gap-4 mb-10 text-left">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal</span>
                <span className="text-[#9F9F9F]">Rs. {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="text-ochre text-xl">Rs. {subtotal}</span>
              </div>
            </div>
            <Link
              className="border border-black hover:bg-black hover:text-white duration-300 px-8 py-2 rounded-xl"
              to="/checkout"
            >
              Check Out
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
      <BorderLine />
    </div>
  );
};

export default CartPage;
