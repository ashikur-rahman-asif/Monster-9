import React, { useEffect, useState } from 'react';
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
    // const calculateAverage = () => {
    //     let total = 0
    //     const arrayLength = data.length
    //     // for (let i = 1; i => arrayLength; i++) {
    //     //     const mark = data[i].marks
    //     //     total=total+mark
    //     // }
    // }
    // setAverage(0)
    const [average,setAverage]=useState(0)
    // useEffect(() => {
    //     calculateAverage()
    // },[])
  return (
    <div className='p-3 lg:px-16'>
          <h1 className='flex text-center text-3xl mt-3 mb-2 font-bold justify-center'>Assignment Analytics:</h1>
          <h3 className='text-start font-semibold text-xl mb-3'>Average Maks: {(data.reduce((partialSum, a) => partialSum + a.marks, 0)/data.length).toFixed(2)}</h3>
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
                    <Area type="monotone" dataKey="marks" fill="#87CEFA" stroke="#2F4F4F" />
                </AreaChart>
            </ResponsiveContainer>
        </div> 
  );
};

export default Statistics;