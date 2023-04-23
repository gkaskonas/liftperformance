import Link from 'next/link';
import NavBar from './navbar';
import Footer from './footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <NavBar />
            <main className="flex-grow">{children}</main>
            <br></br>
            <Footer />
        </div>
    );
};

