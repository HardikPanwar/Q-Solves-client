import React from 'react'
import './LeftSidebar.css';
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/Globe.png'
const LeftSidebar = () => {
  return (
    <div className='leftsidebar'>
      <nav className="sidenav">
        <NavLink to='/' className='sidenavlinks' activeclass='active' style={{paddingTop:"10px"}}>
          <p>Home</p>
        </NavLink>
        <div className="sidenavdiv">
          {/* <div><p>PUBLIC</p></div> */}
          <NavLink to={'/Questions'} className='sidenavlinks' activeclass='active'>
            <img src={Globe} width='15px' alt="Globe" />
            <p style={{paddingLeft: "10px"}}>Questions</p>
          </NavLink>
          <NavLink to={'/Tags'} className='sidenavlinks' activeclass='active' >
            <p style={{paddingLeft:'20px'}}>Tags</p>
          </NavLink>
          <NavLink to={'/community'} className='sidenavlinks' activeclass='active' >
            <p style={{paddingLeft:'20px'}}>Community</p>
          </NavLink>
          <NavLink to={'/expert-chat'} className='sidenavlinks' activeclass='active' >
            <p style={{paddingLeft:'20px'}}>Expert Chat</p>
          </NavLink>
          <NavLink to={'/kit'} className='sidenavlinks' activeclass='active' >
            <p style={{paddingLeft:'20px'}}>Open Source Kit</p>
          </NavLink>
          <NavLink to={'/Users'} className='sidenavlinks' activeclass='active' >
            <p style={{paddingLeft:'20px'}}>Users</p>
          </NavLink>

        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar