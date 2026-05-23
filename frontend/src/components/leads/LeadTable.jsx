import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";

import {
    getAllLeads,
    deleteLead,
} from "../../api/leadApi";

import AddLeadForm from "./AddLeadForm";

const LeadTable = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["leads"],
        queryFn: getAllLeads,
    });

    const handleDelete = async (id) => {
            try {
                await deleteLead(id);

                refetch();
            } catch (error) {
                console.log(error);
            }
        };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <AddLeadForm
                refetch={refetch}
            />

            <div className='bg-white rounded-2xl shadow p-6'>
                <div className='flex items-center justify-between mb-6'>
                    <h2 className='text-2xl font-bold'>
                        Leads
                    </h2>
                </div>

                <div className='overflow-x-auto'>
                    <table className='w-full'>
                        <thead>
                            <tr className='border-b'>
                                <th className='text-left py-3'>
                                    Client
                                </th>

                                <th className='text-left py-3'>
                                    Company
                                </th>

                                <th className='text-left py-3'>
                                    Status
                                </th>

                                <th className='text-left py-3'>
                                    Priority
                                </th>

                                <th className='text-left py-3'>
                                    Deal Value
                                </th>

                                <th className='text-left py-3'>
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {data?.map((lead) => (
                                <tr
                                    key={lead._id}
                                    className='border-b hover:bg-gray-50'
                                >
                                    <td className='py-4'>
                                        {
                                            lead.clientName
                                        }
                                    </td>

                                    <td className='py-4'>
                                        {
                                            lead.companyName
                                        }
                                    </td>

                                    <td className='py-4'>
                                        {lead.status}
                                    </td>

                                    <td className='py-4'>
                                        {
                                            lead.priority
                                        }
                                    </td>

                                    <td className='py-4'>
                                        ₹
                                        {
                                            lead.dealValue
                                        }
                                    </td>

                                    <td className='py-4 flex gap-3'>
                                        <Link
                                            to={`/leads/${lead._id}`}
                                            className='bg-black text-white px-4 py-2 rounded-xl text-sm'
                                        >
                                            View
                                        </Link>

                                        <button
                                            onClick={() =>
                                                handleDelete(
                                                    lead._id
                                                )
                                            }
                                            className='bg-red-500 text-white px-4 py-2 rounded-xl text-sm'
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LeadTable;