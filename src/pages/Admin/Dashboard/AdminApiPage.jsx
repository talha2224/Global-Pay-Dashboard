import React, { useState } from 'react'
import { FaAmazon, FaFileArchive } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { IoMdAlert } from "react-icons/io";
import Chart from '../../../assets/dashboard/admin/chart.png'
import Chart2 from '../../../assets/dashboard/admin/chart.svg'
import Graph1 from '../../../assets/dashboard/admin/graph.png'
import Graph2 from '../../../assets/dashboard/admin/graph2.png'
import Graph3 from '../../../assets/dashboard/admin/graph3.png'


const AdminApiPage = () => {

    const [showDetails, setshowDetails] = useState(false)
    return (

        <div className=' overflow-y-auto'>

            <div className='flex justify-between items-start gap-x-8 bg-[#F6F7F8] h-[100%] overflow-x-auto md:flex-row flex-col'>

                <div className='bg-[#fff] p-5 rounded-[2rem] w-[100%] md:max-w-[30rem] md:min-w-[30rem] mt-2'>

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

                <div className='bg-[#fff] p-5 rounded-[2rem] flex-1 flex justify-between items-start mt-2'>
                    <div>
                        <h1>Api Request</h1>
                        <img src={Chart} alt="" />
                    </div>
                    <div>
                        <img src={Chart2} alt="" />
                    </div>
                </div>

            </div>


            <div className='bg-[#fff] p-5 rounded-[2rem] flex-1 mt-4'>

                <h1>Approved Requests</h1>
                <div className="overflow-x-auto mt-5">
                    <table className="border-collapse overflow-x-auto w-full">
                        <thead>
                            <tr className='text-sm text-[#8F8F8F]'>
                                <th className="border-b py-2 pr-4 text-left text-sm font-normal text-nowrap">Company Name</th>
                                <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">Contact Person</th>
                                <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">Reg No</th>
                                <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">Registration Date</th>
                                <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">IP Address</th>
                                <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">Phone Number</th>
                                <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4]?.map((data) => (
                                <tr key={data} className="border-b hover:bg-gray-100 text-sm font-normal">

                                    <td className="py-2 pr-4 text-sm font-normal text-nowrap">
                                        <div className='flex items-center gap-x-3'>
                                            <div className='w-7 h-7 bg-[#fff5ec] rounded-full flex justify-center items-center'><FaAmazon className='text-[#FF953F]' /></div>
                                            <p>Google</p>
                                        </div>
                                    </td>



                                    <td className="py-2 px-4 flex items-center text-sm font-normal text-nowrap">James Stuart</td>
                                    <td className="py-2 px-4 text-sm font-normal text-nowrap"><h1 className='text-sm text-[#1BD8BA] text-center'>070845</h1></td>
                                    <td className="py-2 px-4 text-sm font-normal text-nowrap"><h1 className='text-sm text-start '>Feb 2 - 2025 19:40</h1></td>
                                    <td className="py-2 px-4 text-sm font-normal text-nowrap"><h1 className='text-[#037AE0] text-start'>113.2.183.254</h1></td>
                                    <td className="py-2 px-4 text-sm font-normal text-nowrap"><h1 className='text-[#FF0500]'>(480) 555-0103</h1></td>
                                    <td className="py-2 px-4 text-sm font-normal text-nowrap flex items-center gap-x-3">
                                        <button onClick={() => setshowDetails(!showDetails)} className='border border-[#FF953F] bg-[#fff5ec] text-[#FF953F] px-3 py-1 rounded-full text-sm '>Active</button>
                                        <button onClick={() => setshowDetails(!showDetails)} className='border border-[#037AE0] text-[#037AE0] px-3 py-1 rounded-full text-sm '>Actions</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='bg-[#fff] p-5 rounded-[2rem] flex-1 mt-4'>

                <h1>Key Management</h1>
                <div className="overflow-x-auto mt-5">
                    <table className="border-collapse overflow-x-auto w-full">
                        <thead>
                            <tr className='text-sm text-[#8F8F8F]'>
                                <th className="border-b py-2 pr-4 text-left text-sm font-normal text-nowrap">Company Name</th>
                                <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">Contact Person</th>
                                <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">Reg No</th>
                                <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">Registration Date</th>
                                <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">Api Key</th>
                                <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4]?.map((data) => (
                                <tr key={data} className="border-b hover:bg-gray-100 text-sm font-normal">

                                    <td className="py-2 pr-4 text-sm font-normal text-nowrap">
                                        <div className='flex items-center gap-x-3'>
                                            <div className='w-7 h-7 bg-[#fff5ec] rounded-full flex justify-center items-center'><FaAmazon className='text-[#FF953F]' /></div>
                                            <p>Google</p>
                                        </div>
                                    </td>



                                    <td className="py-2 px-4 flex items-center text-sm font-normal text-nowrap">James Stuart</td>
                                    <td className="py-2 px-4 text-sm font-normal text-nowrap"><h1 className='text-sm text-[#1BD8BA] text-center'>070845</h1></td>
                                    <td className="py-2 px-4 text-sm font-normal text-nowrap"><h1 className='text-sm text-start '>Feb 2 - 2025 19:40</h1></td>
                                    <td className="py-2 px-4 text-sm font-normal text-nowrap"><h1 className='text-[#037AE0] text-start'>gdgbgdgddgs****</h1></td>
                                    <td className="py-2 px-4 text-sm font-normal text-nowrap flex items-center gap-x-3">
                                        <button onClick={() => setshowDetails(!showDetails)} className='border border-[#FF953F] bg-[#fff5ec] text-[#FF953F] px-3 py-1 rounded-full text-sm '>Approved</button>
                                        <button onClick={() => setshowDetails(!showDetails)} className='border border-[#037AE0] text-[#037AE0] px-3 py-1 rounded-full text-sm '>Actions</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>




            {
                showDetails && (
                    <div className="fixed top-0 left-0 w-screen h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out" onClick={() => setshowDetails(false)}>

                        <div className="bg-white rounded-lg shadow-lg p-6 w-[100%] h-[96vh] overflow-y-auto md:max-w-[50%] transform scale-95 opacity-0 animate-fade-in" onClick={(e) => e.stopPropagation()}>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <h1>API keys</h1>
                                    <p className='text-sm text-[#8F8F8F]'>Manage API keys for this instance</p>
                                </div>
                                <RxCross2 onClick={() => setshowDetails(false)} className=' cursor-pointer' />
                            </div>

                            <div className='bg-[#F7FFE7] rounded-md mt-4'>
                                <div className=' p-3 '>
                                    <h1>Quick Copy</h1>
                                    <p className='text-sm text-[#8F8F8F]'>Choose your framework and paste the code into your environment file.</p>
                                </div>

                                <div className='bg-[#F3F4F7] p-3'>
                                    <div className='flex items-center gap-x-2'>
                                        <FaFileArchive />
                                        <p>.env .local</p>
                                    </div>
                                    <h1 className='mt-2'>1 Next_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_Z2x1cmsubcvcv2VyAAmFkYS5jYSQ7554</h1>
                                    <h1 className='mt-2'>2 CLERK_SECRET_KEY=sk_live_*************************************</h1>
                                </div>
                                <div className='flex items-center gap-x-2 p-3'>
                                    <IoMdAlert className='text-[#FF953F]' />
                                    <p className='text-[#FF953F]'>These are the same Public and Secret keys as you see below.</p>
                                </div>
                            </div>


                            <div className='bg-[#fff] rounded-md mt-4 border'>

                                <div className=' p-3 bg-[#F9F9F9] '>
                                    <h1>Publishable Key</h1>
                                    <p className='text-sm text-[#8F8F8F]'>This key should be used in your frontend code. It can be safely shared, and does need to be kept secret.</p>
                                </div>

                                <div className='flex justify-between items-center p-3'>
                                    <h1>Public key</h1>

                                    <div className='flex items-center gap-x-4'>

                                        <p className='text-[#8F8F8F] text-sm border border-[#939393] px-3 py-1 rounded-md'>pk_live_Z2x1cmsubcvcv2VyAAmFkYS5jYSQ...</p>
                                        <button className='px-3 py-1 border border-[#939393] rounded-md'>Copy</button>

                                    </div>
                                </div>
                            </div>



                            <div className='bg-[#fff] rounded-md mt-4 border'>

                                <div className=' p-3 bg-[#F9F9F9] '>
                                    <h1>Secret Key</h1>
                                    <p className='text-sm text-[#8F8F8F]'>Securely manage these sensitive keys. Do not share them with anyone. if you suspect that one of your secret keys has been compromised, you should create a new key, update your code, then delete the compromised key.</p>
                                </div>

                                <div className='flex justify-between items-center p-3'>
                                    <h1>Default secret key</h1>

                                    <div className='flex items-center gap-x-4'>

                                        <p className='text-[#8F8F8F] text-sm border border-[#939393] px-3 py-1 rounded-md'>pk_live_Z2x1cmsubcvcv2VyAAmFkYS5jYSQ...</p>
                                        <button className='px-3 py-1 border border-[#939393] rounded-md'>Copy</button>

                                    </div>
                                </div>

                                <div className='flex justify-between items-center p-3'>
                                    <h1>Testing token</h1>

                                    <div className='flex items-center gap-x-4'>

                                        <p className='text-[#8F8F8F] text-sm border border-[#939393] px-3 py-1 rounded-md'>pk_live_Z2x1cmsubcvcv2VyAAmFkYS5jYSQ...</p>
                                        <button className='px-3 py-1 border border-[#939393] rounded-md'>Copy</button>

                                    </div>
                                </div>

                                <div className='flex justify-between items-center p-3'>
                                    <h1>Test</h1>

                                    <div className='flex items-center gap-x-4'>

                                        <p className='text-[#8F8F8F] text-sm border border-[#939393] px-3 py-1 rounded-md'>pk_live_Z2x1cmsubcvcv2VyAAmFkYS5jYSQ...</p>
                                        <button className='px-3 py-1 border border-[#939393] rounded-md'>Copy</button>

                                    </div>
                                </div>


                            </div>


                            <div className='flex items-center gap-x-2 p-3'>
                                <IoMdAlert className='text-[#FF953F]' />
                                <p className='text-[#FF953F]'>Clerk support will never ask you to share your secret keys</p>
                            </div>

                        </div>

                    </div>
                )
            }


        </div>

    )
}

export default AdminApiPage