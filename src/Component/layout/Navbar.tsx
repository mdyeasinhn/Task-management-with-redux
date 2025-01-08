import { useState } from "react";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="relative shadow">
                <div className="container px-6 py-4 mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="text-2xl font-bold text-green-400">
                        Task Master
                    </a>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none lg:hidden"
                        aria-label="toggle menu"
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 8h16M4 16h16"
                                />
                            </svg>
                        )}
                    </button>

                    {/* Menu */}
                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 bg-white  lg:bg-transparent lg:flex lg:items-center lg:justify-center lg:static lg:opacity-100 lg:translate-x-0 ${isOpen
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-full lg:opacity-100"}`}
                    >
                        <div className="flex flex-col items-center lg:flex-row">
                            <a
                                className="my-2 text-gray-700 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-400 lg:mx-4 lg:my-0"
                                href="#"
                            >
                                Home
                            </a>
                            <a
                                className="my-2 text-gray-700 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-400 lg:mx-4 lg:my-0"
                                href="#"
                            >
                                Features
                            </a>
                            <a
                                className="my-2 text-gray-700 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-400 lg:mx-4 lg:my-0"
                                href="#"
                            >
                                Pricing
                            </a>
                            <a
                                className="my-2 text-gray-700 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-400 lg:mx-4 lg:my-0"
                                href="#"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Theme toggle */}
                    <div className="hidden lg:block">
                        <ModeToggle />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
