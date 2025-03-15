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

const AdminSettingsPage = () => {

    return (

        <div className=' overflow-y-auto'>

            <div className='flex justify-between items-start gap-x-8 bg-[#F6F7F8] h-[100%] overflow-x-auto md:flex-row flex-col'>

                <div className='bg-[#fff] p-5 rounded-[2rem] flex-1 mt-4'>

                    <h1>Access Control</h1>

                    {
                        [1, 2, 3, 4]?.map((i) => (
                            <div key={i} className='flex justify-between items-center mt-3'>
                                <div className='flex items-center gap-x-1'>
                                    <div className='w-8 h-8 bg-[#DADADA] rounded-full flex justify-center items-center'><FaUser className='text-[#939393]' /></div>
                                    <p className='text-sm'>Admin</p>
                                </div>
                                <div>
                                    <h1 className='text-sm text-[#FF953F]'>Super Admin</h1>
                                </div>

                                <div>
                                    <h1 className='text-[#8F8F8F] text-sm'>Email</h1>
                                    <p>johndoe@gmail.com</p>
                                </div>

                                <button className='border border-[#DB413E] text-[#DB413E] px-3 py-1 rounded-full text-sm '>Deactivate</button>
                            </div>
                        ))
                    }




                </div>


                <div className='mt-4 w-[20rem] bg-white p-5 rounded-[1rem]'>
                    <h1>Platform Settings</h1>

                    <h1 className='mt-4 text-sm'>Set transaction fee percentages</h1>
                    <input type="text" name="" id="" placeholder='Fee percentage' className='w-[100%] h-[2.3rem] rounded-md px-3 border border-[#DADADA] outline-none mt-2' />

                    <h1 className='mt-4 text-sm'>Api Rate Limits</h1>
                    <input type="text" name="" id="" placeholder='Limits' className='w-[100%] h-[2.3rem] rounded-md px-3 border border-[#DADADA] outline-none mt-2' />

                </div>

            </div>

        </div>

    )
}

export default AdminSettingsPage