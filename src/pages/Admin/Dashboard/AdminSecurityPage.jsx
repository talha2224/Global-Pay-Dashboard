import React, { useState } from 'react'
import { FaAmazon, FaFileArchive, FaUser } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowForward, IoMdAlert, IoMdArrowDropup } from "react-icons/io";
import Chart from '../../../assets/dashboard/admin/chart.png'
import Chart2 from '../../../assets/dashboard/admin/chart.svg'
import Graph1 from '../../../assets/dashboard/admin/graph.png'
import Card from '../../../assets/dashboard/admin/card.png'
import Graph3 from '../../../assets/dashboard/admin/graph3.png'
import { CiCirclePlus } from 'react-icons/ci';
import Red from '../../../assets/dashboard/admin/red.png'
import Green from '../../../assets/dashboard/admin/green.png'
import Bar from '../../../assets/dashboard/admin/bar.png'
import { IoBarChart, IoKeySharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import Flag1 from '../../../assets/dashboard/admin/heatmap.png'
import { IoIosArrowBack } from "react-icons/io";

const AdminSecurityPage = () => {

    return (

        <div className=' overflow-y-auto'>

            <div className='flex justify-between items-center gap-x-8 bg-[#F6F7F8] h-[100%] overflow-x-auto md:flex-row flex-col'>


                <div className='bg-[#fff] p-5 rounded-[2rem] flex-1 mt-4'>

                    <h1>Flagged Companies</h1>

                    {
                        [1, 2, 3, 4]?.map((i) => (
                            <div key={i} className='flex justify-between items-center mt-3'>

                                <div className='flex items-center gap-x-1 mr-2'>
                                    <div className='w-7 h-7 bg-[#fff5ec] rounded-full flex justify-center items-center'><FaAmazon className='text-[#FF953F]' /></div>
                                    <p className='text-sm text-nowrap text-[#037AE0]'>Amazaon</p>
                                </div>

                                <div className='mr-2'>
                                    <h1 className='text-[#8F8F8F] text-sm text-nowrap'>Date Flagged</h1>
                                    <h1 className='text-sm text-nowrap'>2-Feb 2025</h1>
                                </div>

                                <button className='bg-[#ffe6f5] text-[#FF0500] px-3 py-1 rounded-full text-sm text-nowrap mr-2 '>Flagged</button>



                                <button className=' text-[#FF953F] text-sm text-nowrap mr-2 '>Blocked</button>
                                <button className='border-2 border-[#037AE0] text-[#037AE0] px-3 py-1 rounded-full text-sm text-nowrap mr-2 '>Actions</button>
                            </div>
                        ))
                    }




                </div>


                <div className='bg-[#fff] p-5 rounded-[2rem] flex-1 mt-4'>

                    <h1>Audit Logs</h1>

                    {
                        [1, 2, 3, 4]?.map((i) => (
                            <div key={i} className='flex justify-between items-center mt-3'>
                                <div className='flex items-center gap-x-1'>
                                    <div className='w-8 h-8 bg-[#DADADA] rounded-full flex justify-center items-center'><FaUser className='text-[#939393]' /></div>
                                    <p className='text-sm'>Admin</p>
                                </div>
                                <div>
                                    <h1 className='text-sm'>2-Feb 2025</h1>
                                </div>

                                <button className='border border-[#1ABD36] text-[#1ABD36] px-3 py-1 rounded-full text-sm '>Approal</button>
                                <div className='flex items-center gap-x-1'>
                                    <div className='w-7 h-7 bg-[#fff5ec] rounded-full flex justify-center items-center'><FaAmazon className='text-[#FF953F]' /></div>
                                    <p className='text-sm text-[#037AE0]'>Amazaon</p>
                                </div>
                            </div>
                        ))
                    }




                </div>

            </div>


            <div className='flex justify-between items-center gap-x-8 bg-[#F6F7F8] h-[100%] overflow-x-auto md:flex-row flex-col mt-4'>


                <div className='bg-[#fff] p-5 rounded-[2rem] flex-1 mt-4'>

                    <h1>Excessive API errors</h1>

                    <p className='text-sm text-[#8E8E93]'>Companies</p>


                    <img src={Flag1} alt="" className='mt-2' />

                    <div className='mt-2 flex justify-center items-center gap-x-3'>
                        <div className='flex items-center gap-x-2'>
                            <div className='w-4 h-4 rounded-full bg-[#FF953F]'></div>
                            <h1>Dickson</h1>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <div className='w-4 h-4 rounded-full bg-[#00FF40]'></div>
                            <h1>Cocklish</h1>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <div className='w-4 h-4 rounded-full bg-[#037AE0]'></div>
                            <h1>Dino LTD</h1>
                        </div>
                    </div>




                </div>


                <div className='bg-[#fff] p-5 rounded-[2rem] flex-1 mt-4'>

                    <div className='flex justify-between items-center'>
                        <h1>High Volume</h1>
                        <div className='flex items-center gap-x-3'>
                            <IoIosArrowBack />
                            <IoIosArrowForward />
                        </div>
                    </div>


                    <div className='flex justify-between items-center mt-3'>
                        <h1 className='text-[#8F8F8F]'>Company</h1>
                        <h1 className='text-[#8F8F8F]'>Rate</h1>
                    </div>

                    {
                        [1, 2, 3, 4,5,6,7,]?.map((i) => (
                            <div key={i} className='flex justify-between items-center mt-3'>
                                <h1>Company Name</h1>
                                <div className='flex items-center gap-x-2'>
                                    <IoMdArrowDropup  className='text-[#00FF6B]'/>
                                    <p className='text-[#00FF6B]'>2.2%</p>
                                </div>
                            </div>
                        ))
                    }




                </div>

            </div>

        </div>

    )
}

export default AdminSecurityPage