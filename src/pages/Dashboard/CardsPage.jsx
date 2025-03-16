import { useState } from "react";
import { FaEye } from "react-icons/fa";
import Badge from '../../assets/dashboard/badge.png'
import Badge2 from '../../assets/dashboard/badge2.png'
import Card1 from '../../assets/dashboard/card1.png'
import Card2 from '../../assets/dashboard/card2.png'
import Card3 from '../../assets/dashboard/card3.png'

import MasterCard from '../../assets/dashboard/mastercard.png'
import { PiCirclesThree } from "react-icons/pi";
import { IoMdCard } from "react-icons/io";
import { IoIosGift } from "react-icons/io";
import { HiOutlinePlusSm } from "react-icons/hi";
import { TiTick } from "react-icons/ti";

const CardsPage = () => {
    const [activeBtn, setActiveBtn] = useState("virtual")
    const [applyCardModel, setApplyCardModel] = useState(false);
    const [paymentModel, setpaymentModel] = useState(false)
    const [cardDesignModel, setCardDesignModel] = useState(false)

    return (


        <div className='flex-1 overflow-x-auto'>

            <div className="mt-0 bg-white p-5 rounded-xl flex justify-between items-center flex-wrap">
                <div className="mt-2">
                    <p className="text-gray-500">Est. Total Value (USD)</p>
                    <div className="flex items-center gap-2">
                        <p className="text-3xl font-light">$5.00</p>
                        <FaEye className="text-gray-500 text-lg" />
                    </div>
                </div>
                <button className="px-5 py-2 rounded-full text-[#037AE0] bg-[#E3EFF9] mt-2">Withdraw</button>
            </div>

            <div className="flex p-4  rounded-xl mt-4 justify-between items-center bg-white flex-wrap">

                <div className="flex items-center gap-x-3">
                    <img src={Badge} alt="Badge" />
                    <div>
                        <p className="text-lg font-medium">Verify your identity</p>
                        <p className="text-gray-500 mt-1">Start your spending journey today.</p>
                    </div>
                </div>

                <div>
                    <button className="bg-blue-600 text-white w-20 h-10 flex justify-center items-center mt-2 rounded-full">Verify</button>
                </div>
            </div>

            <div className="mt-5 flex  gap-2">
                <button onClick={() => setActiveBtn("virtual")} className={`px-4 py-2 rounded-full mt-0.5 text-sm ${activeBtn === "virtual" ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-black"}`}>Virtual Card</button>
                <button onClick={() => setActiveBtn("physical")} className={`px-4 py-2 rounded-full mt-0.5 text-sm ${activeBtn === "physical" ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-black"}`}>Physical Card</button>
            </div>

            <div className="mt-7 flex gap-x-6 items-start flex-wrap">
                <img src={Card1} alt="" className="mt-2" />
                <div className="mt-2">
                    <button onClick={() => setCardDesignModel(true)} className="flex-1 flex items-center gap-6 bg-blue-100 px-7 py-3 rounded-lg">
                        <PiCirclesThree className="text-blue-600 text-xl" />
                        <div>
                            <p className="font-medium">Card design</p>
                            <p className="text-gray-500 text-sm">Change your card design</p>
                        </div>
                    </button>

                    <button onClick={() => setCardDesignModel(true)} className="flex-1 flex items-center gap-6 bg-blue-100 px-7 py-3 rounded-lg mt-2">
                        <PiCirclesThree className="text-blue-600 text-xl" />
                        <div>
                            <p className="font-medium">Card settings</p>
                            <p className="text-gray-500 text-sm">Change your card settings</p>
                        </div>
                    </button>
                </div>

                <div className="mt-2 bg-white flex-1 p-5 rounded-xl">
                    <p className="text-lg font-medium">Transaction</p>

                    {/* Card Fee Transaction */}
                    <div className="flex justify-between items-start mt-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-green-100 p-2 rounded-full">
                                <IoMdCard className="text-green-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-lg font-medium">Card fee</p>
                                <p className="text-gray-500 text-sm">Feb 2 - 2019 - 19:28</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-red-500">-10.00 USD</p>
                            <p className="text-green-500">Successful</p>
                        </div>
                    </div>

                    {/* Reward Transaction */}
                    <div className="flex justify-between items-start mt-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-red-100 p-2 rounded-full">
                                <IoIosGift className="text-red-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-lg font-medium">Reward</p>
                                <p className="text-gray-500 text-sm">Feb 2 - 2019 - 19:28</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-green-500">+5.00 USD</p>
                            <p className="text-blue-600">Received</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-3 flex items-center gap-x-3 flex-wrap">
                <p className="text-sm text-[#8F8F8F] mt-2">Pay contactless online or in-store</p>
                <button onClick={() => setApplyCardModel(true)} className="text-sm text-[#037AE0] px-5 py-2 rounded-full bg-[#E6F2FC] my-2 mt-2">Apply Card -$10</button>
            </div>


            {
                applyCardModel && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">
                        <div className="bg-white w-[25rem] p-5 rounded-xl">
                            <p className="text-lg font-medium px-2 mt-8">Select payment method</p>
                            <p className="text-blue-600 px-2">Card fee - $10</p>

                            {/* Current Card */}
                            <div className="bg-gray-100 mt-5 p-5 rounded-md">
                                <p className="text-base font-medium">Current card</p>
                                <div className="flex justify-between items-center mt-3 bg-gray-50 p-2 rounded-md">
                                    <div className="flex items-center gap-2">
                                        <img src={MasterCard} alt="Mastercard" />
                                        <div>
                                            <p className="text-base font-medium">Bank name</p>
                                            <p className="text-gray-500">******000</p>
                                        </div>
                                    </div>
                                    <TiTick className=" text-green-600" />

                                </div>
                            </div>

                            <div className="bg-gray-100 mt-5 p-2 rounded-md">
                                <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-md">
                                    <HiOutlinePlusSm className="text-xl" />
                                    <p className="text-base font-medium">Add New Card</p>
                                </div>
                            </div>

                            <button onClick={() => { setApplyCardModel(false); setpaymentModel(true); }} className="bg-blue-600 text-white w-full h-12 flex justify-center items-center mt-4 rounded-full">Confirm</button>
                        </div>
                    </div>
                )
            }


            {
                paymentModel && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">
                        <div className="bg-white w-[25rem] p-5 rounded-md">
                            {/* Success Message */}
                            <div className="mt-2 flex flex-col justify-center items-center">
                                <img src={Badge2} alt="Success" className="w-16 h-16" />
                                <p className="text-xl font-medium">Transfer Successful!</p>
                                <p className="text-gray-500 mt-1">P2P transaction successful</p>
                            </div>

                            {/* Payment Details */}
                            <div className="bg-gray-100 mt-5 p-3 rounded-md">
                                <p className="text-gray-500">Payment</p>
                                <div className="flex justify-between items-start mt-3 bg-gray-50 p-2 rounded-md">
                                    <div className="flex items-center gap-2">
                                        <p className="text-lg font-medium">Wallet</p>
                                        <div className="bg-orange-100 px-2 py-1 rounded-md">
                                            <p className="text-orange-500 text-sm">Bitcoin</p>
                                        </div>
                                    </div>
                                    <p className="text-blue-600 font-medium">0.0003</p>
                                </div>
                            </div>

                            {/* Transaction Details */}
                            <div className="bg-gray-100 mt-5 p-3 rounded-md">
                                <p className="text-gray-500">Detail Transaction</p>

                                <div className="flex justify-between mt-3 bg-gray-50 p-2 rounded-md">
                                    <p className="text-lg">Amount</p>
                                    <p className="text-black">0.0003</p>
                                </div>

                                <div className="flex justify-between mt-2 bg-gray-50 p-2 rounded-md">
                                    <p className="text-lg">Date Transaction</p>
                                    <p className="text-gray-500">Feb 4 - 2025 19:40</p>
                                </div>
                            </div>

                            {/* Transaction ID */}
                            <div className="bg-blue-50 mt-5 p-3 rounded-md">
                                <p className="text-gray-500">ID Transaction</p>

                                <div className="flex justify-between items-center mt-3">
                                    <p className="text-lg font-medium">zxyyuwe888w</p>
                                    <button className="px-4 py-2 bg-white border border-gray-400 rounded-full">
                                        Change
                                    </button>
                                </div>
                            </div>

                            {/* Download Receipt Button */}
                            <button
                                onClick={() => setpaymentModel(false)}
                                className="bg-blue-600 text-white w-full h-12 flex justify-center items-center mt-4 rounded-full"
                            >
                                Download Receipt
                            </button>
                        </div>
                    </div>
                )
            }

            {
                cardDesignModel && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">
                        <div className="bg-white w-[25rem] h-[80vh] overflow-y-auto p-5 rounded-md">
                            {/* Title */}
                            <p className="text-lg font-medium px-2">Select Card</p>

                            {/* Card Images */}
                            <div className="flex flex-col items-center space-y-4 mt-4">
                                <img src={Card1} alt="Card 1" className="w-[345px] h-[225px]" />
                                <img src={Card2} alt="Card 2" className="w-[345px] h-[225px]" />
                                <img src={Card3} alt="Card 3" className="w-[345px] h-[225px]" />
                            </div>

                            {/* Cancel Button */}
                            <button
                                onClick={() => setCardDesignModel(false)}
                                className="border border-gray-500 bg-white text-black w-full h-12 flex justify-center items-center mt-4 rounded-full"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )
            }




        </div>


    )
}

export default CardsPage