import React, { useState } from 'react'
import PageBanner from '../../Components/Banners/PageBanner'
import { ChevronRight, SearchIcon } from 'lucide-react'
import Separator from '../../Components/Seprator.jsx/Separator'
import { Link, useNavigate } from 'react-router-dom'

const Search = () => {
     const navigation = useNavigate();
     const [searchQuery, setSearchQuery] = useState('');
     const [empty, setEmpty] = useState(false);

     const handleSearch = (e) => {
          e.preventDefault();
          if (searchQuery.trim() === '') {
               setEmpty(true);
               return;
          }
          navigation(`/shop?search=${searchQuery}`);
          setSearchQuery('');
     };

     return (
          <div>
               <div
                    className="w-full max-h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center  "
                    style={{ backgroundImage: 'url("/background.jpg")' }}
               >
                    <div className="flex flex-col items-center gap-2 sm:gap-4 antialiased backdrop-blur-[6px] w-full p-5 md:p-20 mx-auto">
                         <img src="/Icon.png" alt="Icon" className='w-14' />
                         <h1 className='antialiased text-3xl sm:text-4xl md:text-5xl font-medium'>Search</h1>

                         <form
                              onSubmit={handleSearch}
                              className="relative max-w-[400px] sm:max-w-[500px] w-full"
                         >
                              <input
                                   id="Search"
                                   value={searchQuery}
                                   onChange={(e) => setSearchQuery(e.target.value)}
                                   type="text"
                                   placeholder="Search for product..."
                                   className={`w-full px-3 md:px-5 py-1 md:py-2 pr-10  rounded-md text-base font-normal outline-none bg-gray-50 ${empty ? 'border-red-500' : ''} transition-all duration-200 ease-in-out`}
                              />
                              <button
                                   type="submit"
                                   className="absolute right-2 top-2 text-secondary text-sm outline-none"
                              >
                                   <SearchIcon />
                              </button>
                         </form>
                    </div>

               </div>
               <Separator />
               <div className="h-[1.5px] bg-gray-200 w-full"></div>
          </div>
     )
}

export default Search
