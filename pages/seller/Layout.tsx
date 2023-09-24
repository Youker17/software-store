"use client"

import "@/app/globals.css"
import { Toaster } from "@/components/ui/toaster"
import logo from "@/public/logo.png"
import Image from "next/image"
import Link from "next/link"
import profile from "@/assets/profiletest.jpg"
import { useRouter } from "next/router"
import AuthChecker from "@/components/seller/AuthChecker"
import { AnimatePresence } from "framer-motion"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const activeLink = "cursor-pointer  hover:bg-gray-800/50 transition-all ease-in-out  bg-gray-800 w-full text-center px-6 py-4 rounded-xl  text-white"
const inactiveLink = "cursor-pointer  hover:bg-gray-800/50 transition-all ease-in-out  w-full text-center px-6 py-4 rounded-xl  hover:text-white"


export default function SellerLayout({ children }: { children: React.ReactNode }) {
    const location = useRouter()
    const [activeLoader, setActiveLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setActiveLoader(false)
        }, 6000);
    }, [])


    return activeLoader ? <AuthChecker /> : (
        <TooltipProvider>
            <div className="bg-black flex flex-col justify-center text-white items-center gap-5 lg:hidden h-screen">
                <p className="shadow-2xl shadow-white"> Please use computer to enter the Dashboard</p>
                <svg className="w-10 h-10 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 9V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v7h20ZM0 11v2a2 2 0 0 0 2 2h7v3H6a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-3h7a2 2 0 0 0 2-2v-2H0Z" />
                </svg>
            </div>
            <div className="container  p-10 gap-5 hidden lg:flex flex-row w-full  h-screen justify-center items-center">
                <Toaster />
                <div className="w-1/3 h-full">
                    <div className="h-full bg-white rounded-xl w-full p-4 text-black flex flex-col justify-between items-center">
                        <div className="flex flex-col gap-6 w-full items-center">
                            <Link href='/' className="text-xl flex flex-row items-center"> <img src={logo.src} className="w-10 aspect-square invert" alt="" />CheapDigi <span className="text-sm text-gray-500 h-full">(seller)</span></Link>
                            <div className=" w-full rounded-xl bg-gray-600/10 p-6 flex flex-row gap-3">
                                <Image src={profile} alt="" width={80} height={80} className="w- aspect-square rounded-full object-cover" />
                                <div className="flex flex-col justify-around">
                                    <h1 className="font-bold text-lg flex flex-row items-center gap-2">Admin Name
                                        <svg className="w-3 h-3 text-yellow-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" fill='yellow' stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
                                        </svg>
                                    </h1>
                                    <h1 className="">email@email.com</h1>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col gap-2 w-full justify-center items-center ">
                            <Link href={"/seller"} className={location.pathname === "/seller" ? activeLink : inactiveLink}>Home</Link>
                            <Link href={"/seller/orders"} className={location.pathname === "/seller/orders" ? activeLink : inactiveLink}>Orders</Link>
                            <Link href={"/seller/products"} className={location.pathname === "/seller/products" ? activeLink : inactiveLink}>Products</Link>
                            <Link href={"/seller/orders"} className={location.pathname === "/seller/account" ? activeLink : inactiveLink}>Account</Link>
                        </div>

                        <Link href="/" className="cursor-pointer text-white bg-red-500 px-6 py-4 rounded-xl w-full text-center flex flex-row gap-5 items-center justify-center">
                            <svg className="w-4 h-4 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                            </svg><p className="">Logout</p></Link>

                    </div>
                    <p className="mx-auto text-gray-600 mt-2">©CheapDigi™, All rights reserved.</p>
                </div>

                <ScrollArea className="w-full  h-full ">
                    <AnimatePresence>
                        {children}
                    </AnimatePresence>
                </ScrollArea>
            </div>
        </TooltipProvider>
    )

}