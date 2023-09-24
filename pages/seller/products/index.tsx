import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { FilePond } from "react-filepond"
import { AnimatePresence, motion } from "framer-motion"




export default function Products() {
    return (
        <motion.div exit={{ y: -10, opacity: 0 }} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut" }} className='bg-white rounded-xl h-full w-full text-lg font-semibold gap-4 text-black p-6 flex flex-col'>
            <div className="w-full justify-between flex flex-row ">
                <h1 className="font-bold text-xl">
                    Products
                </h1>
                <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="M18 0H6a2 2 0 0 0-2 2h10a4 4 0 0 1 4 4v6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                    <path d="M14 16H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
                    <path d="M8 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
                </svg>
            </div>
            <div className="w-full flex flex-row justify-end">
                <Dialog>
                    <DialogTrigger className="w-fit">
                        <div className="bg-gray-900 hover:shadow-2xl hover:-translate-y-1 hover:transition-all hover:ease-in-out hover:duration-300 shadow-black rounded-full w-32 h-10 p-1 flex flex-row justify-end items-center">
                            <p className="text-white text-sm w-full">Add New</p>
                            <div className="h-full bg-white aspect-square rounded-full flex flex-row justify-center items-center ">
                                <svg className="w-4 h-4 text-gray-800  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </div>
                        </div>
                    </DialogTrigger>

                    <DialogContent className="rounded-[100px]">
                        <DialogTitle>
                            Add New Product
                        </DialogTitle>
                        <ScrollArea className="h-[400px]">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-3">
                                    <label className="text-sm text-gray-200">Product Name</label>
                                    <Input placeholder="Product Name" type="text" className="w-full border-2 border-gray-200/60 rounded-[6px] p-3" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <label className="text-sm text-gray-200">Product Description</label>
                                    <Textarea className="w-full border-2 border-gray-200/60 rounded-[6px] p-3" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <label className="text-sm text-gray-200">Product Price</label>
                                    <Input placeholder="Product Price"  min={0.99} type="number" className="w-full border-2 border-gray-200/60 rounded-[6px] p-3" />
                                </div>
                                <div className="flex flex-col  gap-3">
                                    <label className="text-sm text-gray-200">Product Image</label>
                                    <FilePond
                                        acceptedFileTypes={['image/*']}
                                        allowMultiple={false}
                                        maxFiles={1}
                                        name="files"
                                    />
                                </div>
                            </div>
                        </ScrollArea>
                        <Button className="rounded-[5px]">Save</Button>
                    </DialogContent>

                </Dialog>
            </div>
            <ScrollArea className="h-full">
                <AnimatePresence>
                    <div className="flex flex-row flex-wrap gap-3">
                        {
                            [1, 2, 3, 4, 5].map((e, index) => (
                                <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 + index / 10, duration: 0.5 }} className="rounded-xl shadow-2xl relative overflow-hidden aspect-square group w-52">

                                    <img src="https://play-lh.googleusercontent.com/LLgnXnh4IrYUKFScaoX9p8j_yRj4sdXCisK0LsVLU9KrLRUNACGWtCNLOfpQtWK2W3w" className="w-full h-full object-cover top-0 left-0 z-10" alt="" />
                                    <div className="z-50 absolute bottom-0 w-[90%] m-2 rounded-[10px] p-3 bg-white/60 backdrop-blur-xl flex flex-row items-end justify-between text-black">
                                        <p className="font-bold">
                                            Product A
                                        </p>

                                        <p className="text-sm">
                                            99.99$
                                        </p>
                                    </div>
                                    <div className="z-50 opacity-0 group-hover:opacity-100 text-sm group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out absolute top-0 w-full bg-gradient-to-b from-black/80 via-black/60 to-black/0  rounded-[10px] p-3 flex flex-row items-end justify-between text-black">
                                        <Button className="bg-red-500 p-2 rounded-xl text-white">Delete</Button>
                                        <Button className="bg-green-500 p-2 rounded-xl text-white">Edit</Button>
                                        <Button className=" p-2 rounded-xl">View</Button>
                                    </div>

                                </motion.div>
                            ))
                        }

                    </div>
                </AnimatePresence>
            </ScrollArea>
        </motion.div>
    )
}