import React, { useEffect, useState } from 'react'
import QuizResult from './QuizResult';
import "../css/quiz.css";
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
    
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestionIndex< questions.length-1){
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }

    const updateScore=()=>{
        if(clickedOption===1){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestionIndex(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div className='bodyy'>
    {questions.length===0?"":<>
    <div>
        <p className="heading-txt">Quiz APP</p>

    </div>
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
            </>)}
        </div>
        </>
    }
    
    </div>
  )
}

export default Quiz