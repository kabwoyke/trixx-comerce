import { z } from "zod"
type AuthBody = {
    email:string
    password:string
    phone_number:string
}

const signupSchema = z.object({
    email:z.email(),
    password:z.string().min(6),
    phone_number:z.string()
})
export default defineEventHandler(async(e)=>{

    const body:AuthBody = await readBody(e)

    if(!body || Object.keys(body).length === 0){
        throw createError({
            statusCode:400,
            statusMessage:"Empty Body",
            
        })
    }

    const parsedBody = signupSchema.safeParse(body)

    console.log(!parsedBody.success)

    if(!parsedBody.success){
        throw createError({
            statusCode:400,
            statusMessage:"Validation failed",
            data:parsedBody.error.message
        })
    }

    
    return {
        parsedBody
    }
})