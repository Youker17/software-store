
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@radix-ui/react-separator";



interface ViewOrderDialogProps {
    row: {
        id: number;
        name: string;
        address: string;
        phone: string;
        email: string;
        order: { image: string; name: string; price: number; quantity: number }[];
        status: string;
    }
}





export default function ViewOrderDialog({ row }: ViewOrderDialogProps) {
    return (
        <Dialog >
            <DialogTrigger>
                <Button className="rounded-xl w-full">View</Button>
            </DialogTrigger>

            <DialogContent style={{
                borderRadius: "1rem",
            }}
                className="">
                <DialogHeader>
                    <DialogTitle>Order Detail</DialogTitle>
                    <DialogDescription>order id: {row.id}</DialogDescription>
                </DialogHeader>
                <ScrollArea className="w-full h-52 ">
                    <h1 className="text-xl font-bold">Client Information</h1>
                    <div className="flex flex-row gap-2">
                        <div className="text-lg font-semibold">
                            <h2>Name</h2>
                            <h2>Address</h2>
                            <h2>Phone</h2>
                            <h2>Email</h2>
                        </div>

                        <div className="text-sm relative font-light flex flex-col gap-2 text-gray-300">
                            <h2>{row.name}</h2>
                            <h2>{row.address}</h2>
                            <h2>{row.phone}</h2>
                            <h2>{row.email}</h2>
                            <p className="text-lg text-green-500 cursor-pointer absolute bottom-0 right-0 font-bold">Edit</p>
                        </div>
                    </div>
                    <Separator className="my-3 border w-3/4 mx-auto" orientation="horizontal" />
                    <h1 className="text-xl font-bold">Order Products</h1>
                    <div className="flex flex-col gap-2 py-3 pr-3">
                        {
                            row.order.map((item,index) => (
                                <div key={index} className="flex bg-white text-gray-900 rounded-xl p-3 flex-row gap-3">

                                    <img className="rounded-xl w-20 h-20 aspect-square " src={item.image} alt="" />

                                    <div className="flex flex-col justify-around gap-1 w-full">
                                        <h3 className="font-bold text-lg">{item.name}</h3>
                                        <div className="flex flex-row justify-between w-full items-end">
                                            <p className=" flex flex-row gap-2 items-center">
                                                Qte:9
                                            </p>
                                            <p className="font-semibold">{item.price}$</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                    </div>

                </ScrollArea>
                
                <div className="w-full flex flex-col gap-3 shadow-3xl shadow-black">
                    <h2 className="text-lg font-bold">Status</h2>
                    <Progress className={"w-full text-gray-600" + (row.status === "pending" ? "bg-orange-500" : (row.status === "confirmed" ? "bg-green-500" : "bg-white"))} value={row.status === "pending" ? 50 : (row.status === "confirmed" ? 100 : 5)} />
                    <div className="flex flex-row justify-between font-semibold">
                        <p className="text-red-500 bg-white rounded-full aspect-square p-2">
                            <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                            </svg>
                        </p>
                        <p className="text-yellow-600 bg-white rounded-full aspect-square p-2">
                            <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                            </svg>
                        </p>
                        <p className="text-green-600 bg-white rounded-full aspect-square p-2">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                        </p>
                    </div>
                    <div className=" w-full flex flex-row gap-3 justify-end">
                        <DialogTrigger>
                            <Button className="rounded-xl w-full bg-transparent border text-white hover:text-black">Cancel</Button>
                        </DialogTrigger>
                    </div>

                </div>
            </DialogContent>
        </Dialog >
    )
}
