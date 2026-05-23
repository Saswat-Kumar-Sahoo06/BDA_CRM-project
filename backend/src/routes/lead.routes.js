import express from "express";

import {
    createLead,
    getAllLeads,
    updateLead,
    deleteLead,
} from "../controllers/lead.controller.js";

import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createLead);

router.get("/", protect, getAllLeads);

router.put("/:id", protect, updateLead);

router.delete("/:id", protect, deleteLead);

export default router;