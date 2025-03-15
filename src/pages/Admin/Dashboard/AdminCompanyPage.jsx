import React, { useState } from 'react'
import { FaAmazon } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { TfiGallery } from "react-icons/tfi";

const AdminCompanyPage = () => {

    const [showDetails, setshowDetails] = useState(false)
    return (

        <div className=' overflow-y-auto'>


            <div className='bg-[#fff] p-5 rounded-[2rem] flex-1 mt-4'>

                <h1>Pending Approvals</h1>
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

                <h1>Approved Companies</h1>
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


            <div className='bg-[#fff] p-5 rounded-[2rem] flex-1 mt-4 mb-10'>

                <h1>Flagged Companies</h1>
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
                                        <button onClick={() => setshowDetails(!showDetails)} className='border border-[#FF953F] bg-[#fff5ec] text-[#FF953F] px-3 py-1 rounded-full text-sm '>Flagged</button>
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

                        <div className="bg-white rounded-lg shadow-lg p-6 w-[100%] max-w-md transform scale-95 opacity-0 animate-fade-in" onClick={(e) => e.stopPropagation()}>

                            <div className='flex justify-between items-center'>

                                <div>
                                    <h1>Details</h1>
                                    <p className='text-sm text-[#8F8F8F]'>Full registration details</p>
                                </div>
                                <RxCross2 onClick={() => setshowDetails(false)} className=' cursor-pointer' />
                            </div>


                            <div className='flex items-start justify-between mt-5 gap-x-6'>
                                <div className='flex-1 bg-[#F9F9F9] flex justify-center items-center rounded-md flex-col h-[15rem]'>
                                    <TfiGallery className='text-[#666666] mb-2' />
                                    <p className='text-sm text-[#666666] text-center'>Business Registration Certificate</p>
                                </div>
                                <div className='flex-1 bg-[#F9F9F9] flex justify-center items-center rounded-md flex-col h-[15rem]'>
                                    <TfiGallery className='text-[#666666] mb-2' />
                                    <p className='text-sm text-[#666666]'>Tax Id</p>
                                </div>
                            </div>

                            <div className='flex items-start justify-between mt-5 gap-x-6'>
                                <div className='flex-1'>
                                    <button className=' text-sm bg-[#037AE0] text-white h-[2.3rem] rounded-md w-[100%]'>Donwload</button>
                                    <button className=' text-sm bg-[#F9F9F9] h-[2.3rem] rounded-md w-[100%] mt-2'>View</button>
                                </div>
                                <div className='flex-1'>
                                    <button className=' text-sm bg-[#037AE0] text-white h-[2.3rem] rounded-md w-[100%]'>Donwload</button>
                                    <button className=' text-sm bg-[#F9F9F9] h-[2.3rem] rounded-md w-[100%] mt-2'>View</button>
                                </div>
                            </div>


                            <div className='mt-5'>
                                <h1>Expiration Date</h1>
                                <input type="date" name="" id="" className='w-[100%] h-[2.3rem] rounded-md bg-[#F9F9F9] px-3 mt-2 text-sm' />
                            </div>

                            <div className='mt-5'>
                                <h1>Contact Info</h1>
                            </div>

                            <div className="overflow-x-auto mt-5">
                                <table className="border-collapse overflow-x-auto w-full">
                                    <thead>
                                        <tr className='text-sm text-[#8F8F8F]'>
                                            <th className="border-b py-2 pr-4 text-left text-sm font-normal text-nowrap">Company Name</th>
                                            <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">Contact Person</th>
                                            <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">Reg Date</th>
                                            <th className="border-b py-2 px-4 text-left text-sm font-normal text-nowrap">IP Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[1]?.map((data) => (
                                            <tr key={data} className="border-b hover:bg-gray-100 text-sm font-normal">

                                                <td className="py-2 pr-4 text-sm font-normal text-nowrap">
                                                    <div className='flex items-center gap-x-3'>
                                                        <div className='w-7 h-7 bg-[#fff5ec] rounded-full flex justify-center items-center'><FaAmazon className='text-[#FF953F]' /></div>
                                                        <p>Google</p>
                                                    </div>
                                                </td>



                                                <td className="py-2 px-4 flex items-center text-sm font-normal text-nowrap">James Stuart</td>
                                                <td className="py-2 px-4 text-sm font-normal text-nowrap"><h1 className='text-sm text-start '>Feb 2 - 2025 19:40</h1></td>
                                                <td className="py-2 px-4 text-sm font-normal text-nowrap"><h1 className='text-[#037AE0] text-start'>113.2.183.254</h1></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>


                        </div>

                    </div>
                )
            }


        </div>

    )
}

export default AdminCompanyPage