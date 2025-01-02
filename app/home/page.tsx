// import React from 'react'

const Home = () => {
  return (
    <>
      <div className='main'>
        <h1 className='text-h1'>HomeScreen</h1>
        <div className='bg-gradient-to-r from-[#4468A1] to-[#706a6a] gap-4 flex flex-col px-4 pt-8 w-full pb-12 md:w-full lg:w-full md:items-center'>
          <h3 className="text-h3">Recent Status</h3>
          <div>
            <div>
              <h2>Total Funding</h2>
              <h1><span className='border-b-2 pb-1 border-[#D2DEF1]'>$</span>50k</h1>
            </div>
            <div> Withdrawal Amount</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home