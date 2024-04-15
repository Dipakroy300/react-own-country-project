
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {

    const userDetails=useLoaderData();
    
    const {id,name,username}=userDetails;
    return (
        <div>
            <h2>{userDetails.length}</h2>
            <h3>Id:{id}</h3>
            <p>Name:{name}</p>
            <p>Username:{username}</p>
        </div>
    );
};

export default UserDetails;