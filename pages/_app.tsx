import { AppProps } from "next/app";
import "@/app/globals.css";
import Navbar from "@/components/header/navbar";
import { Toaster } from "@/components/ui/toaster";
import SeoProvider from "@/components/seo/SeoProvider";
import GlowCursor from "@/components/cursor/Glow";
import Footer from "@/components/footer/Footer";
import { Provider } from "react-redux";
import store from "@/redux/store";



export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <Provider store={store}>
            <div className="text-white">
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
}