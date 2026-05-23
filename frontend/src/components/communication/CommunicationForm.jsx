import { useState } from "react";

import { addCommunication } from "../../api/communicationApi";

const CommunicationForm = ({
  leadId,
  refetch,
}) => {
  const [formData, setFormData] =
    useState({
      type: "Call",
      message: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        await addCommunication({
          lead: leadId,

          type:
            formData.type,

          message:
            formData.message,
        });

        setFormData({
          type: "Call",
          message: "",
        });

        refetch();
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
        Add Communication
      </h2>

      <div className='space-y-4'>
        <select
          name='type'
          value={formData.type}
          onChange={
            handleChange
          }
          className='w-full border rounded-xl px-4 py-3'
        >
          <option value='Call'>
            Call
          </option>

          <option value='Email'>
            Email
          </option>

          <option value='Meeting'>
            Meeting
          </option>
        </select>

        <textarea
          rows='5'
          name='message'
          placeholder='Enter message'
          value={
            formData.message
          }
          onChange={
            handleChange
          }
          className='w-full border rounded-xl px-4 py-3'
        />

        <button className='w-full bg-black text-white py-3 rounded-xl'>
          Add Communication
        </button>
      </div>
    </form>
  );
};

export default CommunicationForm;