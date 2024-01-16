import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";

const HomeMainbar = () => {
  const questionslist = useSelector(state=> state.questionsReducer)
  
  // var questionslist = [
  //   {
  //     _id: 1,
  //     upVotes: 3,
  //     downVotes:2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function",
  //     questionBody: "it meant to be",
  //     questionTags: ["java", "mongo"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswered:"kumar",
  //       answeredOn:"jan 2",
  //       userId:2,
  //     }]

  //   },
  //   {
  //     _id: 2,
  //     upVotes: 3,
  //     downVotes:2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function",
  //     questionBody: "it meant to be",
  //     questionTags: ["javascript", "mongo"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswered:"kumar",
  //       answeredOn:"jan 2",
  //       userId:2,
  //     }]
  //   },
  //   {
  //     _id: 3,
  //     upVotes: 3,
  //     downVotes:2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function",
  //     questionBody: "it meant to be",
  //     questionTags: ["javascript", "R", "mongo", "express", "nodejs", "React"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswered:"kumar",
  //       answeredOn:"jan 2",
  //       userId:2,
  //     }]
  //   },
  // ];

  const location = useLocation();

  const user = 1;
  const navigate = useNavigate();

  // const redirect=()=> {
  //     alert("login or signup to ask a question");
  //     navigate('/Auth');
  // }

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else navigate("/AskQuestion");
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionslist.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionslist.data.length} Questions</p>
            <QuestionList questionslist={questionslist.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
