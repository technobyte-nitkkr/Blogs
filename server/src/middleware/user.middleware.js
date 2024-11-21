import User from "../model/user.js";
import jwt from "jsonwebtoken";

export async function userMiddleware(req, res, next) {
  console.log("Received request:", req.method, req.url);
  const token = req.headers.cookie?.split("token=")[1]?.split(";")[0];
  if (!token) {
    console.log("No token found in cookies");
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    console.log("Token found:", token);
    const decoded = jwt.verify(token, "your_secret_key_here");
    console.log("Decoded token:", decoded);
    const { id } = decoded;
    const user = await User.findById(id);
    if (!user) {
      console.log("User not found for ID:", id);
      return res.json({ message: "User not Found" });
    }
    console.log("User found:", user);
    next();
  } catch (err) {
    console.log("Error verifying token:", err);
    return res.status(401).json({ message: "Invalid token", error: err });
  }
}
