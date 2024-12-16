import React from "react";
export default function Helppage(){
    return(
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
    

    <div className="bg-white text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold">GET HELP</h1>
          <div className="mt-4">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="w-full max-w-lg px-4 py-2 border border-gray-700 rounded"/>
             
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-bold mb-4">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="mb-4">
              We want to make buying your favorite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
              <li>Apple Pay</li>
            </ul>
            <p className="mb-4">
              If you enter your PAN information at checkout, you&apos;ll be able to
              pay for your order with PayTM or a local credit or debit card.
            </p>
            <p className="mb-4">
              <a href="#" className="text-blue-600 underline">
                Nike Members
              </a>{" "}
              can store multiple debit or credit cards in their profile for
              faster checkout. If you&apos;re not already a Member,{" "}
              <a href="#" className="text-blue-600 underline">
                join us today
              </a>
              .
            </p>
            <div className="flex space-x-4 mb-8">
              <button className="bg-black text-white px-6 py-2 rounded-3xl">
                JOIN US
              </button>
              <button className="bg-black text-white px-6 py-2 rounded-3xl">
                SHOP NIKE
              </button>
            </div>

            {/* FAQs */}
            <h3 className="text-lg font-bold mb-4">FAQs</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">
                  Does my card need international purchases enabled?
                 
                </h4>
                <p>
                  Yes, we recommend asking your bank to enable international
                  purchases on your card. You will be notified at checkout if
                  international purchases need to be enabled.
                  <br />
                  <br />
                  <p>Please note, some banks may charge a small transaction fee for international orders.</p>
                </p>
              </div>
              <div>
                <h4 className="font-bold">
                  Can I pay for my order with multiple methods?
                </h4>
                <p>
                  No, currently Nike does not support payments with multiple
                  payment methods.
                  <br />
                  <br />
                </p>
              </div>
              <div>
                <h4 className="font-bold">
                  What payment methods are accepted for SNKRS orders?
                </h4>
                <p>
                  You can use all payment methods that are accepted for your
                  SNKRS order.
                  <br />
                  <br />

                </p>
              </div>
              <div>
                <h4 className="font-bold">
                  Does Nike Apple Pay as an option?
                </h4>
                <p>
                To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.
                </p>
                <br />
                <br />
               <h2>Was this answer Helpfull?</h2>
               <div className="flex gap-4">
                <img src="Frame (8).png"  />
                <img src="Frame (9).png"  />
                <br />
                <br />
                
               </div>
               <h2>RELATED</h2>
               <br />
              <u><h2>WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</h2></u>
               <br />
               <u><h2>
               HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
               </h2></u>
              </div>
             
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white shadow-md p-6 rounded border-spacing-8">
            <center><h2 className="text-lg font-bold mb-4">CONTACT US</h2>
            
            <img src="Image (9).png" />
            <br />
            <h4>000 800 919 0566 <br />
            <br />
Products & Orders: 24 hours a day,<br />
<br /> 7 days a week
Company Info & Enquiries: 07:30 <br />
<br />
 - 16:30, Monday - Friday</h4>
 <br />
 <br />
 <img src="Image (10).png" />
 <br />
 <h3>24 hours a day <br />
 7 days a week</h3>
 <br />
 <br />
 <img src="Image (11).png" />
 <br />
 <h3>We&apos;ll reply within <br />
 five business days</h3>
 <br />
 <br />
 <img src="Image (12).png" />
 <br />
 <h3>STORE LOCATOR <br />
 Find Nike retail stores near you</h3>
            </center>
          </div>
        </div>
      </div>
    </div>
    <br />
    <img src="Frame (2).png" />
    </div>
  );
};

