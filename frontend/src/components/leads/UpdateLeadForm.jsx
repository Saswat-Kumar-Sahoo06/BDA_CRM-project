import { useState } from "react";

import { updateLead } from "../../api/leadApi";

const UpdateLeadForm = ({
  lead,
}) => {
  const [formData, setFormData] =
    useState({
      status:
        lead.status || "New",

      priority:
        lead.priority ||
        "Medium",

      dealValue:
        lead.dealValue || 0,

      followUpDate:
        lead.followUpDate
          ?.split("T")[0] || "",

      notes:
        lead.notes || "",

      saleClosed:
        lead.saleClosed ||
        false,
    });

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData({
      ...formData,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        await updateLead({
          id: lead._id,

          formData,
        });

        alert(
          "Lead updated successfully"
        );
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white shadow rounded-2xl p-6'
    >
      <h2 className='text-2xl font-bold mb-5'>
        Update Lead
      </h2>

      <div className='space-y-4'>
        <div>
          <label className='block mb-2 text-sm font-medium'>
            Status
          </label>

          <select
            name='status'
            value={
              formData.status
            }
            onChange={
              handleChange
            }
            className='w-full border rounded-xl px-4 py-3'
          >
            <option value='New'>
              New
            </option>

            <option value='Contacted'>
              Contacted
            </option>

            <option value='Negotiation'>
              Negotiation
            </option>

            <option value='Proposal Sent'>
              Proposal Sent
            </option>

            <option value='Converted'>
              Converted
            </option>

            <option value='Rejected'>
              Rejected
            </option>
          </select>
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium'>
            Priority
          </label>

          <select
            name='priority'
            value={
              formData.priority
            }
            onChange={
              handleChange
            }
            className='w-full border rounded-xl px-4 py-3'
          >
            <option value='Low'>
              Low
            </option>

            <option value='Medium'>
              Medium
            </option>

            <option value='High'>
              High
            </option>
          </select>
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium'>
            Deal Value
          </label>

          <input
            type='number'
            name='dealValue'
            value={
              formData.dealValue
            }
            onChange={
              handleChange
            }
            className='w-full border rounded-xl px-4 py-3'
          />
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium'>
            Follow Up Date
          </label>

          <input
            type='date'
            name='followUpDate'
            value={
              formData.followUpDate
            }
            onChange={
              handleChange
            }
            className='w-full border rounded-xl px-4 py-3'
          />
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium'>
            Notes
          </label>

          <textarea
            rows='4'
            name='notes'
            value={
              formData.notes
            }
            onChange={
              handleChange
            }
            className='w-full border rounded-xl px-4 py-3'
          />
        </div>

        <div className='flex items-center gap-3'>
          <input
            type='checkbox'
            name='saleClosed'
            checked={
              formData.saleClosed
            }
            onChange={
              handleChange
            }
          />

          <label>
            Sale Closed
          </label>
        </div>

        <button className='w-full bg-black text-white py-3 rounded-xl'>
          Update Lead
        </button>
      </div>
    </form>
  );
};

export default UpdateLeadForm;