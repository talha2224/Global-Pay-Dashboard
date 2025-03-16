import BlueLogo from '../../../assets/dashboard/admin/logo.png'
import { Link } from 'react-router-dom';
import { TiTick } from "react-icons/ti";

const CompanyPasswordPage = () => {

    const data = ["8 to 32 characters", "At least on uppercase letter", "At least on lowercase letter", "At least one number", "At least one special character"]


    return (

        <div className='flex justify-center items-center w-screen h-screen bg-[#FBFBFB]'>

            <div className=' flex justify-center items-center px-5 py-10 flex-col bg-[#fff]'>

                <div className='flex justify-center items-center gap-x-3'>
                    <img src={BlueLogo} alt="" />
                    <p className='text-lg font-medium'>Global Pay</p>
                </div>

                <div className='w-[100%] p-3 mt-8 '>

                    <h1 className='text-2xl'>Create a password</h1>

                    {/* AD OTP BOXES HERE  */}

                    <div className='mt-3'>
                        <input type="password" placeholder="*********" name="" id="" className='h-[2.8rem] w-[100%] sm:w-[24rem] border border-[#DADADA] rounded-md px-3 outline-none' />
                    </div>


                    <div className='flex items-center w-[100%] sm:w-[24rem] gap-x-3 mt-4'>
                        <div className='flex-1 h-[2px] bg-[#4CD9B1]'></div>
                        <div className='flex-1 h-[2px] bg-[#4CD9B1]'></div>
                        <div className='flex-1 h-[2px] bg-[#4CD9B1]'></div>
                    </div>

                    <div className='mt-5'>

                        {
                            data?.map((i) => (
                                <div className='flex items-center gap-x-3 mt-2'>
                                    <div className='w-[1.6rem] flex justify-center items-center h-[1.6rem] rounded-full bg-[#4CD9B1] text-white'><TiTick /></div>
                                    <p className='text-sm'>{i}</p>
                                </div>
                            ))
                        }

                    </div>

                    <Link to={"/company/info"}><button className='mt-5 h-[2.8rem] w-[100%] sm:w-[24rem] bg-[#037AE0] text-white rounded-full cursor-pointer'>Create</button></Link>



                </div>

            </div>

        </div>

    )
}

export default CompanyPasswordPage