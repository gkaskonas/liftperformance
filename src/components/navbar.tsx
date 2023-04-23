import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex flex-col h-screen">
            <nav className="bg-gray-800 px-4 py-3">
                <div className="flex justify-center">
                    <ul className="flex items-center space-x-20">
                        <li>
                            <Link href="/" className="text-white  hover:text-gray-400">Home</Link>
                        </li>
                        <li>
                            <Link href="/team" className="text-white hover:text-gray-400">Team
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white hover:text-gray-400">About</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-white hover:text-gray-400">Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    );
}