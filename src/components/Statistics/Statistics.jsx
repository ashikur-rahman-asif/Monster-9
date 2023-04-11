import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const data = [
        {
            name: "As1",
            marks: 60,
        },
        {
            name: "As2",
            marks: 57,
        },
        {
            name: "As3",
            marks: 60,
        },
        {
            name: "As4",
            marks: 58,
        },
        {
            name: "As5",
            marks: 58,
        },
        {
            name: "A7",
            marks: 59,
        },
        {
            name: "A7",
            marks: 60,
        },
        {
            name: "A8",
            marks: 60,
        },
    ];

  return (
    <div className='p-3 lg:px-16'>
            <h3 className='text-center font-semibold text-2xl py-5'>Assignment Analytics:</h3>
            <ResponsiveContainer width='100%' height={300}>
                <AreaChart
                    width={600}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" fill="#87CEFA" stroke="#00BFFF" />
                </AreaChart>
            </ResponsiveContainer>
        </div> 
  );
};

export default Statistics;