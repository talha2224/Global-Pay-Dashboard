import React, { useState, useRef, useEffect } from 'react';
import Blur from '../../assets/auth/blur.png';
import Logo from '../../assets/auth/logo.png';
import { IoEye } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const AdminVerificationPage = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, 6);
    }, []);

    const handleInputChange = (index, value) => {
        if (isNaN(value)) return; // Only allow numbers

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div style={{ backgroundImage: `url(${Blur})` }}className="w-screen h-screen bg-no-repeat bg-cover flex justify-center items-center flex-col">
            
            <div className="flex items-center gap-x-3">
                <img src={Logo} alt="" />
                <h1 className="text-white">Global Pay</h1>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 mt-8 w-[27rem]">
                <h2 className="text-white text-lg mb-2">Login as Admin</h2>
                <p className="text-sm text-[#C3BFAE] mb-4">We’ve sent the code to jo******@gmail.com</p>

                {/* OTP Boxes */}
                <div className="flex justify-center mb-4">
                    {otp.map((digit, index) => (<input key={index}ref={(el) => (inputRefs.current[index] = el)}type="text"maxLength="1"value={digit}onChange={(e) => handleInputChange(index, e.target.value)}onKeyDown={(e) => handleKeyDown(index, e)}className="w-12 h-12 mx-2 text-center rounded bg-white bg-opacity-20 backdrop-filter backdrop-blur-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>))}
                </div>

                <Link to={'/admin/dashboard/home'}>
                    <button className="mt-5 bg-[#F4FCFF] bg-opacity-20 backdrop-filter backdrop-blur-md text-[#B1B1B1] py-3 px-4 rounded-[2rem] focus:outline-none focus:shadow-outline w-full">Verify</button>
                </Link>

                <p className='text-center mt-5 cursor-pointer text-white'>Resend code?</p>
            </div>
        </div>
    );
};

export default AdminVerificationPage;