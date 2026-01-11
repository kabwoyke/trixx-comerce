import { z } from "zod";
import { db } from "~~/server/db/config";
import { usersTable } from "~~/server/db/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
const LoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export default defineEventHandler(async (e) => {
  try {
    const body = await readBody(e);

    if (Object.keys(body).length === 0) {
      return {
        success: false,
        message: "Empty Body",
        statusCode: 400,
      };
    }

    const parsedBody = LoginSchema.safeParse(body);

    if (!parsedBody.success) {
      throw createError({
        statusCode: 400,
        statusMessage: "Validation failed",
        data: parsedBody.error.message,
      });
    }

    const email = parsedBody.data.email
    const user = await db.select().from(usersTable).where(eq(usersTable.email , email));

    if (user.length <= 0) {
      return {
        success: false,
        message: "Invalid Credentials",
        statusCode: 401,
      };
    }

    const validatePassword = await bcrypt.compare(
      parsedBody.data.password,
      user[0].password
    );

    if (!validatePassword) {
      return {
        success: false,
        message: "Invalid Credentials",
        statusCode: 401,
      };
    }

    const accessToken = signAccessToken({
      id: user[0].id,
      email: user[0].email,
    });
    const refreshToken = signRefreshToken({
      id: user[0].id,
      email: user[0].email,
    });

    setCookie(e, "access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 15,
    });

    setCookie(e, "refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    });

    return {
        success:true,
        message:"Login Successfull",
        statusCode:200,
    }
  } catch (error) {
    console.log(error);
  }
});
