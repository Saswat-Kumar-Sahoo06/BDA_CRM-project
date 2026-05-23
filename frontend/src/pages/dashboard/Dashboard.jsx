import { useQuery } from "@tanstack/react-query";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getDashboardStats } from "../../api/dashboardApi";
import StatCard from "../../components/dashboard/StatCard";
import RevenueChart from "../../components/dashboard/RevenueChart";
import LeadStatusChart from "../../components/dashboard/LeadStatusChart";

const Dashboard = () => {
  const { data, isLoading } =
    useQuery({
      queryKey: [
        "dashboard-stats",
      ],

      queryFn:
        getDashboardStats,
    });

  if (isLoading) {
    return (
      <h1 className='p-10'>
        Loading...
      </h1>
    );
  }

  return (
    <DashboardLayout>
      <div>
        <h1 className='text-3xl font-bold mb-6'>
          Dashboard
        </h1>

        <div className='grid grid-cols-4 gap-6'>
          <StatCard
            title='Total Leads'
            value={data?.totalLeads}
          />

          <StatCard
            title='Converted Leads'
            value={data?.convertedLeads}
          />

          <StatCard
            title='Employees'
            value={data?.totalEmployees}
          />

          <StatCard
            title='Revenue'
            value={`₹${data?.revenue}`}
          />
        </div>

        <div className='grid grid-cols-2 gap-6 mt-8'>
          <RevenueChart />

          <LeadStatusChart />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;