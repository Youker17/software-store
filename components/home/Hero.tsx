"use client"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { EffectFade } from "swiper/modules";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper/types";
import "@/app/globals.css"


export default function Hero() {

    const swiperRef = useRef(null);

    const handleNext = () => {
        // @ts-ignore
        swiperRef.current.swiper.slideNext();
    }

    const handlePrev = () => {
        // @ts-ignore
        swiperRef.current.swiper.slidePrev();
    }


    return (
        <div className="w-full h-[60vh] bg-first prim rounded-xl relative ">
            <button className="absolute top-[45%] origin-center -left-8 z-50 p-5 bg-white rounded-full aspect-square hidden md:flex justify-center items-center" onClick={handleNext} >
                <svg className="w-6 h-6 text-gray-800 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m19.822 7.431-4.846-7A1 1 0 0 0 14.153 0H1a1 1 0 0 0-.822 1.569L4.63 8 .178 14.431A1 1 0 0 0 1 16h13.153a1.001 1.001 0 0 0 .823-.431l4.846-7a1 1 0 0 0 0-1.138Z" />
                </svg>
            </button>
            <button className="absolute top-[45%] origin-center -right-8 z-50 p-5 bg-white rounded-full aspect-square hidden md:flex justify-center items-center" onClick={handlePrev} >
                <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m19.822 7.431-4.846-7A1 1 0 0 0 14.153 0H1a1 1 0 0 0-.822 1.569L4.63 8 .178 14.431A1 1 0 0 0 1 16h13.153a1.001 1.001 0 0 0 .823-.431l4.846-7a1 1 0 0 0 0-1.138Z" />
                </svg>
            </button>
            
            <Swiper
                ref={swiperRef}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true,
                    type: "bullets",
                    dynamicBullets: true,
                }}
                autoplay={{ delay: 3000, disableOnInteraction:false }}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                loop={true}
                className="h-full rounded-xl"
                effect="fade"
                
            >
                <SwiperSlide>
                    <div className="h-full w-full flex flex-col justify-center items-center bg-red-400">
                        <h1 className="text-white text-5xl font-bold">Welcome to CheapDigi1</h1>
                        <p className="text-white text-xl">The best place to buy cheap digital products</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full w-full flex flex-col justify-center items-center bg-blue-400">
                        <h1 className="text-white text-5xl font-bold">Welcome to CheapDigi</h1>
                        <p className="text-white text-xl">The best place to buy cheap digital products</p>
                    </div>
                </SwiperSlide>
            </Swiper>


        </div>
    )



}