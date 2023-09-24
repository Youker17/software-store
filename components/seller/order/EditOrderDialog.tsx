
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



export default function EditOrderDialog() {
    return (
        <Dialog >
            <DialogTrigger>
                <Button className="rounded-xl w-full bg-lime-200 text-black hover:bg-lime-500">Edit</Button>
            </DialogTrigger>

            <DialogContent style={{
                borderRadius: "1rem",
            }} 
            className="">
                <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>Dialog Description</DialogDescription>
                </DialogHeader>

                <p>Order Details</p>
            </DialogContent>
        </Dialog>
    )
}
