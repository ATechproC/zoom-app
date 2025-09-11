import { assets } from '@/constants'
import Image from 'next/image'
import React from 'react'
import MobileNav from './MobileNav'
import { UserButton } from '@clerk/nextjs'

function NavBar() {
  return (
    <div className='max-sm:w-[97%] m-auto flex-between'>
      <div className='pt-1 cursor-pointer md:hidden'>
        <Image src={assets.logo} alt='logo' width={40} height={40} />
      </div>
      <div className="md:fixed md:top-0 z-10 gap-3 p-2 md:bg-[#1C1F2E] md:w-full md:h-[37px] md:pt-2 flex-items">
        <div className='md:absolute right-4 top-1'>
        <UserButton />
        </div>
        <MobileNav />
      </div>
    </div>
  )
}

export default NavBar