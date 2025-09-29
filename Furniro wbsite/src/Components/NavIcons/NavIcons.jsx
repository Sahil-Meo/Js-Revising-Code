import { useContext } from 'react';
import { Link } from 'react-router-dom'
import WebContext from '../../ContextApi/WebContext';

const NavIcons = ({ openMenu }) => {

     const { NumOfWishlistItems, isCartOpen, openCart, NumOfCartItems } = useContext(WebContext);

     const handleCloseMenu = () => {
          if (window.innerWidth < 768) {
               openMenu(false);
          }
     }


     return (
          <ul className="flex font-medium p-4 mx-5 md:mx-0 md:p-0 bg-flow md:space-x-8 md:border-0 md:bg-white justify-center gap-4 md:gap-0 rounded-full md:rounded-none ">

               <li>
                    <Link
                         to={'/account'}
                         className="block py-2 px-3 md:p-0"
                         aria-current="page"
                         onClick={handleCloseMenu}
                    >
                         <img src='/img/navbar/account.svg' className="w-6 h-6  " />
                    </Link>
               </li>
               <li>
                    <Link
                         to={'/search'}
                         className="block py-2 px-3 md:p-0"
                         aria-current="page"
                         onClick={handleCloseMenu}
                    >
                         <img src='/img/navbar/search.svg' className="w-6 h-6 " />
                    </Link>
               </li>
               <li className="relative">
                    <Link
                         to={'/heart'}
                         className="block py-2 px-3 md:p-0"
                         aria-current="page"
                         onClick={handleCloseMenu}
                    >
                         <img src='/img/navbar/heart.svg' className="w-6 h-6 " />
                    </Link>
                    {NumOfWishlistItems > 0 && (
                         <span className="absolute top-[1px] right-[5px] md:top-[-5px] md:right-[-5px] inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-500 rounded-full">
                              {NumOfWishlistItems}
                         </span>
                    )}
               </li>
               <li onClick={handleCloseMenu} className="relative cursor-pointer">
                    <span
                         onClick={() => openCart()}
                         className="block py-2 px-3 md:p-0"
                         aria-current="page"
                    >
                         <img src='/img/navbar/shopping-cart-outlined.svg' className="w-6 h-6 " />
                    </span>
                    {NumOfCartItems > 0 && (
                         <span className="absolute top-[1px] right-[5px] md:top-[-5px] md:right-[-5px] inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-500 rounded-full">
                              {NumOfCartItems}
                         </span>
                    )}
               </li>

          </ul>
     )
}

export default NavIcons
