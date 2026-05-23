import {
    PieChart,
    Pie,
    Tooltip,
    Cell,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Converted",
        value: 45,
    },

    {
        name: "Negotiation",
        value: 20,
    },

    {
        name: "Rejected",
        value: 10,
    },

    {
        name: "New",
        value: 25,
    },
];

const COLORS = [
    "#22c55e",
    "#8b5cf6",
    "#ef4444",
    "#3b82f6",
];

const LeadStatusChart = () => {
    return (
        <div className='bg-white rounded-2xl shadow p-6'>
            <h2 className='text-xl font-semibold mb-6'>
                Lead Status
            </h2>

            <ResponsiveContainer
                width='100%'
                height={300}
            >
                <PieChart>
                    <Pie
                        data={data}
                        dataKey='value'
                        outerRadius={100}
                        label
                    >
                        {data.map(
                            (entry, index) => (
                                <Cell
                                    key={index}
                                    fill={
                                        COLORS[index]
                                    }
                                />
                            )
                        )}
                    </Pie>

                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LeadStatusChart;