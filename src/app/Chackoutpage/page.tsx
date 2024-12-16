import React from "react";
export default function Chackoutpage(){
    return(
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
    <div className="bg-white">
      <div className="max-w-screen-lg mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section: Delivery & Form */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">
              How would you like to get your order?
            </h2>
            <p className="text-gray-600 text-sm mb-4">
            Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.
            {' '}
              <a href="#" className="text-blue-500 underline">
                Learn More
              </a>
            </p>

            <button className="w-full p-8 mb-6 border border-gray-800 rounded-xl text-center font-medium hover:bg-gray-100">
                <div className="flex gap-24 ">
              
              <img className="right-full" src="Frame (13).png"  />
              <p>Deliver It</p>
              </div>
            </button>

            {/* Form Section */}
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-200 p-2"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-200 p-2"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Address Line 1</label>
                <input
                  type="text"
                  className="w-full border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-200 p-2"
                  placeholder="Address Line 1"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Address Line 2</label>
                <input
                  type="text"
                  className="w-full border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-200 p-2"
                  placeholder="Address Line 2"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Address Line 3</label>
                <input
                  type="text"
                  className="w-full border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-200 p-2"
                  placeholder="Address Line 3"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Postal Code</label>
                  <input
                    type="text"
                    className="w-full border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-200 p-2"
                    placeholder="Postal Code"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Locality</label>
                  <input
                    type="text"
                    className="w-full border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-200 p-2"
                    placeholder="Locality"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1">State/Territory</label>
                  <select className="w-full border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-200 p-2">
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="saveAddress"
                  className="w-4 h-4 text-indigo-600 border-gray-600 rounded focus:ring-indigo-200"
                />
                <label htmlFor="saveAddress" className="ml-2 text-sm text-gray-700">
                  Save this address to my profile
                </label>
              </div>

              <h3 className="text-md font-semibold mt-6 mb-2">What’s your contact information?</h3>
              <br />
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                
                <input
                  type="email"
                  className="w-full border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-200 p-2"
                  placeholder="Email"
                  
                />
              </div>
              <p>A confirmation email will be sent after checkout.</p>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="text"
                  className="w-full border-gray-600 rounded-md shadow-sm focus:ring focus:ring-indigo-200 p-2"
                  placeholder="Phone Number"
                />
              </div>
              <p>A carrier might contact you to confirm delivery.</p>

              <h1 className="text-md font-semibold mt-6 mb-2">What’s your PAN?</h1>
              <br />
              <div>
                <label className="block text-sm font-medium mb-1">PAN</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 p-2"
                  placeholder="PAN"
                />
              </div>
                <p>Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="consent"
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-200"
                />
                <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
                  I have read and accept the Terms & Conditions.
                </label>
              </div> 
              <br />
              <br />
              <br />
              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="consent"
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-200"
                />
                <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
                I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.
                </label>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-gray-500 text-white p-3 rounded-md hover:bg-gray-700"
              >
                Continue
              </button>
              <br />

            </form>
          </div>

          {/* Right Section: Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>₹ 20,850.00</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Delivery/Shipping</span>
              <span>Free</span>
            </div>
            <br />
            <div className="flex justify-between font-semibold text-gray-800 mt-4">
              
              <span>Total</span>
              <span>₹ 20,850.00</span>
              
            </div>
            <br />
            <p className="text-[11px]">(The total reflects the price of your order, including all duties and taxes)</p>
            <br />

            <div className="mt-6">
                <div className="flex gap-3">
              <img src="Frame (7).png" alt="Product Image" className="w-24 h-24 mx-auto" />
              <p>Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top <br />
                      
              <span className="text-gray-600">  Qty 1 <br />
                       Size L <br />
                       ₹ 3 895.00 </span>
                        </p>
                         </div>
            </div> <br />

            <div className="mt-4">
            <div className="flex gap-3">
              <img src="Image (4).png" alt="Shoe Image" className="w-24 h-24 mx-auto" />
              <p>Nike Air Max 97 SE Men&apos;s Shoes <br />
              <span className="text-gray-600">
                  Qty 1 <br />
                       Size UK 8 <br />
                       ₹ 16 995.00 </span>
</p>
</div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

