import React from 'react'
import logo from './assets/logo.png'
import Image from 'next/image'
import avatar from './assets/avatar.png'
import closemenu from "./assets/close_menu.png"
import openmenu from "./assets/icon-menu.svg"


const Nav = () => {
  const [navClick, setNavClick] = React.useState(false)
  const toogleClick = () => {
    setNavClick(!navClick);
  };
  return (
    <>
      <div className='text-black  flex justify-between items-center p-4'>
        <Image src={logo} alt='logo' className='w-[150px] h-[70px]' />
        <div className='text-h3 hidden md:flex gap-6'>
          <a href="">Dashboard</a>
          <a href="">View campaign</a>
          <a href="">Fundraiser</a>
        </div>
        <Image src={avatar} alt="avatar" className='hidden md:flex' />
        <Image src={openmenu} alt='open-menu' width={26} height={26} onClick={toogleClick} className={navClick ? 'hidden w-0' : 'flex fill-white md:hidden'} />
        {navClick &&
          <div className='flex flex-col  items-end p-8 gap-4 bg-gradient-to-r from-[#4468A1] to-[#706a6a] ml-auto rounded-lg'>
            <Image src={closemenu} alt='close-menu' width={26} height={26} onClick={toogleClick} />
            <div className='flex gap-8 flex-col text-white'>
              <a href="">Dashboard</a>
              <a href="">View campaign</a>
              <a href="">Fundraiser</a>
            </div>
          </div>}
      </div>
    </>
  )
}

export default Nav