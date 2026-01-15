import { db } from "~~/server/db/config";
export default defineEventHandler(async(e)=>{

    const cat = await db.query.productCategories.findMany({
        with:{
            products:true,
            categories:true
        }
    })

    return {
        cat
    }

})