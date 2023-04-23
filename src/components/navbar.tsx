import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import Link from 'next/link';

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    function handleMenuToggle() {
        setShowMenu(!showMenu);
    }

    return (
        <div className="flex flex-col h-screen">
            <nav className="bg-gray-800 px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-white text-2xl font-bold">Logo
                    </Link>
                    <button
                        className="text-white block md:hidden"
                        onClick={handleMenuToggle}
                    >
                        <IoMenu size={28} />
                    </button>
                    <ul
                        className={`${showMenu ? 'block' : 'hidden'
                            } md:flex md:items-center md:space-x-20`}
                    >
                        <li>
                            <Link href="/" className="text-white hover:text-gray-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/team" className="text-white hover:text-gray-400">
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white hover:text-gray-400">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-white hover:text-gray-400">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
