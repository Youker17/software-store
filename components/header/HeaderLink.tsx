import Link from "next/link";
import {motion} from "framer-motion";
import { useRouter } from "next/router";    



interface HeaderLinkProps {
    text: string;
    href: string;
}



export default function HeaderLink({ text, href }: HeaderLinkProps) {
    const location = useRouter();
    return (
        <Link href={href} className={` ${location.pathname !== href ? "text-white/50":"text-white"}`}>
            {text.charAt(0).toUpperCase() + text.slice(1)}
            <motion.div className="bg-[#657D85] rounded-xl mx-auto" initial={{
                width: "0%",
                height: "2px",
                y: "-100%",
                opacity: 0.5
            }}
            animate={ location.pathname === href ?{
                width: "100%",
                height: "2px",
                opacity: 0.5,
                y: "0%",
                transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                }
            }:
            {
                width: "0%",
                y: "100%",
                height: "2px",
                opacity: 0.5
            }
            
            }></motion.div>
        </Link>
    )

}