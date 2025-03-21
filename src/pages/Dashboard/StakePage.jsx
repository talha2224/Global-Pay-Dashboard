import { useState } from "react"
import USD from '../../assets/dashboard/usd.png'
import USDT from '../../assets/dashboard/usdt.png'
import BTC from '../../assets/dashboard/btc.png'
import Eth from '../../assets/dashboard/eth.png'
import { IoIosGift } from "react-icons/io";
import Badge from '../../assets/dashboard/badge.png'


const StakePage = () => {

    const [showDepositModel, setShowDepositModel] = useState(false);

    return (


        <div className='flex-1 overflow-x-auto'>



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




            <div className="mt-5 flex justify-between items-center gap-x-4 overflow-x-auto">

                <div className="min-w-[20rem] h-[4rem] rounded-md px-3 bg-[#E4F2EE] flex justify-between items-center">
                    <div className="flex items-center gap-x-2">
                        <img src={USD} alt="" />
                        <div>
                            <p>USD</p>
                            <p className="text-[#4CD964] text-sm">+2.0%</p>
                        </div>
                    </div>
                    <div>
                        <p>$5.00</p>
                        <p className="text-sm text-[#8F8F8F]">5.00 USD</p>
                    </div>
                </div>

                <div className="min-w-[20rem] h-[4rem] rounded-md px-3 bg-[#F5EEE4] flex justify-between items-center">
                    <div className="flex items-center gap-x-2">
                        <img src={BTC} alt="" />
                        <div>
                            <p>BTC</p>
                            <p className="text-[#4CD964] text-sm">+2.0%</p>
                        </div>
                    </div>
                    <div>
                        <p>$5.00</p>
                        <p className="text-sm text-[#8F8F8F]">5.00 USD</p>
                    </div>
                </div>

                <div className="min-w-[20rem] h-[4rem] rounded-md px-3 bg-[#ffff] flex justify-between items-center">
                    <div className="flex items-center gap-x-2">
                        <img src={Eth} alt="" />
                        <div>
                            <p>ETH</p>
                            <p className="text-[#4CD964] text-sm">+2.0%</p>
                        </div>
                    </div>
                    <div>
                        <p>$5.00</p>
                        <p className="text-sm text-[#8F8F8F]">5.00 USD</p>
                    </div>
                </div>

                <div className="min-w-[20rem] h-[4rem] rounded-md px-3 bg-[#F5EEE4] flex justify-between items-center">
                    <div className="flex items-center gap-x-2">
                        <img src={USDT} alt="" />
                        <div>
                            <p>USDT</p>
                            <p className="text-[#4CD964] text-sm">+2.0%</p>
                        </div>
                    </div>
                    <div>
                        <p>$5.00</p>
                        <p className="text-sm text-[#8F8F8F]">5.00 USD</p>
                    </div>
                </div>


            </div>



            <div className="mt-5 flex items-start gap-x-6 flex-wrap">

                <div className="md:w-[30%] p-5 bg-white rounded-md mt-3">

                    <h1 className="font-medium">Transactions</h1>

                    <div className="flex justify-between items-start mt-2">
                        <div className="flex items-center gap-2">
                            <div className="bg-red-100 p-2 rounded-full">
                                <IoIosGift name="gift" className="text-red-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-lg">Reward</p>
                                <p className="text-gray-500 text-sm">Feb 2 - 2019 - 19:28</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg text-green-500">+5.00 USD</p>
                            <div className="bg-blue-100 px-1 py-0.5 rounded mt-1">
                                <p className="text-blue-600 text-xs text-center">Received</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="min-w-[20rem] bg-white rounded-md p-3 mt-3">
                    <h1>Stake</h1>
                    <p className="text-[#8f8f8f] mt-1">Stake your crypto and earn rewards</p>
                    <button onClick={() => setShowDepositModel(true)} className="text-sm text-[#00D725] w-[100%] px-5 py-2 rounded-full bg-[#E5FBE0] mt-3">Stake</button>
                </div>


                <div className="flex-1 bg-white mt-3 rounded-md p-3 flex justify-between items-center">

                    <div className="flex-1">
                        <p className="text-[#8f8f8f] text-sm">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        <div className="w-[100%] mt-3 py-1 px-3 rounded-full border border-[#DADADA] flex justify-between items-center">
                            <p className="text-xs">eyy5 - tttt - 0583 - nvhg - uuyi</p>
                            <button className="px-5 py-2 bg-[#037AE0] text-white rounded-full text-xs">Copy</button>
                        </div>
                    </div>
                    <div className="flex-1 justify-center items-center flex">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3C9KTR4CcYKKZOhZGTFJL15-kmr-ItlD4og&s" alt="" className="h-[8rem]" />
                    </div>

                </div>

            </div>


            {
                showDepositModel && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">

                        <div className="bg-white w-[25rem] p-5 rounded-xl">

                            <p className="text-lg font-medium">Stake</p>
                            <p className="text-sm mt-1 text-[#8f8f8f]">Stake Your Crypto</p>

                            <div className="bg-gray-100 mt-5 p-3 rounded-md">

                                <p className="text-base font-medium">Select Crypto</p>

                                <div className="flex justify-between items-center mt-3 bg-gray-50 p-2 rounded-md">
                                    <div className="flex items-center gap-2">
                                        <img src={BTC} alt="Mastercard" />
                                        <div>
                                            <p className="text-base font-medium">Bitcoin</p>
                                            {/* <p className="text-gray-500">$200,034.05</p> */}
                                        </div>
                                    </div>
                                    <button className="bg-gray-200 px-3 py-1 rounded-full text-sm">Change</button>
                                </div>

                            </div>

                            <div className="bg-gray-100 mt-5 p-5 rounded-md">
                                <p className="text-base font-medium">Amount</p>
                                <div className="flex justify-between items-center mt-3 bg-gray-50 p-2 rounded-md">
                                    <input type="number" name="" id="" className="w-[100%] outline-none bg-transparent" placeholder="1.00 - 100,000.00" />
                                </div>
                                <p className="mt-2 text-[#F8835C]">0.20% will be deducted as charges fee</p>

                            </div>

                            <button onClick={() => { setShowDepositModel(false) }} className="bg-blue-600 text-white w-full h-12 flex justify-center items-center mt-4 rounded-full">Stake</button>
                        </div>
                    </div>
                )
            }



        </div>


    )
}

export default StakePage