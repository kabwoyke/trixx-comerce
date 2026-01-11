import { User } from "~~/server/utils/jwt"

export default defineEventHandler(async(e)=>{

    try {
    const refresh_token = getCookie(e , "refresh_token")

    if(!refresh_token){
        return {
            success:false,
            message:"Invalid Token",
            statusCode:401
        }
    }

    const decoded = verifyRefreshToken(refresh_token)
    const newAccessToken = signAccessToken({id:decoded.id , email:decoded.email})



    setCookie(e , "access_token" , newAccessToken , {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 15,
    })

    return {
        success:true,
        message:"Access Token Refreshed",
        statusCode:200
    }
        
    } catch (error) {
        deleteCookie(e, 'access_token')
        deleteCookie(e, 'refresh_token')

    throw createError({
      statusCode: 401,
      statusMessage: 'Session expired. Please log in again.'
    })
        
    }
    
})