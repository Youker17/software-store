"use client";
import "@/app/globals.css";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function GlowCursor(){
    const [position, setPosition] = useState({ x: 0, y: 0 });


    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        });
    }, []);
    return (
        <motion.div animate={{top:(position.y-80)+"px", left:(position.x - 80)+"px"}} transition={{duration:.5}} className="w-40 origin-center  aspect-square rounded-full bg-cursor z-50 absolute"></motion.div>
    )




}