import {User} from "../models/User.model.js";
import generateToken from "../utils/generateToken.js";
import { ApiError } from "../utils/ApiError.js";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            throw new ApiError(400, "All fields are required");
        }

        if (password.length < 6) {
            throw new ApiError(400, "Password must be at least 6 characters");
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new ApiError(409, 'User already exists')
        }

        const user = await User.create({
            name,
            email,
            password,
            role,
        });

        res.status(201).json({
            success: true,
            user,
            message: "registered successfully...."
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new ApiError(400, "All fields are required");
        }

        const user = await User.findOne({ email });

        if (!user) {
            throw new ApiError(401, "Invalid credentials")
        }

        const isMatch = await user.isPasswordCorrect(password);

        if (!isMatch) {
            throw new ApiError(401, "Invalid credentials")
        }

        const token = generateToken(
            user._id,
            user.role
        );

        res.status(200).json({
            success: true,
            user,
            token,
            message: "logged in successfully...."
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};