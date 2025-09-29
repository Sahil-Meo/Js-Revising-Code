import React, { useContext, useEffect, useState } from 'react';
import WebContext from '../../ContextApi/WebContext';

const Blogs = () => {
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState(null);
     const { page, setTotalPages } = useContext(WebContext);
     const [blogs, setBlogs] = useState([]);
     const pageSize = 2;
     const apiKey = '388e68644cfe43a18a3a9b4828ee1bba';
     const fromDate = '2025-06-29';
     const toDate = '2025-06-29';

     useEffect(() => {
          document.title = 'Blog | FurnitureWeb';
          const fetchBlogs = async () => {
               try {
                    setIsLoading(true);
                    const response = await fetch(`https://newsapi.org/v2/everything?q=apple&from=${fromDate}&to=${toDate}&sortBy=popularity&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`);
                    if (!response.ok) {
                         setError(true)
                         throw new Error('Network response was not ok');
                    }

                    const data = await response.json();
                    console.log(data);
                    setBlogs(data.articles);
                    setTotalPages((data.totalResults / 100) || 1);
               } catch (error) {
                    console.error('Error fetching blogs:', error);
                    setError(true);
               } finally {
                    setIsLoading(false);
               }
          }
          fetchBlogs();
     }, [page, pageSize]);

     if (!blogs && error) {
          return (
               <div className="w-full lg:w-9/12 flex flex-col gap-16">
                    <p className='text-gray-400'>No blogs available.</p>
               </div>
          );
     }

     return (
          <>
               <div className="w-full lg:w-9/12 flex flex-col gap-16">
                    {isLoading && <p className={`${isLoading ? 'block' : 'hidden'} text-gray-400 max-w-sm mx-auto text-center `}>Loading...</p>}
                    {!isLoading && blogs?.map((post, index) => (
                         <div key={index}>
                              <img
                                   loading="lazy"
                                   className="rounded-xl w-full object-cover"
                                   src={post.urlToImage || '/1-05fe5d0a.jpg'}
                                   alt={`Blog ${index + 1}`}
                              />

                              <div className="flex text-sm lg:text-base justify-between lg:justify-start lg:gap-8 py-6 text-[#9F9F9F]">
                                   <span className="flex items-center gap-1">
                                        <i className="fas fa-user"></i>
                                        {post.author || 'Unknown'}
                                   </span>
                                   <span className="flex items-center gap-1">
                                        <i className="fas fa-calendar-alt"></i>
                                        {post.publishedAt || 'Unknown Date'}
                                   </span>
                                   <span className="flex items-center gap-1">
                                        <i className="fas fa-tag"></i>
                                        {post.tag || 'Tag not specified'}
                                   </span>
                              </div>

                              <div className="mb-6">
                                   <h3 className="font-medium text-2xl lg:text-3xl mb-4">
                                        {post.title || 'Unknown Title'}
                                   </h3>
                                   <p className="text-[#9F9F9F]">{post.description || 'No Description Available'}</p>
                              </div>

                              <a
                                   href={post.url || '#'}
                                   target='_blank'
                                   className="relative after:absolute after:bg-black after:h-[1px] after:w-[60%] after:-bottom-3 after:left-4 hover:after:w-full hover:after:left-0 after:duration-300 hover:after:h-1 hover:font-bold duration-300"
                              >
                                   Read more
                              </a>
                         </div>
                    ))}

               </div>
          </>
     );
};

export default Blogs;
