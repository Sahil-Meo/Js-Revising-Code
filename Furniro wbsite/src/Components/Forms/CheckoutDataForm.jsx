import React, { useEffect, useState } from 'react';

const CheckoutDataForm = () => {
     const [formData, setFormData] = useState({
          firstname: '',
          lastname: '',
          company: '',
          region: '1',
          street: '',
          city: '',
          province: '1',
          zip: '',
          phone: '',
          email: '',
          additional: '',
     });

     const [paymentMethod, setPaymentMethod] = useState('');
     const [formStatus, setFormStatus] = useState('');
     const [checkoutItems, setCheckoutItems] = useState([]);

     const handleChange = (e) => {
          const { id, value } = e.target;
          setFormData((prev) => ({ ...prev, [id]: value }));
          setFormStatus('')
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          if (!formData.firstname || !formData.lastname || !formData.email || !formData.phone || !paymentMethod) {
               setFormStatus('Please complete all required fields and select a payment method.');
               return;
          }

          console.log('Checkout Submitted:', { ...formData, paymentMethod });
          setFormStatus('Order placed successfully!');
     };

     useEffect(() => {
          const checkoutItems = JSON.parse(localStorage.getItem('cart')) || [];
          if (checkoutItems.length > 0) {
               setCheckoutItems(checkoutItems);
          }
          console.log(checkoutItems);

     }, [])

     return (
          <div className="grid lg:grid-cols-2 gap-8">
               <form onSubmit={handleSubmit} className="lg:px-20">
                    <h3 className="font-semibold text-2xl md:text-4xl mb-10 text-primary">Billing details</h3>
                    {formStatus && (
                         <p className="text-sm text-green-600 mt-[-20px] mb-5">{formStatus}</p>
                    )}
                    <div className="flex flex-col gap-6">
                         <div className="flex flex-col lg:flex-row gap-6">
                              <div className="flex flex-col gap-4 w-full lg:w-1/2">
                                   <label className="font-medium" htmlFor="firstname">First Name *</label>
                                   <input
                                        id="firstname"
                                        type="text"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        className="border p-4 rounded-lg border-[#9F9F9F] focus:outline-none"
                                        required
                                   />
                              </div>
                              <div className="flex flex-col gap-4 w-full lg:w-1/2">
                                   <label className="font-medium" htmlFor="lastname">Last Name *</label>
                                   <input
                                        id="lastname"
                                        type="text"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        className="border p-4 rounded-lg border-[#9F9F9F] focus:outline-none"
                                        required
                                   />
                              </div>
                         </div>

                         <div className="flex flex-col gap-4">
                              <label className="font-medium" htmlFor="company">Company Name (Optional)</label>
                              <input
                                   id="company"
                                   type="text"
                                   value={formData.company}
                                   onChange={handleChange}
                                   className="border p-4 rounded-lg border-[#9F9F9F] focus:outline-none"
                              />
                         </div>

                         <div className="flex flex-col gap-4">
                              <label className="font-medium" htmlFor="region">Country / Region</label>
                              <select
                                   id="region"
                                   value={formData.region}
                                   onChange={handleChange}
                                   className="border p-4 rounded-lg border-[#9F9F9F]"
                              >
                                   <option value="1">Pakistan</option>
                                   <option value="2">United States</option>
                                   <option value="3">Canada</option>
                              </select>
                         </div>

                         <div className="flex flex-col gap-4">
                              <label className="font-medium" htmlFor="street">Street Address</label>
                              <input
                                   id="street"
                                   type="text"
                                   value={formData.street}
                                   onChange={handleChange}
                                   className="border p-4 rounded-lg border-[#9F9F9F] focus:outline-none"
                              />
                         </div>

                         <div className="flex flex-col gap-4">
                              <label className="font-medium" htmlFor="city">Town / City</label>
                              <input
                                   id="city"
                                   type="text"
                                   value={formData.city}
                                   onChange={handleChange}
                                   className="border p-4 rounded-lg border-[#9F9F9F] focus:outline-none"
                              />
                         </div>

                         <div className="flex flex-col gap-4">
                              <label className="font-medium" htmlFor="province">Province</label>
                              <select
                                   id="province"
                                   value={formData.province}
                                   onChange={handleChange}
                                   className="border p-4 rounded-lg border-[#9F9F9F]"
                              >
                                   <option value="1">Western Province</option>
                                   <option value="2">Second Province</option>
                                   <option value="3">Third Province</option>
                              </select>
                         </div>

                         <div className="flex flex-col gap-4">
                              <label className="font-medium" htmlFor="zip">ZIP Code</label>
                              <input
                                   id="zip"
                                   type="text"
                                   value={formData.zip}
                                   onChange={handleChange}
                                   className="border p-4 rounded-lg border-[#9F9F9F] focus:outline-none"
                              />
                         </div>

                         <div className="flex flex-col gap-4">
                              <label className="font-medium" htmlFor="phone">Phone *</label>
                              <input
                                   id="phone"
                                   type="text"
                                   value={formData.phone}
                                   onChange={handleChange}
                                   className="border p-4 rounded-lg border-[#9F9F9F] focus:outline-none"
                                   required
                              />
                         </div>

                         <div className="flex flex-col gap-4">
                              <label className="font-medium" htmlFor="email">Email Address *</label>
                              <input
                                   id="email"
                                   type="email"
                                   value={formData.email}
                                   onChange={handleChange}
                                   className="border p-4 rounded-lg border-[#9F9F9F] focus:outline-none"
                                   required
                              />
                         </div>

                         <div className="flex flex-col gap-4 mt-6">
                              <input
                                   placeholder="Additional information"
                                   id="additional"
                                   type="text"
                                   value={formData.additional}
                                   onChange={handleChange}
                                   className="border p-4 rounded-lg border-[#9F9F9F] focus:outline-none"
                              />
                         </div>

                         {/* <button
                              type="submit"
                              className="mt-6 outline-none bg-ochre text-white py-3 px-6 rounded-lg hover:bg-ochre/90 transition"
                         >
                              Submit
                         </button> */}
                    </div>
               </form>

               {/* Order Summary & Payment details here */}
               <div className="lg:px-10 mt-12">
                    <div className="w-full flex flex-col gap-6 border-b border-[#D9D9D9] pb-10">
                         <div className="text-2xl font-medium flex justify-between">
                              <p>Product</p>
                              <p>Subtotal</p>
                         </div>
                         <div className="max-h-[40vh] overflow-y-auto flex flex-col gap-6">
                              {checkoutItems.map((item, index) => (
                                   <div key={index} className="flex justify-between pr-4">
                                        <p className="text-secondary font-normal text-xl">{item.title} <span className="text-black text-[12px]">x {item.quantity}</span></p>
                                        <p className="font-light">Rs. {item.price * item.quantity}</p>
                                   </div>
                              ))}
                         </div>
                         <div className="flex justify-between">
                              <p>Subtotal</p>
                              <p className="font-light">Rs. {checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
                         </div>
                         <div className="flex justify-between">
                              <p>Total</p>
                              <p className="font-bold lg:text-2xl text-ochre">Rs. {checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
                         </div>
                    </div>

                    <div className="text-[#9F9F9F] py-4">
                         <div className="mb-3">
                              <label htmlFor="bank" className="inline-flex items-center gap-3 cursor-pointer">
                                   <input
                                        type="radio"
                                        id="bank"
                                        name="payment"
                                        value="bank"
                                        checked={paymentMethod === 'bank'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="peer sr-only"
                                   />
                                   <span className="w-3 h-3 border border-[#9F9F9F] rounded-full peer-checked:bg-black peer-checked:border-black"></span>
                                   Direct Bank Transfer
                              </label>
                              {paymentMethod === 'bank' && (
                                   <p className="text-sm mt-2">
                                        Make your payment directly into our bank account. Use your Order ID as the payment reference.
                                   </p>
                              )}
                         </div>

                         <div>
                              <label htmlFor="cash" className="inline-flex items-center gap-3 cursor-pointer">
                                   <input
                                        type="radio"
                                        id="cash"
                                        name="payment"
                                        value="cash"
                                        checked={paymentMethod === 'cash'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="peer sr-only"
                                   />
                                   <span className="w-3 h-3 border border-[#9F9F9F] rounded-full peer-checked:bg-black peer-checked:border-black"></span>
                                   Cash On Delivery
                              </label>
                              {paymentMethod === 'cash' && (
                                   <p className="text-sm mt-2">
                                        You will pay upon delivery. Please have the exact amount ready.
                                   </p>
                              )}
                         </div>
                    </div>

                    <p className="mb-8 text-sm text-[#9F9F9F]">
                         Your personal data will be used to support your experience throughout this website and for other purposes described in our <b>privacy policy</b>.
                    </p>

                    <div className="text-center">
                         <button
                              onClick={handleSubmit}
                              className="text-xl border outline-none border-ochre  text-ochre hover:bg-ochre  hover:text-white duration-300 rounded-lg py-3 w-1/2 lg:px-20"
                         >
                              Place order
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default CheckoutDataForm;
