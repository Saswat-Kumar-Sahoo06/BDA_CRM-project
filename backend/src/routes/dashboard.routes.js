import express from "express";

import { dashboardStats } from "../controllers/dashboard.controller.js";

import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", protect, dashboardStats);

export default router;