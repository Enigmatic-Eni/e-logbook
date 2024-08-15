import React from 'react'
import Link from 'next/link'
import router from 'next/router'

export default function Homepage() {
  return (
    <div className=' flex justify-center p-3'>
        <div className=' lg:w-[40%]'>
            <div className=' flex flex-col justify-center items-center'>
        <p className=' text-3xl font-extrabold pb-3 '>Welcome to E-Logbook</p>
        <p className=' text-xl pb-6'>The official SIWES Portal</p>
        </div>
        <div className="sign-in">
            <p className=' text-3xl font-extrabold'>Sign in </p>
            <div className=' flex flex-col text-white py-6'>
               <div className=' bg-gray-700 py-4 rounded-lg mb-5 hover:bg-gray-500 justify-center flex'><button onClick={() => router.push('/admin/AdminLogin')}>Continue as Administrator</button></div> 
               <div className=' bg-purple-600 hover:bg-purple-500 py-4 rounded-lg mb-5 justify-center flex'> <button onClick={() => router.push('/supervisor/SupervisorLogin')}>Continue as Supervisor</button></div>
                
            <div className='bg-blue-700 hover:bg-blue-500 py-4 rounded-lg mb-5 justify-center flex'><Link href="/student/StudentLogin"> <button>Continue as Student</button></Link></div>
            </div>
        </div>
        </div>
    </div>
  )
}
