import Home from "@/pages";
import { useRouter } from "next/router"
import HomeSeo from "./HomeSeo";



export default function SeoProvider() {
    const location = useRouter();
    return (
        <>
            {
                location.pathname === "/" ?
                    <HomeSeo />
                    :
                    <></>
            }
        </>
    )
}