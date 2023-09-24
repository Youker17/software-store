"use client"
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import ReactEchart from 'echarts-for-react';
// import {graphic} from 'echarts/core';
import { useState } from 'react';


const chartdata = {
    "product A": [820, 932, 901, 934, 1290, 1330, 1320],
    "product B": [720, 832, 801, 834, 1190, 100, 1220],
    "product C": [620, 732, 701, 734, 1090, 110, 1],
    "product D": [520, 632, 601, 634, 990, 103, 12],

}

export default function ProdcutsClicksChart() {
    const [selectedProduct, setSelectedProduct] = useState<string>('product A')

    return (
        <div className="p-4 bg-white rounded-xl flex flex-col gap-4 w-full">
            <div className='w-full flex flex-row justify-between'>
                <h1 className='text-black font-bold text-lg'>Total Products Clicks</h1>
                <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 12v5m5-9v9m5-5v5m5-9v9M1 7l5-6 5 6 5-6" />
                </svg>
            </div>
            <div className='flex flex-row justify-end'>
                <DropdownMenu>
                    <DropdownMenuTrigger className=''>
                        <Button className='bg-gray-900 text-white rounded-[4px] hover:bg-black/80'>{selectedProduct}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='rounded-[4px]'>
                        <DropdownMenuRadioGroup value={selectedProduct} onValueChange={setSelectedProduct}>

                            <DropdownMenuRadioItem value='product A'>product A</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value='product B'>product B</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value='product C'>product C</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value='product D'>product D</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className=''>
                <ReactEchart
                    option={
                        {
                            color: ['#434343'],
                            grid: { top: 8, right: 8, bottom: 24, left: 40 },
                            toolbox: {
                                feature: {
                                    saveAsImage: {}
                                }
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: false,
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            },
                            yAxis: {
                                type: 'value',
                            },
                            series: [
                                {
                                    // @ts-ignore
                                    data: chartdata[selectedProduct],
                                    type: 'line',
                                    lineStyle: {
                                        width: 0
                                    },
                                    showSymbol: false,
                                    areaStyle: {
                                        opacity: 0.8,
                                        // color: new graphic.LinearGradient(0, 0, 0, 1, [
                                        //     {
                                        //         offset: 0,
                                        //         color: 'rgb(0, 0, 0)' // Equivalent to black
                                        //     },
                                        //     {
                                        //         offset: 1,
                                        //         color: 'rgb(64, 64, 64)' // Equivalent to dark gray
                                        //     }
                                        // ])
                                    },
                                    smooth: true,
                                },
                            ],
                            tooltip: {
                                trigger: 'axis',
                                color: 'white',
                            },
                        }
                    }

                    notMerge={true}
                    lazyUpdate={true}
                    theme={"theme_name"}
                />
            </div>
        </div>
    )
}