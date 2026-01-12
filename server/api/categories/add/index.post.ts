import { z } from "zod";
import { db } from "~~/server/db/config";
import { categories } from "~~/server/db/schema";

const CategorySchema = z.object({
  name: z.string(),
  parent_id: z.string().nullable().default(null),
  image:z.string().nullable()
});

export default defineEventHandler(async (e) => {
  try {
    const body = await readBody(e);

    // console.log(body)
    if (Object.keys(body).length === 0) {
      return {
        success: false,
        message: "Missing required fields",
        statusCode: 400,
      };
    }

    const parsedBody = CategorySchema.safeParse(body);

    if (!parsedBody.success) {
      throw createError({
        statusCode: 400,
        statusMessage: "Validation failed",
        data: parsedBody.error.message,
      });
    }

    const name = parsedBody.data.name;
    const parent_id = parsedBody.data.parent_id;
    const image = parsedBody.data.image

    const dbres = await db
      .insert(categories)
      .values({
        name,
        parent_id,
        image
      })
      .returning();

    return {
      dbres,
    };
  } catch (error) {
    console.error(error);
  }
});
