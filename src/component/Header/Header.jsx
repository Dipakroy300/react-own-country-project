import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {

    // const navigate=useNavigate();

    // const goBack=()=>{
    //     navigate(-1);
    // }
    return (
      
        <nav>
           <ActiveLink to={'/'}>Home</ActiveLink>
             <ActiveLink to={'/countries'}>countries</ActiveLink>
            <ActiveLink to={'/users'}>Users</ActiveLink>
            <ActiveLink to={'/albums'}>Albums</ActiveLink>
            <Link to={'/albums'}>Albums</Link>
            {/* <button onClick={goBack}>BAck</button> */}
        </nav>
    );
};

export default Header;