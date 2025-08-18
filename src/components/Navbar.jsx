import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

   const [scrolled, setScrolled] = useState(false)

   useEffect(() => {
 
     const handleScroll = () => {
       setScrolled(window.scrollY > 0)
     };
 
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   })

  return (
   <>
      <div className={scrolled ? `w-12/12 h-1/12 fixed z-100 overflow-hidden backdrop-blur-3xl bg-gray-950/70 flex items-center justify-around transition duration-300` : `w-12/12 h-1/12 fixed z-10 overflow-hidden flex items-center justify-around transition duration-300`}>
         <div className='w-4/10 h-full flex items-center justify-between'>
            <div className='w-1/5 h-full bg-red-500/30'></div>   
            <div className='w-5/8 h-full flex items-center justify-evenly'>
               <Link to="" className='font-semibold text-lg text-gray-300 hover:text-orange-500 transition duration-150'>Home</Link>
               <Link to="" className='font-semibold text-lg text-gray-300 hover:text-orange-500 transition duration-150'>Blogs</Link>
               <Link to="" className='font-semibold text-lg text-gray-300 hover:text-orange-500 transition duration-150'>About</Link>
               <Link to="" className='font-semibold text-lg text-gray-300 hover:text-orange-500 transition duration-150'>Contact</Link>
            </div>   
         </div>

         <div className='w-3/10 h-full flex items-center justify-center'>
            <Link to="" className='w-full h-full flex items-center justify-center'>
               <button className='w-7/12 h-9/12 bg-gray-300 rounded-full font-semibold text-lg text-blue-950 hover:border-2 border-gray-200 hover:text-gray-200 hover:bg-transparent transition duration-150'>Subscribe</button>
            </Link>

            <div className='w-5/10 h-full flex items-center justify-evenly'>
               <Link to="" className='w-13 h-13'>
                  <div className='w-full h-full bg-teal-500 rounded-full'></div>
               </Link>
               <div className='w-13 h-13 rounded-full border-1 border-gray-200'>

               </div>
            </div>
         </div>

         
      </div>
   </>
  )
}

export default Navbar