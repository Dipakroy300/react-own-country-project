import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {

    const userDetails=useLoaderData();

    const {id,name,username}=userDetails;
    return (
        <div>
            <h3>Id:{id}</h3>
            <p>Name:{name}</p>
            <p>Username:{username}</p>
        </div>
    );
};

export default UserDetails;