import React, { useState } from 'react';
import ThirdButton from '../Buttons/ThirdButton';

const ContactForm = () => {
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          subject: '',
          message: ''
     });
     const [message, setMessage] = useState('');
     const [error, setError] = useState('');

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
               ...prev,
               [name]: value
          }));
     };

     const checkFormData = () => {
          if (!formData.name || !formData.email || !formData.subject || !formData.message) {
               setError('Please fill out all fields.');
               return false;
          }
          if (!/\S+@\S+\.\S+/.test(formData.email)) {
               setError('Please enter a valid email address.');
               return false;
          }
          return true;
     };

     const handleSubmit = (e) => {
          e.preventDefault();

          if (checkFormData()) {
               console.log('Form Data:', formData);
               setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
               });
               setMessage('Thank you for your message! We will get back to you soon.');
          }
          setTimeout(() => {
               setMessage('');
               setError('');
          }, 2000);
     };

     return (
          <section className="bg-white dark:bg-gray-900 p-4 rounded-lg">
               <div className="px-4 mx-auto max-w-3xl">
                    {message && <p className={`${message ? 'block' : 'hidden'} text-green-500`}>{message}</p>}
                    {error && <p className={`${error ? 'block' : 'hidden'} text-red-500`}>{error}</p>}
                    <form className="space-y-8" onSubmit={handleSubmit}>
                         <div>
                              <label htmlFor="name" className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-300">
                                   Your name
                              </label>
                              <input
                                   name="name"
                                   value={formData.name}
                                   onChange={handleChange}
                                   type="text"
                                   id="name"
                                   placeholder="John Doe"
                                   required
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full py-4 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                              />
                         </div>

                         <div>
                              <label htmlFor="email" className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-300">
                                   Your email
                              </label>
                              <input
                                   name="email"
                                   value={formData.email}
                                   onChange={handleChange}
                                   type="email"
                                   id="email"
                                   placeholder="your@example.com"
                                   required
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full py-4 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                              />
                         </div>

                         <div>
                              <label htmlFor="subject" className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-300">
                                   Subject
                              </label>
                              <input
                                   name="subject"
                                   value={formData.subject}
                                   onChange={handleChange}
                                   type="text"
                                   id="subject"
                                   placeholder="Let us know how we can help you"
                                   required
                                   className="block py-4 px-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                              />
                         </div>

                         <div className="sm:col-span-2">
                              <label htmlFor="message" className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-400">
                                   Your message
                              </label>
                              <textarea
                                   name="message"
                                   value={formData.message}
                                   onChange={handleChange}
                                   id="message"
                                   rows="6"
                                   placeholder="Leave a comment..."
                                   required
                                   className="block py-4 px-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
                              ></textarea>
                         </div>

                         <button type="submit" className="outline-none border-none">
                              <ThirdButton label="Submit" />
                         </button>
                    </form>
               </div>
          </section>
     );
};

export default ContactForm;