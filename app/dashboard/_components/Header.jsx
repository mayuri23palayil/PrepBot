"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

import { useRouter } from 'next/navigation'

function Header() {
    const path=usePathname();
    const router=useRouter();
    useEffect( ()=>{
    console.log(path)
    },[]) 
  return (      
    <div className='flex p-4 items-center justify-between shadow-sm bg-yellow-200'>
        <Image src={'/logomock.png'} width={80} height={10} alt='logo'  className="rounded-full"  />
        <ul className=' hidden md:flex gap-6'>
            <li onClick={()=>router.replace('/dashboard')} className='hover:text-blue-800 hover:font-bold transition-all cursor-pointer ml-[-50px] text-blue-800 text-3xl font-bold'
            
            >PrepBot-By Mayuri Palayil</li>   
             
           
          
            
        </ul>
        <UserButton />


    </div>
  )
}

export default Header