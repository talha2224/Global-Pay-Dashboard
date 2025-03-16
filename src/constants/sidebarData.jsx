import { FaAddressBook, FaBuilding, FaCalendarAlt, FaRegCalendarCheck, FaRegUser, FaUser, FaWallet } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { IoIosCall, IoIosSettings, IoMdCard, IoMdDocument, IoMdNotifications, IoMdSettings } from "react-icons/io";
import { MdModeOfTravel, MdOutlineKey, MdOutlineSecurity } from 'react-icons/md';
import { IoCarSportSharp, IoKeySharp } from 'react-icons/io5';
import { AiOutlineTransaction } from "react-icons/ai";
import { RiHome5Fill } from "react-icons/ri";
import { PiHandWithdraw } from "react-icons/pi";
import { BsFillSendArrowDownFill } from "react-icons/bs";
import { RiLuggageDepositFill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";

export const navData = [
    {
        id: 1,
        link: "home",
        name: "Home",
        icon: <RiHome5Fill />
    },
    {
        id: 7,
        link: "cards",
        name: "Cards",
        icon: <IoMdCard  />
    },
    {
        id: 4,
        link: "deposit",
        name: "Deposit",
        icon: <RiLuggageDepositFill />
    },
    {
        id: 3,
        link: "send",
        name: "Send",
        icon: <BsFillSendArrowDownFill  />
    },
    {
        id: 30,
        link: "withdraw",
        name: "Withdraw",
        icon: <PiHandWithdraw  />
    },
    {
        id: 35,
        link: "settings",
        name: "Settings",
        icon: <IoIosSettings  />
    }
];

export const adminNav = [
    {
        id: 1,
        link: "home",
        name: "Home",
        icon: <RxDashboard className='text-[#FFCC00]' />
    },
    {
        id: 7,
        link: "companies",
        name: "Companies",
        icon: <FaBuilding className='text-[#FF8A65]'  />
    },
    {
        id: 4,
        link: "api",
        name: "API Management",
        icon: <IoKeySharp className='text-[#00FF40]'/>
    },
    {
        id: 3,
        link: "transactions",
        name: "Transactions",
        icon: <AiOutlineTransaction className='text-[#1BD8BA]'  />
    },
    {
        id: 10,
        link: "security",
        name: "Security",
        icon: <MdOutlineSecurity  className='text-[#037AE0]' />
    },
    {
        id: 11,
        link: "settings",
        name: "Settings",
        icon: <IoMdSettings className='text-[#5CCFFE]'  />
    }
]

export const companyNavData = [
    {
        id: 1,
        link: "home",
        name: "Home",
        icon: <RiHome5Fill/>
    },
    {
        id: 7,
        link: "api",
        name: "Api",
        icon: <MdOutlineKey/>
    },
    {
        id: 4,
        link: "transaction",
        name: "Transaction",
        icon: <GrTransaction/>
    },
    {
        id: 3,
        link: "documentation",
        name: "Documentation",
        icon: <IoMdDocument/>
    },
    {
        id: 35,
        link: "profile",
        name: "Profile",
        icon: <FaRegUser/>
    }
];