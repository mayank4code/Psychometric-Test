import React from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
  { name:'Max',uv:100, pv: 2400, fill:'#ffffff' }, // Maximum Possible  value
  { name: 'A', uv: 8 , pv: 9800, fill: '#213766' },
  { name: 'B', uv: 18, pv: 3908, fill: '#ff5286' },
  { name: 'C', uv: 30, pv: 4800, fill: '#753ba4' },
  { name: 'D', uv: 45, pv: 4800, fill: '#547835' },
  { name: 'E', uv: 62, pv: 4800, fill: '#d78c00' },
  { name: 'F', uv: 74, pv: 4800, fill: '#df6000' },
];

function RadialBarChartComponent  () {
  return (
    <RadialBarChart 
        width={400} height={400} //size of div
        cx={200} cy={230} // coordinates of origin or centre
        innerRadius={15} outerRadius={170} 
        startAngle={90} endAngle={-270} data={data} barSize={50} >
      <RadialBar
        background
        dataKey="uv"
      />
      {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" /> */}
    </RadialBarChart>
  );
};

export default RadialBarChartComponent;
