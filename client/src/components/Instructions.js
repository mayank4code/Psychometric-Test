import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/instructions.css"

function InstructionsPage() {
    const navigate = useNavigate();
  return (
    <div className="instructions-page">
      <h1>Test Instructions</h1>
      <p>
        Welcome to the test! This test contains 26 questions, and for each question, you'll have four options to choose from.
      </p>
      <p>
        <strong>Instructions:</strong>
      </p>
      <ol>
        <li>Ensure you are in a quiet environment to concentrate on the test.</li>
        <li>Read each question carefully and choose the best option.</li>
        <li>Once you select an option, you can also change it.</li>
        <li>There is no time limit, so take your time and do your best!</li>
        <li>After clicking the "Start Test" button, full-screen mode will be enabled.</li>
        <li>This test is designed to assess your knowledge and skills in various areas.</li>
        <li> Please answer each question to the best of your ability.</li>
      </ol>
      <p>
        <strong>Note:</strong> If you accidentally exit full-screen mode during the test, you can click the "Go Full Screen" button again to re-enable it.
      </p>
      <div className="start-button-container">
      <button onClick={()=>{
            navigate('/test/start')
            const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.mozRequestFullScreen) {
            // Firefox
            element.mozRequestFullScreen();
          } else if (element.webkitRequestFullscreen) {
            // Chrome, Safari, and Opera
            element.webkitRequestFullscreen();
          } else if (element.msRequestFullscreen) {
            // Internet Explorer and Edge
            element.msRequestFullscreen();
          }
        }} className='btn btn-primary'> Start Test</button>
      </div>
    </div>
  );
}

export default InstructionsPage;



// import React from 'react'
// import { useNavigate } from 'react-router'
// const Instructions = () => {
//     const navigate = useNavigate();
//   return (
//     <div style={{textAlign:"center"}}>
//         Instructions:
//         <ul>
//             <li>point </li>
//             <li>point </li>
//             <li>point </li>
//             <li>point </li>
//             <li>point </li>
//         </ul>
        // <button onClick={()=>{
        //     navigate('/test/start')
        //     const element = document.documentElement;
        // if (element.requestFullscreen) {
        //     element.requestFullscreen();
        //   } else if (element.mozRequestFullScreen) {
        //     // Firefox
        //     element.mozRequestFullScreen();
        //   } else if (element.webkitRequestFullscreen) {
        //     // Chrome, Safari, and Opera
        //     element.webkitRequestFullscreen();
        //   } else if (element.msRequestFullscreen) {
        //     // Internet Explorer and Edge
        //     element.msRequestFullscreen();
        //   }
        // }} className='btn btn-primary'> Start Test</button>
//     </div>
//   )
// }

// export default Instructions;