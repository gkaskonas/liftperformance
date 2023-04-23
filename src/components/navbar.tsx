import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">My Site</span>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={handleToggle}
                    className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <div
                className={`${isOpen ? 'block' : 'hidden'
                    } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
                <div className="text-lg lg:flex-grow">
                    <Link
                        href=""
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                    >
                        Docs
                    </Link>
                    <Link
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                    >
                        Examples
                    </Link>
                    <Link
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
                    >
                        Blog
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
