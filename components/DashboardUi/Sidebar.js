import React from 'react'
import NavLink from './NavLinks'
import Link from 'next/link'
import { RiHeartPulseFill,RiMentalHealthFill } from 'react-icons/ri'
import {GiNightSleep} from 'react-icons/gi'
import {CgGym} from 'react-icons/cg'
import {MdDashboard,MdFoodBank,MdOutlineHelp,MdLogout } from 'react-icons/md'
const Sidebar = () => {
  return (
    <>
   
    <div className='flex flex-col w-[30vh] h-full  '>
    <Link href="/">
    <div className='md:w-full md:mt-4 flex gap-2 text-2xl items-center text-white p-4'>
        <RiHeartPulseFill className='text-2xl' />
        <span className='text-[#053B48] font-bold'>NexTrade</span>
    </div>
</Link>
    <div className="flex md:flex-col ml-auto mr-5 text-white items-center md:items-stretch md:w-full md:gap-4 md:py-4 md:pl-4">
                <NavLink text = "Dashboard" address={"/"} icon = {<MdDashboard />} />
               
                {/* <NavLink type= "logout" text = "Logout" icon = {<MdLogout />}address = "#" /> */}
            </div>
   
    </div>
    </>
  )
}

export default Sidebar
