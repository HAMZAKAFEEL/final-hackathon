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
       
       
        <h1 className="text-2xl font-bold text-center mb-4">Become a Nike Member</h1>
        <p className="text-center text-gray-500 mb-6">
          Create your Nike Member profile and get access to the best of Nike products, inspiration, and community.
        </p>
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
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              id="country"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            >
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <div className="flex items-center space-x-4">
              <label>
                <input type="radio" name="gender" value="male" className="mr-2" />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" className="mr-2" />
                Female
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Sign up for emails to get updates on products, offers, and benefits.
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Join Us
          </button>
        </form>
      </div>
    </div>
    </center>
    
  );
};


export default SignupForm;
