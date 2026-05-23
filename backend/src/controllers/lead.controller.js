import { Lead } from "../models/Lead.model.js";
import { ApiError } from "../utils/ApiError.js";

export const createLead = async (req, res) => {
    try {

        const { clientName, companyName, email, phone, productInterested } = req.body;

        if (!clientName || !companyName || !email || !phone || !productInterested) {
            throw new ApiError(400, "fill required fields")
        }

        const lead = await Lead.create(req.body);

        res.status(201).json({
            lead,
            message: "Lead created successfully..."
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getAllLeads = async (req, res) => {
    try {
        let leads;

        if (req.user.role === "admin") {
            leads = await Lead.find().populate("assignedTo", "name email");
        } else {
            leads = await Lead.find({
                assignedTo: req.user.id,
            }).populate("assignedTo", "name email");
        }

        res.status(200).json({
            leads,
            message: "Fetched all leads successfully...."
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const updateLead = async (req, res) => {
    try {
        const lead = await Lead.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );

        res.status(200).json({
            lead,
            message: "Lead update successfully...."
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const deleteLead = async (req, res) => {
    try {
        await Lead.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Lead deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};