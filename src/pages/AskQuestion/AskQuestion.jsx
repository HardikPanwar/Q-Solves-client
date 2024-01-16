import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import './AskQuestion.css';
import {askQuestion} from '../../actions/question';

const AskQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('');
    const [questionTags, setQuestionTags] = useState('');

    const dispatch =useDispatch();
    const navigate=useNavigate();
    const User=useSelector((state)=> state.currentUserReducer)

    const handleSubmit =(e)=> {
        e.preventDefault();
        dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted: User.result.name,userId: User?.result._id},navigate));
    }

    const handleEnter= (e)=> {
        if(e.key === 'Enter'){
            setQuestionBody(questionBody+'\n');
        }
    }
  return (
    <div className='ask-question'>
        <div className="ask-ques-container">
            <h1>Ask a public question</h1>
            <form onSubmit={handleSubmit}>
                <div className="ask-form-container">
                    <label htmlFor="ask-ques-title">
                        <h4>Title</h4>
                        <p>Be specific and imagine you're asking question to another person</p>
                        <input type="text" id='ask-ques-title' placeholder='e.g Is there any R function to finding an element in a vector?' onChange={(e)=> setQuestionTitle(e.target.value)} />
                    </label>
                    <label htmlFor="ask-ques-body">
                        <h4>Body</h4>
                        <p>Include all the information regarding to your question</p>
                        <textarea id='ask-ques-body' rows={30} cols={10} placeholder='e.g Is there any R function' onChange={(e)=> setQuestionBody(e.target.value)} onKeyPress={handleEnter} />
                    </label>
                    <label htmlFor="ask-ques-tags">
                        <h4>Tags</h4>
                        <p>Add upto 5 tags to describe what is your about</p>
                        <input type="text" id='ask-ques-tags' placeholder='e.g (xml,java,c++)' onChange={(e)=> setQuestionTags(e.target.value.split(' '))} />
                    </label>
                </div>
                <input type="submit" value='Review your question' className='review-btn'/>
            </form>
        </div>
    </div>
  )
}

export default AskQuestion