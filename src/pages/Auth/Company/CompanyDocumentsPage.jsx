import BlueLogo from '../../../assets/dashboard/admin/logo.png'
import { Link } from 'react-router-dom';
import { TiTick } from "react-icons/ti";

const CompanyDocumentsPage = () => {

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

                    <div className='mt-3 w-[100%] h-[2.6rem] rounded-md bg-[#EBEBEB] flex items-center px-3'>
                        <p>Business Registration Certificate</p>
                    </div>
                    
                    <div className='mt-3 w-[100%] h-[2.6rem] rounded-md bg-[#EBEBEB] flex items-center px-3'>
                        <p>Tax Id</p>
                    </div>



                    <Link to={"/company/final"}><button className='mt-5 h-[2.8rem] w-[100%] bg-[#037AE0] text-white rounded-full cursor-pointer'>Next</button></Link>



                </div>

            </div>

        </div>

    )
}

export default CompanyDocumentsPage