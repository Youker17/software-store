import SearchResult from "@/components/shop/SearchResult"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";



const data = [{
    name: "Product A",
    price: 50,
    image: "product_a.jpg",
    description: "This is Product A lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
    instantDelivery: true,
    id: "1",
    lister: {
        photo: "lister_a.jpg",
        name: "Lister A",
        id: "101",
        verified: true,
    },
},
{
    name: "Product B",
    price: 30,
    image: "product_b.jpg",
    description: "This is Product B lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
    instantDelivery: true,
    id: "2",
    lister: {
        photo: "lister_b.jpg",
        name: "Lister B",
        id: "102",
        verified: false,
    },
},
{
    name: "Product C",
    price: 70,
    image: "product_c.jpg",
    description: "This is Product C lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
    instantDelivery: true,
    id: "3",
    lister: {
        photo: "lister_c.jpg",
        name: "Lister C",
        id: "103",
        verified: true,
    },
},
];

export default function Shop() {
    return <div className="  lg:p-10">
        <h2 className="text-3xl font-semibold">Shop</h2>
        <div className="flex flex-col mx-auto gap-8 mt-8 ">
            <div className="flex flex-row justify-end w-full  bg-gray-900 rounded-xl   overflow-hidden h-12 ">
                <Input placeholder="Search for products" className=" border h-full focus:bg-gray-800  border-gray-900  " />
                <Button className=" rounded-none h-full w-20">Search</Button>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-5 ">

                <Popover>
                    <PopoverTrigger className="w-fit p-2 lg:hidden  rounded-xl">
                        Sort
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className=" w-fit h-fit bg-gray-900/40 rounded-xl p-10 hidden lg:flex flex-col gap-4">
                            <h3 className="text-xl font-semibold">
                                Sort By
                            </h3>
                            <div className="flex flex-col gap-6 justify-start">
                                <div className="flex flex-col gap-3  items-start">
                                    <label htmlFor="">Price</label>
                                    <Tabs defaultValue="all" className="">
                                        <TabsList className="rounded-xl p-5 py-6 flex gap-5">
                                            <TabsTrigger value="all" className=" rounded-xl p-2 w-20">All</TabsTrigger>
                                            <TabsTrigger value="increasing" className=" rounded-xl p-2 w-20">Increasing</TabsTrigger>
                                            <TabsTrigger value="decreasing" className=" rounded-xl p-2 w-20">Decreasing</TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                </div>
                                <div className="flex flex-col gap-3  items-start">
                                    <label htmlFor="">Delivery</label>
                                    <Tabs defaultValue="all" className="">
                                        <TabsList className="rounded-xl p-5 py-6 flex gap-5">
                                            <TabsTrigger value="all" className=" rounded-xl p-2 w-20">All</TabsTrigger>
                                            <TabsTrigger value="instant" className=" rounded-xl p-2 w-20">Instant</TabsTrigger>
                                            <TabsTrigger value="notinstant" className=" rounded-xl p-2 w-20">Delayed </TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                <div className=" w-fit h-fit bg-gray-900/40 rounded-xl p-10 hidden lg:flex flex-col gap-4">
                    <h3 className="text-xl font-semibold">
                        Sort By
                    </h3>
                    <div className="flex flex-col gap-6 justify-start">
                        <div className="flex flex-col gap-3  items-start">
                            <label htmlFor="">Price</label>
                            <Tabs defaultValue="all" className="">
                                <TabsList className="rounded-xl p-5 py-6 flex gap-5">
                                    <TabsTrigger value="all" className=" rounded-xl p-2 w-20">All</TabsTrigger>
                                    <TabsTrigger value="increasing" className=" rounded-xl p-2 w-20">Increasing</TabsTrigger>
                                    <TabsTrigger value="decreasing" className=" rounded-xl p-2 w-20">Decreasing</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                        <div className="flex flex-col gap-3  items-start">
                            <label htmlFor="">Delivery</label>
                            <Tabs defaultValue="all" className="">
                                <TabsList className="rounded-xl p-5 py-6 flex gap-5">
                                    <TabsTrigger value="all" className=" rounded-xl p-2 w-20">All</TabsTrigger>
                                    <TabsTrigger value="instant" className=" rounded-xl p-2 w-20">Instant</TabsTrigger>
                                    <TabsTrigger value="notinstant" className=" rounded-xl p-2 w-20">Delayed </TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <div className=" w-full ">
                    <SearchResult data={data} loading={false} error={false} />
                </div>
            </div>
        </div>
    </div >
}