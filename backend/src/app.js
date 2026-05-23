import express from "express"
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.ORIGIN_URL,
    credentials: true
}))
app.use(cookieParser())
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({
    limit: "16kb",
    extended: true,
}))
app.use(express.static('public'))


//importing routes
import AuthRoutes from "./routes/auth.routes.js";
import LeadRoutes from "./routes/lead.routes.js";
import DashboardRoutes from "./routes/dashboard.routes.js";
import EmployeeRoutes from "./routes/employee.routes.js";
import CommunicationRoutes from "./routes/communication.routes.js";

//using those routes
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/leads", LeadRoutes);
app.use("/api/v1/dashboard", DashboardRoutes);
app.use("/api/v1/employees", EmployeeRoutes);
app.use("/api/v1/communications", CommunicationRoutes);

export default app