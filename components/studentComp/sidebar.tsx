import Link from 'next/link';
import router from 'next/router';
import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { CiLogout, CiViewList } from "react-icons/ci";
import { RiMegaphoneFill } from "react-icons/ri";

export default function Sidebar() {

    const links = [
        {
            icon: <IoPersonOutline/>,
            path: ``,
            name: "Profile"
        },
        {
            icon: <FaPen/>,
            path: ``,
            name: "Supervisor"
        },
        {
            icon: <CiViewList/>,
            path: ``,
            name: "Documents"
        },
        {
            icon: <RiMegaphoneFill />,
            path: ``,
            name: "Logbook"
        }
    ]

  return (
    <div className=' bg-gray-700 w-full  text-white pl-5 py-4 h-screen m-0'>
        <div className=' text-xl font-extrabold pb-20'>E-Siwes Portal</div>
       
        <div className=' flex flex-col gap-9 '>
            {links.map((items, index) =>
            <div key={index}>
                <Link href="#" key={index}>
                <button className={` flex gap-5 hover:text-green-400 items-center`}>
                    <p>{items.icon}</p>
                    <p className=''>{items.name}</p>
                </button>

                </Link>

            </div>
            )}
        </div>

        <div>
            <button className=' text-white flex items-center gap-5 mt-[36px] hover:text-green-400'>
                <p><CiLogout/></p>
                <p className=''>Log Out</p>
            </button>
        </div>
    </div>
  )
}
