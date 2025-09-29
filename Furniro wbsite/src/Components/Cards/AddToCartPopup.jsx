import React, { useState } from 'react';

const AddToCartPopup = ({ onClose, productName = 'Grifo', onAddToCart }) => {
     const [selectedSize, setSelectedSize] = useState('S');
     const [selectedColor, setSelectedColor] = useState('blue');
     const [quantity, setQuantity] = useState(1);

     const sizes = ['S', 'M', 'L'];
     const colors = [
          { id: 'blue', bg: 'bg-[#816DFA]' },
          { id: 'black', bg: 'bg-black' },
          { id: 'ochre', bg: 'bg-ochre' },
     ];

     const handleAddToCart = () => {
          if (selectedSize && selectedColor && quantity > 0) {
               onAddToCart?.({
                    size: selectedSize,
                    color: selectedColor,
                    quantity,
               });
               onClose?.(); // Close after adding
          }
     };

     return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
               <div
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-xl p-8 w-full max-w-[320px] shadow-xl relative">

                    <button
                         onClick={onClose}
                         className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-sm"
                    >
                         ✖
                    </button>

                    <h2 className="text-xl font-semibold text-center mb-4">{productName}</h2>

                    <div className="space-y-6">

                         <div>
                              <span className="text-sm font-medium text-gray-700">Size</span>
                              <div className="flex gap-3 mt-2">
                                   {sizes.map((size) => (
                                        <label key={size}>
                                             <input
                                                  type="radio"
                                                  name="size"
                                                  value={size}
                                                  checked={selectedSize === size}
                                                  onChange={() => setSelectedSize(size)}
                                                  className="peer hidden"
                                             />
                                             <span className="w-9 h-9 flex items-center justify-center rounded cursor-pointer bg-[#F9F1E7] peer-checked:bg-ochre peer-checked:text-white duration-300">
                                                  {size}
                                             </span>
                                        </label>
                                   ))}
                              </div>
                         </div>

                         {/* Color Selection */}
                         <div>
                              <span className="text-sm font-medium text-gray-700">Color</span>
                              <div className="flex gap-4 mt-2 items-center">
                                   {colors.map((color) => (
                                        <label key={color.id}>
                                             <input
                                                  type="radio"
                                                  name="color"
                                                  value={color.id}
                                                  checked={selectedColor === color.id}
                                                  onChange={() => setSelectedColor(color.id)}
                                                  className="peer hidden"
                                             />
                                             <span
                                                  className={`${color.bg} w-8 h-8 rounded-full cursor-pointer peer-checked:border-4 peer-checked:border-gray-400 peer-checked:shadow-md block duration-300`}
                                             ></span>
                                        </label>
                                   ))}
                              </div>
                         </div>

                         {/* Quantity & Add to Cart */}
                         <div className="flex gap-4 items-center">
                              <div className="flex items-center border border-gray-400 rounded px-3 py-2 gap-4">
                                   <button
                                        onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                                        className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded-full"
                                   >
                                        -
                                   </button>
                                   <span className="text-sm">{quantity}</span>
                                   <button
                                        onClick={() => setQuantity((prev) => prev + 1)}
                                        className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded-full"
                                   >
                                        +
                                   </button>
                              </div>

                              <button
                                   disabled={!selectedSize || !selectedColor}
                                   onClick={handleAddToCart}
                                   className="flex-1 rounded-lg text-black text-sm font-medium py-3 px-4 duration-300 border border-black hover:bg-black hover:text-white disabled:opacity-40"
                              >
                                   Add To Cart
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AddToCartPopup;
