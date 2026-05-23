import express from "express";

import {
    addCommunication,
    getLeadCommunication,
} from "../controllers/communication.controller.js";

import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, addCommunication);

router.get("/:leadId", protect, getLeadCommunication);

export default router;