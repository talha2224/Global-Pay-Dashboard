import React from 'react'
import BlueLogo from '../../../assets/dashboard/admin/logo.png'
import { Link } from 'react-router-dom';
const CompanyRegisterPage = () => {
    return (
        <div className='flex justify-center items-center bg-[#FBFBFB] w-screen h-screen'>


            <div className='bg-white sm:w-[30rem] h-[80vh] py-10 px-5 rounded-md'>

                <div className='flex justify-center items-center gap-x-3'>
                    <img src={BlueLogo} alt="" />
                    <p className='text-lg font-medium'>Global Pay</p>
                </div>

                <div className='w-[100%] p-3 mt-8 '>

                    <h1 className='text-2xl'>Sign up</h1>

                    <p className='mt-4'>Email</p>
                    <div className='mt-3'>
                        <input type="email" placeholder= "e.g ******@gmail.com" name="" id="" className='h-[2.8rem] w-[100%] sm:w-[24rem] border border-[#DADADA] rounded-md px-3 outline-none' />
                    </div>

                    <div className='mt-3 flex items-center gap-x-3'>
                        <input type="checkbox" name="" id="" />
                        <p className='text-sm text-[#989999]'>By clicking ‘Next’, you agree to our Terms of Service</p>
                    </div>

                    <Link to={"/company/otp"}><button className='mt-5 h-[2.8rem] w-[100%] sm:w-[24rem] bg-[#037AE0] text-white rounded-full cursor-pointer'>Next</button></Link>





                </div>
            </div>

        </div>
    )
}

export default CompanyRegisterPage