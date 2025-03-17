import { useEffect, useRef, useState } from "react"
import Qr from '../../assets/dashboard/qr.png'
import { FaEye } from "react-icons/fa";
import USD from '../../assets/dashboard/usd.png'
import USDT from '../../assets/dashboard/usdt.png'
import BTC from '../../assets/dashboard/btc.png'
import Eth from '../../assets/dashboard/eth.png'
import { IoIosGift } from "react-icons/io";
import Badge from '../../assets/dashboard/badge.png'
import { RxCross1 } from "react-icons/rx";
import MasterCard from '../../assets/dashboard/mastercard.png'
const DepositPage = () => {

    const [showDepositModel, setShowDepositModel] = useState(false);
    const [confirmation, setconfirmation] = useState(false)
    const [showQrCode, setShowQrCode] = useState(false)

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, 6);
    }, []);

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

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
                    <h1>Deposit</h1>
                    <p className="text-[#8f8f8f] mt-1">Top up with your account</p>
                    <button onClick={() => setShowDepositModel(true)} className="text-sm text-[#00D725] w-[100%] px-5 py-2 rounded-full bg-[#E5FBE0] mt-3">Deposit</button>
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

                            <p className="text-lg font-medium">Deposit</p>
                            <p className="text-sm mt-1 text-[#8f8f8f]">Top up with your account</p>

                            <div className="bg-gray-100 mt-5 p-5 rounded-md">
                                <p className="text-base font-medium">Amount</p>
                                <div className="flex justify-between items-center mt-3 bg-gray-50 p-2 rounded-md">
                                    <input type="text" name="" id="" className="w-[100%] outline-none bg-transparent" placeholder="$ Enter amount to deposit" />
                                </div>
                                <p className="mt-2 text-[#F8835C]">0.20% will be deducted as charges fee</p>
                            </div>

                            <div className="bg-gray-100 mt-5 p-5 rounded-md">
                                <p className="text-base font-medium">Funding Method</p>
                                <div className="flex justify-between items-center mt-3 bg-gray-50 p-2 rounded-md">
                                    <div className="flex items-center gap-2">
                                        <img src={MasterCard} alt="Mastercard" />
                                        <div>
                                            <p className="text-base font-medium">Bank name</p>
                                            <p className="text-gray-500">******000</p>
                                        </div>
                                    </div>
                                    <button className="bg-gray-200 px-3 py-1 rounded-full text-sm">Change</button>

                                </div>
                            </div>

                            <button onClick={() => { setShowDepositModel(false); setconfirmation(true) }} className="bg-blue-600 text-white w-full h-12 flex justify-center items-center mt-4 rounded-full">Confirm</button>
                        </div>
                    </div>
                )
            }

            {
                confirmation && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">

                        <div className="bg-white w-[25rem] p-5 rounded-xl">


                            <div className="flex justify-between items-center">
                                <div></div>
                                <RxCross1 onClick={() => setconfirmation(false)} className="text-[#8f8f8f] cursor-pointer" />
                            </div>

                            <p className="text-lg font-medium">Verification code</p>
                            <p className="text-sm mt-1 text-[#8f8f8f]">We’ve sent the code to jo******@gmail.com</p>

                            <div className=" flex items-center gap-x-3 mt-4">
                                <p className="pb-1 border-b border-b-[#037AE0] text-[#037AE0]">Email</p>
                                <p className="pb-1  text-[#666666]">Phone</p>
                            </div>

                            <div className='mt-4 flex items-center gap-x-3'>
                                {otp.map((digit, index) => (
                                    <input key={index} type='text' maxLength='1' value={digit} onChange={(e) => handleOtpChange(index, e.target.value)} onKeyDown={(e) => handleKeyDown(index, e)} ref={(input) => (inputRefs.current[index] = input)} className='w-12 h-12 border border-gray-300 rounded-md text-center text-2xl focus:outline-none focus:border-blue-500' />
                                ))}
                            </div>

                            <button className="bg-[#EBF5FD] text-[#666666] text-xs px-4 py-1 rounded-full mt-3">59s</button>

                            <button onClick={() => { setShowQrCode(true); setconfirmation(false) }} className="bg-blue-600 text-white w-full h-12 flex justify-center items-center mt-4 rounded-full">Complete verification</button>


                            <div className='flex justify-center items-center mt-10 text-[#8F8F8F] w-[100%]'>
                                <p className='cursor-pointer'>Resend code?</p>
                            </div>
                        </div>
                    </div>
                )
            }


            {
                showQrCode && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">

                        <div className="bg-white w-[25rem] p-5 rounded-xl">

                            <p className="text-lg font-medium">Verification code</p>
                            <p className="text-sm mt-1 text-[#8f8f8f]">We’ve sent the code to jo******@gmail.com</p>

                            <div className="flex justify-center items-center mt-3">
                                <img src={Qr} alt="" />
                            </div>

                            <p className="text-sm mt-1 text-[#8f8f8f] text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>

                            <div className="w-[100%] mt-3 py-1 px-3 rounded-full border border-[#DADADA] flex justify-between items-center">
                                <p className="text-xs">eyy5 - tttt - 0583 - nvhg - uuyi</p>
                                <button className="px-5 py-2 bg-[#037AE0] text-white rounded-full text-xs">Copy</button>
                            </div>

                            <button onClick={() => { setShowQrCode(false); }} className="bg-blue-600 text-white w-full h-12 flex justify-center items-center mt-4 rounded-full">Close</button>
                        </div>
                    </div>
                )
            }



        </div>


    )
}

export default DepositPage