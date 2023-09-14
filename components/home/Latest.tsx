import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import ProductCard from "../cards/ProductCard"



export default function Latest() {
    return (
        <div className="my-10">
            <div>
                <h1 className="text-4xl text-white font-bold">Our Latest</h1>
                <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla atque, obcaecati voluptas sunt at sapiente in voluptate vero cupiditate repellat qui illum? Dolorum, dolor libero hic porro adipisci in.</p>
            </div>
            <div className="md:hidden flex">

                <Swiper className=" ">
                    <SwiperSlide>
                        <ProductCard name="netflix" price={99.99} image="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQXdqMKgagHpwaQwpomCjxxzh0G05cC1fxz6POSc8FETRSv9WQw3KvaD4CVh4prpGK9YCkQVxoLEXew7Erj5o6k5WkmtdZYN2_rYERX2eLi0J2XO0pdQHKo3C3969-2AsfPxyp5QLAQ285mX6mRjRXihN.jpg?r=fd6" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard name="netflix" price={99.99} image="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQXdqMKgagHpwaQwpomCjxxzh0G05cC1fxz6POSc8FETRSv9WQw3KvaD4CVh4prpGK9YCkQVxoLEXew7Erj5o6k5WkmtdZYN2_rYERX2eLi0J2XO0pdQHKo3C3969-2AsfPxyp5QLAQ285mX6mRjRXihN.jpg?r=fd6" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard name="netflix" price={99.99} image="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQXdqMKgagHpwaQwpomCjxxzh0G05cC1fxz6POSc8FETRSv9WQw3KvaD4CVh4prpGK9YCkQVxoLEXew7Erj5o6k5WkmtdZYN2_rYERX2eLi0J2XO0pdQHKo3C3969-2AsfPxyp5QLAQ285mX6mRjRXihN.jpg?r=fd6" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="w-[300px] h-[300px] bg-gray-900 rounded-xl justify-center items-center flex cursor-pointer group hover:bg-slate-950 transition-all duration-150">
                                <svg className="w-6 h-6 group-hover:scale-110 transition-all duration-150 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className="md:flex hidden flex-row justify-between gap-5 mt-10">
                <ProductCard name="netflix" price={99.99} image="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQXdqMKgagHpwaQwpomCjxxzh0G05cC1fxz6POSc8FETRSv9WQw3KvaD4CVh4prpGK9YCkQVxoLEXew7Erj5o6k5WkmtdZYN2_rYERX2eLi0J2XO0pdQHKo3C3969-2AsfPxyp5QLAQ285mX6mRjRXihN.jpg?r=fd6" />
                <ProductCard name="netflix" price={99.99} image="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQXdqMKgagHpwaQwpomCjxxzh0G05cC1fxz6POSc8FETRSv9WQw3KvaD4CVh4prpGK9YCkQVxoLEXew7Erj5o6k5WkmtdZYN2_rYERX2eLi0J2XO0pdQHKo3C3969-2AsfPxyp5QLAQ285mX6mRjRXihN.jpg?r=fd6" />
                <ProductCard name="netflix" price={99.99} image="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQXdqMKgagHpwaQwpomCjxxzh0G05cC1fxz6POSc8FETRSv9WQw3KvaD4CVh4prpGK9YCkQVxoLEXew7Erj5o6k5WkmtdZYN2_rYERX2eLi0J2XO0pdQHKo3C3969-2AsfPxyp5QLAQ285mX6mRjRXihN.jpg?r=fd6" />
                <div>
                    <div className="w-[300px] h-[300px] bg-gray-900 rounded-xl justify-center items-center flex cursor-pointer group hover:bg-slate-950 transition-all duration-150">
                        <svg className="w-6 h-6 group-hover:scale-110 transition-all duration-150 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                        </svg>
                    </div>
                </div>
            </div>




        </div>
    )
}
