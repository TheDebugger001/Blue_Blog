import React, {useEffect, useState} from 'react'

const Home = () => {

  return (
   <div className='w-full h-min-screen absolute'>
      <div className='w-full h-[45em] rounded-b-2xl overflow-hidden relative -z-100'>
        <img src="images/alab-beach.jpeg" alt="" className='w-full h-full object-cover'/>
      </div>
      <div className='w-full h-[45em] bg-black/40 absolute top-0 rounded-b-2xl'></div>

      <div className='w-full h-[35em] bg-red-600'>
        
      </div>
   </div>
  )
}

export default Home