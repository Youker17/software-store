import Image from "next/image";



interface ProductCardProps {
    name: string;
    price: number;
    image: string;
}






export default function ProductCard({name, image,price }: ProductCardProps) {
    return (
        <div className="w-[300px]">
            <img src={image} className="w-[300px] h-[300px] object-cover shadow-2xl shadow-zinc-900 rounded-xl"/>
            <div className="flex flex-row justify-between mt-5">
                <h3 className="text-white font-bold">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                <p className="text-white">{price}$</p>
            </div>
        </div>
    )





}