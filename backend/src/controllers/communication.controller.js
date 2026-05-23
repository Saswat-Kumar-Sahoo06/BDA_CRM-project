import {Communication} from "../models/Communication.model.js";

export const addCommunication = async (req, res) => {
    try {
        const { lead, type, message } = req.body;

        if (!lead || !type || !message) {
            return res.status(400).json({
                message: "All fields required",
            });
        }

        const communication = await Communication.create({
            lead,
            employee: req.user.id,
            type,
            message,
        });

        return res.status(201).json({
            success: true,
            communication,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getLeadCommunication = async (req, res) => {
    try {
        const communication = await Communication.find({
            lead: req.params.leadId,
        })
            .populate(
                "employee",
                "name email"
            )
            .sort({
                createdAt: -1,
            });

        return res.status(200).json({
            success: true,
            communication,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};