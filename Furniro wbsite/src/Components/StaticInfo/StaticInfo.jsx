import React from 'react'
const StaticInfo = () => {
     return (
          <>
               <div className="flex flex-col items-start justify-between gap-2 sm:gap-3 md:gap-5 max-w-sm mx-auto p-6 ">

                    <div className="flex items-start gap-2 sm:gap-4">
                         <i className="fas fa-map-marker-alt text-xl sm:text-2xl"></i>
                         <div className="ml-2">
                              <h3 className="font-medium leading-snug text-lg sm:text-xl md:text-2xl">Address</h3>
                              <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States
                                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit necessitatibus quod quae modi quo a tenetur consequatur dolores in repellat, corrupti harum minus explicabo. Magni incidunt tempora beatae ipsum amet!
                              </p>
                         </div>
                    </div>


                    <div className="flex items-start gap-2 sm:gap-4">
                         <i className="fas fa-phone-alt text-xl sm:text-2xl"></i>
                         <div className="ml-2">
                              <h3 className="font-medium leading-snug text-lg sm:text-xl md:text-2xl">Phone</h3>
                              <p className="text-gray-600">
                                   <span>Mobile: +(84) 546-6789</span>
                                   <br />
                                   <span>Hotline: +(84) 456-6789</span>
                              </p>
                         </div>
                    </div>


                    <div className="flex items-start gap-2 sm:gap-4">
                         <i className="fas fa-envelope text-xl sm:text-2xl"></i>
                         <div className="ml-2">
                              <h3 className="font-medium leading-snug text-lg sm:text-xl md:text-2xl">Email</h3>
                              <p className="text-gray-600">info@example.com</p>
                         </div>
                    </div>

               </div>
          </>
     )
}

export default StaticInfo
