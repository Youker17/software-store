
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


interface DeleteOrderDialogProps {
    id: number
}




export default function DeleteOrderDialog({ id }: DeleteOrderDialogProps) {
    return (
        <Dialog>
            <DialogTrigger>
                <Button className="rounded-xl w-full bg-red-200 text-black hover:bg-red-500">Delete</Button>
            </DialogTrigger>

            <DialogContent style={{
                borderRadius: "1rem",
            }}
                className="">
                <DialogHeader>
                    <DialogTitle>Delete Order ID:{id}</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>

                <p>Are You Sure you want to delete this order?</p>
                <div className=" w-full flex flex-row gap-3 justify-end">
                    <DialogTrigger>
                        <Button className="rounded-xl w-full bg-transparent border text-white hover:text-black">Cancel</Button>
                    </DialogTrigger>
                    <DialogTrigger>
                        <Button className="rounded-xl w-full bg-red-600 text-black hover:bg-red-500">Delete</Button>
                    </DialogTrigger>
                </div>

            </DialogContent>
        </Dialog>
    )
}
