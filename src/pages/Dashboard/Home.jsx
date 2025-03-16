import { useState } from "react"
import Illustration from '../../assets/dashboard/illustration.png'
import { FaEye } from "react-icons/fa";
import USD from '../../assets/dashboard/usd.png'
import USDT from '../../assets/dashboard/usdt.png'
import BTC from '../../assets/dashboard/btc.png'
import Eth from '../../assets/dashboard/eth.png'
import { IoIosGift } from "react-icons/io";


const Home = () => {
  const [initialModel, setInitialModel] = useState(true)

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


      <div className="mt-5 md:flex justify-between items-start gap-x-4 flex-wrap">

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


        <div className="flex-1 p-5 bg-white rounded-md mt-3 flex items-center gap-x-6 flex-wrap">

          <button className="text-sm text-[#00D725] px-5 py-2 rounded-full bg-[#E5FBE0] my-2">Deposit</button>
          <button className="text-sm text-[#00C7BE] px-5 py-2 rounded-full bg-[#E5F9F8] my-2">Send</button>
          <button className="text-sm text-[#FF9500] px-5 py-2 rounded-full bg-[#FFF4E5] my-2">Convert</button>
          <button className="text-sm text-[#037AE0] px-5 py-2 rounded-full bg-[#E6F2FC] my-2">Withdraw</button>
          <button className="text-sm text-[#00C7BE] px-5 py-2 rounded-full bg-[#E5F9F8] my-2">Scan Qr Code</button>

        </div>

      </div>


      {
        initialModel && (

          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">

            <div className="bg-white rounded-md flex justify-center items-center flex-col w-[25rem] p-5">

              <img src={Illustration} />
              <h1 className="text-xl mt-4">You've Earned $5 Credit!</h1>
              <h1 className="text-sm text-[#848484] text-center">Congratulations! You've received a $5 credit reward. Complete your KYC verification to unlock and use your reward.</h1>

              <button onClick={() => setInitialModel(false)} style={{ backgroundColor: "#037AE0", width: "100%", height: 40, justifyContent: "center", alignItems: "center", marginTop: 8, borderRadius: 100 }}>
                <h1 style={{ color: "#fff" }}>Complete KYC Now</h1>
              </button>

              <button onClick={() => setInitialModel(false)} style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                <h1 style={{ color: "#1E1E1E" }}>Later</h1>
              </button>

            </div>

          </div>

        )
      }


    </div>


  )
}

export default Home