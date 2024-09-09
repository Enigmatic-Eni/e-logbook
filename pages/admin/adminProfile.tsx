
import React from 'react'
import Sidebar from '@/components/adminComp/sidebar'
import Navbar from '@/components/adminComp/navbar'

export default function AdminHome() {
  return (
    <div className='flex'>
        <Sidebar/>
<div className=' w-full'>
  <Navbar/>
  <div className="text-black flex items-center justify-center my-4">
    <div className=" w-[40%] flex flex-col items-center justify-center  border-2 border-gray-500 rounded-xl
    py-8">
      <div className=" w-[40%]">
        <img
          src="/Employee2.jpg"
          className=" w-full h-full rounded-[50%] object-cover "
          alt=""
        />
      </div>

      <div className=" flex flex-col items-center text-xl font-bold">
        <p className=" py-3">Professor Akinlade</p>
        <p className=" pb-3">HOD Comuter Science</p>
        <p className="">SIWES Administrator</p>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}
