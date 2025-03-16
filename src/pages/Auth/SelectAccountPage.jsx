import React from 'react'
import AuthImage from '../../assets/auth/auth1.png'
import WhiteLogo from '../../assets/auth/logo.png'
import BlueLogo from '../../assets/dashboard/admin/logo.png'
import { FiUsers,FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';

const SelectAccountPage = () => {
    return (

        <div className='flex justify-center items-center w-screen h-screen'>

            <div className='flex-1 bg-[#037AE0] hidden md:flex justify-center items-center flex-col text-white h-[100%]'>

                <h1 className='text-xl'>Pay Anywhere, Anytime</h1>
                <p className='mt-1 text-sm text-center w-[50%]'>Access virtual and physical Visa/MasterCards for secure and hassle-free global transactions.</p>

                <div className='flex justify-center items-center mt-2 h-[75%]'>
                    <img src={AuthImage} alt="" className='h-[100%]' />
                </div>

            </div>

            <div className='flex-1 flex justify-center items-center flex-col h-[100%]'>
                <div className='flex justify-center items-center gap-x-3'>
                    <img src={BlueLogo} alt="" />
                    <p className='text-lg font-medium'>Global Pay</p>
                </div>

                <h1 className='mt-10 text-xl font-medium '>Choose Your Account Type</h1>
                <p className='mt-1 text-[#C3BFAE] w-[16.7rem] text-sm'>Would you like to sign up as an individual or as a company?</p>

                <Link to={"/register"} className='w-[20rem] h-[2.5rem] border border-[#DADADA] rounded-md px-3 flex items-center gap-x-3 cursor-pointer mt-8'>
                    <FiUser className='text-[#037AE0]' />
                    <p>Signup As Individual</p>
                </Link>

                <Link to={"/company/register"} className='w-[20rem] h-[2.5rem] border border-[#DADADA] rounded-md px-3 flex items-center gap-x-3 cursor-pointer mt-3'>
                    <FiUsers   className='text-[#037AE0]' />
                    <p>Signup As Company</p>
                </Link>
            </div>

        </div>

    )
}

export default SelectAccountPage