
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {

    const users=useLoaderData();
    return (
        <div>
        <h2>all users here:{users.length}</h2>
        {
            users.map(user=> <User 
            key={user.id}
            user={user}
            ></User>)
        }
        </div>
    );
};

export default Users;