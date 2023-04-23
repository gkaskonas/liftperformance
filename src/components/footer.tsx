
export default function Footer() {
    return (
        <footer className="bg-gray-800 px-4 py-5">
            <div className="max-w-7xl mx-auto text-center text-white">
                &copy; {new Date().getFullYear()} My Next.js App
            </div>
        </footer>
    );
}