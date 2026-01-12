import { z } from "zod";
import { db } from "~~/server/db/config";
import { products } from "~~/server/db/schema";
const ProductSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
  price: z.number().nonnegative(),
  quantity: z.number().nonnegative(),
  discount_price: z.number().nullable(),
  image: z.string(),
});

export default defineEventHandler(async (e) => {
  try {
    const body = await readBody(e);

    if (Object.keys(body).length === 0) {
      return {
        success: false,
        message: "Missing required fields",
        statusCode: 400,
      };
    }

    const parsedBody = ProductSchema.safeParse(body);

    if (!parsedBody.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: parsedBody.error.flatten(),
        statusCode: 422,
      };
    }
    const { name , description , image , price , discount_price , quantity } = parsedBody.data;

    const dbres = await db.insert(products).values({
      name,
      description,
      image,
      price,
      discount_price,
      quantity
    }).returning();

    return {
        dbres
    }
  } catch (error) {
    console.error(error);
  }
});
