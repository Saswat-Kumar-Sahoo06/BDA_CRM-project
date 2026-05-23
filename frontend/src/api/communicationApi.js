import API from "./axios";

export const getLeadCommunication =
  async (leadId) => {
    const { data } =
      await API.get(
        `/communications/${leadId}`
      );

    return data.communication;
  };

export const addCommunication =
  async (formData) => {
    const { data } =
      await API.post(
        "/communications",
        formData
      );

    return data;
  };