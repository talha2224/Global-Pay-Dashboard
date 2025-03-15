import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import Chart from '../../../assets/dashboard/admin/chart.png'
import Card from '../../../assets/dashboard/admin/card.png'
import Graph1 from '../../../assets/dashboard/admin/graph.png'
import Graph2 from '../../../assets/dashboard/admin/graph2.png'
import Graph3 from '../../../assets/dashboard/admin/graph3.png'
import Revenue from '../../../assets/dashboard/admin/revenue.png'
import Flag1 from '../../../assets/dashboard/admin/flag.png'
import { IoKeySharp } from 'react-icons/io5';

const AdminHomePage = () => {
    return (

        <div>

            <div className='flex justify-between items-center gap-x-8 bg-[#F6F7F8] h-[100%] overflow-x-auto'>

                <div className='bg-[#5CCFFE] p-5 rounded-[2rem] max-w-[25rem] min-w-[25rem] h-[14rem]'>

                    <h1>Total Balance</h1>
                    <div className='mt-2 flex items-center justify-between'>
                        <h1 className='text-[1.6rem]'>$20,670</h1>
                        <CiCirclePlus className='text-[2.5rem]' />
                    </div>

                    <div className='flex items-center gap-x-4 mt-[3rem]'>
                        <button className='flex-1 h-[3rem] rounded-full bg-white'>Deposit</button>
                        <button className='flex-1 h-[3rem] rounded-full text-white bg-[#222223]'>Send</button>
                    </div>

                </div>

                <div className='bg-[#fff] p-5 rounded-[2rem] max-w-[25rem] min-w-[25rem] h-[14rem]'>


                    <div className='flex justify-between items-center'>
                        <h1>Income</h1>
                        <button className='text-xs bg-[#A0D3FF] px-2 py-1 rounded-full'>Month</button>
                    </div>

                    <img src={Chart} alt="" className='mt-5' />

                </div>

                <div className='bg-[#fff] p-5 rounded-[2rem] max-w-[25rem] min-w-[25rem] h-[14rem]'>

                    <div className='flex justify-between items-center'>
                        <h1>Your Cards</h1>
                        <CiCirclePlus className='text-[2.5rem]' />
                    </div>

                    <img src={Card} alt="" className='mt-5' />


                </div>

            </div>


            <div className='flex justify-between items-start gap-x-8 bg-[#F6F7F8] h-[100%] overflow-x-auto mt-10'>

                <div className='bg-[#fff] p-5 rounded-[2rem] max-w-[25rem] min-w-[25rem]'>

                    <h1>Api Usage</h1>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-[#BDBDBD] text-sm'>Company</p>
                        <p className='text-[#BDBDBD] text-sm'>Activity</p>
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-[#000] text-sm'>Apple</p>
                        <img src={Graph1} alt="" className='h-[1rem]' />
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-[#000] text-sm'>Amazon</p>
                        <img src={Graph2} alt="" className='h-[1rem]' />
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-[#000] text-sm'>Google</p>
                        <img src={Graph3} alt="" className='h-[1rem]' />
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-[#000] text-sm'>Shopify</p>
                        <img src={Graph1} alt="" className='h-[1rem]' />
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-[#000] text-sm'>Nike</p>
                        <img src={Graph2} alt="" className='h-[1rem]' />
                    </div>


                </div>

                <div className='bg-[#fff] p-5 rounded-[2rem] max-w-[25rem] min-w-[25rem]'>

                    <h1>Revenue</h1>

                    <div className='flex justify-center items-center'><img src={Revenue} alt="" className='mt-5 h-[11rem]' /></div>

                </div>

                <div className='bg-[#fff] p-5 rounded-[2rem] max-w-[25rem] min-w-[25rem]'>


                    <h1>Revenue</h1>

                    <img src={Chart} alt="" className='mt-2' />

                    <div className='flex justify-between items-center mt-3'>
                        <div className='flex items-center gap-x-2'>
                            <div className='w-4 h-4 rounded-full bg-[#F94D4D]'></div>
                            <p className='text-sm'>Transaction fees</p>
                        </div>
                        <p>$1233</p>
                    </div>

                    <div className='flex justify-between items-center mt-1'>
                        <div className='flex items-center gap-x-2'>
                            <div className='w-4 h-4 rounded-full bg-[#FFA800]'></div>
                            <p className='text-sm'>Subscription fees</p>
                        </div>
                        <p>$1233</p>
                    </div>

                </div>

            </div>


            <div className='flex justify-between items-start gap-x-8 bg-[#F6F7F8] h-[100%] overflow-x-auto mt-10 flex-wrap'>

                <div className='bg-[#fff] p-5 rounded-[2rem] flex-1 mt-4'>

                    <h1>Notification</h1>

                    {
                        [1, 2, 3, 4]?.map((i) => (
                            <div key={i} className='flex justify-between items-center mt-3'>
                                <div className='w-7 h-7 bg-[#fff5ec] rounded-full flex justify-center items-center'><IoKeySharp className='text-[#FF953F]' /></div>
                                <div>
                                    <h1 className='text-[#8F8F8F] text-sm'>Company</h1>
                                    <h1 className='text-sm'>Apple</h1>
                                </div>
                                <div>
                                    <h1 className='text-[#8F8F8F] text-sm'>Date</h1>
                                    <h1 className='text-sm'>2-Feb 2025</h1>
                                </div>
                                <div>
                                    <h1 className='text-[#8F8F8F] text-sm'>Request</h1>
                                    <h1 className='text-sm'>BCXZ5G5JJFF</h1>
                                </div>

                                <button className='bg-[#fff5ec] text-[#FF953F] px-3 py-1 rounded-full text-sm '>Active</button>
                                <button className='border-2 border-[#037AE0] text-[#037AE0] px-3 py-1 rounded-full text-sm '>Actions</button>
                            </div>
                        ))
                    }




                </div>

                <div className='bg-[#fff] p-5 rounded-[2rem] max-w-[25rem] min-w-[25rem] mt-4'>


                    <h1>Currencies Market</h1>

                    {
                        [1, 2, 3, 4, 5]?.map((i) => (
                            <div key={i} className='flex justify-between items-center mt-3'>
                                <div className='flex items-center gap-x-2'>
                                    <img src={Flag1} alt="" className='w-8 h-8' />
                                    <p className='text-sm'>USD</p>
                                </div>
                                <p>$1233</p>
                            </div>
                        ))
                    }

                </div>

            </div>

        </div>

    )
}

export default AdminHomePage