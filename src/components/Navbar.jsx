'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {

    const pathName = usePathname();
    console.log(pathName);

    const Linklist = <>
        <Link href={"/about"} className={`${pathName === "/about" ? "text-blue-300" : ""}`}>About</Link>
        <Link href={"/services"} className={`${pathName === "/services" ? "text-blue-300" : ""}`}>Services</Link>
        <Link href={"/blogs"} className={`${pathName === "/blogs" ? "text-blue-300" : ""}`}>Blogs</Link>
        <Link href={"/dashboard"} className={`${pathName === "/dashboard" ? "text-blue-300" : ""}`}>Dashboard</Link>
        <Link href={"/users"} className={`${pathName === "/users" ? "text-blue-300" : ""}`}>Users</Link>
    </>

    return (
        <div>

            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Linklist}
                        </ul>
                    </div>
                    <Link href={"/"} className="btn btn-ghost text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {Linklist}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;