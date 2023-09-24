import { AppProps } from "next/app";
import "@/app/globals.css";
import Navbar from "@/components/header/navbar";
import { Toaster } from "@/components/ui/toaster";
import SeoProvider from "@/components/seo/SeoProvider";
import GlowCursor from "@/components/cursor/Glow";
import Footer from "@/components/footer/Footer";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { useRouter } from "next/router";
import SellerLayout from "./seller/Layout";

// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { registerPlugin } from "filepond";
import BecomeSeller from "@/components/home/BecomeSeller";

registerPlugin(FilePondPluginFileEncode, FilePondPluginImagePreview);

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    console.log(router.pathname.includes("seller"), );
    return !router.pathname.includes('/seller')?(
        <Provider store={store}>
            <div className="text-white">
            <BecomeSeller />

                <SeoProvider />
                {/* <GlowCursor/> */}
                <Toaster />
                <Navbar />
                <div className="container mx-auto py-10">
                    <Component {...pageProps} />
                </div>
                <Footer />
            </div>
        </Provider>
    )
    : (
        <Provider store={store}>
            <SellerLayout>
                <Component {...pageProps} />
            </SellerLayout>
        </Provider>
    )

}