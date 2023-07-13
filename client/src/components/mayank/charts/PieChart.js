import React from 'react';
import { PieChart, Pie, Cell, Legend  } from 'recharts';

const data = [
  { name: 'Confirimity',value: 34 , fill:'#FFBA00' },
  { name: 'Compliance', value: 40 , fill:'#6CA044'},
  { name: 'Obedience', value: 26 , fill:'#A24F10'},
  // { name: 'Testing Data', value: 1 , fill:'#FF8042'},
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function PieChartCom () {
  return (
    <div style={{ textAlign: 'center' }}>
      <PieChart width={400} height={500}>
        <Pie className='col'
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx={200} cy={200} startAngle={90} endAngle={-270}
          outerRadius={140} innerRadius={75}
          fill="#884d8" label
        >
           {/* {data.map((entry) => (
             <Cell key={entry.name} fill={entry.color} />
           ))} */}
        </Pie>
        <Legend 
        iconSize={10}
        layout="horizontal"
        verticalAlign="bottom"
        align="right"
         />
      </PieChart>
    </div>
  );
};

export default PieChartCom ;








// import React from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

// function PieChart({ chartData }) {
//   return <Pie data={chartData} />;
// }

// export default PieChart;
