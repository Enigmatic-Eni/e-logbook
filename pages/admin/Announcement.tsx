import Navbar from '@/components/adminComp/navbar'
import Sidebar from '@/components/adminComp/sidebar'
import React from 'react'

export default function Announcement() {
  return (
    <div className=' flex'>
        <Sidebar/>
        <div className=' w-full'>
            <Navbar/>

            <div className=' flex flex-col my-11'>
                <input type="text" className=' border-gray-500 border-2 mx-60 h-36 rounded-lg'/>
                <div className=' flex justify-center'>
                <button className=' bg-gray-700 px-7 py-4 text-lg text-white my-5 rounded-lg'>Post</button>
                </div>
            </div>

        </div>
    </div>
  )
}
