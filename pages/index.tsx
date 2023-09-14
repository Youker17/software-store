import Hero from "@/components/home/Hero";
import Latest from "@/components/home/Latest";
import NewsLetter from "@/components/home/NewsLetter";
import Popular from "@/components/home/Popular";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"


export default function Home() {
    return (
        <div>
            <Hero />
            <Latest />
            <Popular />
            <NewsLetter />
        </div>
    )
}