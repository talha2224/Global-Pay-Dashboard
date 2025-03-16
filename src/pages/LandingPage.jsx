import React from 'react'
import Bg from '../assets/bg.png'
import Logo from '../assets/logo.png'
import companies from '../assets/companies.svg'
import { Link } from 'react-router-dom'

const LandingPage = () => {


    return (


        <div style={{ backgroundImage: `url(${Bg})` }} className='w-screen h-screen bg-no-repeat bg-cover p-5 text-white relative'>


            <div className='flex justify-between items-center bg-[#363537] py-3 px-5 rounded-[100rem] bg-opacity-20'>

                <div className='flex items-center gap-x-3'>
                    <img src={Logo} alt="" />
                    <h1>Global Pay</h1>
                </div>

                <div className='items-center gap-x-2 sm:flex hidden'>
                    <p>Home</p>
                    <p>Api</p>
                    <p>About Us</p>
                    <p>Support</p>
                    <p>Blog</p>
                </div>

                <Link to={"/login"}><button className='bg-[#037AE0] text-white px-4 py-2 rounded-full cursor-pointer'>Get Started</button></Link>

            </div>


            <h1 className='text-[3rem] mt-8 sm:mt-[5rem] font-medium'>Global Payments, <br /> Simplified</h1>

            <p className='md:w-[50%]'>Empower your finances with GlobaPay. Issue virtual and physical Visa/MasterCards, make seamless deposits and withdrawals, and transact securely—anytime, anywhere.</p>

            <div className='flex items-center mt-3 gap-x-4'>
                <Link to={"/login"}><button className='bg-[#037AE0] text-white px-4 py-2 rounded-full cursor-pointer'>Get Started</button></Link>
                <Link to={"/login"}><button className='border bg-transparent border-white px-4 py-2 rounded-full cursor-pointer'>Get The App</button></Link>
            </div>

            <div className='absolute bottom-10'>
                <p>Accepted by 130M+ merchants worldwide</p>
                <img src={companies} alt="" className='mt-3 sm:mt-10' />
            </div>

        </div>


    )


}

export default LandingPage