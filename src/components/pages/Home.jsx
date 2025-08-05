import React, {useEffect, useState} from 'react'
import Article_card from '../Article_card'

const Home = () => {

  return (
   <div className='w-full min-h-screen absolute bg-green-900/10'>
      <div className='w-full h-[45em] rounded-b-2xl overflow-hidden relative -z-100'>
        <img src="images/alab-beach.jpeg" alt="" className='w-full h-full object-cover'/>
      </div>
      <div className='w-full h-[45em] bg-black/40 absolute top-0 rounded-b-2xl'></div>

      <div className='w-full h-[35em] flex flex-col items-center justify-evenly'>
        <div className='w-10/12 h-10 ml-40'>
          <p className='text-3xl font-bold font-sans text-blue-950'>Article Categories</p>
        </div>
        <div className='w-10/12 h-5/7 flex items-center justify-evenly'>
          <Article_card />
          <Article_card />
          <Article_card />
        </div>

        <div className='w-full h-[20em] bg-black'></div>
      </div>
      {/* <div className='w-full h-[10em] bg-black mt-20 mb-2'>

      </div> */}
   </div>
  )
}

export default Home