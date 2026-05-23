import express from "express";

import {
    getAllEmployees,
    employeePerformance,
} from "../controllers/employee.controller.js";

import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", protect, authorizeRoles("admin"), getAllEmployees);

router.get("/performance", protect, authorizeRoles("admin"), employeePerformance);

export default router;