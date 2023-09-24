"use client"
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import ctoast from "@/helpers/toast";



export default function BecomeSeller() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            ctoast("This is only a Showcase Projects and not a real E-commerce website. !", "Please keep this in mind")
        }, 1500);
    }
        , [])


    return visible && (
        <div className="fixed z-50 left-10 bottom-0 w-60 h-40 overflow-hidden rounded-xl bg-gradient-to-tr from-gray-800/50 to-gray-700/50 backdrop-blur-lg p-10 my-5 gap-5 flex flex-col justify-center items-center">
            <h1 className="font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text text-xl relative">Become a seller
                <svg onClick={e => setVisible(false)} className="w-3 h-3 cursor-pointer top-0 -right-8 absolute text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </h1>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
            <Link href="/seller/" className="bg-gradient-to-r py-2 w-full flex flex-rox justify-center items-center from-indigo-400 to-cyan-400 rounded-xl  hover:scale-110 transition-all duration-200 ease-in-out hover:shadow-2xl hover:shadow-white">Become a seller</Link>
        </div>
    )









}