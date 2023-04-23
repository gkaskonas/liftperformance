import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 px-4 py-5">
            <div className="max-w-7xl mx-auto text-center text-white flex flex-col md:flex-row md:justify-between">
                <div>&copy; {new Date().getFullYear()} My Next.js App</div>
                <div className="mt-4 md:mt-0">
                    <Link href="#" className="text-gray-300 hover:text-white mx-3">Privacy Policy</Link>
                    <Link href="#" className="text-gray-300 hover:text-white mx-3">Terms of Service</Link>
                    <Link href="#" className="text-gray-300 hover:text-white mx-3">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
}
