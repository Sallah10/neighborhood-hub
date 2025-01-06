"use client"
import React from 'react'
import Image from 'next/image'
import img1 from '../assets/dash img1.png'
// import img2 from '../assets/dash img2.png'

const Dashboard = () => {
    return (
        <>
            <div className='main gap-6 text-black'>
                <h1 className='text-h1'>Dashboard</h1>
                <div className='p-4 bg-gradient-to-r from-[#4468A1] to-[#706a6a] gap-2 flex flex-col'>
                    <h3 className='text-h3 text-[#D2DEF1]'>Recent Status</h3>
                    <div className='grid grid-cols-2 items-center gap-2 px-2 pt-4 pb-6'>
                        <div className='flex flex-col gap-4 border-2 p-2 flex-wrap border-gray-700 h-full  rounded-lg'>
                            <h1 className='text-h1 text-[white]'><span className='border-b-2 pb-1 border-[#D2DEF1]'>0</span>3</h1>
                            <h2 className='text-h2 text-[#D2DEF1] text-left'>Active Campaign</h2>
                        </div>
                        <div className='flex flex-col gap-2 border-2 p-4 flex-wrap border-gray-700 bg-[#D2E892] h-full rounded-lg'>
                            <h1 className='text-h1'><span className='border-b-2 pb-1 border-[#D2DEF1]'>1</span>5</h1>
                            <h2 className='text-h2'>Active Investors</h2>
                        </div>
                        <div className='flex flex-col gap-4 border-2 p-2 flex-wrap border-gray-700 h-full  rounded-lg'>
                            <h1 className='text-h1 text-[white]'><span className='border-b-2 pb-1 border-[#D2DEF1]'>$</span>50k</h1>
                            <h2 className='text-h2 text-[#D2DEF1]'>Total Funding</h2>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-[#F6F6F6] to-[#D0D7E2] rounded-t-2xl p-4 w-full h-full -mt-10 flex flex-col gap-4 lg:items-center '>
                    <h1 className='text-h1'> Popular Campaigns</h1>
                    <select name="categories" id="categories" className='px-4 py-4 text-p w-full rounded-xl border-r-8 border-transparent outline outline-neutral-700'>
                        <option value="categories">All categories</option>
                    </select>
                    <div className='bg-white flex rounded-xl flex-col gap-4 max-h-[100vh] max-w-full pb-6'>
                        <Image src={img1} alt='card-image' width={600} />
                        <h2 className='text-h2 mx-2'>Raising Capital for inhouse Startup</h2>
                        <p className='text-p mx-2'>A unique Concept for Everyday transport leisure & Biking fun </p>
                        <hr />
                        <div className='flex justify-between items-center mx-2'>
                            <div className='flex flex-col gap-4'>
                                <p className='text-p text-green-500'>Raised of <span className='text-black text-h3'>85%</span></p>
                                <h3 className='text-xl text-gray-400 self-center flex flex-row gap-1'><span className='button text-green-600'>Raise Goal</span> <span className='flex self-center'>$30000</span></h3>
                            </div>
                            <button className='button text-white bg-blue-300 self-end'> Subscribe </button>
                        </div>
                    </div>
                    <div className='bg-white flex rounded-xl flex-col gap-4 max-h-[100vh] max-w-full pb-6'>
                        <Image src={img1} alt='card-image' width={600} />
                        <h2 className='text-h2 mx-2'>Raising Capital for inhouse Startup</h2>
                        <p className='text-p mx-2'>A unique Concept for Everyday transport leisure & Biking fun </p>
                        <hr />
                        <div className='flex justify-between items-center mx-2'>
                            <div className='flex flex-col gap-4'>
                                <p className='text-p text-green-500'>Raised of <span className='text-black text-h3'>85%</span></p>
                                <h3 className='text-xl text-gray-400 self-center flex flex-row gap-1'><span className='button text-green-600'>Raise Goal</span> <span className='flex self-center'>$30000</span></h3>
                            </div>
                            <button className='button text-white bg-blue-300 self-end'> Subscribe </button>
                        </div>
                    </div>
                </div>
                <button className='button lg:max-w-[200px]'> See More Campaign </button>
            </div>
        </>
    )
}

export default Dashboard