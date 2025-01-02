// import React from 'react'

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
      </div>
    </>
  )
}

export default Home