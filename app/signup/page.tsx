import React from 'react'
import google from "../assets/google.png"
import email from "../assets/email.png"
import password from "../assets/password.png"
import Image from 'next/image'

const Signup = () => {
    return (
        <>
            <div className='flex flex-col justify-evenly gap-8 items-center mx-auto'>
                <h1 className='text-4xl text-[#364C6F]'> Create an Account</h1>
                <form action="" className='gap-4 flex flex-col'>
                    <div className='input-container'>
                        <Image src={email} alt='email' />
                        <input type="email" placeholder='Email' className='input' />
                    </div>
                    <div className='input-container'>
                        <Image src={password} alt='password' />
                        <input type="password" placeholder='Password' className='input ' />
                    </div>
                    <div className='input-container'>
                        <Image src={password} alt='password' />
                        <input type="password" placeholder='Confirm Password' className='input' />
                    </div>
                    <button className='button self-center w-[100%] mt-2'> Sign Up</button>
                </form>
                <small className='text-black text-lg'>
                    Don&apos;t have an account? <a href="/signup" className='ml-1'>Sign Up Here</a>
                </small>
                <div className="text-black flex justify-center items-center my-0 p-0">
                    <span className='m-0 p-0'>OR</span>
                </div>
                <button
                    className="m-0 text-base flex gap-2 hover:text-gray-400"
                >
                    Sign in with Google <Image src={google} alt="google-icon" width={20} height={20} />
                </button>
            </div>
        </>
    )
}

export default Signup