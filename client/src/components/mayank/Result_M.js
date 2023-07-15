// import { useState } from "react";
import Graph from "./charts/Graph";
import PieChart from "./charts/PieChart";
import RadialBarChartComponent from './charts/RadialBarChart';
// import './App.css';

// import { UserData } from "./Data";

function Result_M() {

  const userId = 2 ;// Set the userId here

  return (
    <div className='App row p-5'>
      <div className="col" /*style={{ width: 700 }}*/>
        <h1>Graph Chart Example</h1>
        <h4 style={{ color: 'grey'}}>Compilance vs. Social Pressure</h4>
        <Graph userId={userId} />
      </div>
      <div className="col" >
        <h1>PieChart Example</h1>
        <h4 style={{ color: 'grey'}}>Social Influence Breakdown</h4>
        <PieChart userId={userId} />
      </div>
      <div className="col">
        <h1>RadialBarChart Example</h1>
        <RadialBarChartComponent userId={userId} />
      </div>
    </div>
  );
}

export default Result_M;


// // import { useState } from "react";
// import Graph from "./charts/Graph";
// import PieChart from "./charts/PieChart";
// import RadialBarChartComponent from './charts/RadialBarChart';

// // import { UserData } from "./Data";

// function Result_M() {
//   return (
//     <div className='App row p-5'>
//       <div className="col" /*style={{ width: 700 }}*/>
//         <h1>Graph Chart Example</h1>
//         <h4 style={{ color: 'grey'}}>Compilance vs. Social Pressure</h4>
//         <Graph  />
//       </div>
//       <div className="col" >
//         <h1>PieChart Example</h1>
//         <h4 style={{ color: 'grey'}}>Social Influence Breakdown</h4>
//         <PieChart />
//       </div>
//       <div className="col">
//         <h1>RadialBarChart Example</h1>
//         <RadialBarChartComponent />
//       </div>
//     </div>
//   );
// }

// export default Result_M;



// /*

//             <div className='row'>
//                 <div className="col form-outline mb-3 formInput ">
                    
//                 </div>
//                 <div className="col form-outline mb-3 formInput ">

//                 </div>
//             </div>


// */