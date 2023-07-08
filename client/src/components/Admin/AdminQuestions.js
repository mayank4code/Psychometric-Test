import {React, useEffect, useState, useRef} from 'react'

const AdminQuestions = () => {
    const [questions, setQuestions] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [clickedQuestion, setClickedQuestion] = useState({questionText: "", options: []});
    const ref = useRef(null);
    const refClose = useRef(null);

    useEffect(() => {
        verifyUser();
        getQuestions();
    }, [])

    const verifyUser = async()=>{
        if(localStorage.getItem('token')){
            const response = await fetch(`http://localhost:5000/api/user/verify-user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
            });
    
            const result = await response.json()
            if(result.isAdmin===true){
                setIsAdmin(true);
            }
        }
    }


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

    const handleView = (question)=>{
        console.log("question: ", question);
        setClickedQuestion(question);
        ref.current.click();
    }

    const handleEdit = (question)=>{
        
    }


  return (
    <>

{/* MODAL STARTING */}
<button
    ref={ref}
    type="button"
    className="btn btn-primary d-none"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button>

  <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="exampleModalLabel">
            <b>Question</b> 
          </h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="modal-body">
          <h5>Question: {clickedQuestion.questionText}</h5>
          <h5>Option1: {clickedQuestion.options[0]}</h5>
          <h5>Option2: {clickedQuestion.options[1]}</h5>
          <h5>Option3: {clickedQuestion.options[2]}</h5>
          <h5>Option4: {clickedQuestion.options[3]}</h5>
          
        </div>
        <div className="modal-footer">
          <button 
            // ref={refClose}
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            ref = {refClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>


    { isAdmin &&
        <div>
      <h1 className="my-5">Questions Information</h1>
      

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Question</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => {
            return (
              <tr key={question._id}>
                <td>{question.questionText.substring(0,120)}{question.questionText.length>120 && "...."}</td>
                <td>
                  <button
                    className="btn btn-success mx-3"
                    onClick={()=>{handleView(question)} }
                  >
                    View
                  </button>
                  <button
                    className="btn btn-success mx-3"
                    onClick={()=>{handleEdit(question)}}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mx-3"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    }
    
    </>
  )
}

export default AdminQuestions