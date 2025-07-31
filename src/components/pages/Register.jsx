import React from 'react'

const Register = () => {
  return (
    <div>
        <form class='addUser' className='flex flex-col items-center justify-evenly h-60 w-4/7 bg-gray-700/10'>
          <h1>Registering Users</h1>

          <input type="text" name='names' placeholder='Names' className='w-3/6 h-12 ring-1 ring-gray-600 rounded-full pl-4 pr-3' />
          <input type="text" name='username' placeholder='Username' className='w-3/6 h-12 ring-1 ring-gray-600 rounded-full pl-4 pr-3' />
          <input type="password" name='password' placeholder='Password' className='w-3/6 h-12 ring-1 ring-gray-600 rounded-full pl-4 pr-3' />

          <button type="submit" className='ring-2 ring-green-700 w-1/5 h-12 rounded-xl hover:bg-green-500 hover:text-white hover:ring-0'>Add a new user</button>
        </form>
        <form class='addUser' className='w-4/7 h-2/7 flex items-center justify-center mt-5'>
          <input type="text" name='names' className='w-3/6 h-12 ring-1 ring-gray-600 rounded-full pl-4 pr-3' />

          <button type='submit' className='w-1/5 h-12 ring-2 ring-red-900 rounded-full hover:bg-red-500 hover:text-white hover:ring-0'>Delete a user</button>
        </form>
    </div>
  )
}


export default Register