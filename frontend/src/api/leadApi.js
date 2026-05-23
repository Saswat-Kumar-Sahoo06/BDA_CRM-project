import API from "./axios";

export const getAllLeads = async () => {
    const { data } = await API.get("/leads");

    return data.leads;
  };

export const createLead = async (leadData) => {
    const { data } = await API.post("/leads", leadData);

    return data;
  };

export const updateLead = async ({ id, formData }) => {
    const { data } = await API.put( `/leads/${id}`, formData);

    return data;
  };

export const deleteLead = async (id) => {
    const { data } = await API.delete( `/leads/${id}` );

    return data;
  };