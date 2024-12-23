import Image from 'next/image'
import flash from '../assets/flash.png'
import img1 from '../assets/dash img1.png'

const Campaign = () => {
    return (
        <>
            <div className='main gap-6'>
                <h1 className='text-h1'> Campaign Details </h1>
                <div className='bg-gradient-to-r from-[#4468A1] to-[#706a6a] gap-4 flex flex-col px-4 pt-8 pb-12'>
                    <h2 className='text-h2'> Fundraising for Ev Startup </h2>
                    <div className='flex gap-4'>
                        <h3 className='text-h3 text-[#D2E892] mr-4 border-2 border-r-2 border-[#D2E892] p-2'>Total Investor: <span className='text-h2 text-white'>5</span></h3>
                        <div className='flex flex-row gap-2'>
                            <Image src={flash} alt='flash' width={20} height={5} className='fill-[#D2E892] h-[30px] w-[30px]' />
                            <h3 className='text-h3 text-[#D2E892]'>Raised Amount <span className='text-[#D2E892]'>$<span className='text-white'>50,000</span></span></h3>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-[#F6F6F6] to-[#D0D7E2]  rounded-t-2xl p-4 w-full h-full -mt-10 flex flex-col gap-4'>
                    <div className='bg-white flex rounded-xl flex-col gap-4 max-h-[100vh] max-w-full'>
                        <Image src={img1} alt='card-image' width={600} height={800} className='max-w-full' />
                        <div className='flex flex-col gap-4  pb-6 px-4'>
                            <h2 className='text-h2 mx-2'>Raising Capital for inhouse Startup</h2>
                            <p className='text-p text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, sapiente velit.as sunt quis voluptatum officiis voluptate molestiae provident delectus commodi repudiandae cumque. Autem, quasi.</p>
                            <hr />
                            <div className='flex justify-between items-center mx-2'>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-p text-green-500'>Raised of <span className='text-black text-h3'>85%</span></p>
                                    <h3 className='text-xl text-gray-400 self-center flex flex-row gap-1'><span className='button text-green-600 text-center'>Raise Goal:</span> <span className='flex self-center'>$30000</span></h3>
                                </div>
                                <div className='text-[#9EAEC8] flex flex-col items-center justify-center gap-4'>
                                    <h3 className='text-p text-center'>No Of Subscriber</h3>
                                    <h2 className='text-h2 self-center'>205</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Campaign