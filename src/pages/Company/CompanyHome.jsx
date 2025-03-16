import React, { useState } from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoKey } from "react-icons/io5";
import Summary from '../../assets/dashboard/summary.svg'
const apiKeys = [
    { key: "0x864784f44a...", color: "#FF0D00" },
    { key: "0x864784f44a...", color: "#FF953F" },
    { key: "0x864784f44a...", color: "#4BD763" },
];

const CompanyHome = () => {
    const [actionModel, setActionModel] = useState(false)
    return (
        <div>

            <div className='md:flex justify-between items-start gap-x-7'>

                <div className='flex-1 bg-white rounded-md p-5'>
                    <h1>Quick Stats</h1>
                    <div className="">
                        {/* Total Transactions */}
                        <div className="flex justify-between items-start bg-[#FCFCFC] p-2 rounded-md mt-3">
                            <div className="flex items-center space-x-2">
                                <FaMoneyBillTransfer size={20} color="#8744E1" />
                                <p className="text-gray-600 text-lg">Total Transactions</p>
                            </div>
                            <div className="bg-blue-100 px-2 py-1 rounded-md">
                                <p className="text-blue-600 text-center">23 transactions</p>
                            </div>
                        </div>

                        {/* Active API Keys */}
                        <div className="flex justify-between items-start bg-[#FCFCFC] p-2 rounded-md mt-3">
                            <div className="flex items-center space-x-2">
                                <IoKey size={20} color="#FF953F" />
                                <p className="text-gray-600 text-lg">Active API Keys</p>
                            </div>
                            <div className="bg-orange-100 px-2 py-1 rounded-md">
                                <p className="text-orange-500 text-center">4 active</p>
                            </div>
                        </div>

                        {/* Pending API Keys */}
                        <div className="flex justify-between items-start bg-[#FCFCFC] p-2 rounded-md mt-3">
                            <div className="flex items-center space-x-2">
                                <IoKey size={20} color="#4BD763" />
                                <p className="text-gray-600 text-lg">Pending Keys</p>
                            </div>
                            <div className="bg-blue-100 px-2 py-1 rounded-md">
                                <p className="text-blue-600 text-center">2 pending</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex-1 mt-3 md:mt-[-20px]'>
                    <img src={Summary} alt="" />
                </div>

            </div>


            <div className='md:flex justify-between items-start gap-x-7'>

                <div className='flex-1 bg-white rounded-md p-5'>
                    <h1>Api Keys</h1>
                    <div className="space-y-4">

                        {apiKeys.map((api, index) => (
                            <div key={index} className="flex justify-between items-center bg-[#FCFCFC] py-2 px-3 rounded-md mt-3">
                                <div className="flex items-center space-x-3">
                                    <IoKey size={20} color={api.color} />
                                    <p className="text-gray-600 text-lg">{api.key}</p>
                                </div>

                                <button onClick={() => setActionModel(true)} className="bg-blue-100 text-blue-600 px-4 py-1 text-sm rounded-full">Actions</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex-1 mt-3 md:mt-0 bg-white rounded-md p-5'>
                    <h1>Api Transaction</h1>
                    <div className="space-y-4">

                        {apiKeys.map((api, index) => (
                            <div key={index} className="flex justify-between items-center bg-[#FCFCFC] py-2 px-3 rounded-md mt-3">
                                <div className="flex items-center space-x-3">
                                    <IoKey size={20} color={api.color} />
                                    <p className="text-gray-600 text-lg">{api.key}</p>
                                </div>

                                <button onClick={() => setActionModel(true)} className="bg-blue-100 text-blue-600 px-4 py-1 text-sm rounded-full">Actions</button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


            {
                actionModel && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-40">
                        <div className="bg-white p-5 w-[20rem] rounded-md">
                            <h2 className="text-xl font-semibold mt-2">Action</h2>
                            <p className='text-[#8f8f8f]'>Sed ut perspiciatis unde </p>

                            <div className="mt-5 space-y-2">
                                <button className="block text-lg text-gray-700 cursor-pointer">View API</button>
                                <button className="block text-lg text-red-500 hover:text-red-700 cursor-pointer">Deactivate</button>
                                <button className="block text-lg text-green-500 hover:text-green-700 cursor-pointer">Regenerate</button>
                            </div>
                        </div>

                        {/* Close modal on background press */}
                        <div className="absolute inset-0"onClick={() => setActionModel(false)}></div>
                    </div>
                )
            }

        </div>
    )
}

export default CompanyHome