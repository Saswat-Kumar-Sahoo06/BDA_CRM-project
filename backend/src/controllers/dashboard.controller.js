import { Lead } from "../models/Lead.model.js";
import { User } from "../models/User.model.js";

export const dashboardStats = async (req, res) => {
    try {
        const totalLeads = await Lead.countDocuments();

        const convertedLeads = await Lead.countDocuments({
            status: "Converted",
        });

        const totalEmployees = await User.countDocuments({
            role: "bda",
        });

        const revenue = await Lead.aggregate([
            {
                $match: {
                    saleClosed: true,
                },
            },
            {
                $group: {
                    _id: null,
                    totalRevenue: {
                        $sum: "$dealValue",
                    },
                },
            },
        ]);

        res.status(200).json({
            totalLeads,
            convertedLeads,
            totalEmployees,
            revenue: revenue[0]?.totalRevenue || 0,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};