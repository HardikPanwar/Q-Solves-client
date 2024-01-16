import React,{useState} from "react";
import { Link, useNavigate, useParams,useLocation } from "react-router-dom";
import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuestion, postAnswer, voteQuestion } from "../../actions/question";
import moment from 'moment';
import copy from 'copy-to-clipboard';

const QuestionsDetails = () => {
  const { id } = useParams();

  const questionslist=useSelector(state => state.questionsReducer);
  // var questionslist = [
  //   {
  //     _id: "1",
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function",
  //     questionBody: "it meant to be",
  //     questionTags: ["java", "mongo"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "2",
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function",
  //     questionBody: "it meant to be",
  //     questionTags: ["javascript", "mongo"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "3",
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function",
  //     questionBody: "it meant to be",
  //     questionTags: ["javascript", "R", "mongo", "express", "nodejs", "React"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  // ];

  const [answer, setAnswer] = useState('');
  const User=useSelector(state=> state.currentUserReducer);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const location =useLocation();
  const url='https://stack-overflow-backend.vercel.app'

  const handlePostAns=(e,answerLength) => {
    e.preventDefault();
    if(User === null) {
      alert("Login or signup to answer");
      navigate('/Auth');
    }
    else {
      if(answer==='') {
        alert('Enter an answer before submitting');
      }
      else {
        // console.log(id);
        dispatch(postAnswer({id,noOfAnswers:answerLength+1,answerBody:answer,userAnswered:User.result.name,userId:User?.result._id}))
      }
    }
  }

  const handleShare =() => {
    copy(url+location.pathname)
    alert('copied url:'+url+ location.pathname)
  }

  const handleDelete=()=> {
    dispatch(deleteQuestion(id,navigate));
  }

  const handleUpVote =() => {
    dispatch(voteQuestion(id,'upvote',User.result._id));
  }

  const handleDownVote=() => {
    dispatch(voteQuestion(id,'downvote',User.result._id));
  }

  return (
    <div className="question-details-page">
      {questionslist.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionslist.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img src={upvote} alt="upvote" width="18" className="votes-icon" onClick={handleUpVote} />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img src={downvote} alt="downvote" width="18" className="votes-icon" onClick={handleDownVote} />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>Share</button>
                          {
                            User?.result?._id===question?.userId &&(
                              <button type="button" onClick={handleDelete}>Delete</button>
                            )
                          }
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/Users/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar backgroundColor="purple" py="5px" px="8px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>

                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} answers</h3>
                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                  </section>
                )}

                <section className="post-ans-container">
                  <h3>Your Answers</h3>
                  <form onSubmit={(e)=> {handlePostAns(e,question.answer.length)}}>
                    <textarea style={{resize:'vertical',width:'100%'}} rows={10} cols={30} onChange={(e)=> setAnswer(e.target.value)}></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other question tagged
                    {question.questionTags.map((tag) => (
                      <Link to={"/Tags"} key={tag} className="ans-tags">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or{" "}
                    <Link
                      to={"/AskQuestion"}
                      style={{ textDecoration: "none", color: "#005B41" }}
                    ><br />
                      ask your own question.
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
