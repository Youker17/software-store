import HeaderLink from "./HeaderLink"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import Image from "next/image"
import logo from "@/assets/logo.png"
import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"





export default function Navbar() {
    return (
        <>
            <div className="w-full border-b border-white/25  justify-between h-20 flex items-center">
                <div className="container flex flex-row w-full justify-between items-center">
                    <div className="flex flex-row items-center font-bold gap-2">
                        <Image src={logo} alt="logo" className="w-10" />
                        <h3>CheapDigi</h3>
                    </div>
                    <div className="md:flex flex-row gap-10 hidden">
                        <HeaderLink text="home" href="/" />
                        <HeaderLink text="shop" href="/shop" />
                        <HeaderLink text="about" href="/about" />
                    </div>
                    <Sheet >

                        <SheetTrigger className="flex flex-row gap-3">
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                            </svg>
                        </SheetTrigger>

                        <SheetContent className="dark">
                            <SheetHeader>
                                <SheetTitle>Cart</SheetTitle>
                            </SheetHeader>
                            <SheetDescription className="">
                                <ScrollArea className="h-[75vh] p-2">
                                    <div className="flex flex-col gap-4">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
                                            <div className="flex bg-white text-gray-900 rounded-xl p-3 flex-row gap-3">
                                                <div className="w-20 h-20 aspect-square bg-gray-900 rounded-xl">photo</div>
                                                <div className="flex flex-col justify-around gap-1 w-full">
                                                    <h3 className="font-bold text-lg">Product Name</h3>
                                                    <div className="flex flex-row justify-between w-full items-end">
                                                        <p className=" flex flex-row gap-2 items-center">
                                                            <button className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-150 ease-in-out w-6 h-6 felx justify-center items-center rounded-[10px] aspect-square">-</button>
                                                            9
                                                            <button className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-150 ease-in-out w-6 h-6 felx justify-center items-center rounded-[10px] aspect-square">+</button>
                                                        </p>
                                                        <p className="font-semibold">99.9$</p>
                                                    </div>
                                                </div>
                                            </div>))}
                                    </div>
                                </ScrollArea>
                            </SheetDescription>
                            <SheetFooter className=" ">
                                <div className="flex flex-col w-full gap-3">
                                    <Separator />
                                    <div className="flex flex-row justify-between">
                                        <h3 className="text-white font-bold">Total</h3>
                                        <p className="text-white">999.99$</p>
                                    </div>
                                    <button className="bg-white text-black rounded-xl px-5 py-2">Checkout</button>
                                    <SheetClose>
                                        <button className="rounded-xl">Continue Shopping</button>
                                    </SheetClose>
                                </div>
                            </SheetFooter>

                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="md:hidden  z-50 flex flex-row gap-5 w-full h-10 justify-center items-center fixed bg-black border-t bottom-0">
                <HeaderLink text="home" href="/" />
                <HeaderLink text="shop" href="/shop" />
                <HeaderLink text="about" href="/about" />
            </div>
        </>
    )
}