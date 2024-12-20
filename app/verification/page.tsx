"use client"
import React from 'react'
import dot from "../assets/dot.png"
import Image from 'next/image'

const Verification = () => {
    return (
        <>
            <div className='flex flex-col w-full items-center justify-center gap-8 container mx-auto'>
                <h1 className='text-h1'>Verification</h1>
                <h2 className='text-h2'> Verify OTP</h2>
                <p className='text-p'>We have sent the Verification code!</p>
                <div className='flex flex-row gap-10 self-center '>
                    <div className='flex border-b-8 pb-3 border-[gray-900]'>
                        <Image src={dot} alt='dot' width={20} height={20} />
                    </div>
                    <div className='flex border-b-4 pb-3 border-[gray-700]'>
                        <Image src={dot} alt='dot' width={20} height={20} />
                    </div>
                    <div className='flex border-b-4 pb-3 border-[gray-700]'>
                        <Image src={dot} alt='dot' width={20} height={20} />
                    </div>
                    <div className='flex border-b-4 pb-3 border-[gray-700]'>
                        <Image src={dot} alt='dot' width={20} height={20} />
                    </div>
                </div>
                <p className='text-p'> We sent code to</p>
                <button className='bg-[#ffffff] border-2 border-gray-600 py-4 px-2 text-[#364C6F] text-xl  rounded-lg'> muhammedbello@gmail</button>
                <button className='button mt-0'> Verify OTP</button>
            </div>
        </>
    )
}

export default Verification