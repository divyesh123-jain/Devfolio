import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
const NavLinks = ({address, text ,type,icon}) => {

    const path = `${address || ""}`
    if(type==="logout"){
        return(
            <div onClick={()=>handleSignOut()} className={`w-[95%] cursor-pointer mx-auto p-2 flex items-center gap-2  text-md trans hover:bg-white/30  hover:rounded-lg`}>
                {icon}
                <p className='hidden md:block'>{text}</p>
            </div>
        )
    }
    return (
        <Link href={path}>
            <div className={`w-[95%] mx-auto p-2 flex items-center gap-2 "bg-white drop-shadow-xl text-black rounded-lg":""} text-md trans hover:bg-white/30  hover:rounded-lg`}>
                {icon}
                <p className='hidden md:block'>{text}</p>
            </div>
        </Link>
    )
}

export default NavLinks
