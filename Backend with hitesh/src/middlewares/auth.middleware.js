import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";

export const verifyToken = async (req, res, next) => {
     try {
          const token = req.cookies?.accessToken || req.header("Auth-token")?.replace("Bearer ", "")
          // console.log("Token check", token);

          if (!token) {
               throw new ApiError(401, "Access Denied! No token provided");
          }

          const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
          // console.log("Decoded token:", decodeToken);

          const user = await User.findById(decodeToken._id).select("-password -refreshToken")
          if (!user) {
               throw new ApiError(404, "Invalid Access token");
          }
          req.user = user;
          next();
     } catch (error) {
          return next(error)
     }
}