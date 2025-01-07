'use client';
import React from 'react'
import Image from 'next/image';
import star from './assets/success.png'
import tick from './assets/check.png'

const Success = () => {
    return (
        <>
            <div className='rounded-2xl flex flex-col bg-[#EEEEEE] items-center py-6 px-2 w-full gap-4  lg:w-[700px] lg:self-center'>
                <Image src={star} alt='sucess' className='' />
                <Image src={tick} alt='sucess' className='-mt-16 mb-6' />
                <h2 className='flex self-center text-h2'>Hurray You Transfered</h2>
                <h2 className='text-h2'>$125</h2>
                <h2 className='text-h2'>To</h2>
                <p className='rounded-md px-6 py-4 text-p text-[#3C8476] text-center'>Ev Startup Business Account: 3244561783</p>
            </div>
        </>
    )
}

export default Success