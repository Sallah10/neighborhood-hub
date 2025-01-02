// import React from 'react'
import Image from 'next/image'
import img1 from '../assets/dash img1.png'

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
        <div className='bg-white rounded-t-2xl p-4 w-full h-full -mt-12 flex flex-col gap-4'>
          <h1 className='text-h1'> Popular Campaigns</h1>
          <search className='px-4 py-4 text-p w-full rounded-xl border-r-8 border-transparent outline outline-[#D2DEF1]'> Search Campaigns</search>
          <select name="categories" id="categories" className='px-4 py-4 text-p w-full rounded-xl border-r-8 border-transparent outline outline-[#D2DEF1]'>
            <option value="categories">All categories</option>
          </select>
          <div className='bg-gradient-to-r from-[#F6F6F6] to-[#D0D7E2] flex rounded-xl flex-col gap-4 max-h-[100vh] max-w-full pb-4'>
            <Image src={img1} alt='card-image' width={600} />
            <h2 className='text-h2 mx-2 text-center'>Raising Capital for inhouse Startup</h2>
            <p className='text-p mx-2 text-center'>A unique Concept for Everyday transport leisure & Biking fun </p>
            <hr className='bg-white' />
            <div className='flex justify-between items-center mx-2'>
              <div className='flex flex-col gap-4'>
                <p className='text-p text-green-500'>Raised of <span className='text-black text-h3'>85%</span></p>
                <h3 className='text-xl text-gray-400 self-center flex flex-row gap-1'><span className='button text-green-600'>Raise Goal</span> <span className='flex self-center'>$30000</span></h3>
              </div>
              <button className='button text-white bg-blue-300 self-end'> Subscribe </button>
            </div>
          </div>
          <div className='bg-gradient-to-r from-[#F6F6F6] to-[#D0D7E2] flex rounded-xl flex-col gap-4 max-h-[100vh] max-w-full pb-4'>
            <Image src={img1} alt='card-image' width={600} />
            <h2 className='text-h2 mx-2 text-center'>Raising Capital for inhouse Startup</h2>
            <p className='text-p mx-2 text-center'>A unique Concept for Everyday transport leisure & Biking fun </p>
            <hr className='bg-white' />
            <div className='flex justify-between items-center mx-2'>
              <div className='flex flex-col gap-4'>
                <p className='text-p text-green-500'>Raised of <span className='text-black text-h3'>85%</span></p>
                <h3 className='text-xl text-gray-400 self-center flex flex-row gap-1'><span className='button text-green-600'>Raise Goal</span> <span className='flex self-center'>$30000</span></h3>
              </div>
              <button className='button text-white bg-blue-300 self-end'> Subscribe </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home