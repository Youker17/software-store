import DataTable from "react-data-table-component"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { Popover } from "@/components/ui/popover"
import { PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"
import ViewOrderDialog from "./order/ViewOrderDialog"
import { Edit } from "lucide-react"
import DeleteOrderDialog from "./order/DeleteOrderDialog"
import EditOrderDialog from "./order/EditOrderDialog"

interface Props {
    paginationDefaultPage?: number
    paginationPerPage?: number
    paginationRowsPerPageOptions?: number[]
    
    }








export default function OrdersTable({
    paginationDefaultPage = 1,
    paginationPerPage = 5,
    paginationRowsPerPageOptions = [5, 10, 15, 20],
}: Props) {



    return (

        <DataTable
            pagination
            paginationDefaultPage={paginationDefaultPage}
            paginationPerPage={paginationPerPage}
            paginationRowsPerPageOptions={paginationRowsPerPageOptions}
            customStyles={{
                headRow: {
                    style: {
                        backgroundColor: '#09090B',
                        color: '#fff',
                        borderRadius: '0.5rem',
                    },
                },
                headCells: {
                    style: {
                        paddingRight: '3vw',
                    },
                },
                cells: {
                    style: {
                        paddingRight: '3vw',
                    },
                },
            }}
            columns={[
                {
                    name: 'Name',
                    selector: (row) => row.name,
                    cell: (row) => (
                        <HoverCard>
                            <HoverCardTrigger>
                                {row.name}
                            </HoverCardTrigger>
                            <HoverCardContent className='rounded-xl bg-black/70 backdrop-blur-3xl text-white font-bold p-6 text-lg'>
                                {row.name}
                            </HoverCardContent>
                        </HoverCard>
                    ),
                    sortable: false,
                },
                {
                    name: 'Email',
                    selector: (row) => row.email,
                    cell: (row) => (
                        <HoverCard>
                            <HoverCardTrigger>
                                {row.email}
                            </HoverCardTrigger>
                            <HoverCardContent className='rounded-xl bg-black/70 backdrop-blur-3xl text-white  p-6 text-lg'>
                                {row.email}
                            </HoverCardContent>
                        </HoverCard>
                    ),
                    sortable: false,
                    right: true,
                },
                {
                    name: 'Phone',
                    selector: (row) => row.phone,
                    cell: (row) => (
                        <HoverCard>
                            <HoverCardTrigger>
                                {row.phone}
                            </HoverCardTrigger>
                            <HoverCardContent className='rounded-xl bg-black/70 backdrop-blur-3xl text-white  p-6 text-lg'>
                                {row.phone}
                            </HoverCardContent>
                        </HoverCard>
                    ),
                    sortable: false,
                    right: true,
                },
                {
                    name: 'Address',
                    selector: (row) => row.address,
                    cell: (row) => (
                        <HoverCard>
                            <HoverCardTrigger>
                                {(row.address.length > 10) ? row.address.substring(0, 10) + '...' : row.address}
                            </HoverCardTrigger>
                            <HoverCardContent className='rounded-xl bg-black/70 backdrop-blur-3xl text-white font p-6 text-lg'>
                                {row.address}
                            </HoverCardContent>
                        </HoverCard>
                    ),
                    sortable: false,
                    right: true,
                },
                {
                    name: 'Order',
                    selector: (row) => row.order.reduce((acc, item) => acc + item.quantity, 0),
                    cell: (row) => (
                        <HoverCard>
                            <HoverCardTrigger>
                                {row.order.reduce((acc, item) => acc + item.quantity, 0)}$
                            </HoverCardTrigger>
                            <HoverCardContent className='rounded-xl bg-black/70 backdrop-blur-3xl text-white font p-6 text-lg flex flex-col gap-2'>
                                <h1>Orders </h1>
                                {row.order.map((item,index) => (
                                    <div key={index} className="flex flex-row gap-2 p-3 bg-white rounded-xl text-black text-sm">
                                        <div className="h-full w-[40%] aspect-square overflow-hidden  bg-gray-900 rounded-xl"><img src="https://play-lh.googleusercontent.com/LLgnXnh4IrYUKFScaoX9p8j_yRj4sdXCisK0LsVLU9KrLRUNACGWtCNLOfpQtWK2W3w" alt="" className="w-full h-full" /></div>
                                        <div className="flex flex-col justify-around w-full">
                                            <h3 className="font-bold text-lg">{item.name}</h3>
                                            <div className="flex flex-row justify-between w-full items-end">
                                                <p className=" flex flex-row gap-2 items-center">
                                                    Qte : {item.quantity}
                                                </p>
                                                <p className="font-semibold">{item.price}$</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </HoverCardContent>
                        </HoverCard>
                    ),
                    sortable: false,
                    right: true,
                },
                {
                    name: 'Status',
                    selector: (row) => row.status,
                    cell: (row) => (
                        <HoverCard>
                            <HoverCardTrigger className="flex lfex-row gap-2 justify-center text-xs  w-32">
                                {row.status === "pending" ?
                                    <svg className="w-3 h-3 text-yellow-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                                    </svg> : (
                                        row.status === "confirmed" ?
                                            <svg className="w-3 h-3 text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg> :
                                            <svg className="w-3 h-3 text-red-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                                            </svg>
                                    )}
                                {/* {row.status } */}
                            </HoverCardTrigger>
                            <HoverCardContent className='rounded-xl bg-black/70 backdrop-blur-3xl text-white font-bold p-6 text-lg flex flex-row gap-2'>
                                {row.status}
                            </HoverCardContent>
                        </HoverCard>
                    ),
                    sortable: false,
                    right: true,
                },
                {
                    name: 'Action',
                    cell: (row) => (
                        <Popover>
                            <PopoverTrigger>
                                <svg className="w-3 h-3 mx-auto text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.143 1H1.857A.857.857 0 0 0 1 1.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 6.143V1.857A.857.857 0 0 0 6.143 1Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 17 6.143V1.857A.857.857 0 0 0 16.143 1Zm-10 10H1.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 16.143v-4.286A.857.857 0 0 0 6.143 11Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z" />
                                </svg>
                            </PopoverTrigger>
                            <PopoverContent className='rounded-xl bg-black/70 backdrop-blur-3xl text-white font-bold p-6'>
                                <h2 className="font-bold mb-2">Actions</h2>
                                <div className="flex flex-row justify-start gap-2">
                                    <ViewOrderDialog row={row} />
                                    <EditOrderDialog />
                                    <DeleteOrderDialog id={row.id} />
                                </div>
                            </PopoverContent>
                        </Popover>
                    ),
                }
            ]}
            data={
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => ({
                    id:index,
                    name: 'John Doe',
                    email: 'john@email.com',
                    phone: '123456789',
                    address: '123, Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
                    order: [
                        {
                            name: 'Product A',
                            image: "https://play-lh.googleusercontent.com/LLgnXnh4IrYUKFScaoX9p8j_yRj4sdXCisK0LsVLU9KrLRUNACGWtCNLOfpQtWK2W3w",
                            quantity: 1,
                            price: 99.99,
                        },
                        {
                            name: 'Product B',
                            image: "https://play-lh.googleusercontent.com/LLgnXnh4IrYUKFScaoX9p8j_yRj4sdXCisK0LsVLU9KrLRUNACGWtCNLOfpQtWK2W3w",
                            quantity: 1,
                            price: 99.99,
                        },
                        {
                            name: 'Product C',
                            image: "https://play-lh.googleusercontent.com/LLgnXnh4IrYUKFScaoX9p8j_yRj4sdXCisK0LsVLU9KrLRUNACGWtCNLOfpQtWK2W3w",
                            quantity: 1,
                            price: 99.99,
                        },
                    ],
                    status: index % 2 ? "pending" : (index % 3 ? "confirmed" : "rejected")
                }))
            }





        />







    )
}