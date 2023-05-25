
import { prisma } from "../../lib/prisma";

export default function Page() {
    const formData = []
    async function teste (){
        try{
            const response = await fetch('../api/controllers/users',{
                method: 'POST',
                body: JSON.stringify(formData)
            }
            
            )
        }
        catch(err){
            console.log(err)
        }
    }
}