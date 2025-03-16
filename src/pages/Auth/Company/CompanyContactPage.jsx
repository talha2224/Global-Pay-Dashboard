import BlueLogo from '../../../assets/dashboard/admin/logo.png'
import { Link } from 'react-router-dom';
import { TiTick } from "react-icons/ti";

const CompanyContactPage = () => {

    const data = ["8 to 32 characters", "At least on uppercase letter", "At least on lowercase letter", "At least one number", "At least one special character"]


    return (

        <div className='flex justify-center items-center w-screen h-screen bg-[#FBFBFB]'>

            <div className=' flex justify-center items-center px-5 py-10 flex-col bg-[#fff]'>

                <div className='flex justify-center items-center gap-x-3'>
                    <img src={BlueLogo} alt="" />
                    <p className='text-lg font-medium'>Global Pay</p>
                </div>

                <div className='w-[100%] p-3 mt-8 '>

                    <h1 className='text-2xl'>Company Information</h1>
                    <p className='text-sm text-[#BBB7A6] mt-1'>Submit your information for admin approval and <br /> API key generation.</p>

                    <div className='mt-2'>
                        <input type="text" placeholder= "Contact Person Name" name="" id="" className='h-[2.8rem] w-[100%] sm:w-[24rem] border border-[#DADADA] rounded-md px-3 outline-none' />
                    </div>
                    <div className='mt-2'>
                        <input type="text" placeholder= "Contact Person Email" name="" id="" className='h-[2.8rem] w-[100%] sm:w-[24rem] border border-[#DADADA] rounded-md px-3 outline-none' />
                    </div>
                    <div className='mt-2'>
                        <input type="text" placeholder= "Phone Number" name="" id="" className='h-[2.8rem] w-[100%] sm:w-[24rem] border border-[#DADADA] rounded-md px-3 outline-none' />
                    </div>



                    <Link to={"/company/documents"}><button className='mt-5 h-[2.8rem] w-[100%] bg-[#037AE0] text-white rounded-full cursor-pointer'>Next</button></Link>



                </div>

            </div>

        </div>

    )
}

export default CompanyContactPage