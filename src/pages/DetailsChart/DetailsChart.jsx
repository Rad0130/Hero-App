import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
} from 'recharts';

const DetailsChart = ({ratings}) => {
    const reRatings=[...ratings].reverse();
    return (
        <div className='w-full h-[400px] mt-10 pb-15 border-b-1 border-gray-300'>
            <h1 className='font-bold text-3xl'>Ratings</h1>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                layout="vertical"
                data={reRatings}
                margin={{top: 10,right: 30,left:0,bottom: 10,}}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" domain={[0, 'dataMax + 1000']} axisLine={false}/>
                <YAxis
                    dataKey="name"
                    type="category"
                    width={50}
                    tick={{ fontSize: 14 }}
                    axisLine={false}
                />
                <Tooltip cursor={{ fill: 'rgba(255,165,0,0.2)' }} />
                <Bar dataKey="count" fill="orange" barSize={30} radius={[4, 4, 4, 4]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DetailsChart;