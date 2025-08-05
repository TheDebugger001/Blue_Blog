import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const Article_card = () => (
   // <div className='w-2/8 h-full flex flex-col border-1 border-gray-400 rounded-2xl overflow-hidden'>
   //    <div className='w-[20.6em] h-14 absolute z-100 mt-3 flex items-center justify-end'>
   //       <Link className='w-14 h-full mr-3 flex items-center justify-center'>
   //          <button className='w-10 h-10 rounded-full bg-gray-300 relative flex items-center justify-center border-1 border-gray-700'>
   //             <FiArrowRight className='text-3xl font-light text-blue-950 -rotate-45' />
   //          </button>
   //       </Link>
   //    </div>
   //    <div className='w-[20.5em] h-[10em] bg-linear-to-t bg-black/50  rounded-b-2xl absolute z-100 bottom-10 flex flex-col gap-5'>
   //       <p className='text-3xl font-semibold text-gray-200 mt-3 ml-5'>Travel</p>
   //       <p className='text-[15px] text-gray-200 w-10/12 ml-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut delectus</p>
   //    </div>
   //    <div className='w-full h-full flex items-center justify-center relative z-20'>
   //       <img src="/images/Beach.jpeg" alt="" className='w-full h-full object-cover relative -z-100' />
   //    </div>
   // </div>

   
      <div className='w-[25.6em] h-[24em] border border-gray-400 rounded-2xl overflow-hidden relative'>
    
        {/* Background Image */}
        <img
          src="/images/Beach.jpeg"
          alt="Beach"
          className="w-full h-full object-cover"
        />
    
        {/* Top-right Arrow Button */}
        <div className='absolute top-3 right-3 z-20'>
          <Link>
            <button className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center border border-gray-700'>
              <FiArrowRight className='text-3xl text-blue-950 -rotate-45' />
            </button>
          </Link>
        </div>
    
        {/* Bottom Text Overlay */}
        <div className='absolute bottom-0 left-0 w-full h-[10em] bg-gradient-to-t from-black/80 to-transparent p-5 z-10 flex flex-col justify-end'>
          <p className='text-3xl font-semibold text-gray-200'>Travel</p>
          <p className='text-[15px] text-gray-200 w-10/12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut delectus
          </p>
        </div>
    
      </div>
)

export default Article_card