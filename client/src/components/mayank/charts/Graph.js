import React from 'react';

import {
  XAxis,
  YAxis,
  CartesianGrid,
  // Line,
  Label,LabelList,
  Scatter,
  ScatterChart,
  ReferenceLine,
  // Rectangle
} from 'recharts';
import UserData from "../../../Data/UserData";

const data = [
  { x: 1, y: 1,name:'Individualist Rebellion',fill: '#f5504a'},
  { x: 3, y: 7 , name:'Information Driven' ,fill: '#c1a14d'},
  { x: 7, y: 3 , name:'Friendly Follower',fill: '#c1a14d'},
  { x: 9, y: 9 , name:'Ideal Normative',fill: '#92af65'},
];

const Graph = ({ userId }) => {
  const user = UserData.find((student) => student.id === userId);

  if (!user) {
    return <div><h5>User not found.  {userId} </h5></div>;
  }

  const optionCount = [0, 0, 0, 0]; // Array to store the count of each option

  // Count the number of each option selected
  user.option.forEach((option) => {
      optionCount[option - 1]++;
    });

  // Find the option selected the maximum number of times
  const maxOptionIndex = optionCount.indexOf(Math.max(...optionCount));
  const maxOption = maxOptionIndex + 1;

  // console.log('Option count:', optionCount);
  // console.log('Max option:', maxOption);

  // console.log();
  return (
    <ScatterChart width={400} height={570} margin={{ top: 25, right: 10, bottom: 25, left: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke ="#ffffff"/>
      <XAxis type="number" dataKey="x" domain={[0, 10]} tickCount={6}>
        <Label value="Confirmity to Scale of Social Pressure" position="bottom" offset={-7} />
      </XAxis>
      <YAxis type="number" dataKey="y" domain={[0, 10]} tickCount={11}>
        <Label value="Confirmity to Scale of Compilance" angle={-90} position="insideLeft bottom" offset={25} />
      </YAxis>
      <Scatter data={data} fill={data.fill}>
        {data.map((point, index) => (
            <ReferenceLine key={index} x={point.x} y={point.y} stroke="#ccc" strokeDasharray="3 3" />
            
          ))}
        <LabelList dataKey="name" position="right" />
      </Scatter>
      <ReferenceLine y={5} stroke="#f8bb1e" strokeWidth={4} />
      <ReferenceLine x={5} stroke="#6b7dab" strokeWidth={4} />
    </ScatterChart>
  );
};

export default Graph;




/************ Old Code with Data within the Component ************/

// import React from 'react';
// import {
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Line,
//   Label,LabelList,
//   Scatter,
//   ScatterChart,
//   ReferenceLine,
// } from 'recharts';

// const data = [
//   { x: 1, y: 1,name:'Individualist Rebellion',fill: '#f5504a'},
//   { x: 3, y: 7 , name:'Information Driven' ,fill: '#c1a14d'},
//   { x: 7, y: 3 , name:'Friendly Follower',fill: '#c1a14d'},
//   { x: 9, y: 9 , name:'IdealNormative',fill: '#92af65'},
// ];

// const Graph = () => {
//   return (
//     <ScatterChart width={400} height={500} margin={{ top: 25, right: 10, bottom: 25, left: 5 }}>
//       <CartesianGrid strokeDasharray="3 3" stroke ="#ffffff"/>
//       <XAxis type="number" dataKey="x" domain={[0, 10]} tickCount={6}>
//         <Label value="Confirmity to Scale of Social Pressure" position="bottom" offset={-7} />
//       </XAxis>
//       <YAxis type="number" dataKey="y" domain={[0, 10]} tickCount={11}>
//         <Label value="Confirmity to Scale of Compilance" angle={-90} position="insideLeft bottom" offset={25} />
//       </YAxis>
//       <Scatter data={data} fill={data.fill}>
//         {data.map((point, index) => (
//             <ReferenceLine key={index} x={point.x} y={point.y} stroke="#ccc" strokeDasharray="3 3" />
//           ))}
//         <LabelList dataKey="name" position="right" />
//       </Scatter>
//       <ReferenceLine y={5} stroke="#f8bb1e" strokeWidth={4} />
//       <ReferenceLine x={5} stroke="#6b7dab" strokeWidth={4} />
//     </ScatterChart>
//   );
// };

// export default Graph;
