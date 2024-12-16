// import Image from "next/image"
import Link from "next/link"

export default function Navbar(){
    return(
        <div>
            <div className=" flex">
        <div className=" right-[200px]  text-[#000] text-[14px] flex mt-[12px] relative pl-[445px] md:left-[600px]  ">
          <div className="w-[272.81px] h-[36px]  ">
            
           
            <Link className="ml-[25px]" href="/Productlist">Findastore|</Link>
            <Link className="ml-[25px]"href="/Helppage">Help|</Link>
            <Link className="ml-[25px]"href="/Joinus">Joinus|</Link>
            <Link className="ml-[25px]"href="/Login">Signup</Link>
          </div>
          <div className="relative right-[1300px] ">
           
           <img className="w-8" src="/Vector.png "   />
          </div>
        </div>
      </div>

      {/* white work */}
      <div className=" right-[200px] w-[1170px] h-[20px]  relative md:left-[300px] " >
        <div className="w-[674px] h-[20px] gap-[60px] ">
          <h3 className="w-[78.47px] h-[40px] flex left-50 ">
            <div className="  py-10 relative right-full  ">
            <img src="vector (1).png  "  />
            </div>
           
          </h3>
          <div className="gap-0 sm:gap-3 md:gap-4">
          
            <Link className="ml-[65px]"href="/Singlepage">Men</Link>
            <Link className="ml-[75px]" href="/">New&Featured</Link>
            <Link className="ml-[65px]"href="#">Women</Link>
            <Link className="ml-[65px]"href="/Cartpage">Kinds</Link>
            <Link className="ml-[65px]"href="/Chackoutpage">Sale</Link>
            <Link className="ml-[65px]"href="#">SNKRS</Link>
           
           
            <div>
             
            </div>
          </div>
        </div>
      </div>
        </div>
      

    )
   
}





