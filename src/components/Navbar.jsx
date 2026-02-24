import { useState } from "react";
import {
    FaLocationDot,
    FaPhone,
    FaClock,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaXTwitter,
    FaAngleDown,
    FaArrowRight,
    FaBars,
    FaXmark
} from "react-icons/fa6";

import { NavLink } from "react-router-dom";


const navbar = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "about" },
    { name: "SERVICES", path: "services" },
    {
        name: "PAGES",
        children: [
            { name: "OUR ANIMALS", path: "animals" },
            { name: "MEMBERSHIP", path: "membership" },
        ],
    },
    { name: "CONTACT", path: "contact" },
];


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(false);

    return (
        <div>

            {/* Top Header */}
            <div className="bg-[#F3F4F5] hidden min-[992px]:flex justify-between items-center px-12 py-4">

                <div className="flex gap-6">
                    <div className="flex gap-2 items-center">
                        <FaLocationDot className="text-[#2EB872]" />
                        <p className="text-[#645579]">123 Street, New York, USA</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <FaClock className="text-[#2EB872]" />
                        <p className="text-[#645579]">
                            Mon - Fri : 09.00 AM - 09.00 PM
                        </p>
                    </div>
                </div>


                <div className="flex gap-6">

                    <div className="flex gap-2 items-center">
                        <FaPhone className="text-[#2EB872]" />
                        <p className="text-[#645579]">+0123456789</p>
                    </div>

                    <div className="flex gap-1 items-center">
                        <FaFacebookF className="text-[#2EB872] text-[36px] bg-white p-[10px]" />
                        <FaXTwitter className="text-[#2EB872] text-[36px] bg-white p-[10px]" />
                        <FaLinkedinIn className="text-[#2EB872] text-[36px] bg-white p-[10px]" />
                        <FaInstagram className="text-[#2EB872] text-[36px] bg-white p-[10px]" />
                    </div>

                </div>

            </div>



            {/* Main Navbar */}
            <header className="shadow-sm">

                <nav className="relative flex justify-between items-center px-8 min-[992px]:px-12 py-2">


                    {/* Logo */}
                    <div className="flex gap-3 items-center">
                        <img src="/icon-10.png" alt="Logo" />
                        <h1 className="text-[32px] min-[768px]:text-[45px] text-[#2EB872] font-semibold">
                            Zoofari
                        </h1>

                    </div>



                    {/* Desktop Menu */}
                    <ul className="hidden min-[992px]:flex gap-8 items-center">

                        {navbar.map((nav, index) => (

                            <li
                                key={index}
                                className="relative group text-[16px] font-semibold"
                            >

                                <NavLink
                                    to={nav.path || "#"}
                                    end={!!nav.path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-1 py-4 ${nav.path && isActive
                                            ? "text-[#2EB872]"
                                            : "text-[#282F34]"
                                        }`
                                    }
                                >
                                    {nav.name}

                                    {nav.children && (
                                        <FaAngleDown className="text-[12px]" />
                                    )}
                                </NavLink>



                                {/* Desktop Dropdown */}
                                {nav.children && (

                                    <ul className=" absolute top-full left-0 min-w-[180px]  bg-white
                  py-3 shadow-[0_1px_6px_rgba(0,0,0,0.1)] opacity-0 invisible translate-y-[10px]
                  transition-all  duration-300  group-hover:opacity-100  group-hover:visible  
                  group-hover:translate-y-0 flex flex-col gap-1 z-100
                  ">

                                        {nav.children.map((child, childIndex) => (

                                            <li
                                                key={childIndex}
                                                className="px-5 py-2 hover:bg-[#F3F4F5]"
                                            >

                                                <NavLink
                                                    to={child.path}
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "text-[#2EB872]"
                                                            : "text-[#282F34]"
                                                    }
                                                >
                                                    {child.name}
                                                </NavLink>

                                            </li>

                                        ))}

                                    </ul>

                                )}

                            </li>

                        ))}


                        {/* Desktop Button */}
                        <button className="flex items-center gap-2 text-white bg-[#2EB872] px-4 py-2">
                            Buy Ticket <FaArrowRight />
                        </button>


                    </ul>



                    {/* Hamburger Button */}
                    <button
                        className="min-[992px]:hidden text-[24px]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaXmark /> : <FaBars />}
                    </button>



                    {/* Mobile Menu */}
                    <ul className={`
            min-[992px]:hidden
            absolute
            left-0
            top-full
            w-full
            bg-white
            px-6
            py-4
            shadow-md
            flex flex-col gap-4
            transition-all duration-300 z-100
            ${isOpen
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-5"}
          `}>



                        {navbar.map((nav, index) => (

                            <li key={index} className="text-[16px] font-semibold">

                                <div
                                    className="flex gap-1 items-center cursor-pointer"
                                    onClick={() =>
                                        nav.children &&
                                        setMobileDropdown(!mobileDropdown)
                                    }
                                >

                                    <NavLink
                                        to={nav.path || "#"}
                                        end={!!nav.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `${nav.path && isActive
                                                ? "text-[#2EB872]"
                                                : "text-[#282F34]"
                                            }`
                                        }
                                    >
                                        {nav.name}
                                    </NavLink>

                                    {nav.children && (
                                        <FaAngleDown />
                                    )}

                                </div>



                                {/* Mobile Dropdown */}
                                {nav.children && mobileDropdown && (

                                    <ul className="pl-4 mt-2 flex flex-col gap-2 ">

                                        {nav.children.map((child, childIndex) => (

                                            <li key={childIndex}>
                                                <NavLink
                                                    to={child.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "text-[#2EB872]"
                                                            : "text-[#282F34]"
                                                    }
                                                >
                                                    {child.name}
                                                </NavLink>
                                            </li>

                                        ))}

                                    </ul>

                                )}

                            </li>

                        ))}



                        {/* Mobile Button */}
                        <button className="flex items-center gap-2 text-white bg-[#2EB872] px-4 py-2 w-fit">
                            Buy Ticket <FaArrowRight />
                        </button>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
