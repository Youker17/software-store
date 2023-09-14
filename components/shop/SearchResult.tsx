import noresult from '../../assets/no-result.svg'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger
}
    from '@/components/ui/hover-card'

interface Props {
    data: {
        name: string
        price: number
        image: string
        description: string
        instantDelivery: boolean
        id: string
        lister: {
            photo: string
            name: string
            id: string
            verified: boolean
        }
    }[]

    loading: boolean
    error: any


}





export default function SearchResult({ data = [], loading = true, error = false }: Props) {

    return (

        <div className="lg:px-10 h-full">
            {loading && <div className="text-3xl h-full font-semibold  flex justify-center items-center">
                <svg aria-hidden="true" className="w-10 h-10 mr-2 animate-spin text-gray-600 fill-blue-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>

            </div>}

            {(data.length === 0 && !loading) && <img src={noresult.src} className='w-1/2 mx-auto' alt="" />}

            {(data.length > 0) && <div className="flex flex-col gap-4">
                {data.map((item) => (
                    <div className='bg-white text-black rounded-xl gap-8 w-full flex flex-col lg:flex-row p-5'>
                        <div>
                            <img src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" className='w-40 h-40 rounded-xl' alt="" />
                        </div>


                        <div className='flex w-full flex-col justify-between'>
                            <h3 className='flex flex-row justify-between font-bold text-3xl'>{item.name}
                            </h3>
                            <div className='w-fit'>
                            <HoverCard>
                                <HoverCardTrigger className='text-sm'>By <span className='font-bold hover:underline '>@{item.lister.name}</span></HoverCardTrigger>

                                <HoverCardContent className='rounded-xl backdrop-blur-3xl bg-black/80'>
                                    <span className='ml-3 flex flex-row gap-3 text-right items-center'>
                                        <img src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" className='rounded-full w-10 aspect-square object-cover border-white/40 border-2' />
                                        By @{item.lister.name} {(item.lister.verified && <svg className="w-3 h-3 text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
                                        </svg>)}
                                    </span>
                                </HoverCardContent>
                            </HoverCard>
                            </div>
                            <p className='text-sm'>{item.description}</p>
                            <div className='flex flex-row gap-3'>
                                <p className='text-green-500'>Instant Delivery</p>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-3 justify-between '>
                                <p className='font-bold text-xl text-gray-700'>{item.price}$</p>
                                <div className='flex flex-row gap-3'>
                                    <button className='border-gray-900 border-2 p-2 rounded-xl font-semibold'>Add to cart</button>
                                    <button className='bg-gray-900 text-white p-2 rounded-xl font-semibold'>buy now</button>

                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            }



        </div>

    )


}