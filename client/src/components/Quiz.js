import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/quiz.css";
import imgbg from "../images/bg.png";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { SyncLoader } from 'react-spinners'; // Import the ClipLoader from "react-spinners"

import 'react-circular-progressbar/dist/styles.css';


import { toast, Toaster } from "react-hot-toast";


function Quiz() {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        
        getQuestions();
    }, [])

    const getQuestions = async () => {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/user/get-questions`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const result = await response.json()
        const questions1 = result.questions;

        setQuestions(questions1);
        setLoading(false);

    }


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [clickedOption, setClickedOption] = useState(5);


    const nextQuestion = () => {
        if(clickedOption===5 && !result[currentQuestionIndex]){
            toast.error("Please select atleast one option");
            return;
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setClickedOption(5);
        }
    }

    const previousQuestion = () => {

        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setClickedOption(5);
        }
    }

    const updateResult = (option)=>{
        setResult((prevResult) => {
            const updatedResult = [...prevResult];
            updatedResult[currentQuestionIndex] = option;
            // console.log(updatedResult);
            return updatedResult;
        });
    }

    const handleSubmit = async ()=>{
        if(result.length!==questions.length){
            toast.error("Please answer all questions");
            return;
        }
        // console.log("Submit quiz");
        // console.log(result);

        const response = await fetch(`http://localhost:5000/api/user/update-response`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("token")
            },
            body: JSON.stringify({responses:result})
        });
        let response1 = await response.json();
        // console.log( response1);
        if(response1.success==true){
            toast.success("Test submitted successfully");
            navigate("/test/result");
        }
        else{
            toast.error("Unable to submit, please try again later.");
        }
        document.exitFullscreen();

    }


    const imageArray = [require("../images/1.png"), require("../images/2.png"), require("../images/3.png")
        , require("../images/4.png"), require("../images/5.png"), require("../images/6.png"), require("../images/7.png")
        , require("../images/8.png"), require("../images/9.png"), require("../images/10.png"), require("../images/11.png")
        , require("../images/12.png"), require("../images/13.png"), require("../images/14.png"), require("../images/15.png")
        , require("../images/16.jpg"), require("../images/17.png"), require("../images/18.jpg"), require("../images/19.png")
        , require("../images/20.png"), require("../images/21.png"), require("../images/22.png"), require("../images/23.png")
        , require("../images/24.png"), require("../images/25.png"), require("../images/26.png")];

    const totalQuestions = questions.length;
    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;


    return (

        <div className='bodyy'>
            {questions.length !== 0 && !loading  ? <>

                <div className="image-handler">
                    <div className="container">

                        <div className="question">
                            <span id="question-number">{currentQuestionIndex + 1}. </span>
                            <span id="question-txt">{questions[currentQuestionIndex]["questionText"]}</span>
                        </div>
                        <div className="option-container">
                            {questions[currentQuestionIndex].options.map((option, i) => {
                                return (
                                    <button
                                        // className="option-btn"
                                        className={`option-btn ${clickedOption === i + 1 || result[currentQuestionIndex] === i + 1 ? 'checked' : ''}`}
                                        key={i}
                                        onClick={() =>{ setClickedOption(i + 1); updateResult(i+1) }}
                                    >
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                        <div>
                            <input type="button" value="Next" id="next-button" onClick={nextQuestion} />
                            <input type="button" value="Prev" id="prev-button" onClick={previousQuestion} />
                        </div>
                            <button style={result.length!==questions.length?{display:"none"}:{}} className='btn btn-success' onClick={handleSubmit}>Submit</button>

                    </div>
                    <img src={imgbg} alt="img" />
                </div>

                <div className="right">
                    <img src={imageArray[currentQuestionIndex]} alt="img" />


                    <div className="status-info">
                        <h5>Question <br></br> Answered</h5>
                    </div>

                    <CircularProgressbar
                        className="status"
                        value={24}
                        text={`${currentQuestionIndex + 1} / ${totalQuestions}`}
                      styles={buildStyles({
                        pathColor: `rgba(62, 152, 199, ${progressPercentage / 100})`,
                        textColor: 'black',
                        trailColor: 'pink',
                      })}
                    />


                </div>
                 
            </>:<div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                {/* <SyncLoader size={30} color="#fb2576" /> */}
                </div>
            }
        </div>
    )
}

export default Quiz