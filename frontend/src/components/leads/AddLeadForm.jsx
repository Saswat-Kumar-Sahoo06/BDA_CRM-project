import { useState } from "react";

import { createLead } from "../../api/leadApi";

const AddLeadForm = ({ refetch }) => {
    const [formData, setFormData] = useState({
        clientName: "",
        companyName: "",
        email: "",
        phone: "",
        productInterested: "",
        dealValue: 0,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createLead(formData);

            refetch();

            setFormData({
                clientName: "",
                companyName: "",
                email: "",
                phone: "",
                productInterested: "",
                dealValue: 0,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='bg-white rounded-2xl shadow p-6 mb-6'
        >
            <h2 className='text-2xl font-bold mb-5'>
                Add Lead
            </h2>

            <div className='grid grid-cols-2 gap-4'>
                <input
                    type='text'
                    name='clientName'
                    placeholder='Client Name'
                    value={formData.clientName}
                    onChange={handleChange}
                    className='border rounded-xl px-4 py-3'
                />

                <input
                    type='text'
                    name='companyName'
                    placeholder='Company Name'
                    value={formData.companyName}
                    onChange={handleChange}
                    className='border rounded-xl px-4 py-3'
                />

                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    className='border rounded-xl px-4 py-3'
                />

                <input
                    type='text'
                    name='phone'
                    placeholder='Phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='border rounded-xl px-4 py-3'
                />

                <input
                    type='text'
                    name='productInterested'
                    placeholder='Product Interested'
                    value={formData.productInterested}
                    onChange={handleChange}
                    className='border rounded-xl px-4 py-3'
                />

                <input
                    type='number'
                    name='dealValue'
                    placeholder='Deal Value'
                    value={formData.dealValue}
                    onChange={handleChange}
                    className='border rounded-xl px-4 py-3'
                />
            </div>

            <button className='mt-5 bg-black text-white px-6 py-3 rounded-xl'>
                Create Lead
            </button>
        </form>
    );
};

export default AddLeadForm;