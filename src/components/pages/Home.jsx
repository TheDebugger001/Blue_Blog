import React from 'react'
import { Link } from 'react-router-dom'
import Article_card from '../Article_card'
import Footer from '../Footer'

const Home = () => {

  return (
   <div className='w-full min-h-screen absolute bg-green-900/10'>
      <div className='w-full h-[45em] rounded-b-2xl overflow-hidden relative -z-100'>
        <img src="images/alab-beach.jpeg" alt="" className='w-full h-full object-cover'/>
      </div>
      <div className='w-full h-[45em] bg-black/40 absolute top-0 rounded-b-2xl'></div>

      <div className='w-full h-[35em] flex flex-col items-center justify-evenly mt-10'>
        <div className='w-10/12 h-10 ml-40'>
          <p className='text-3xl font-bold font-sans text-blue-950'>Article Categories</p>
        </div>
        <div className='w-10/12 h-5/7 flex items-center justify-evenly mt-4'>
          <Article_card />
          <Article_card />
          <Article_card />
        </div>
      </div>

      <div className='w-full h-[25em] bg-black mt-20 mb-2 flex justify-center rounded-xl'>
        <div className='w-5/8 h-8/9 flex flex-col gap-4 justify-center relative left-20'>
          <p className='text-gray-200 text-4xl font-semibold w-4/6'>Subscribe to our newsletter to receive our news</p>
          <p className='text-gray-200 font w-3/5 text-sm font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus reprehenderit corporis quibusdam dolorum quae ducimus</p>
            <div className='w-full h-2/5'>
              <input type="text" placeholder='Enter your email' className='w-3/7 h-4/12 rounded-xl rounded-r-none bg-gray-200/80 pl-4 pr-3 outline-none placeholder:text-gray-700' />
              <Link to="" className='w-2/10 h-4/12 bg-green-500'>
                <button className='w-2/12 h-4/12 rounded-xl rounded-l-none relative top-[1px] bg-blue-950 text-lg font-semibold text-gray-200 hover:bg-blue-900'>Subscribe</button>
              </Link>
            </div>

        </div>
        <div className='w-1/2 h-full relative -left-10'>
          <img src="/images/info_pc.png" className='relative -top-10' />

        </div>
      </div>

      <div className='w-full h-[30em] mt-10'>
        <Footer />
      </div>
   </div>
  )
}

export default Home