// import Navbar from "../component/Navbar";
// import Image from "next/image";


const SignupForm = () => {
  return (
     <center><div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
       <br />
       <br />
       <br />
       <br />
       <center><img src="Vector (1).png"  /></center>
       <br />
       <br />
       
       
        <h1 className="text-2xl font-bold text-center mb-4">YOUR ACCOUNT <br /> FOR EVERY THING <br /> NIKE</h1>
        <br />
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              required
              
              />
         
         
        
          </div>
         
          <div className="mb-4">
            <label className="flex items-center">
            
              By logging in, you agree to Nike&apos;s Privacy Policy and Terms of Use.
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            SIGN IN
          </button>
          <br />
          <br />

          <div>
            <p>Not a Member? <span className="hover:text-red-600">Join Us.</span></p>
          </div>
         
        </form>

      </div>
     
     
    </div>
    <br />
<br />
<img src="Frame (2).png"  />
 
    </center>
    
   

    
  );
};


export default SignupForm;

               