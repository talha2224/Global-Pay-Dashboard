import React from 'react'
import Blur from '../../assets/auth/blur.png'
import Logo from '../../assets/auth/logo.png'
import { IoEye } from "react-icons/io5";
import { Link } from 'react-router-dom';


const AdminLogin = () => {

    return (

        <div style={{ backgroundImage: `url(${Blur})` }} className='w-screen h-screen bg-no-repeat bg-cover flex justify-center items-center flex-col'>

            <div className='flex items-center gap-x-3'>
                <img src={Logo} alt="" />
                <h1 className='text-white'>Global Pay</h1>
            </div>

            {/* ADD EFFECT HERE  */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 mt-8 w-96">

                <h2 className="text-white text-lg mb-6">Login as Admin</h2>

                <div className="mb-4">
                    <label className="block text-[#B1B1B1] text-sm mb-2">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FCFCFC] bg-opacity-20 backdrop-filter backdrop-blur-md border-[#DADADA] border-opacity-20" id="email" type="text" placeholder="e.g. example@gmail.com" />
                </div>

                <div>
                    <label className="block text-[#B1B1B1] text-sm mb-2">Password</label>
                    <div className="relative">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-[#FCFCFC] bg-opacity-20 backdrop-filter backdrop-blur-md border-[#DADADA] border-opacity-20" id="password" type="password" placeholder="********" />
                        <button className="absolute inset-y-0 right-0 pr-3 mt-[-10px]"><IoEye className='text-[#748A9C]'/></button>
                    </div>
                </div>

                <div className=" text-right mb-2">
                    <a className="inline-block align-baseline text-sm text-[#fff]" href="#">Forgot Password?</a>
                </div>

                <Link to={"/admin/verify"}><button className="bg-[#F4FCFF] bg-opacity-20 backdrop-filter backdrop-blur-md  text-[#B1B1B1] py-3 px-4 rounded-[2rem] focus:outline-none focus:shadow-outline w-full">Next</button></Link>

            </div>

        </div>


    )

}

export default AdminLogin