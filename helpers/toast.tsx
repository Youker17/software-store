import { ToastAction } from '@/components/ui/toast'
import { toast } from '@/components/ui/use-toast'



export default function ctoast(title:string,description:string, {...other}={}){

    const config = {
            className: 'rounded-xl',
            title: title,
            description: description,
            ...other
            
    }

    toast(config)

}
