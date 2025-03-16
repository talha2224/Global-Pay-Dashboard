import { useEffect, useRef, useState } from 'react';
import AuthImage from '../../assets/auth/auth1.png'
import BlueLogo from '../../assets/dashboard/admin/logo.png'
import { Link } from 'react-router-dom';

const OtpPage = () => {

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

        <div className='flex justify-center items-center w-screen h-screen'>

            <div className='flex-1 bg-[#037AE0] hidden md:flex justify-center items-center flex-col text-white h-[100%]'>

                <h1 className='text-xl'>Send Money Instantly</h1>
                <p className='mt-1 text-sm text-center w-[50%]'>Use QR codes or unique IDs for instant P2P transfers and quick payments worldwide.</p>

                <div className='flex justify-center items-center mt-2 h-[75%]'>
                    <img src={AuthImage} alt="" className='h-[100%]' />
                </div>

            </div>

            <div className='flex-1 flex justify-center items-center flex-col h-[100%] bg-[#FCFCFC] sm:mx-0 mx-4 '>

                <div className='flex justify-center items-center gap-x-3'>
                    <img src={BlueLogo} alt="" />
                    <p className='text-lg font-medium'>Global Pay</p>
                </div>

                <div className='w-[100%] md:w-[80%]  p-3 mt-8 '>

                    <h1 className='text-2xl'>Verification code</h1>
                    <h1 className='mt-1 text-sm text-[#C3BFAE]'>We’ve sent the code to jo******@gmail.com</h1>

                    {/* AD OTP BOXES HERE  */}

                    <div className='mt-4 flex items-center gap-x-3'>
                        {otp.map((digit, index) => (
                            <input key={index} type='text' maxLength='1' value={digit} onChange={(e) => handleOtpChange(index, e.target.value)} onKeyDown={(e) => handleKeyDown(index, e)} ref={(input) => (inputRefs.current[index] = input)} className='w-12 h-12 border border-gray-300 rounded-md text-center text-2xl focus:outline-none focus:border-blue-500'/>
                        ))}
                    </div>

                    <Link to={"/password"}><button className='mt-5 h-[2.8rem] w-[100%] sm:w-[24rem] bg-[#037AE0] text-white rounded-full cursor-pointer'>Verify</button></Link>


                    <div className='flex justify-center items-center mt-10 text-[#8F8F8F] w-[100%] sm:w-[24rem]'>
                        <p className='cursor-pointer'>Resend code?</p>
                    </div>




                </div>

            </div>

        </div>

    )
}

export default OtpPage
