import React, { useContext, useState } from 'react';
import { FaTh, FaList, FaFilter } from 'react-icons/fa';
import { SlidersIcon, BlocksIcon, List } from 'lucide-react';
import WebContext from '../../ContextApi/WebContext';

const ProductToolbar = () => {

     const [showFilters, setShowFilters] = useState(false);
     const [filterBy, setFilterBy] = useState('All Type')
     const [sortBy, setSortBy] = useState('Default');
     const [viewMode, setViewMode] = useState('grid');
     const { setFetchItems, tatalProducts, fetchItems, } = useContext(WebContext)

     const handleViewChange = (mode) => {
          setViewMode(mode);
     };
     const handleSortChange = (e) => {
          setSortBy(e.target.value);
     };

     const handleShowChange = (e) => {
          setFetchItems({
               ...fetchItems, limit: e.target.value
          })
     };

     const handleFilterClick = () => {
          setShowFilters(!showFilters);
          console.log("Filter clicked");
     };

     const isSmall = false;
     return (
          <div className="bg-flow p-4 sm:p-10 md:px-20 md:py-10  flex flex-col md:flex-row items-center justify-between gap-4">

               <div className="flex items-center gap-1 md:gap-2 flex-wrap text-base sm:text-lg">
                    <div className="relative">
                         <button
                              onClick={handleFilterClick}
                              className="flex items-center gap-2 text-primary hover:text-black text-lg">
                              <SlidersIcon size={25} />
                              <span>Filter</span>
                         </button>
                         {showFilters && (
                              <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded shadow-md">
                                   <div className="p-2">
                                        <h4 className="font-semibold text-primary">Filter by</h4>
                                        <div className="flex flex-col text-secondary">
                                             <label className="flex items-center">
                                                  <input onClick={(e) => setFilterBy('Low to High')} type="checkbox" className="mr-2" />
                                                  Price: Low to High
                                             </label>
                                             <label className="flex items-center">
                                                  <input type="checkbox" className="mr-2" />
                                                  Price: High to Low
                                             </label>
                                             <label className="flex items-center">
                                                  <input type="checkbox" className="mr-2" />
                                                  Newest
                                             </label>
                                        </div>
                                   </div>
                              </div>
                         )}
                    </div>

                    <button className="p-2 hover:bg-gray-200 rounded">
                         <BlocksIcon size={`${isSmall ? "18" : "25"}`} />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                         <List size={25} />
                    </button>

                    <div className="border-[1.5px] border-gray-300 h-8 md:mx-4"></div>

                    <p className="text-primary">Showing 1–{fetchItems.limit} of {tatalProducts} results</p>
               </div>

               <div className="flex items-center gap-2 sm:gap-4 sm:text-lg text-base ">
                    <label className="text-primary">Show</label>
                    <input
                         type="number"
                         value={fetchItems.limit}
                         onChange={handleShowChange}
                         className="w-10 sm:w-14 px-0 py-2 sm:py-3  rounded-sm bg-white text-center outline-none text-secondary"
                    />

                    <label className="text-primary ml-4">Sort by</label>
                    <select

                         className="sm:p-3 p-2 rounded-sm bg-white outline-none appearance-none text-secondary">
                         <option>Default</option>
                         <option>Price: Low to High</option>
                         <option>Price: High to Low</option>
                         <option>Newest</option>
                    </select>
               </div>
          </div>
     );
};

export default ProductToolbar;
