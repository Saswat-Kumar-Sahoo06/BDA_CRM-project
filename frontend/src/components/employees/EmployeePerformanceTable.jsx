import { useQuery } from "@tanstack/react-query";

import { getEmployeePerformance } from "../../api/employeeApi";

const EmployeePerformanceTable = () => {
    const { data, isLoading } = useQuery({
        queryKey: [
            "employee-performance",
        ],

        queryFn:
            getEmployeePerformance,
    });

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className='bg-white rounded-2xl shadow p-6'>
            <div className='flex items-center justify-between mb-6'>
                <h2 className='text-2xl font-bold'>
                    Employee Performance
                </h2>
            </div>

            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b'>
                            <th className='text-left py-3'>
                                Employee
                            </th>

                            <th className='text-left py-3'>
                                Email
                            </th>

                            <th className='text-left py-3'>
                                Assigned Leads
                            </th>

                            <th className='text-left py-3'>
                                Converted
                            </th>

                            <th className='text-left py-3'>
                                Pending
                            </th>

                            <th className='text-left py-3'>
                                Revenue
                            </th>

                            <th className='text-left py-3'>
                                Conversion Rate
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {data?.map((emp) => (
                            <tr
                                key={
                                    emp.employeeId
                                }
                                className='border-b hover:bg-gray-50'
                            >
                                <td className='py-4 font-medium'>
                                    {
                                        emp.employeeName
                                    }
                                </td>

                                <td className='py-4'>
                                    {emp.email}
                                </td>

                                <td className='py-4'>
                                    {
                                        emp.assignedLeads
                                    }
                                </td>

                                <td className='py-4'>
                                    {
                                        emp.convertedLeads
                                    }
                                </td>

                                <td className='py-4'>
                                    {
                                        emp.pendingFollowups
                                    }
                                </td>

                                <td className='py-4'>
                                    ₹
                                    {emp.revenue}
                                </td>

                                <td className='py-4'>
                                    {
                                        emp.conversionRate
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeePerformanceTable;