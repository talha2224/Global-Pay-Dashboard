import badge from '../../../assets/auth/badge.png'
import { Link } from 'react-router-dom';

const CompanyFinalPage = () => {

    const data = ["8 to 32 characters", "At least on uppercase letter", "At least on lowercase letter", "At least one number", "At least one special character"]


    return (

        <div className='flex justify-center items-center w-screen h-screen bg-[#FBFBFB]'>

            <div className=' flex justify-center items-center px-5 py-10 flex-col bg-[#fff] w-[25rem]'>


                <img src={badge} alt="" />

                <div className='w-[100%] p-3 mt-8 '>

                    <p className='text-xl text-center'>Your registration has been submitted for review</p>
                    <p className='text-sm text-[#8f8f8f] text-center'>You’ll be notified once it’s approved.</p>


                    <Link to={"/company/dashboard/home"}><button className='mt-5 h-[2.8rem] w-[100%] bg-[#037AE0] text-white rounded-full cursor-pointer'>Next</button></Link>



                </div>

            </div>

        </div>

    )
}

export default CompanyFinalPage