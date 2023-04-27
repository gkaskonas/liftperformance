import Contact from "./contact";
import Footer from "./footer";
import NavBar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <NavBar />
      <main className="mt-0 flex-grow bg-black">{children}</main>
      {/* <Contact /> */}

      {/* <Footer /> */}
    </div>
  );
}
