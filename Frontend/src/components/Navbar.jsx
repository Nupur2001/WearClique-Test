import { useEffect, useState } from "react";
import Login from "./Login";
// import Logout from "./Logout";
// import { useAuth } from "../context/AuthProvider";

function Navbar() {


   
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
    const [sticky, setSticky] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    

    const toggleDropdown = () => {
        setDropdownVisible((prevState) => !prevState);
    };

    const navItems = (
        <>
            <li><a href="/">Home</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
            <li className="cursor-pointer">
               
            </li>

        </>
    );

    return (
        <div
            className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 ${sticky ? "sticky-navbar shadow-md bg-base-100 transition-all z-50 ease-in-out " : ""
                }`}
        >
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown relative">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                            onClick={toggleDropdown}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        {dropdownVisible && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-50 w-80 p-4 shadow bg-white"
                            >
                                {navItems}
                                <li>

                                    {/* <label className="input input-bordered flex items-center gap-2">
                                        <input type="text" className="grow" placeholder="Search" />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 opacity-70">
                                            <path
                                                fillRule="evenodd"
                                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </label> */}
                                </li>
                            </ul>
                        )}
                    </div>
                    <a className="text-2xl font-bold colorChange" href="/">
                        WearClique
                    </a>
                </div>
                <div className="navbar-end space-x-5">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{navItems}</ul>
                    </div>
                   

                   
                        <div className="px-4 py-3">
                            <a
                                className="btn bg-white text-white duration-300 cursor-pointer btnColor"
                                onClick={() => {
                                    document.getElementById("my_modal_3").showModal();
                                }}
                            >
                                Login
                            </a>
                            <Login />
                        </div>
                    

                </div>
            </div>
        </div>
    );
}

export default Navbar;