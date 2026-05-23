import DashboardLayout from "../../layouts/DashboardLayout";

import EmployeePerformanceTable from "../../components/employees/EmployeePerformanceTable";

const Employees = () => {
    return (
        <DashboardLayout>
            <EmployeePerformanceTable />
        </DashboardLayout>
    );
};

export default Employees;