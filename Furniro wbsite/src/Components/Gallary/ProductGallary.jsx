import React, { useEffect, useState } from "react";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import TabsGallary from "./TabsGallary";

export default function ProductGallery({ item }) {
     const product = {
          id: item?.id || "product-001",
          title: item?.title || "Syltherine",
          price: item?.price || 2500,
          rating: item?.rating || 5,
          sku: item?.sku || "SS001",
          category: "Sofas",
          tags: item?.tags || ["Sofa", "Chair", "Home", "Shop"],
          description: item?.description ||
               "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
          images: item?.images || [],
          sizes: ["S", "M", "L"],
          colors: [
               { name: "blue", code: "#816DFA" },
               { name: "black", code: "#000000" },
               { name: "ochre", code: "#D8A373" },
          ],
          stock: item?.stock || 10,
          thumbnail: item?.thumbnail || "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
     };
     // console.log(product.stock);
     
     useEffect(() => {
          setActive(product.thumbnail || product.images[0]);
     }, [item]);
     const [active, setActive] = useState(null);
     const [quantity, setQuantity] = useState(1);

     const handleQuantityChange = (action) => {
          if (action === "increment") {
               setQuantity((prev) => prev + 1);
          } else if (action === "decrement") {
               setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
          }
     };

     return (
          <>
               <div className="grid grid-cols-1  md:grid-cols-2 gap-10 sm:gap-20">
                    <div className="flex flex-col-reverse sm:flex-row justify-between lg:gap-4">
                         <div className="flex flex-row sm:flex-col gap-2 md:gap-3">
                              {product.images.map((imgelink, index) => (
                                   <div key={index}>
                                        <img
                                             onClick={() => setActive(imgelink)}
                                             src={imgelink}
                                             className="object-cover object-center h-[100px] max-w-[110px] rounded-lg cursor-pointer"
                                             alt={`gallery-image-${index + 1}`}
                                        />
                                   </div>
                              ))}
                         </div>

                         <div>
                              <img
                                   className="h-auto w-full max-w-xl rounded-lg object-cover object-center md:h-[480px]"
                                   src={active ? active : product.images[0]}
                                   alt="active-product"
                              />
                         </div>
                    </div>

                    <div className="flex flex-col">
                         <div className="w-full max-w-full flex flex-col gap-5">
                              <h3 className="text-[42px]">{product.title}</h3>
                              <div className="flex gap-3 items-center">
                                   <p className="text-primary text-2xl">{product.price}$</p>
                                   <span className="w-[1px] h-6 bg-[#9F9F9F]"></span>
                                   <p className={`${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                              </div>
                              <div className="flex gap-3">
                                   <img
                                        loading="lazy"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAUCAYAAABPuVmJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAICSURBVHgB7ZrNTcNAEIWf4xzgFirAVEC48XMxHaQDoIN0kKQCRAfpADqIJSQscaEFqIAcOHCALDNrizh2sNdjGw7Mk9b2OjPzrbRr7+w6gEqVl4kRmnuE6FjKEXMCV9u+o90ktYzQrZQj5QBXaEN2lMYwtnQ4WpUj5gTMcLXvOdhMvq/6mev2pZymHAeVdjiPUjqFmVudzEnKEXMCOl3WcKl8woujp5vRqpy2OBXy+GAeMMKKRksf+1QNbOG6h8FWL4MlDZVnukrKB1647p3irgymnPoc80Sx3qkYDG1sH4c2Ptexzs69k6Qvq5TkkBzAx/XG1F/mvgYObd23x+osUTm1Od4RlvTqHpPvJLWHe4pWlH2l0+iY02kGqVaYpTFKpRwxZ9qIk1GvcVBu9Jn1dZJyfpmTj5O/QfPSnO5ewEUGNzT/jCGQcoSc2HZ8IVlzncO3GlHjX39MPNaeS+8Ye2gg5Qg5MRbYXPY5d3hhWWYW1OCqRltDDGwGKZRy/kbFdfhOmkG66K2GrXLa4bCM3L/XKJjfoOHKkWEeyTf/JuH1vaO27bQFuXpE5TwtUYVtHQXKEegz09lJR8+wiwNX9+LnUY92chJFHIySgSjza5TuE3OWGGZs60s5Mq3Inx9TyvSpo6e8MYMmokzzNm1cuR1//iNbCKUcMWdU5w8Pqn+uLxkZbCO6bMKVAAAAAElFTkSuQmCC"
                                        alt="stars"
                                   />
                                   <span className="w-[1px] bg-[#9F9F9F]"></span>
                                   <span className="text-sm text-[#9F9F9F]">{product.rating} Customer Review</span>
                              </div>

                              <p className="w-10/12">{product.description}</p>

                              <div className="flex flex-col gap-6">
                                   <div className="flex flex-col gap-2">
                                        <span className="text-black text-sm">Size</span>
                                        <div className="flex gap-4 text-xs">
                                             {product.sizes.map((size) => (
                                                  <div key={size}>
                                                       <input
                                                            className="peer sr-only"
                                                            type="radio"
                                                            name="size_page"
                                                            id={size}
                                                            value={size}
                                                            defaultChecked={size === "S"}
                                                       />
                                                       <label
                                                            className="bg-[#F9F1E7] cursor-pointer h-8 w-8 flex items-center justify-center rounded peer-checked:bg-ochre peer-checked:text-white duration-300"
                                                            htmlFor={size}
                                                       >
                                                            {size}
                                                       </label>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>

                                   <div className="flex flex-col gap-2">
                                        <span className="text-black text-sm">Color</span>
                                        <div className="flex gap-4 items-center">
                                             {product.colors.map(({ name, code }) => (
                                                  <div key={name}>
                                                       <input
                                                            className="peer sr-only"
                                                            type="radio"
                                                            name="color_page"
                                                            id={name}
                                                            value={name}
                                                            defaultChecked={name === "blue"}
                                                       />
                                                       <label
                                                            className="cursor-pointer block h-8 w-8 rounded-full peer-checked:border-4 peer-checked:border-gray-400 peer-checked:shadow-md duration-300"
                                                            htmlFor={name}
                                                            style={{ backgroundColor: code }}
                                                       ></label>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>

                                   <div className="flex flex-row w-full gap-4">
                                        <div className="rounded-lg flex justify-between items-center p-3 border border-[#9F9F9F]">
                                             <button onClick={() => handleQuantityChange("decrement")} className="hover:bg-gray-300 duration-300 rounded-full w-5 h-5 flex items-center justify-center">
                                                  -
                                             </button>
                                             <span>{quantity}</span>
                                             <button onClick={() => handleQuantityChange("increment")} className="hover:bg-gray-300 duration-300 rounded-full w-5 h-5 flex items-center justify-center">
                                                  +
                                             </button>
                                        </div>
                                        <button className="rounded-lg disabled:opacity-50 disabled:bg-black disabled:text-white text-xl p-3 border border-black hover:bg-black hover:text-white duration-300">
                                             Add To Cart
                                        </button>
                                   </div>
                              </div>

                              <span className="h-[1px] bg-[#D9D9D9] my-8"></span>

                              <div className="text-[#9F9F9F] flex flex-col gap-4">
                                   <div className="flex gap-3">
                                        <span className="w-20">SKU</span>
                                        <span>:</span>
                                        <span>{product.sku}</span>
                                   </div>
                                   <div className="flex gap-3">
                                        <span className="w-20">Category</span>
                                        <span>:</span>
                                        <span>{product.category}</span>
                                   </div>
                                   <div className="flex gap-3">
                                        <span className="w-20">Tags</span>
                                        <span>:</span>
                                        <span>{product.tags?.join(", ")}</span>
                                   </div>
                                   <div className="flex gap-3">
                                        <span className="w-20">Share</span>
                                        <span>:</span>
                                        <div className="text-black flex gap-4 text-2xl">
                                             <a href="#">
                                                  <FacebookIcon />
                                             </a>
                                             <a href="#">
                                                  <LinkedinIcon />
                                             </a>
                                             <a href="#">
                                                  <TwitterIcon />
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="h-[1px] bg-[#D9D9D9] my-8 "></div>
               <TabsGallary item={item} />
               <div className="h-[1px] bg-[#D9D9D9] my-8 "></div>
          </>
     );
}
