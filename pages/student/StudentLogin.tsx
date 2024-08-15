import React from 'react'

export default function StudentLogin() {
  return (
    <div className=' flex justify-center'>
      <div className=' lg:w-[40%]'>
      <div className=' font-black text-3xl mt-10'>Login as Student to E-logbook</div>

      <div className='w-[89%]'>

        <div className='flex flex-col '>
        <input type="email" className=" border-2 border-gray-400 p-3 mb-4 rounded-lg mt-10 focus:border-blue-500 outline-none" placeholder='Enter your email'/>
        </div>

<div className='flex flex-col'>
        <input type="password" className='border-2 border-gray-400 p-3 my-4 rounded-lg focus:border-blue-500 outline-none' placeholder='Enter your password'/>
        </div>
<div className=' flex flex-col mt-6'>
        <button className=' bg-blue-700 hover:bg-blue-500 py-4 rounded-lg mb-5 justify-center flex text-white font-bold'>Enter</button>
        </div>
        </div>
        </div>
    </div>
  )
}
