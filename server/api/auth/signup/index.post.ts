import { eq } from "drizzle-orm"
import { z } from "zod"
import {db} from "~~/server/db/config"
import { usersTable } from "~~/server/db/schema"
import bcrypt from "bcryptjs"
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

    const user = await db.select().from(usersTable).where(eq(usersTable.email , parsedBody.data.email))

    if(user.length > 0){
        return {
            success:false,
            message:"Email already exists!!",
            status:400
        }
    }

    const hashedPassword = await bcrypt.hash(parsedBody.data.password , 12)
    const email = parsedBody.data.email
    const phone_number = parsedBody.data.phone_number

    const insert = await db.insert(usersTable).values({password:hashedPassword , email , phone_number}).returning()

    return {
        insert
    }
})