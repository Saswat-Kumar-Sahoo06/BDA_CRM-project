import API from "./axios";

export const getAllEmployees = async () => {
    const { data } = await API.get("/employees");

    return data.employees;
  };

export const getEmployeePerformance = async () => {
    const { data } = await API.get( "/employees/performance");

    return data.performance;
  };