import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        month: "Jan",
        revenue: 4000,
    },

    {
        month: "Feb",
        revenue: 7000,
    },

    {
        month: "Mar",
        revenue: 5000,
    },

    {
        month: "Apr",
        revenue: 9000,
    },
];

const RevenueChart = () => {
    return (
        <div className='bg-white rounded-2xl shadow p-6'>
            <h2 className='text-xl font-semibold mb-6'>
                Revenue Analytics
            </h2>

            <ResponsiveContainer
                width='100%'
                height={300}
            >
                <BarChart data={data}>
                    <XAxis dataKey='month' />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey='revenue'
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueChart;