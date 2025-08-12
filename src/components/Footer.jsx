import React from "react";

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";


const Footer = () => {
   return (
      <div className="w-full h-full bg-gray-950 flex flex-col items-center justify-evenly">
         <div className="w-full h-1/5 flex items-center justify-center">
            <div className="w-10/12 h-full flex items-center justify-evenly border-b-1 border-gray-300">
               <div className="w-2/9 h-full flex flex-col items-center justify-evenly">
                  <div className="w-full flex gap-3 items-center">
                     <FaMapMarkerAlt className="text-3xl text-orange-500" />
                     <div className="w-2/3 h-full flex flex-col justify-center">
                     <p className="text-xl font-semibold text-gray-300">Find Us</p>
                     <p className="text-xs font-light text-gray-300">Kigali, Nyarugenge, KG 103st 200 Avenue</p>
                     </div>
                  </div>
               </div>
               <div className="w-2/9 h-full flex flex-col items-center justify-evenly">
                  <div className="w-full h-full flex gap-3 items-center">
                     <FaPhone className="text-3xl text-orange-500" />
                     <div className="w-2/3 h-full flex flex-col justify-center">
                        <p className="text-xl font-semibold text-gray-300">Call Us</p>
                        <p className="text-xs font-light text-gray-300">+250 739 420 593, +250 783 699 920</p>
                     </div>
                  </div>
               </div>
               <div className="w-2/9 h-full flex flex-col items-center justify-evenly">
                  <div className="w-full flex gap-3 items-center">
                     <FaEnvelope className="text-3xl text-orange-500" />
                     <div className="w-2/3 h-full flex flex-col justify-center">
                        <p className="text-xl font-semibold text-gray-300">Email Us</p>
                        <p className="text-xs font-light text-gray-300">blueblog@gmail.com</p>
                     </div>

                  </div>
               </div>
            </div>
         </div>
         <div className="w-full h-6/9 flex items-center justify-evenly">
            <div className=" w-2/7 h-full flex flex-col justify-evenly relative left-20 ">
               <div className="w-2/5 h-2/6 bg-green-400 relative"></div>
               <div className="w-full h-3/6">
                  <p className="text-sm text-gray-300/80 w-10/11 leading-5">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis ipsum ad, exercitationem porro enim aspernatur magnam dolore sapiente aperiam
                  </p>
               </div>
            </div>
            <div className="w-2/8 h-full flex flex-col items-center gap-5">
               <div>
                  <p className="font-semibold text-xl text-orange-500">Useful Links</p>
               </div>
               <div className="w-1/5 flex flex-col items-start relative -left-4">
                  <p className="text-gray-300 font-light hover:font-gray-200 hover:font-semibold transition duration-150">Home</p>
                  <p className="text-gray-300 font-light hover:font-gray-200 hover:font-semibold transition duration-150">Blogs</p>
                  <p className="text-gray-300 font-light hover:font-gray-200 hover:font-semibold transition duration-150">About</p>
                  <p className="text-gray-300 font-light hover:font-gray-200 hover:font-semibold transition duration-150">Contact</p>
               </div>
            </div>
            <div className="w-2/8 h-full flex flex-col items-center gap-5">
               <div>
                  <p className="font-semibold text-xl text-orange-500">Services</p>
               </div>
               <div className="w-2/5 flex flex-col items-start relative left-10">
                  <p className="text-gray-300 font-light hover:font-gray-200 hover:font-semibold transition duration-150">Daily Articles</p>
                  <p className="text-gray-300 font-light hover:font-gray-200 hover:font-semibold transition duration-150">Content and Search</p>
                  <p className="text-gray-300 font-light hover:font-gray-200 hover:font-semibold transition duration-150">Topic Categories</p>
                  <p className="text-gray-300 font-light hover:font-gray-200 hover:font-semibold transition duration-150">Newsletter</p>
               </div>
            </div>
            <div className="w-2/8 h-full flex flex-col items-center gap-5">
               <div>
                  <p className="font-semibold text-xl text-orange-500">Follow Us On</p>
               </div>
               <div className="w-1/5 flex flex-col items-start relative">
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
               </div>
            </div>
         </div>
         <div className="w-10/12 h-1/14 flex items-center justify-center border-t-1 border-gray-300/30">
            <p className="font-light text-sm text-gray-200/50">&copy; Copyright by Guerschom IGIRANEZA UHIRIWE. Pioneers.Inc</p>
         </div>
      </div>
    );
}
 
export default Footer