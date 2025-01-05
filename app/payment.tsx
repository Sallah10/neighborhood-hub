import React from 'react'
import Image from 'next/image'
import mastercard from './assets/mastercard.png'

const Payment = () => {
    return (
        <>
            <div className='main w-full'>
                <h1 className='text-h1'>Payment settings</h1>
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
                    <h2 className='text-h2 text-center'>Select Card to load Payments</h2>
                    <h3 className='text-h3 text-center'>You can add the amount to only business cards!</h3>
                    <div className='flex flex-col gap-2'>
                        <div className='paymentCard'>
                            <Image src={mastercard} alt="Mastercard" className='w-[50px] h-[50px]' />
                            <div>
                                <h3 className='text-h3'>Master Card</h3>
                                <div className='flex flex-row gap-2'>
                                    <h4 className='text-p text-[#A8A5A5]'>5353</h4>
                                    <h4 className='text-p text-[#A8A5A5]'>7484</h4>
                                    <h4 className='text-p text-[#A8A5A5]'>7484</h4>
                                    <h4 className='text-p text-[#A8A5A5]'>7484</h4>
                                </div>
                            </div>
                            <input type="radio" name="card" id="card" />
                        </div>
                        <div className='paymentCard'>
                            <Image src={mastercard} alt="Mastercard" className='w-[50px] h-[50px]' />
                            <div>
                                <h3 className='text-h3'>Master Card</h3>
                                <div className='flex flex-row gap-2'>
                                    <h4 className='text-p text-[#A8A5A5]'>5353</h4>
                                    <h4 className='text-p text-[#A8A5A5]'>7484</h4>
                                    <h4 className='text-p text-[#A8A5A5]'>7484</h4>
                                    <h4 className='text-p text-[#A8A5A5]'>7484</h4>
                                </div>
                            </div>
                            <input type="radio" name="card" id="card" />
                        </div>
                        <div className='paymentCard'>
                            <Image src={mastercard} alt="Mastercard" className='w-[50px] h-[50px]' />
                            <div>
                                <h3 className='text-h3'>Master Card</h3>
                                <div className='flex flex-row gap-2'>
                                    <h4 className='text-p text-[#A8A5A5]'>5353</h4>
                                    <h4 className='text-p text-[#A8A5A5]'>7484</h4>
                                    <h4 className='text-p text-[#A8A5A5]'>7484</h4>
                                    <h4 className='text-p text-[#A8A5A5]'>7484</h4>
                                </div>
                            </div>
                            <input type="radio" name="card" id="card" />
                        </div>
                    </div>
                    <h3 className='text-p mt-4'>Enter Reference Amount</h3>
                    <search className='px-4 py-4 text-p w-full rounded-xl border-r-8 border-transparent outline outline-[#D2DEF1]'> Amount</search>
                    <button className='button self-center'> Transfer Amount </button>
                </div>
            </div>
        </>

    )
}

export default Payment