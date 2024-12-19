"use client"
import React from 'react'
import google from "../assets/google.png"
import email from "../assets/email.png"
import password from "../assets/password.png"
import Image from 'next/image'

const Login = () => {
    return (
        <div>
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
                    <button className='button self-center w-[100%] mt-2'> Log In</button>
                </form>
                <small className='text-[#7A7B7E] text-lg'>
                    Don&apos;t have an account? <a href="/signup" className='ml-1 text-black text-lg'>Sign Up Here</a>
                </small>
                <div className="flex items-center justify-between  mx-auto">
                    <hr className="w-full mr-4" />
                    <span className="text-gray-500 ">OR</span>
                    <hr className="w-full ml-4" />
                </div>
                <button
                    className="text-lg flex-wrap flex gap-2 border-2 border-[#D6E1E8] py-4 px-6 rounded-md hover:text-gray-500 items-center text-[#1A222E]"
                >
                    Sign in with Google <Image src={google} alt="google-icon" width={20} height={20} />
                </button>
            </div>
        </div>
    )
}

export default Login