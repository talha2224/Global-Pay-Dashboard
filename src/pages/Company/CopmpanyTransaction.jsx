import React, { useState } from 'react'
import {IoKey } from "react-icons/io5";


const CopmpanyTransaction = () => {
  return (
    <div>


      <div className='w-[100$] bg-white rounded-md p-5'>

        <h1>API Transaction</h1>

        {
          [1, 2, 3, 4]?.map((i) => (
            <div key={i} className="w-[100%] gap-x-4 overflow-x-auto flex justify-between items-center my-3">
              
              <div>
                <p className='text-[#8f8f8f] text-nowrap'>Date</p>
                <p className='text-nowrap'>Feb 2 - 2025 19:40</p>
              </div>

              <div className='flex items-center gap-x-2'>
                <IoKey className='text-[#FF953F]' />
                <p className='text-nowrap'>0x864784f44a...</p>
              </div>
              <button className="text-sm text-[#037AE0] px-5 py-2 rounded-full bg-[#E6F2FC] my-2">Deposit</button>

              <div>
                <p className=' text-nowrap'>Amount</p>
                <p className='text-nowrap text-[#037AE0]'>$2000</p>
              </div>


              <button className="text-sm text-[#037AE0] px-5 py-2 rounded-full border border-[#037AE0] my-2 text-nowrap">Sucessfull</button>



            </div>
          ))
        }


      </div>


    </div>
  )
}

export default CopmpanyTransaction