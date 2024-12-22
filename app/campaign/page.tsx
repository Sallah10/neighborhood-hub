import Image from 'next/image'
import flash from '../assets/flash.png'
import img1 from '../assets/dash img1.png'

const Campaign = () => {
    return (
        <>
            <div>
                <h1 className='text-h1'> Campaign Details </h1>
                <div>
                    <h2 className='text-h2'> Fundraising for Ev Startup </h2>
                    <div>
                        <h3 className='text-h3'>Total Investor <span>5</span></h3>
                        <div>
                            <Image src={flash} alt='flash' />
                            <h3>Raised Amount <span>$<span>50,000</span></span></h3>
                        </div>
                    </div>
                </div>
                <div className='bg-white flex rounded-xl flex-col gap-4 max-h-[100vh] max-w-full pb-6'>
                    <Image src={img1} alt='card-image' width={600} height={800} />
                    <h2 className='text-h2 mx-2'>Raising Capital for inhouse Startup</h2>
                    <p className='text-p text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, sapiente velit. Autem veritatis eius excepturi tenetur, molestias sunt quis voluptatum officiis voluptate molestiae provident delectus commodi repudiandae cumque. Autem, quasi.</p>
                    <hr />
                    <div className='flex justify-between items-center mx-2'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-p text-green-500'>Raised of <span className='text-black text-h3'>85%</span></p>
                            <h3 className='text-xl text-gray-400 self-center flex flex-row gap-1'><span className='button text-green-600'>Raise Goal</span> <span className='flex self-center'>$30000</span></h3>
                        </div>
                        <div>
                            <h3>No Of Subscriber</h3>
                            <h3>205</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Campaign