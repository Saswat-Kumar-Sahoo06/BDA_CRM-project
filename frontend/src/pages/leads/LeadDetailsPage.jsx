import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import DashboardLayout from "../../layouts/DashboardLayout";

import { getAllLeads } from "../../api/leadApi";

import {
    getLeadCommunication,
} from "../../api/communicationApi";

import Timeline from "../../components/communication/Timeline";

import CommunicationForm from "../../components/communication/CommunicationForm";
import UpdateLeadForm from "../../components/leads/UpdateLeadForm";

const LeadDetailsPage = () => {
    const { id } = useParams();

    const {
        data: leads,
        isLoading,
    } = useQuery({
        queryKey: ["leads"],

        queryFn:
            getAllLeads,
    });

    const lead = leads?.find(
        (item) => item._id === id
    );

    const {
        data: communication,
        refetch,
    } = useQuery({
        queryKey: [
            "communication",
            id,
        ],

        queryFn: () =>
            getLeadCommunication(id),
    });

    if (isLoading || !lead) {
        return <h1>Loading...</h1>;
    }

    return (
        <DashboardLayout>
            <div className='grid grid-cols-3 gap-6'>
                <div className='col-span-2 space-y-6'>
                    <div className='bg-white shadow rounded-2xl p-6'>
                        <h1 className='text-3xl font-bold mb-6'>
                            {
                                lead.clientName
                            }
                        </h1>

                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <p className='text-gray-500'>
                                    Company
                                </p>

                                <h3 className='font-semibold'>
                                    {
                                        lead.companyName
                                    }
                                </h3>
                            </div>

                            <div>
                                <p className='text-gray-500'>
                                    Email
                                </p>

                                <h3 className='font-semibold'>
                                    {lead.email}
                                </h3>
                            </div>

                            <div>
                                <p className='text-gray-500'>
                                    Phone
                                </p>

                                <h3 className='font-semibold'>
                                    {lead.phone}
                                </h3>
                            </div>

                            <div>
                                <p className='text-gray-500'>
                                    Product
                                </p>

                                <h3 className='font-semibold'>
                                    {
                                        lead.productInterested
                                    }
                                </h3>
                            </div>

                            <div>
                                <p className='text-gray-500'>
                                    Status
                                </p>

                                <h3 className='font-semibold'>
                                    {lead.status}
                                </h3>
                            </div>

                            <div>
                                <p className='text-gray-500'>
                                    Priority
                                </p>

                                <h3 className='font-semibold'>
                                    {
                                        lead.priority
                                    }
                                </h3>
                            </div>

                            <div>
                                <p className='text-gray-500'>
                                    Deal Value
                                </p>

                                <h3 className='font-semibold'>
                                    ₹
                                    {
                                        lead.dealValue
                                    }
                                </h3>
                            </div>

                            <div>
                                <p className='text-gray-500'>
                                    Follow Up
                                </p>

                                <h3 className='font-semibold'>
                                    {lead.followUpDate
                                        ? new Date(
                                            lead.followUpDate
                                        ).toLocaleDateString()
                                        : "N/A"}
                                </h3>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <p className='text-gray-500 mb-2'>
                                Notes
                            </p>

                            <div className='bg-gray-100 rounded-xl p-4'>
                                {lead.notes ||
                                    "No notes available"}
                            </div>
                        </div>
                    </div>

                    <Timeline
                        communication={
                            communication
                        }
                    />
                </div>

                <div className='space-y-6'>
                    <UpdateLeadForm
                        lead={lead}
                    />

                    <CommunicationForm
                        leadId={id}
                        refetch={refetch}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default LeadDetailsPage;