import React, { useEffect, useState } from 'react'
import QuizResult from './QuizResult';
import "../css/quiz.css";
import imgbg from "../images/bg.png";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Quiz() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        getQuestions();
    }, [])

    const getQuestions = async ()=>{
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
        
    }
    


    const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);

    // const [questionIndex, setQuestionIndex] = useState(0);

    // const handleQuestionChange = (newIndex) => {
    //     setQuestionIndex(newIndex);
    // }
    
    const changeQuestion = ()=>{
        // updateScore();
        if(currentQuestionIndex< questions.length-1){
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setClickedOption(0);
            // setQuestionIndex(questionIndex+1);
        }else{
            setShowResult(true)
        }
    }

    // const updateScore=()=>{
    //     if(clickedOption===1){
    //         setScore(score+1);
    //     }
    // }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestionIndex(0);
        setClickedOption(0);
        setScore(0);
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
    {questions.length===0?"":<>

    <div className="image-handler">
    <div className="container">
            {showResult ? (
                <QuizResult score={score} totalScore={questions.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestionIndex+1}. </span>
                <span id="question-txt">{questions[currentQuestionIndex]["questionText"]}</span>
            </div>
            <div className="option-container">
                {questions[currentQuestionIndex].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            <input type="button" value="Prev" id="prev-button" onClick={changeQuestion}/>
            </>)}
        </div>    
        <img src={imgbg} alt="img" />  
    </div>

    <div className="right">
        <img src={imageArray[currentQuestionIndex]} alt="img" /> 

        <div className="status-info">
            <h5>Quetion <br></br> Answered</h5>
       </div>
        
        <CircularProgressbar
              className="status"
              value={progressPercentage}
              text={`${currentQuestionIndex + 1} / ${totalQuestions}`}
              styles={buildStyles({
                pathColor: `rgba(62, 152, 199, ${progressPercentage / 100})`,
                textColor: 'black',
                trailColor: 'pink',
              })}
            />


    </div> 
        </>
    }
    </div>
  )
}

export default Quiz