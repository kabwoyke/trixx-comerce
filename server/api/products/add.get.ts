import {z} from "zod"

const ProductSchema = z.object({
    name:z.string(),
    description:z.string(),
    price:z.number().nonnegative(),
    quantity:z.number().nonnegative(),
    discount_price:z.number().nullable()
})

export default defineEventHandler(async(e)=>{

    try {

        const body = await readBody(e)

    if (Object.keys(body).length === 0) {
      return {
        success: false,
        message: "Missing required fields",
        statusCode: 400,
      };
    }


    const parsedBody = ProductSchema.safeParse(body)

    
        
    } catch (error) {

        console.error(error)
        
    }

})