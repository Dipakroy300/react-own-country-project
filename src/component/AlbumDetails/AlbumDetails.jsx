import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const AlbumDetails = () => {

    const albumDetails=useLoaderData();
    const {id,userId,title}=albumDetails;

    const nagivate=useNavigate();

    const goBack=()=>{
        nagivate(-1);
    }
    return (
        <div>
            <h1>{id}</h1>
            <p>{userId}</p>
            <p>{title}</p>
            <button onClick={goBack}>goBack</button>
          
        </div>
    );
};

export default AlbumDetails;