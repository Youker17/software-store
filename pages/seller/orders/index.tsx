import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import DataTable from "react-data-table-component";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import OrdersTable from "@/components/seller/OrdersTable";




export default function Orders() {
    return (
        <motion.div exit={{y:-10, opacity:0}} initial={{y:10,opacity:0}} animate={{y:0, opacity:1}} transition={{ease:"easeInOut"}} className='bg-white rounded-xl h-full w-full text-lg font-semibold gap-4 text-black p-6 flex flex-col'>
            <div className='w-full flex flex-row justify-between'>
                <h1 className='text-black font-bold text-lg'>Todays Orders</h1>
                <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h6m-6 4h6m-6 4h6M1 1v18l2-2 2 2 2-2 2 2 2-2 2 2V1l-2 2-2-2-2 2-2-2-2 2-2-2Z" />
                </svg>
            </div>

        <OrdersTable
            paginationDefaultPage={1}
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 15, 20, 25, 30]}
        />
       </motion.div >
    )
}