import React, { useState } from 'react'
import AuthImage from '../../assets/auth/auth1.png'
import Google from '../../assets/auth/google.png'
import Apple from '../../assets/auth/apple.png'
import BlueLogo from '../../assets/dashboard/admin/logo.png'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [viewType, setviewType] = useState("email")
  return (

    <div className='flex justify-center items-center w-screen h-screen'>

      <div className='flex-1 bg-[#037AE0] hidden md:flex justify-center items-center flex-col text-white h-[100%]'>

        <h1 className='text-xl'>Send Money Instantly</h1>
        <p className='mt-1 text-sm text-center w-[50%]'>Use QR codes or unique IDs for instant P2P transfers and quick payments worldwide.</p>

        <div className='flex justify-center items-center mt-2 h-[75%]'>
          <img src={AuthImage} alt="" className='h-[100%]' />
        </div>

      </div>

      <div className='flex-1 flex justify-center items-center flex-col h-[100%] bg-[#FCFCFC] sm:mx-0 mx-4 '>

        <div className='flex justify-center items-center gap-x-3'>
          <img src={BlueLogo} alt="" />
          <p className='text-lg font-medium'>Global Pay</p>
        </div>

        <div className='w-[100%] sm:w-[80%] p-3 mt-8 '>

          <h1 className='text-2xl'>Sign up</h1>

          <div className='mt-4 flex items-center gap-x-7'>
            <h1 onClick={()=>setviewType("email")} className={` cursor-pointer ${viewType=="email" ? "text-[#037AE0]":"text-[#666666]"} pb-1 ${viewType=="email" ? "border-b-2 border-b-[#037AE0]":"border-b border-b-[#fff]"} `}>Email</h1>
            <h1 onClick={()=>setviewType("phone")} className={` cursor-pointer ${viewType=="phone" ? "text-[#037AE0]":"text-[#666666]"} pb-1 ${viewType=="phone" ? "border-b-2 border-b-[#037AE0]":"border-b border-b-[#fff]"} `}>Phone</h1>
          </div>

          <div className='mt-3'>
            <input type={viewType=="email"?"text":"number"} placeholder={viewType=="email"?"e.g ******@gmail.com":"e.g +1********24"} name="" id="" className='h-[2.8rem] w-[100%] sm:w-[24rem] border border-[#DADADA] rounded-md px-3 outline-none' />
          </div>

          <div className='mt-3 flex items-center gap-x-3'>
            <input type="checkbox" name="" id="" />
            <p className='text-sm text-[#989999]'>By clicking ‘Next’, you agree to our Terms of Service</p>
          </div>

          <Link to={"/otp"}><button className='mt-5 h-[2.8rem] w-[100%] sm:w-[24rem] bg-[#037AE0] text-white rounded-full cursor-pointer'>Next</button></Link>


          <div className='flex justify-center items-center gap-x-3 h-[2.8rem] w-[100%] sm:w-[24rem] mt-6 rounded-md shadow-sm border border-[lightgray] cursor-pointer bg-white'>
            <img src={Google} alt="" />
            <p>Continue With Google</p>
          </div>
          <div className='flex justify-center items-center gap-x-3 h-[2.8rem] w-[100%] sm:w-[24rem] border border-[lightgray] cursor-pointer mt-2 rounded-md shadow-inner bg-white'>
            <img src={Apple} alt="" />
            <p>Continue With Apple</p>
          </div>




        </div>

      </div>

    </div>

  )
}

export default RegisterPage

