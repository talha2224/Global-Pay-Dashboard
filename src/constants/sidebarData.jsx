import { FaAddressBook, FaBuilding, FaCalendarAlt, FaRegCalendarCheck, FaUser, FaWallet } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { IoIosCall, IoMdNotifications, IoMdSettings } from "react-icons/io";
import { MdModeOfTravel, MdOutlineSecurity } from 'react-icons/md';
import { IoCarSportSharp, IoKeySharp } from 'react-icons/io5';
import { AiOutlineTransaction } from "react-icons/ai";

export const navData = [
    {
        id: 1,
        link: "home",
        name: "Dashboard",
        icon: <RxDashboard />
    },
    {
        id: 7,
        link: "users",
        name: "Users",
        icon: <FaUser />
    },
    {
        id: 4,
        link: "bookings",
        name: "Bookings",
        icon: <MdModeOfTravel />
    },
    {
        id: 3,
        link: "wallet",
        name: "Walllet History",
        icon: <FaWallet />
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