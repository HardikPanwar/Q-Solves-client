import React from 'react'
import User from './User'
import {useSelector} from 'react-redux'
import './Users.css'

const UsersList = () => {
    const users=useSelector(state => state.usersReducer);
    console.log(users)
  return (
    <div className='user-list-container'>
        {
            users.map((user)=> (
                <User key={user?._id} user={user} />
            ))
        }
    </div>
  )
}

export default UsersList