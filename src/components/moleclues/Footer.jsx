import React from 'react'
import { ImPinterest2 } from "react-icons/im";
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full lg:h-[31.25rem] bg-[#dbe3dc] flex md:justify-between justify-center md:items-center md:gap-y-0 gap-y-[1rem]  md:flex-row flex-col  px-[1rem] md:py-0  py-[3rem] md:p-[2rem]  ">
<div className="lg:w-[22.5rem] space-y-[1.1rem] ">
      <p className="text-[#3A643B] font-semibold  text-[1.125rem]">Get in touch</p>
    <div className="md:space-y-[1rem] space-y-1.5">
      <p className='md:text-[1.2rem] text-[0.9rem]'>support@amrutam.co.in</p> 
       <p className='md:text-[1.2rem] text-[0.9rem]'>Amrutam Pharmaceuticals Pvt Ltd.</p> 
       <p className='md:text-[1.2rem] text-[0.9rem]'>Chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001</p>
       <p className='md:text-[1.2rem] text-[0.9rem]'>+91 9713171999</p>
    </div>
    <div className="flex gap-x-[0.8rem]">
      <div className=" relative w-[2.5rem] h-[2.5rem] rounded-full hover:scale-105 transition-all hover:shadow-2xl flex justify-center items-center bg-[#3A643B]">
      <FaFacebookF className='md:text-xl text-lg text-[#edf0ede9]'/>
      </div>
      <div className=" relative w-[2.5rem] h-[2.5rem] rounded-full hover:scale-105 transition-all hover:shadow-2xl flex justify-center items-center bg-[#3A643B]">
        <FaInstagram className='md:text-xl text-lg text-[#edf0ede9]' />
      </div>
      <div className=" relative w-[2.5rem] h-[2.5rem] rounded-full hover:scale-105 transition-all hover:shadow-2xl flex justify-center items-center bg-[#3A643B]">
        <AiOutlineYoutube className='md:text-xl text-lg text-[#edf0ede9]' />
      </div>
      <div className=" relative w-[2.5rem] h-[2.5rem] rounded-full hover:scale-105 transition-all hover:shadow-2xl flex justify-center items-center bg-[#3A643B]">
        <FaXTwitter className='md:text-xl text-lg text-[#edf0ede9]'/>
      </div>
      <div className=" relative w-[2.5rem] h-[2.5rem] rounded-full hover:scale-105 transition-all hover:shadow-2xl flex justify-center items-center bg-[#3A643B]">
        <FaLinkedinIn className='md:text-xl text-lg text-[#edf0ede9]'/>
      </div>
      <div className=" relative w-[2.5rem] h-[2.5rem] rounded-full hover:scale-105 transition-all hover:shadow-2xl flex justify-center items-center bg-[#3A643B]">
        <ImPinterest2 className='md:text-xl text-lg text-[#edf0ede9]'/>
      </div>
    </div>
</div>
<div className="md:space-y-0 space-y-[1rem]">
    <p className="text-[#3A643B] font-semibold text-[1.125rem] ">Information</p>
    <ul className="text-[#474747] md:text-[1.125rem]">
      <li>About Us</li>
      <li>Terms and Conditions</li> 
      <li>Privacy Policy</li> 
      <li>Privacy Policy for Mobile Apps</li>
      <li>Shipping and Returns Policy</li>
      <li>International Delivery </li> 
      <li>For Businesses, Hotels and Resorts</li>  
    </ul>
</div> 
<div className="w-[22.5rem] space-y-[1.2rem]">
  <p className="text-[#3A643B] md:text-[1.125rem] font-bold">
    Subscribe to our Newsletter and join Amrutam Family today!
  </p>
  <div className="flex items-center border border-[#3A643B] rounded-full overflow-hidden">
    <input
      className="w-full h-[3.5rem] px-[1.5rem] text-[#3A643B] placeholder-[#3A643B] focus:outline-none"
      type="email"
      placeholder="Your Email Address"
    />
    <button className="bg-black text-white h-[3.5rem] px-6 md:text-[1rem] text-[0.95rem] font-medium">
      Subscribe
    </button>
  </div>
</div>

</div>
  )
}

export default Footer