import React from 'react'
import logo from './assets/logo.png'
import Image from 'next/image'
import avatar from './assets/avatar.png'

const Nav = () => {
  return (
    <>
      <div className='text-black hidden md:flex justify-between items-center p-4'>
        <Image src={logo} alt='logo' className='w-[150px] h-[70px]' />
        <div className='text-h3 flex gap-6'>
          <a href="">Dashboard</a>
          <a href="">View campaign</a>
          <a href="">Fundraiser</a>
        </div>
        <Image src={avatar} alt="avatar" />
      </div>
    </>
  )
}

export default Nav