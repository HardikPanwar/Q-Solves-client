import React,{useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import Avatar from '../../components/Avatar/Avatar'
// import Button from '../../components/Button/Button'
import './Navbar.css'
import decode from 'jwt-decode';
import { setCurrentUser } from "../../actions/currentUser";

const Navbar = () => {
  const User = useSelector((state)=> (state.currentUserReducer));
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogout=()=> {
    dispatch({type:'LOGOUT'});
    navigate('/');
    dispatch(setCurrentUser(null));
  }

  useEffect(()=> {
    const token=User?.token
    if(token) {
      const decodeToken=decode(token);
      if(decodeToken.exp*1000 <= new Date().getTime()) {
        const handle =()=> {
          dispatch({type:'LOGOUT'});
          navigate('/');
          dispatch(setCurrentUser(null));
        }
        handle()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
  },[dispatch,User?.token,navigate])
  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to={"/"} className="nav-item nav-logo logo">
          <img className="logo-qsolves" src={logo} alt="logo" width="35" color="white" />
          <h2 style={{letterSpacing:2,marginLeft:10,textAlign:"center",marginTop:"5px"}}>Q-Solves</h2>
        </Link>
        <Link to={"/"} className="nav-item nav-btn">
          About
        </Link>
        <Link to={"/"} className="nav-item nav-btn">
          Products
        </Link>
        <Link to={"/"} className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="search" width="18" className="search-icon"/>
        </form>
        {User === null ? (
          <Link style={{fontSize:15}} to={"/auth/login"} className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
              <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white"><Link to={`/Users/${User?.result?._id}`} style={{color:"white",textDecoration:"none"}}>{User.result.name.charAt(0)}</Link></Avatar>
            
            <button className="nav-item nav-links" onClick={handleLogout}>Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
