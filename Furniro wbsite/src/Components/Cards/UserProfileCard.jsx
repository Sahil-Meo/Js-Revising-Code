import React, { useContext, useState } from 'react';
import WebContext from '../../ContextApi/WebContext';

const UserProfileCard = () => {
     const { userData, setUserData, setIsUserLoggedIn } = useContext(WebContext);
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [isEditMode, setEditMode] = useState(false);

     const handleEditProfile = () => {
          setUserData((prevData) => ({
               ...prevData,
               name: 'New Name',
               email: 'newemail@example.com',
               avatar: 'https://randomuser.me/api/portraits/men/79.jpg',
          }));
          setEditMode(!isEditMode);
          setIsMenuOpen(false);
     };

     const handleLogout = () => {
          setUserData(null);
          setIsUserLoggedIn(false);
          setIsMenuOpen(false);
     };

     return (
          <div className="w-full max-w-[320px] bg-white border border-gray-200 rounded-lg shadow-md">
               {/* Dropdown menu button */}
               <div className="flex justify-end px-4 pt-4 relative">
                    <button
                         onClick={() => setIsMenuOpen(!isMenuOpen)}
                         className="inline-block text-gray-500 hover:bg-gray-100 focus:outline-none rounded-lg text-sm p-1.5"
                    >
                         <span className="sr-only">Open menu</span>
                         <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 3"
                              xmlns="http://www.w3.org/2000/svg"
                         >
                              <path d="M2 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3Zm6 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3Zm6 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3Z" />
                         </svg>
                    </button>

                    {isMenuOpen && (
                         <div className="absolute top-10 right-4 z-20 w-44 bg-white rounded-md shadow-lg">
                              <ul className="py-2 text-sm text-gray-700">
                                   <li>
                                        <button
                                             onClick={handleEditProfile}
                                             className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                        >
                                             Edit Profile
                                        </button>
                                   </li>
                                   <li>
                                        <button
                                             onClick={handleLogout}
                                             className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                                        >
                                             Logout
                                        </button>
                                   </li>
                              </ul>
                         </div>
                    )}
               </div>

               {/* Profile Info */}
               <div className="flex flex-col items-center pb-5">
                    <img
                         className="w-24 h-24 my-5 rounded-full shadow-lg object-cover"
                         src={userData?.avatar}
                         alt={userData?.name}
                    />
                    <input
                         className={`mb-1 text-xl font-medium text-gray-900 outline-none bg-transparent ${isEditMode ? 'border-b border-gray-300 focus:border-blue-500' : ''
                              } text-center`}
                         value={userData?.name}
                         readOnly={!isEditMode}
                         onChange={(e) =>
                              setUserData({ ...userData, name: e.target.value })
                         }
                         placeholder="Name"
                    />
                    <span className="text-sm text-gray-500">{userData?.email}</span>
               </div>

               {/* Action Buttons */}
               <div className="flex items-center justify-around px-4 py-5">
                    <button
                         onClick={handleEditProfile}
                         className={`px-4 py-2 text-sm font-medium rounded-md ${isEditMode
                                   ? 'bg-ochre text-white'
                                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                    >
                         {isEditMode ? 'Save' : 'Edit Profile'}
                    </button>
                    <button
                         onClick={handleLogout}
                         className="px-4 py-2 text-sm font-medium bg-ochre text-white rounded-md"
                    >
                         Logout
                    </button>
               </div>
          </div>
     );
};

export default UserProfileCard;
