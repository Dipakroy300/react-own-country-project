import React from 'react';
import Header from '../Header/Header';
import { Link, Outlet, useNavigation } from 'react-router-dom';
import './Home.css';

const Home = () => {
    
    const navigation=useNavigation();
    return (
        <div className='nav'>
            <Header></Header>
            <div> { navigation.state === "loading" && "loading..."}</div>
           <h1>every element is here</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;