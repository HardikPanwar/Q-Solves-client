import React from 'react'
import './RightSidebar.css';
import comment from '../../assets/comment.svg';
import pen from '../../assets/pen.svg';
import logo from '../../assets/logo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18' />
                <p>Observability is key to the future of software (and your devops career)</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18' />
                <p>Podcast 374: How valuable is your screen name?</p>
            </div>
        </div>

        <h4>TFeatured on meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width='18' />
                <p>Review queue workflows - Final release...</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width='18' />
                <p>Please welcome valued Associates: #958</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={logo} alt="pen" width='18' />
                <p>Outdated Answers: accepted answers is now unpinned in developer</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>38</p>
                <p>hy, was this spam flag declined, yet the question marked as spam</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>20</p>
                <p>What is the best course if action when a user has high enough rep to...</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>14</p>
                <p>Is a link to the "How to ask" help page a useful comment?</p>
            </div>
        </div>

    </div>
  )
}

export default Widget