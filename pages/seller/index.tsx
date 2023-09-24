import DataTable from 'react-data-table-component';
import AuthChecker from '@/components/seller/AuthChecker'
import { Table } from '@/components/ui/table'
import ctoast from '@/helpers/toast'
import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import OrdersTable from '@/components/seller/OrdersTable';
import ProdcutsClicksChart from '@/components/seller/charts/ProductsClicksChart';


function Seller() {

    return (

        <motion.div exit={{ y: -10, opacity: 0 }} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut" }} className='w-full h-full  '>
            {/* <AuthChecker /> */}
            <div className=' flex flex-col gap-5 justify-center items-center h-full'>
                {/* <h1 className='text-4xl font-bold'>Welcome to Seller Dashboard</h1> */}
                <div className='flex flex-row gap-5  w-full'>
                    <div className='bg-white rounded-xl h-40 w-full text-lg font-semibold text-black flex flex-col justify-around p-6'>
                        <div className='w-full flex flex-row justify-between'>
                            <h1 className='text-black font-bold text-lg'>Total Revenue</h1>
                            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138" />
                            </svg>
                        </div>
                        <p className='text-xl'>99.99£
                            <br />
                            <span className='text-sm text-gray-500'>+20.1% from last month</span>
                        </p>
                    </div>
                    <div className='bg-white rounded-xl h-40 text-lg font-semibold text-black w-full flex flex-col justify-around p-6'>
                        <div className='w-full flex flex-row justify-between'>
                            <h1 className='text-black font-bold text-lg'>Total Sales</h1>
                            <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.583 5.445h.01M8.86 16.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 10.31 1l5.734.007A1.968 1.968 0 0 1 18 2.983v5.5a.994.994 0 0 1-.316.727l-7.439 7.5a.975.975 0 0 1-1.385.001Z" />
                            </svg>
                        </div>
                        <p className='text-xl'>129574
                            <br />
                            <span className='text-sm text-gray-500'>+20.1% from last month</span>
                        </p>
                    </div>
                </div>

                <ProdcutsClicksChart />
                <div className='bg-white rounded-xl h-full w-full text-lg font-semibold gap-4 text-black p-6 flex flex-col'>
                    <div className='w-full flex flex-row justify-between'>
                        <h1 className='text-black font-bold text-lg'>Todays Orders</h1>
                        <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h6m-6 4h6m-6 4h6M1 1v18l2-2 2 2 2-2 2 2 2-2 2 2V1l-2 2-2-2-2 2-2-2-2 2-2-2Z" />
                        </svg>
                    </div>


                    <OrdersTable />
                </div>
            </div>

        </motion.div>
    )
}

export default Seller