import jwt from "jsonwebtoken";
import env from "../config/env.js";

export function generateToken(data) {
  const token = jwt.sign(
    {
      role: data?.role,
      id: data?._id,
    },
    env.JWT_SECRET,
    {
      expiresIn: "12h",
    },
  );

  return token;
}

export function verifyToken(token) {
  const decodedToken = jwt.verify(token, env.JWT_SECRET);

  return decodedToken;
}
