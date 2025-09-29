import { Eye, EyeOff } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import WebContext from '../../ContextApi/WebContext';

const LoginForm = ({ IsSwitch }) => {
     const navigate = useNavigate();
     const { setIsLogin, setUserData,setIsUserLoggedIn } = useContext(WebContext);
     const [formData, setFormData] = useState({
          email: '',
          password: '',
          rememberMe: false,
     });

     const [formErrors, setFormErrors] = useState({});
     const [showPassword, setShowPassword] = useState(false);
     const [errorMsg, setErrorMsg] = useState('');
     const [isLoading, setIsLoading] = useState(false);

     const validateForm = () => {
          const errors = {};
          if (!formData.email.trim()) {
               errors.email = 'Email is required.';
          } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
               errors.email = 'Invalid email format.';
          }
          if (!formData.password.trim()) {
               errors.password = 'Password is required.';
          }
          setFormErrors(errors);
          return Object.keys(errors).length === 0;
     };

     const handleOnChange = (e) => {
          const { name, type, value, checked } = e.target;
          setFormData((prev) => ({
               ...prev,
               [name]: type === 'checkbox' ? checked : value,
          }));
          setFormErrors((prev) => ({ ...prev, [name]: '' }));
          setErrorMsg('');
     };

     const handleLoginForm = async (e) => {
          e.preventDefault();
          if (!validateForm()) return;
          console.log('Form Data:', formData);
          setFormData({ email: '', password: '', rememberMe: false });
          setIsLoading(true);
          setTimeout(() => {
               setIsLoading(false);
               setUserData({
                    name: formData.email.split('@')[0], // Extract name from email
                    email: formData.email,
                    avatar: 'https://randomuser.me/api/portraits/men/79.jpg',
               });
               setIsUserLoggedIn(true);
               navigate('/');
          }, 2000);
     };

     const handleSwitch = () => {
          if (window.innerWidth > 768) IsSwitch(false)
     }

     return (
          <div className="bg-white max-w-[340px] w-full flex flex-col gap-3 sm:gap-6">
               <p className="text-2xl md:text-3xl font-medium text-black">Log in</p>
               <form
                    className="border border-gray-300 flex flex-col gap-3 sm:gap-6 w-full rounded-lg p-6"
                    onSubmit={handleLoginForm}
               >
                    <div>
                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                              Your email
                         </label>
                         <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleOnChange}
                              placeholder="name@company.com"
                              className={`w-full p-2 outline-none rounded-md border ${formErrors.email ? 'border-red-500' : 'border-gray-300'
                                   } bg-gray-50 text-gray-900`}
                         />
                         {formErrors.email && (
                              <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>
                         )}
                    </div>

                    <div>
                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                              Your password
                         </label>
                         <div className="relative">
                              <input
                                   type={showPassword ? 'text' : 'password'}
                                   id="password"
                                   name="password"
                                   value={formData.password}
                                   onChange={handleOnChange}
                                   placeholder="••••••••"
                                   className={`w-full p-2 outline-none pr-10 rounded-md border ${formErrors.password ? 'border-red-500' : 'border-gray-300'
                                        } bg-gray-50 text-gray-900`}
                              />
                              <span
                                   className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600"
                                   onClick={() => setShowPassword((prev) => !prev)}
                              >
                                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                              </span>
                         </div>
                         {formErrors.password && (
                              <p className="text-xs text-red-500 mt-1">{formErrors.password}</p>
                         )}
                    </div>

                    <div className="flex justify-between items-center text-sm">
                         <label className="flex items-center gap-2 text-gray-600">
                              <input
                                   type="checkbox"
                                   name="rememberMe"
                                   checked={formData.rememberMe}
                                   onChange={handleOnChange}
                                   className=""
                              />
                              Remember me
                         </label>
                         <Link to="/resetpassword" className="text-primary hover:underline">
                              Forgot password?
                         </Link>
                    </div>

                    {errorMsg && <p className="text-sm text-red-600 text-center">{errorMsg}</p>}

                    <button
                         type="submit"
                         disabled={isLoading}
                         className={`w-full ${isLoading ? 'bg-ochre cursor-not-allowed' : 'bg-ochre hover:bg-transparent'
                              } text-lg font-semibold text-white border border-ochre hover:text-ochre py-2 rounded-md transition-all`}
                    >
                         {isLoading ? 'Logging in...' : 'Log in'}
                    </button>

                    <p className="text-sm text-center text-gray-600">
                         Not registered?{' '}
                         <Link onClick={handleSwitch} to="#" className="text-ochre hover:underline">
                              Create an account
                         </Link>
                    </p>
               </form>
          </div>
     );
};

export default LoginForm;
