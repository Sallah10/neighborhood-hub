import React from 'react'

const Subscribe = () => {
    return (
        <>
            <div className='flex flex-col w-full items-center justify-center gap-6 container bg-white'>
                <h2 className='text-h2'> Subscribe To EV Startup</h2>
                <div className='flex flex-col gap-2'>
                    <p className='text-p'>Amount</p>
                    <input type="text" placeholder="Enter Amount" className='bg-[#F4F4F3] px-8 py-4 max-w-full rounded-md' />
                </div>
                <div className='flex gap-3'>
                    <button className='px-4 py-2 text-[#E4E4E4] border-2 border-[#878787] button'>$100</button>
                    <button className='px-4 py-2 text-[#E4E4E4] border-2 border-[#878787]'>$200</button>
                    <button className='px-4 py-2 text-[#E4E4E4] border-2 border-[#878787]'>$300</button>
                </div>
                <p className='text-p'>Select Your Instrument of Return</p>
                <div className='flex gap-3'>
                    <button className='px-4 py-2 text-[#E4E4E4] border-2 border-[#878787] button'>$100</button>
                    <button className='px-4 py-2 text-[#E4E4E4] border-2 border-[#878787]'>$200</button>
                    <button className='px-4 py-2 text-[#E4E4E4] border-2 border-[#878787]'>$300</button>
                </div>
                <div className='flex gap-4 self-center w-full'>
                    <h3 className='text-[#878787] text-p'>Tax</h3>
                    <h3 className='text-[#364C6F] text-p'>$20</h3>
                </div>
                <div className='flex justify-between'>
                    <h3 className='text-[#878787] text-p'>Commence Fees</h3>
                    <h3 className='text-[#364C6F] text-p'>$5</h3>
                </div>
                <div className='text-[#364C6F] text-h3 flex justify-between'>
                    <h3>Total Amount to be paid</h3>
                    <h3>$125</h3>
                </div>
            </div>
        </>
    )
}

export default Subscribe