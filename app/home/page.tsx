// import React from 'react'
import Image from 'next/image'
// import img1 from '../assets/dash img1.png'
import cardImg from '../assets/homeImage.png'
import avatar from '../assets/avatar.png'
import avatar2 from '../assets/avatar2.png'


const Home = () => {
  return (
    <>
      <div className='main'>
        <h1 className='text-h1'>HomeScreen</h1>
        <div className='bg-gradient-to-r from-[#4468A1] to-[#706a6a] gap-4 flex flex-col px-4 pt-8 w-full pb-12 md:w-full lg:w-full md:items-center'>
          <h3 className="text-h3 text-white">Recent Status</h3>
          <div className="border-[#D2DEF1] border-2 rounded-2xl flex flex-col gap-10 py-6">
            <div className="flex justify-between px-4">
              <h2 className="text-h2 text-[#D2DEF1]">Total Funding:</h2>
              <h1 className="text-h1 text-white"><span className='border-b-2 pb-1 border-[#D2DEF1]'>$</span>50k</h1>
            </div>
            <h2 className="text-h3 text-[#D2DEF1] text-center border-t-2 pt-2 border-[#D2DEF1] w-full"> Withdrawal Amount</h2>
          </div>
        </div>
        <div className='bg-white rounded-t-2xl p-4 w-full h-full -mt-12 flex flex-col items-center gap-4'>
          <h1 className='text-h1'> Popular Campaigns</h1>
          <search className='px-4 py-4 text-p lg:w-[500px] rounded-xl border-r-8 border-transparent outline outline-[#D2DEF1]'> Search Campaigns</search>
          <select name="categories" id="categories" className='px-4 py-4 text-p w-full lg:max-w-[500px] rounded-xl border-r-8 border-transparent outline outline-[#D2DEF1]'>
            <option value="categories">All categories</option>
          </select>
          <div className='grid grid-cols-1 lg:grid-cols-2 mt-6'>
            <div className='bg-gradient-to-r from-[#F6F6F6] to-[#D0D7E2] flex rounded-xl flex-col gap-4 max-w-full lg:w-[500px] px-4 py-4 self-center'>
              <div className='flex gap-2'>
                <Image src={avatar} alt='card-image' width={600} className='w-[60px] h-[60px]' />
                <div className='flex flex-col gap-1'>
                  <h3 className='text-h3 text-black'>Ecommerce Platform</h3>
                  <h3 className='text-[#838383] text-lg'> Web Development</h3>
                  <p className='text-p text-green-500'>Raised of <span className='text-black text-h3'>85%</span></p>
                </div>
              </div>
              <p className='text-[#838383] text-lg'>September 23. 2024</p>
              <Image src={cardImg} alt='card-image' width={600} className='rounded-md' />
              <h3 className='text-[#364C6F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptates, deserunt autem soluta labore, eius quo sequi quos id dignissimos rem! Autem dicta ut et eius facilis. Saepe, atque iusto.</h3>
              <button className='button text-[#364C6F] bg-[#D2E892] flex self-center'> View Details </button>
            </div>
            <div className='bg-gradient-to-r from-[#F6F6F6] to-[#D0D7E2] flex rounded-xl flex-col gap-4 lg:w-[500px] max-w-full px-4 py-4'>
              <div className='flex gap-2'>
                <Image src={avatar2} alt='card-image' width={600} className='w-[60px] h-[60px]' />
                <div className='flex flex-col gap-1'>
                  <h3 className='text-h3 text-black'>Ecommerce Platform</h3>
                  <h3 className='text-[#838383] text-lg'> Web Development</h3>
                  <p className='text-p text-green-500'>Raised of <span className='text-black text-h3'>85%</span></p>
                </div>
              </div>
              <p className='text-[#838383] text-lg'>September 23. 2024</p>
              <Image src={cardImg} alt='card-image' width={600} className='rounded-md' />
              <h3 className='text-[#364C6F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptates, deserunt autem soluta labore, eius quo sequi quos id dignissimos rem! Autem dicta ut et eius facilis. Saepe, atque iusto.</h3>
              <button className='button text-[#364C6F] bg-[#D2E892] flex self-center'> View Details </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home