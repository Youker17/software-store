"use client"
import BecomeSeller from "@/components/home/BecomeSeller";
import Hero from "@/components/home/Hero";
import Latest from "@/components/home/Latest";
import NewsLetter from "@/components/home/NewsLetter";
import Popular from "@/components/home/Popular";
import { Button } from "@/components/ui/button";
import ctoast from "@/helpers/toast";
import { motion } from "framer-motion"
import { useEffect } from "react";



export default function Home() {

    useEffect(() => {
        
    }, [])


    return (
        <div>
            <Hero />
            <Latest />
            <Popular />
            <NewsLetter />
        </div>
    )
}