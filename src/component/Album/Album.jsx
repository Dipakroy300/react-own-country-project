import React from 'react';
import { Link } from 'react-router-dom';

const Album = ({album}) => {

    const {id,title}=album;
    return (
        <div>
            <h1>Id:{id}</h1>
            <p>Title:{title}</p>
            <Link to={`/album/${id}`}>Details</Link>
        </div>
    );
};

export default Album;