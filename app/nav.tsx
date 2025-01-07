import React from 'react'
import logo from '../assets/logo.png'
import Image from 'next/image'
import avatar from '../assets/avatar.png'

const Nav = () => {
  return (
    <>
      <div className='text-black hidden'>
        <Image src={logo} alt='logo' />
        <div>
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