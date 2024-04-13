import React from 'react';
import './User.css'
import { Link } from 'react-router-dom';
const User = ({user}) => {
 const {id,name,username,email}=user;
    return (
        <div className='user'>
            <h3>Id:{id}</h3>
            <h4>Name:{name}</h4>
            <p>Username:{username}</p>
            <p>Email:{email}</p>
          <Link to={`/user/${id}`}>  click Here</Link>
           <button> <Link to={`/user/${id}`}>  click Here</Link></button>  
        </div>
    );
};

export default User;