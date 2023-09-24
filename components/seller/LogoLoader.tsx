"use client"

import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import logo from '@/assets/logo.png'





export default function LogoLoader() {
    return (


        <motion.div animate={{ width: 400 }} transition={{ delay: 2 }} className='flex z-50 flex-row  relative justify-start items-center'>
            {/* <svg className='w-40 h-40  bg-gray-950 z-50 aspect-square' version="1.0" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300.000000 300.000000"
                preserveAspectRatio="xMidYMid meet">
                <metadata>
                    Created by potrace 1.10, written by Peter Selinger 2001-2011
                </metadata>
                <motion.g className="w-full" transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="#fff" stroke="none">
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M1330 2329 c-80 -39 -160 -77 -179 -85 -19 -8 -32 -16 -29 -19 3 -3
84 33 181 80 98 47 186 85 197 85 11 0 57 -18 101 -41 45 -22 83 -38 85 -36 8
7 -167 87 -190 87 -12 0 -87 -32 -166 -71z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M1700 2306 c0 -6 232 -117 236 -113 4 3 -222 117 -232 117 -2 0 -4
-2 -4 -4z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M1362 2223 c-62 -31 -111 -58 -109 -60 5 -4 237 107 237 113 0 9 -18
1 -128 -53z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M1571 2245 c11 -10 232 -115 236 -112 2 3 -49 30 -112 61 -108 52
-136 63 -124 51z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M982 2163 c-62 -31 -111 -58 -109 -60 5 -4 237 106 237 112 0 10 -17
2 -128 -52z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M1950 2185 c0 -6 232 -116 237 -112 3 4 -223 117 -233 117 -2 0 -4
-2 -4 -5z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M1112 2103 c-62 -31 -111 -58 -108 -60 4 -4 236 107 236 113 0 8 -19
1 -128 -53z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M1821 2125 c11 -10 232 -116 235 -112 2 2 -48 29 -112 60 -107 53
-135 65 -123 52z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M775 2062 l-70 -37 -3 -489 c-2 -366 1 -492 10 -503 12 -15 68 -47
68 -39 0 2 -16 13 -35 25 l-35 20 0 484 c0 550 -9 496 93 541 31 14 57 28 57
31 0 10 -16 4 -85 -33z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M2214 2055 c11 -8 25 -15 31 -15 7 0 19 -8 28 -18 15 -17 17 -66 17
-493 0 -365 -3 -479 -12 -490 -7 -9 -133 -82 -280 -163 -148 -81 -268 -150
-268 -152 0 -9 524 279 553 304 16 14 17 50 17 493 0 262 -3 485 -6 494 -4 9
-24 25 -45 35 -45 23 -62 26 -35 5z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M933 2017 c-60 -30 -54 -39 7 -10 28 13 50 26 50 28 0 9 -14 4 -57
-18z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M2070 2005 c0 -3 10 -9 21 -13 18 -7 -14 -28 -182 -121 -112 -62
-210 -120 -216 -129 -7 -9 -13 -24 -13 -34 0 -24 35 -58 60 -58 19 0 220 107
220 116 0 3 -47 -20 -104 -50 -57 -31 -110 -56 -119 -56 -9 0 -24 11 -33 25
-14 22 -14 28 -3 46 8 11 95 65 194 120 243 135 233 128 210 145 -19 14 -35
18 -35 9z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M960 1950 c32 -18 90 -67 137 -118 l82 -87 58 3 c72 4 133 -18 169
-61 l26 -31 -24 -18 -23 -19 28 12 c35 16 34 28 -5 66 -54 51 -92 65 -164 61
l-63 -3 -72 78 c-74 80 -136 129 -179 141 -14 4 0 -7 30 -24z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M810 1499 l0 -404 93 -50 c50 -27 97 -51 102 -53 24 -8 -30 28 -104
68 l-81 43 0 394 c0 216 2 393 4 393 2 0 22 -7 45 -15 22 -8 41 -12 41 -9 0 5
-39 21 -75 30 l-25 6 0 -403z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M2073 1836 c-51 -29 -96 -56 -100 -61 -9 -10 168 84 182 96 24 23 27
-1 23 -189 l-3 -198 -34 -68 c-38 -77 -107 -139 -188 -168 -26 -9 -39 -17 -28
-17 68 -2 208 116 240 204 24 66 36 455 13 454 -7 0 -55 -24 -105 -53z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M962 1818 c25 -24 65 -64 88 -90 l41 -47 -22 -30 c-12 -17 -20 -33
-17 -36 3 -3 15 10 27 30 l21 37 -29 36 c-34 44 -137 142 -148 142 -4 0 13
-19 39 -42z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M1260 1554 c-63 -36 -119 -71 -125 -77 -13 -14 -10 -12 128 67 101
59 127 76 114 76 -1 0 -54 -30 -117 -66z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M1038 1573 c-2 -16 -1 -41 3 -58 5 -23 7 -16 8 28 1 60 -4 75 -11 30z" />
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M1472 1498 c-20 -20 -14 -35 33 -79 l45 -43 -32 -33 -31 -33 -49 46
c-52 48 -81 54 -86 16 -3 -16 9 -35 42 -65 l45 -43 -21 -21 c-12 -12 -17 -26
-13 -33 20 -32 133 -52 174 -31 12 7 33 1 77 -20 111 -55 233 -61 347 -19 52
20 74 33 147 88 l30 23 0 -73 0 -73 -307 -172 -308 -171 -5 110 c-4 94 -8 112
-24 124 -27 19 -60 18 -79 -4 -12 -14 -17 -43 -19 -124 l-3 -106 -124 69 c-69
38 -126 67 -128 65 -2 -2 15 -15 39 -28 78 -45 215 -118 222 -118 3 0 6 49 6
109 0 115 9 141 49 141 40 0 51 -31 51 -143 0 -59 3 -107 8 -107 4 0 30 13 57
28 59 34 294 164 455 253 l115 64 3 88 c1 48 -1 87 -6 87 -4 0 -23 -15 -41
-34 -45 -47 -148 -95 -226 -108 -84 -13 -186 4 -262 42 -44 22 -61 26 -80 19
-37 -14 -91 -11 -129 7 -40 19 -41 24 -14 49 21 19 20 19 -25 65 -25 25 -45
51 -45 57 0 30 26 21 71 -23 l49 -48 40 39 40 39 -45 46 c-25 25 -45 51 -45
57 0 30 26 21 71 -23 46 -45 49 -47 67 -31 26 24 36 21 55 -15 14 -26 16 -28
11 -8 -3 14 -14 33 -23 43 -17 17 -18 17 -36 -3 -18 -20 -18 -20 -66 25 -52
48 -59 51 -77 33z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M1670 1286 c0 -19 71 -56 105 -55 11 0 -2 8 -29 18 -26 9 -54 25 -62
36 -13 17 -14 17 -14 1z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M790 986 c0 -3 73 -45 163 -94 192 -106 215 -118 202 -104 -5 6 -82
49 -170 97 -88 48 -164 91 -169 96 -10 9 -26 12 -26 5z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M1025 983 c6 -6 42 -28 80 -49 39 -20 66 -32 60 -27 -5 6 -41 28 -80
49 -38 20 -65 32 -60 27z"/>
                    <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M1175 772 c19 -20 306 -172 325 -172 19 0 220 107 220 116 0 3 -47
-20 -104 -50 -57 -31 -110 -56 -119 -56 -8 0 -46 17 -84 38 -129 73 -248 135
-238 124z"/>
                </motion.g>
            </svg> */}

            <img src={logo.src} alt="" className='w-40 h-40  bg-gray-950 z-50 aspect-square'/>
            <motion.p className='absolute z-10 text-xl font-bold border-l-2 pl-8 h-[40%] justify-center items-center flex flex-row' initial={{ right: "20%", opacity: 0, borderColor: "#00000" }} animate={{ right: "10%", opacity: 1, borderColor: "#27272A" }} transition={{ delay: 2 }}>
                {
                    "CheapDigi".split("").map((letter, index) => {
                        return <motion.span key={index} className='' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 + index * 0.1 }}>{letter}</motion.span>
                    })
                }
                {/* <span className='opacity-0'>-</span> */}
                <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{delay:4, ease:'easeInOut'}} className='text-gray-400 text-lg font-light ml-2'>
                    - Seller
                </motion.span>
            </motion.p>
        </motion.div>


    )

}