import jwt from "jsonwebtoken";
export type User = {
  id: string;
  email: string;
};
export function signAccessToken(userData: User) {
  return jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET || "", {
    expiresIn: "1m",
  });
}

export function signRefreshToken(userData: User) {
  return jwt.sign(userData, process.env.REFRESH_TOKEN_SECRET || "", {
    expiresIn: "5m",
  });
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || "");
}

export function verifyRefreshToken(token: string) {
  const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET || "");
  if(typeof decoded === "string"){
    throw new Error("Invalid token payload");
  }

  return decoded as User
}
