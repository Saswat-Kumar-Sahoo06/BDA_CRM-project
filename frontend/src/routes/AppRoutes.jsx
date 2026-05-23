import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import Leads from "../pages/leads/Leads";
import LeadDetailsPage from "../pages/leads/LeadDetailsPage";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import KanbanPage from "../pages/kanban/KanbanPage";
import Employees from "../pages/employees/Employees";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/login'
                    element={<Login />}
                />

                <Route
                    path='/register'
                    element={<Register />}
                />

                <Route
                    path='/'
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path='/leads'
                    element={
                        <ProtectedRoute>
                            <Leads />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path='/leads/:id'
                    element={
                        <ProtectedRoute>
                            <LeadDetailsPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path='/kanban'
                    element={
                        <ProtectedRoute>
                            <KanbanPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path='/employees'
                    element={
                        <ProtectedRoute>
                            <Employees />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;