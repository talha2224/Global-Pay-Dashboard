import React, { useState } from 'react'
import { FaAmazon, FaFileArchive } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { IoMdAlert } from "react-icons/io";
import Chart from '../../../assets/dashboard/admin/chart.png'
import Chart2 from '../../../assets/dashboard/admin/chart.svg'
import Graph1 from '../../../assets/dashboard/admin/graph.png'
import Card from '../../../assets/dashboard/admin/card.png'
import Graph3 from '../../../assets/dashboard/admin/graph3.png'
import { CiCirclePlus } from 'react-icons/ci';
import Red from '../../../assets/dashboard/admin/red.png'
import Green from '../../../assets/dashboard/admin/green.png'
import Bar from '../../../assets/dashboard/admin/bar.png'
import { IoBarChart } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import Flag1 from '../../../assets/dashboard/admin/flag.png'

const TransactionHistoryPage = () => {

    const [showDetails, setshowDetails] = useState(false)
    return (

        <div className=' overflow-y-auto'>

            <div className='flex justify-between items-center gap-x-8 bg-[#F6F7F8] h-[100%] overflow-x-auto'>

                <div className='bg-[#fff] p-5 rounded-[2rem] max-w-[17rem] min-w-[17rem] h-[10.3rem]'>

                    <div className='w-8 h-8 bg-[#CCFFCD] flex justify-center items-center rounded-full'>
                        <IoBarChart className='text-[#00B771]' />
                    </div>
                    <div className='flex items-center justify-between'>
                        <h1 className=''>Income</h1>
                        <img src={Green} alt="" className='h-[4rem]' />
                    </div>

                    <h1 className='text-[1.6rem]'>$1400</h1>


                </div>

                <div className='bg-[#fff] p-5 rounded-[2rem] max-w-[17rem] min-w-[17rem] h-[10.3rem]'>

                    <div className='w-8 h-8 bg-[#FFEBDD] flex justify-center items-center rounded-full'>
                        <GrTransaction className='text-[#DB413E]' />
                    </div>
                    <div className='flex items-center justify-between'>
                        <h1 className=''>Income</h1>
                        <img src={Red} alt="" className='h-[4rem]' />
                    </div>

                    <h1 className='text-[1.6rem]'>$1400</h1>


                </div>

                <div className='bg-[#fff] p-5 rounded-[2rem] max-w-[17rem] min-w-[17rem] h-[10.3rem]'>


                    <h1>Currencies Market</h1>

                    {
                        [1, 2]?.map((i) => (
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



                <div className='bg-[#fff] p-5 rounded-[2rem] max-w-[17rem] min-w-[17rem] h-[10.3rem]'>
                    <div className='flex justify-between items-center'>
                        <h1>Expenses</h1>
                        <button className='text-xs bg-[#A0D3FF] px-2 py-1 rounded-full'>Month</button>
                    </div>

                    <div className='flex justify-center items-center'>
                        <img src={Bar} alt="" className='mt-5 h-[5rem]' />
                    </div>



                </div>

            </div>



            <div className='bg-[#fff] p-5 rounded-[2rem] flex-1 mt-4'>

                <h1>Transactions</h1>
                <div className="overflow-x-auto mt-5">
                    <table className="border-collapse overflow-x-auto w-full">
                        <thead>
                            <tr className='text-sm text-[#8F8F8F]'>
                                <th className="border-b py-2 pr-4 text-left text-sm font-normal text-nowrap">Transaction Id</th>
                                <th className="border-b py-2 pr-4 text-left text-sm font-normal text-nowrap">Company Name</th>
                                <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">Amouth</th>
                                <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">Satus</th>
                                <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4]?.map((data) => (
                                <tr key={data} className="border-b hover:bg-gray-100 text-sm font-normal">

                                    <td className="py-2 px-4 flex items-center text-sm font-normal text-nowrap">12ec</td>


                                    <td className="py-2 pr-4 text-sm font-normal text-nowrap">
                                        <div className='flex items-center gap-x-3'>
                                            <div className='w-7 h-7 bg-[#fff5ec] rounded-full flex justify-center items-center'><FaAmazon className='text-[#FF953F]' /></div>
                                            <p>Google</p>
                                        </div>
                                    </td>

                                    <td className="py-2 px-4 text-sm font-normal text-nowrap"><h1 className='text-sm text-[#1BD8BA'>$3000</h1></td>
                                    <td className="py-2 px-4 text-sm font-normal text-nowrap flex items-center gap-x-3">
                                        <button onClick={() => setshowDetails(!showDetails)} className='border border-[#037AE0] text-[#037AE0] px-3 py-1 rounded-full text-sm '>Sucessfull</button>
                                    </td>

                                    <td className="py-2 px-4 text-sm font-normal text-nowrap"><h1 className='text-sm text-start '>Feb 2 - 2025 19:40</h1></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>




            {
                showDetails && (
                    <div className="fixed top-0 left-0 w-screen h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out" onClick={() => setshowDetails(false)}>

                        <div className="bg-white rounded-lg shadow-lg p-6 overflow-y-auto w-[25rem] transform scale-95 opacity-0 animate-fade-in" onClick={(e) => e.stopPropagation()}>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h1>Details</h1>
                                </div>
                                <RxCross2 onClick={() => setshowDetails(false)} className=' cursor-pointer' />
                            </div>

                            <div className='mt-2 flex justify-between items-center border-b border-b-[#E6E6E6] pb-2'>
                                <div className='flex items-center gap-x-3'>
                                    <div className='w-7 h-7 bg-[#fff5ec] rounded-full flex justify-center items-center'><FaAmazon className='text-[#FF953F]' /></div>
                                    <p>Amazon</p>
                                </div>
                                <div>
                                    <h1 className='text-sm text-[#8F8F8F]'>Transaction Id</h1>
                                    <p className='text-sm'>gf5wddw</p>
                                </div>
                            </div>

                            <div className='mt-2 flex justify-between items-center'>
                                <h1 className='text-[#8F8F8F]'>Date</h1>
                                <h1>Feb 2 - 2025 19:40</h1>
                            </div>
                            <div className='mt-2 flex justify-between items-center'>
                                <h1 className='text-[#8F8F8F]'>Method</h1>
                                <h1>Local Bank</h1>
                            </div>
                            <div className='mt-2 flex justify-between items-center'>
                                <h1 className='text-[#8F8F8F]'>Key</h1>
                                <h1>0x864a...</h1>
                            </div>
                            <div className='mt-2 flex justify-between items-center'>
                                <h1 className='text-[#8F8F8F]'>Source</h1>
                                <h1 className='text-[#037AE0]'>Bank Account</h1>
                            </div>
                            <div className='mt-2 flex justify-between items-center'>
                                <h1 className='text-[#8F8F8F]'>Destination</h1>
                                <h1 className='text-[#FF953F]'>USD Account</h1>
                            </div>
                            <div className='mt-2 flex justify-between items-center'>
                                <h1 className='text-[#8F8F8F]'>Amount</h1>
                                <h1 className='text-[#1ABD36]'>$200</h1>
                            </div>

                        </div>

                    </div>
                )
            }


        </div>

    )
}

export default TransactionHistoryPage