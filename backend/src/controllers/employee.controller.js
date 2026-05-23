import { User } from "../models/User.model.js";
import { Lead } from "../models/Lead.model.js";

export const getAllEmployees = async (req, res) => {
    try {
        const employees = await User.find({
            role: "bda",
        }).select("-password");

        return res.status(200).json({
            success: true,
            employees,
            message: "all employees fetched successfully...."
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const employeePerformance = async (req, res) => {
    try {
        const employees = await User.find({
            role: "bda",
        });

        const performance = await Promise.all(employees.map(async (emp) => {
            const assignedLeads = await Lead.countDocuments({
                assignedTo: emp._id,
            });

            const convertedLeads = await Lead.countDocuments({
                assignedTo: emp._id,
                status: "Converted",
            });

            const pendingFollowups = await Lead.countDocuments({
                assignedTo: emp._id,
                saleClosed: false,
            });

            const revenue = await Lead.aggregate([
                {
                    $match: {
                        assignedTo:
                            emp._id,
                        saleClosed: true,
                    },
                },
                {
                    $group: {
                        _id: null,
                        totalRevenue: {
                            $sum:
                                "$dealValue",
                        },
                    },
                },
            ]);

            const conversionRate = assignedLeads === 0 ? 0 : ((convertedLeads / assignedLeads) * 100).toFixed(2);

            return {
                employeeId: emp._id,
                employeeName: emp.name,
                email: emp.email,
                assignedLeads,
                convertedLeads,
                pendingFollowups,
                revenue: revenue[0]?.totalRevenue || 0,
                conversionRate: `${conversionRate}%`,
            };
        })
        );

        return res.status(200).json({
            success: true,
            performance,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};