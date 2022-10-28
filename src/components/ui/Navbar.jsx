import React from 'react'
import Logo from '../../public/assets/logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#161417] text-white'>
        <div>
        <Image style={{width:'50px'}} 
          src={Logo}
          alt="piucture of th"
          width={50}
          height={50}
        />
        </div>
    </div>
  )
}

export default Navbar