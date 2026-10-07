"use client"

import Link from "next/link"
import { useState } from "react"


const NavBar = () => {
   const [open, setOpen] = useState(false)
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <Link href="/"  className="text-xl text-green-700 font-medium ">
                F_B_K
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>

                

                <button className="cursor-pointer px-8 py-2 bg-green-700 hover:bg-green-700 transition text-white rounded-full">
                    Login.
                </button>
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <Link href="/" className="block">Home</Link>
                <Link href="/" className="block">About</Link>
                <Link href="/" className="block">Contact</Link>
                <button className="cursor-pointer px-6 py-2 mt-2 bg-green-700 hover:bg-green-700 transition text-white rounded-full text-sm">
                    Login
                </button>
            </div>

        </nav>
        )
}

export default NavBar