// import { useState } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Graph from "./charts/Graph";
import PieChart from "./charts/PieChart";
import RadialBarChartComponent from './charts/RadialBarChart';
import { toast, Toaster } from "react-hot-toast";
import { FiDownload, FiBarChart2 } from 'react-icons/fi'; // Import the FiDownload and FiBarChart2 icons from react-icons

import "./result.css"
import { Footer } from "../neha/Footer";
import { SyncLoader } from 'react-spinners'; // Import the ClipLoader from "react-spinners"


// import './App.css';

// import { UserData } from "./Data";

function Result_M() {
    const navigate = useNavigate();
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const [responses, setResponses] = useState([])
    const [testDate, setTestDate] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //*Validate the token to see if the page is accessible to the user
        const validateUserToken = async () => {
            const response = await fetch(`http://localhost:5000/api/user/verify-user`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token'),
              },
            });
            let response1 = await response.json();
            console.log('ValidateUserToken response: ', response1);
            if (response1.success === true) {
              setIsUserAuthenticated(true);
            } else {
              toast.error('Please Login to continue', {
                  style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#713200',
                  },
                  iconTheme: {
                    primary: '#713200',
                    secondary: '#FFFAEE',
                  },
                });
              navigate('/login');
            }
          };
        
          validateUserToken();


        // const fetchData = async () => {
        //     await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating 2 seconds delay
        //     setLoading(false); // Set loading to false once the data is fetched or async task is completed
        //   };
      
        //     fetchData();

            getResult();

    }, [])

    const getResult = async () => {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/user/get-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("token")
            },
        });
        let response1 = await response.json();
        // console.log("response1: ", response1);

        if (response1.success === false) {
            toast.error("Unable to fetch result. Please login again");
            navigate("/login");
            return;
        }
        if(response1.userDoc.testResponse.length === 0){
            toast.error("You have not yet given the test!");
            navigate("/");
            return;
        }
        setResponses(response1.userDoc.testResponse);
        setTestDate(formatDateWithCustomTime(response1.userDoc.lastTestDate));
        console.log(formatDateWithCustomTime(response1.userDoc.lastTestDate));
        // console.log(response1.userDoc.testResponse);
        // console.log(response1.userDoc);
        setLoading(false);
    }

    const handleDownloadClick = () => {
        // Your logic to handle the download button click goes here
        // For example, you can initiate a download or display a message
        toast.success("Test results downloaded!"); // Using toast from react-hot-toast for demonstration
    };

    function getDaySuffix(day) {
        if (day >= 11 && day <= 13) {
          return 'th';
        }
        switch (day % 10) {
          case 1: return 'st';
          case 2: return 'nd';
          case 3: return 'rd';
          default: return 'th';
        }
      }
      
      function formatDateWithCustomTime(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = String(date.getMinutes()).padStart(2, '0');
        const amPm = hour >= 12 ? 'PM' : 'AM';
        const formattedTime = `${hour % 12 || 12}:${minute} ${amPm}`;
      
        return `${day}${getDaySuffix(day)} ${month} ${year}, ${formattedTime}`;
      }


    return (

        <>
        {!isUserAuthenticated?"":(
            <>
                {!loading ? (
                    <div className="result-page">
                        <div className="header">
                        <h2 className="page-heading" >
                        <FiBarChart2 className="icon-bar-chart my-5" /> Test Results
                        </h2>
                        </div>
                        <div className='chart-section'>
                            <div className="chart">
                                <h1>Graph Chart Example</h1>
                                <h4 className="chart-subtitle">Compliance vs. Social Pressure</h4>
                                <Graph responses={responses} />
                            </div>
                            <div className="chart">
                                <h1>PieChart Example</h1>
                                <h4 className="chart-subtitle">Social Influence Breakdown</h4>
                                <PieChart responses={responses} />
                            </div>
                            <div className="chart">
                                <h1>RadialBar Chart Example</h1>
                                <RadialBarChartComponent responses={responses} />
                            </div>
                        </div>
                        <div className="content-section">
                            <h3 style={{color:"#1D5B79"}}> Psychometric Test  Results</h3>
                            <p>
                                Congratulations! Here are the results of your psychometric test taken on <b>{testDate}</b> . The test assessed your personality traits, cognitive abilities, and emotional intelligence. The test results provide valuable insights into your strengths and areas for development, helping you understand yourself better.
                            </p>
                            <h3 style={{color:"#1D5B79"}}>Graph Chart</h3>
                            <p>
                                The Graph Chart displays the comparison between your compliance and social pressure scores. The compliance score reflects your tendency to conform to social norms and expectations, while the social pressure score indicates the level of influence from others in decision-making.
                            </p>
                            <h3 style={{color:"#1D5B79"}}>Pie Chart</h3>
                            <p>
                                The Pie Chart illustrates the breakdown of social influence categories. It provides an overview of the various factors affecting your decision-making process, including family, peers, and media influence.
                            </p>
                            <h3 style={{color:"#1D5B79"}}>Radial Bar Chart</h3>
                            <p>
                                The Radial Bar Chart showcases your performance in different aspects, such as cognitive abilities, emotional intelligence, and adaptability. It presents a holistic view of your strengths and areas for improvement.
                            </p>
                            {/* ... Add more content about the test results as needed ... */}
                        </div>
                        <button className="download-button" onClick={handleDownloadClick}>
                                <FiDownload className="download-icon" />
                                Download Results
                            </button>
                    </div>
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                    <SyncLoader size={30} color="#fb2576" />
                    </div>
                )}
                
                <Footer></Footer>

            </>
            )}    
        </>
    );
}

export default Result_M;
