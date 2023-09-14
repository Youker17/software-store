


export default function NewsLetter() {
    return (
        <div className="bg-gray-900 py-10 rounded-xl px-5">
            <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="text-4xl text-white font-bold">Subscribe to our newsletter</h1>
                <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla atque, obcaecati voluptas sunt at sapiente in voluptate vero cupiditate repellat qui illum? Dolorum, dolor libero hic porro adipisci in.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10">
                <input type="text" placeholder="Your Email" className="bg-gray-800 text-white rounded-xl px-5 py-2 w-[300px]" />
                <button className="bg-white text-black rounded-xl px-5 py-2">Subscribe</button>
            </div>
        </div>
    )
}