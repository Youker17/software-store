import Link from 'next/link'
import logo from '../../assets/logo.png'


export default function Footer() {
    return (

        <footer className=" rounded-lg shadow  m-4 mb-10">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="" className="flex items-center mb-4 sm:mb-0">
                        <img src={logo.src} className="h-8 mr-3" alt="cheapdigi" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CheapDigi</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="/seller" className="mr-4 hover:underline md:mr-6 flex flex-row items-start gap-1 text-gray-300">Become A Seller <span className='w-1 h-1 bg-blue-900 rounded-full'></span></Link>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">CheapDigi™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}