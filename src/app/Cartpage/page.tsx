// import Link from "next/link"
// import Image from 'next/image'
 


export default function Cartpage(){
    return(
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />


     <div className="container mx-auto p-6">
    <div className="flex flex-col md:flex-row gap-6">

      {/* Bag Section */}
      <div className="flex-1 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Bag</h2>
        
        {/* Item 1 */}
        <div className="flex items-start gap-4 mb-6">
         <img className="w-20 h-20"src="Frame (7).png"alt=""  />
         
       
          <div className="flex-1">
            <div className="flex gap-60">
            <h3 className="text-lg font-medium">Nike Dri-FIT ADV Techknit Ultra</h3>
            <h3>MRP: ₹ 3,895.00</h3>
            </div>
            <img src="Frame (7).png" alt="" />
            <p className="text-gray-500">Men&quot;s Short-Sleeve Running Top</p>
            <p className="text-gray-500">Ashen Slate/Cobalt Bliss</p>
            <div className="flex gap-8">
            <p className="text-gray-700 mt-1">Size: L</p>
            <p className="text-gray-700 mt-1">Quantity: 1</p>
            </div>
            <p className="text-gray-700">MRP: ₹ 3,895.00</p>
          </div>
        
        </div>

        {/* Item 2 */}
        <div className="flex items-start gap-4">
          <img src="Image (4).png" alt="Nike Shoes" className="w-20 h-20 object-cover" />
          <div className="flex-1">
          <div className="flex gap-64">
            <h3 className="text-lg font-medium">Nike Air Max 97 SE</h3>
            <h3 className="">MRP: ₹ 16 995.00</h3>
            </div>
            <p className="text-gray-500">Men&apos;s Shoes</p>
            <p className="text-gray-500">Flat Pewter/Light Bone/Black/White</p>
            <div className="flex gap-8">
            <p className="text-gray-700 mt-1">Size: 8</p>
            <p className="text-gray-700 mt-1">Quantity: 1</p>
            </div>
            <p className="text-gray-700">MRP: ₹16,995.00</p>
          </div>
         
        </div>
      </div>

      {/* Summary Section */}
      <div className="w-full md:w-1/3 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <div className="flex justify-between text-gray-700 mb-2">
          <p>Subtotal</p>
          <p>₹ 20,890.00</p>
        </div>
        <div className="flex justify-between text-gray-700 mb-4">
          <p>Estimated Delivery & Handling</p>
          <p>Free</p>
        </div>
        <hr className="mb-4" />
        <div className="flex justify-between text-lg font-semibold">
          <p>Total</p>
          <p>₹ 20,890.00</p>
        </div>
        
        <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          Member Checkout
        </button>
      </div>

    </div>
  </div>
  <br />
  <br />
  <img src="Frame (2).png" alt="" />
 
        </div>
    )
}