import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";

 const protect = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            throw new ApiError(401, "Unauthorized")
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();
    } catch (error) {
        res.status(401).json({
            message: "Token invalid",
        });
    }
};

export {protect}