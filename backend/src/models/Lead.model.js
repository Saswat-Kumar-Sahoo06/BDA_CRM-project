import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
    {
        clientName: {
            type: String,
            required: true,
            trim: true,
        },

        companyName: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },

        phone: {
            type: String,
            required: true,
        },

        productInterested: {
            type: String,
            required: true,
        },

        dealValue: {
            type: Number,
            default: 0,
        },

        status: {
            type: String,
            enum: [
                "New",
                "Contacted",
                "Negotiation",
                "Proposal Sent",
                "Converted",
                "Rejected",
            ],
            default: "New",
        },

        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
            default: "Medium",
        },

        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        followUpDate: {
            type: Date,
        },

        saleClosed: {
            type: Boolean,
            default: false,
        },

        conversionDate: {
            type: Date,
        },

        notes: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const Lead = mongoose.model("Lead", leadSchema);