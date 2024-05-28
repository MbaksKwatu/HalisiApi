import { useEffect, useRef, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BsPieChart } from "react-icons/bs";
import {  usePathname } from "next/navigation";
import Image from "next/image";
import HalisiIcon from '@/images/Platform Feedback icon.png'


const Menu = (props) => {
    const { children, items } = props
    const [isOpened, setIsOpened] = useState(false)
    return (
        <div className="">
            <button className="w-full flex items-center justify-between text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                onClick={() => setIsOpened(!isOpened)}
            >
                <div className="flex items-center gap-x-2">
                    {children}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 duration-150 ${isOpened ? 'rotate-180' : ''}`}>
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            {
                isOpened ? (
                    <ul className="mx-4 px-2 border-l text-sm font-medium">
                        {
                            items.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.href} className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                                        {
                                            item.icon ? (
                                                <div className="text-gray-500">{item.icon}</div>
                                            ) : ""
                                        }
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                ) : ""
            }
        </div>
    )
}

const Sidebar = () => {
   
    const pathname = usePathname()
    

    const navigation = [
        {
            href: '/qa/dashboard',
            name: 'Dashboard',
            icon : <MdOutlineDashboard className="w-6 h-6"/>
            
            
        },
        {
            href: '/qa/resources',
            name: 'Resources',
            icon: <FaRegFolder className="w-6 h-6"/>
            
            ,
        },
        {
            href: '/qa/panel-ratings',
            name: 'Panel Ratings',
            icon: <IoIosPeople className="w-6 h-6"/>
            ,
        },
        {
            href: '/qa/evaluated-profiles',
            name: 'Evaluated Profiles',
            icon: <BsPieChart className="w-6 h-6" />
        },
        // {
        //     href: 'javascript:void(0)',
        //     name: 'Interviews',
        //     icon: <FaRegCalendarAlt className="w-6 h-6" />
        // }
    ]

    const navsFooter = [
        {
            href: 'javascript:void(0)',
            name: 'Help',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            ,
        },
        {
            href: 'javascript:void(0)',
            name: 'Settings',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            ,
        }
    ]

    const nestedNav = [{ name: "Cards", href: "javascript:void(0)", icon: "" }, { name: "Chekouts", href: "javascript:void(0)", icon: "" }, { name: "Payments", href: "javascript:void(0)", icon: "" }, { name: "Get paid", href: "javascript:void(0)", icon: "" }]

    const profileRef = useRef()

    const [isProfileActive, setIsProfileActive] = useState(false)

    useEffect(() => {
        const handleProfile = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) setIsProfileActive(false)
        }
        document.addEventListener('click', handleProfile)
    }, [])

    return (
        <>
            <nav
                className="fixed top-0 left-0 w-full h-full border-r bg-white space-y-8 sm:w-64">
                <div class="flex flex-col h-full px-4">
                    <div className='h-20 flex items-center pl-2'>
                        <div className="w-full flex items-center gap-x-2">
                        <Image src={HalisiIcon} className="w-10 h-10" />
                            <div>
                                <span className="block text-gray-700 text-2xl font-extrabold ">Hali Halisi</span>
                               
                            </div>
                            
                        </div>
                    </div>
                    <div className="overflow-auto">
                    <ul>
                        {navigation.map((item, idx) => {
                            const isActive = pathname === item.href;
                            
                            return (
                                <li key={idx}>
                                    <a 
                                        href={item.href} 
                                        className={`flex items-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-orange-100 duration-150 ${isActive ? 'bg-orange-100' : ''}`}
                                    >
                                        <div className="text-gray-500">{item.icon}</div>
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                        {/* <ul className="text-sm font-medium flex-1">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx}>
                                        <a href={item.href} className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-orange-100 duration-150">
                                            <div className="text-gray-500">{item.icon}</div>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        
                        </ul> */}
                        
                    </div >
                </div>
            </nav>
        </>
    );
};

export default Sidebar;